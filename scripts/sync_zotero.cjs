
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio'); // Need to check if cheerio is available or use regex
// If cheerio is not available, I will use regex. I'll assume standard node env, maybe no deps.
// I'll use regex to be safe and avoid install steps if possible, or use simple string manipulation.

const ZOTERO_PATH = path.join(__dirname, '../source/Zotero 报告.htm');
const MD_PATH = path.join(__dirname, '../source/EVIDENCE_LIBRARY.md');

// Helper to clean text
const clean = (str) => str ? str.replace(/[\r\n]+/g, ' ').trim() : '';

// 1. Parse Zotero HTML
function parseZotero(html) {
    const items = [];
    // Regex is tricky for nested HTML, but Zotero reports are usually flat lists of items.
    // Each item starts with <li id="item_..." class="item ...">
    
    const itemRegex = /<li id="([^"]+)"[^>]*>([\s\S]*?)<\/li>/gi;
    let match;
    
    while ((match = itemRegex.exec(html)) !== null) {
        const id = match[1];
        const content = match[2];
        
        // Extract Title
        const titleMatch = content.match(/<h2>(.*?)<\/h2>/);
        const title = titleMatch ? clean(titleMatch[1]) : '';
        
        // Extract Table Data
        const metadata = {};
        const authors = [];
        
        const rowRegex = /<tr>\s*<th[^>]*>(.*?)<\/th>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/gi;
        let rowMatch;
        while ((rowMatch = rowRegex.exec(content)) !== null) {
            let key = clean(rowMatch[1].replace(/<[^>]+>/g, '')); // Remove tags
            let val = clean(rowMatch[2].replace(/<[^>]+>/g, '')); // Remove tags (like <a> for DOI)
            
            // Handle multiple authors
            if (key === '作者' || key === 'Author' || key === 'author') {
                authors.push(val);
            } else {
                // Map keys
                if (key === 'DOI' || key === 'doi') metadata.doi = val;
                if (key === '期刊' || key === 'Journal' || key === 'journal' || key === '出版物') metadata.journal = val;
                if (key === '年份' || key === 'Year' || key === 'year' || key === '日期') metadata.year = val;
                if (key === '摘要' || key === 'Abstract' || key === 'abstract') metadata.abstract = val;
            }
        }
        
        // Normalize Year (extract YYYY)
        let year = new Date().getFullYear();
        if (metadata.year) {
            const yMatch = metadata.year.match(/(\d{4})/);
            if (yMatch) year = parseInt(yMatch[1]);
        }
        
        // Authors string
        const authorStr = authors.length > 3 
            ? `${authors[0]} et al.` 
            : authors.join(', ');

        items.push({
            zoteroId: id,
            title,
            authors: authorStr,
            journal: metadata.journal || '',
            year,
            doi: metadata.doi || '',
            abstract: metadata.abstract || ''
        });
    }
    return items;
}

// 2. Parse Markdown
function parseMarkdown(md) {
    const sections = {}; // Product -> Studies
    const lines = md.split('\n');
    let currentProduct = '';
    let currentStudy = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('# ')) {
            currentProduct = line.substring(2).trim();
            sections[currentProduct] = [];
            currentStudy = null;
        } else if (line.startsWith('## ')) {
            if (!currentProduct) continue;
            currentStudy = {
                title: line.substring(3).trim(),
                metadata: {},
                summary: []
            };
            sections[currentProduct].push(currentStudy);
        } else if (line.startsWith('- ')) {
            if (currentStudy) {
                const parts = line.substring(2).split(':');
                const key = parts[0].trim();
                const val = parts.slice(1).join(':').trim();
                currentStudy.metadata[key] = val;
            }
        } else if (line.trim() !== '') {
            if (currentStudy) {
                currentStudy.summary.push(line.trim());
            }
        }
    }
    return sections;
}

// 3. Main Sync Logic
try {
    const htmlContent = fs.readFileSync(ZOTERO_PATH, 'utf8');
    const mdContent = fs.readFileSync(MD_PATH, 'utf8');
    
    const zoteroItems = parseZotero(htmlContent);
    const mdSections = parseMarkdown(mdContent);
    
    const changes = {
        added: [],
        removed: [],
        updated: []
    };
    
    // Flatten MD studies for easier lookup
    const mdStudiesMap = new Map(); // DOI -> { product, study }
    // Also title map for fuzzy match? Prefer DOI.
    
    for (const prod in mdSections) {
        mdSections[prod].forEach(study => {
            if (study.metadata.doi) {
                mdStudiesMap.set(study.metadata.doi.toLowerCase(), { product: prod, study });
            } else {
                // Fallback to title if no DOI
                 mdStudiesMap.set(study.title.toLowerCase(), { product: prod, study });
            }
        });
    }
    
    const newSections = {
        'CISCER': [],
        'CISENDO': [],
        'CISOVA': []
    };
    
    // Process Zotero Items
    zoteroItems.forEach(zItem => {
        const key = zItem.doi ? zItem.doi.toLowerCase() : zItem.title.toLowerCase();
        const existing = mdStudiesMap.get(key);
        
        let product = 'CISCER'; // Default
        let studyData = {};
        
        if (existing) {
            // Update
            product = existing.product;
            studyData = existing.study;
            
            // Check for changes
            let hasChange = false;
            if (studyData.title !== zItem.title) hasChange = true;
            // if (studyData.metadata.authors !== zItem.authors) hasChange = true; // Authors format might differ
            
            if (hasChange) {
                changes.updated.push(zItem.title);
            }
            
            // Update fields
            studyData.title = zItem.title;
            studyData.metadata.authors = zItem.authors;
            studyData.metadata.journal = zItem.journal;
            studyData.metadata.year = zItem.year;
            studyData.metadata.doi = zItem.doi;
            studyData.metadata.zoteroId = zItem.zoteroId; // Add ID
            
        } else {
            // Add
            changes.added.push(zItem.title);
            
            // Guess Product
            const t = zItem.title.toLowerCase();
            const a = zItem.abstract ? zItem.abstract.toLowerCase() : '';
            if (t.includes('endometrial') || t.includes('aub') || t.includes('cdo1') || a.includes('endometrial')) {
                product = 'CISENDO';
            } else if (t.includes('ovarian') || t.includes('hoxa9') || a.includes('ovarian')) {
                product = 'CISOVA';
            } else {
                product = 'CISCER';
            }
            
            studyData = {
                title: zItem.title,
                metadata: {
                    id: zItem.zoteroId, // Use zotero ID as base ID?
                    doi: zItem.doi,
                    institution: 'Unknown', // Placeholder
                    authors: zItem.authors,
                    journal: zItem.journal,
                    year: zItem.year,
                    category: 'Methodology Comparison', // Default
                    zoteroId: zItem.zoteroId
                },
                summary: [zItem.abstract || '']
            };
        }
        
        // Push to new sections list
        if (!newSections[product]) newSections[product] = [];
        newSections[product].push(studyData);
        
        // Remove from map to track deletions
        mdStudiesMap.delete(key);
    });
    
    // Remaining items in map are removed
    mdStudiesMap.forEach((val, key) => {
        changes.removed.push(val.study.title);
    });
    
    // 4. Generate Markdown
    let newMd = '';
    for (const prod of ['CISCER', 'CISENDO', 'CISOVA']) {
        if (!newSections[prod] || newSections[prod].length === 0) continue;
        
        newMd += `# ${prod}\n\n`;
        newSections[prod].forEach(study => {
            newMd += `## ${study.title}\n`;
            // Metadata
            for (const k in study.metadata) {
                if (study.metadata[k]) {
                    newMd += `- ${k}: ${study.metadata[k]}\n`;
                }
            }
            newMd += '\n';
            // Summary
            if (study.summary && study.summary.length > 0) {
                newMd += study.summary.join('\n') + '\n';
            }
            newMd += '\n';
        });
    }
    
    fs.writeFileSync(MD_PATH, newMd);
    fs.writeFileSync(path.join(__dirname, 'diff_report.json'), JSON.stringify(changes, null, 2));
    
    console.log('Sync complete.');
    console.log('Added:', changes.added.length);
    console.log('Updated:', changes.updated.length);
    console.log('Removed:', changes.removed.length);
    
} catch (e) {
    console.error('Error:', e);
}
