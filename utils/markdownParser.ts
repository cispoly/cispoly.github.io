import { Study, StudyCategory, StudyMetrics } from '../types';

interface StudyCollection {
  CISCER: Study[];
  CISENDO: Study[];
  CISOVA: Study[];
}

const getSearchLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

const mapCategory = (catStr: string): StudyCategory => {
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Create a map of normalized enum values to enum members
  const categoryMap = Object.values(StudyCategory).reduce((acc, val) => {
    acc[normalize(val)] = val;
    return acc;
  }, {} as Record<string, StudyCategory>);

  const normalizedInput = normalize(catStr);
  return categoryMap[normalizedInput] || StudyCategory.METHODOLOGY; // Default fallback
};

export const parseStudies = (markdown: string): StudyCollection => {
  const collection: StudyCollection = {
    CISCER: [],
    CISENDO: [],
    CISOVA: []
  };

  if (!markdown) return collection;

  // Split by product sections (Level 1 headers)
  const productSections = markdown.split(/^#\s+/m).slice(1); // Skip content before first header

  productSections.forEach(section => {
    const lines = section.split('\n');
    const productName = lines[0].trim(); // e.g., "CISCER"
    const content = lines.slice(1).join('\n');

    // Split by studies (Level 2 headers)
    const studyBlocks = content.split(/^##\s+/m).slice(1);

    const studies: Study[] = studyBlocks.map(block => {
      const blockLines = block.split('\n');
      const title = blockLines[0].trim();
      const body = blockLines.slice(1);
      
      const metadata: any = {};
      const metrics: any = {};

      body.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Check for list items (metadata)
        const match = trimmed.match(/^-\s+([^:]+):\s*(.+)$/);
        if (match) {
          const key = match[1].trim();
          const value = match[2].trim();
          
          // Handle metrics fields specifically
          if (['sensitivity', 'specificity', 'auc', 'colposcopyReduction'].includes(key)) {
            metrics[key] = isNaN(Number(value)) ? value : Number(value);
          } else if (key === 'populationSize' || key === 'year') {
            metadata[key] = Number(value);
          } else {
            metadata[key] = value;
          }
        }
      });

      // Construct Study object
      return {
        id: metadata.id || title.toLowerCase().replace(/\s+/g, '-'),
        title: title,
        title_zh: metadata.title_zh,
        url: metadata.url || getSearchLink(title),
        doi: metadata.doi,
        institution: metadata.institution || '',
        institution_zh: metadata.institution_zh,
        authors: metadata.authors || '',
        authors_zh: metadata.authors_zh,
        journal: metadata.journal || '',
        journal_zh: metadata.journal_zh,
        year: metadata.year || new Date().getFullYear(),
        category: mapCategory(metadata.category || ''),
        summary: metadata.summary || '',
        summary_zh: metadata.summary_zh,
        keyFinding: metadata.keyFinding || '',
        keyFinding_zh: metadata.keyFinding_zh,
        metrics: {
          sensitivity: metrics.sensitivity,
          specificity: metrics.specificity,
          colposcopyReduction: metrics.colposcopyReduction,
          auc: metrics.auc
        },
        populationSize: metadata.populationSize
      } as Study;
    });

    if (productName.includes('CISCER')) {
      collection.CISCER = studies;
    } else if (productName.includes('CISENDO')) {
      collection.CISENDO = studies;
    } else if (productName.includes('CISOVA')) {
      collection.CISOVA = studies;
    }
  });

  return collection;
};
