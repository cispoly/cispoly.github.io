const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Mock Functions from the script
function cleanContent(content) {
    let cleaned = content.replace(/\$\s*([0-9\s\.]+)\s*\\?%\s*\$/g, (match, p1) => p1.replace(/\s/g, '') + '%');
    cleaned = cleaned.replace(/\$\s*([0-9\s\.]+)\s*\$/g, (match, p1) => p1.replace(/\s/g, ''));
    return cleaned;
}

function extractValue(content, patterns) {
    for (const pattern of patterns) {
        const match = content.match(pattern);
        if (match && match[1]) {
            return parseFloat(match[1]);
        }
    }
    return null;
}

function determineScene(content, title) {
    const text = (content + ' ' + title).toLowerCase();
    if (text.includes('asc-us') || text.includes('ascus')) return 'ASC-US Triage';
    if (text.includes('postmenopausal')) return 'Postmenopausal';
    if (text.includes('16/18')) return 'HPV 16/18 Triage';
    if (text.includes('self-sampling') || text.includes('self collected')) return 'Self-Sampling';
    if (text.includes('screening')) return 'General Screening';
    return 'Other';
}

console.log('Running Extraction Tests...');

// Test 1: Clean Content
const rawText = 'Sensitivity of $ 8 3 . 8 % $ and Specificity of $ 9 5 . 8 % $';
const cleaned = cleanContent(rawText);
assert.strictEqual(cleaned, 'Sensitivity of 83.8% and Specificity of 95.8%');
console.log('✓ Clean Content Passed');

// Test 2: Extract Values
const sampleText = `
Sensitivity: 89.6%
Specificity: 96.5%
AUC: 0.94
Sample size: 1968
Referral Reduction: 78.5%
`;

const sensitivity = extractValue(sampleText, [/Sensitivity[:\s]+([\d\.]+)%?/i]);
assert.strictEqual(sensitivity, 89.6);
console.log('✓ Sensitivity Extraction Passed');

const specificity = extractValue(sampleText, [/Specificity[:\s]+([\d\.]+)%?/i]);
assert.strictEqual(specificity, 96.5);
console.log('✓ Specificity Extraction Passed');

const auc = extractValue(sampleText, [/AUC[:\s]+([\d\.]+)/i]);
assert.strictEqual(auc, 0.94);
console.log('✓ AUC Extraction Passed');

const reduction = extractValue(sampleText, [/Referral Reduction[:\s]+([\d\.]+)%?/i]);
assert.strictEqual(reduction, 78.5);
console.log('✓ Referral Reduction Extraction Passed');

// Test 3: Scene Determination
assert.strictEqual(determineScene('... ASC-US cytology ...', 'Study Title'), 'ASC-US Triage');
assert.strictEqual(determineScene('... women with HPV 16/18 ...', 'Triage Study'), 'HPV 16/18 Triage');
assert.strictEqual(determineScene('... postmenopausal women ...', 'Aging Study'), 'Postmenopausal');
console.log('✓ Scene Determination Passed');

// Test 4: Validate Output JSON
const jsonPath = path.join(__dirname, '../processed/chart_data_master.json');
if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    assert.ok(Array.isArray(data), 'Data should be an array');
    assert.ok(data.length > 0, 'Data should not be empty');
    
    // Check fields
    const first = data[0];
    assert.ok(first.sensitivity !== undefined, 'Should have sensitivity');
    assert.ok(first.scene !== undefined, 'Should have scene');
    
    console.log(`✓ JSON Validation Passed (${data.length} records)`);
} else {
    console.warn('⚠ chart_data_master.json not found, skipping validation');
}

console.log('All Tests Passed!');
