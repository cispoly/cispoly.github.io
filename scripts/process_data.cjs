const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../source');
const PROCESSED_DIR = path.join(__dirname, '../processed');
const CHARTS_DIR = path.join(__dirname, '../charts');

// Ensure directories exist
if (!fs.existsSync(PROCESSED_DIR)) fs.mkdirSync(PROCESSED_DIR);
if (!fs.existsSync(CHARTS_DIR)) fs.mkdirSync(CHARTS_DIR);

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

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
const data = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
    
    // Skip if it doesn't look like a data file
    if (!content.includes('Sensitivity') && !content.includes('Specificity')) return;

    const sensitivity = extractValue(content, [/Sensitivity[:\s]+([\d\.]+)%?/i, /敏感度[:\s]+([\d\.]+)%?/]);
    const specificity = extractValue(content, [/Specificity[:\s]+([\d\.]+)%?/i, /特异度[:\s]+([\d\.]+)%?/]);
    const auc = extractValue(content, [/AUC[:\s]+([\d\.]+)/i, /AUC[:\s]*=[:\s]*([\d\.]+)/i]);
    const sampleSize = extractValue(content, [/Sample size[:\s]+(\d+)/i, /Population[:\s]+(\d+)/i, /样本量[:\s]+(\d+)/]);
    const referralReduction = extractValue(content, [/Referral Reduction[:\s]+([\d\.]+)%?/i, /Colposcopy reduction[:\s]+([\d\.]+)%?/i, /转诊减少[:\s]+([\d\.]+)%?/]);
    
    const titleMatch = content.match(/title:\s*"(.*?)"/);
    const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
    
    const yearMatch = content.match(/year:\s*(\d{4})/i) || file.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear();

    if (sensitivity !== null && specificity !== null) {
        data.push({
            id: file,
            title,
            year,
            scene: determineScene(content, title),
            sensitivity,
            specificity,
            auc: auc || 0,
            sampleSize: sampleSize || 0,
            referralReduction: referralReduction || 0
        });
    }
});

// Write JSON
fs.writeFileSync(path.join(PROCESSED_DIR, 'chart_data_master.json'), JSON.stringify(data, null, 2));

// Write CSV
const csvHeader = 'ID,Title,Year,Scene,Sensitivity,Specificity,AUC,SampleSize,ReferralReduction\n';
const csvRows = data.map(d => 
    `"${d.id}","${d.title}",${d.year},"${d.scene}",${d.sensitivity},${d.specificity},${d.auc},${d.sampleSize},${d.referralReduction}`
).join('\n');
fs.writeFileSync(path.join(PROCESSED_DIR, 'chart_data_master.csv'), csvHeader + csvRows);

console.log(`Processed ${data.length} records.`);

// Generate HTML Charts
const scenes = [...new Set(data.map(d => d.scene))];

scenes.forEach((scene, index) => {
    const sceneData = data.filter(d => d.scene === scene);
    
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${scene} Analysis</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <style>
        body { font-family: sans-serif; margin: 20px; }
        .chart-container { width: 800px; height: 500px; margin-bottom: 50px; }
    </style>
</head>
<body>
    <h1>${scene} Analysis</h1>
    <div id="main" class="chart-container"></div>
    <div id="scatter" class="chart-container"></div>
    
    <script>
        const data = ${JSON.stringify(sceneData)};
        
        // Bar Chart
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);
        const option = {
            title: { text: '${scene} - Performance Metrics' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Sensitivity', 'Specificity'] },
            xAxis: { 
                type: 'category', 
                data: data.map(d => d.id.substring(0, 10) + '...'),
                axisLabel: { interval: 0, rotate: 30 }
            },
            yAxis: { type: 'value', max: 100 },
            series: [
                {
                    name: 'Sensitivity',
                    type: 'bar',
                    data: data.map(d => d.sensitivity),
                    itemStyle: { color: '#0d9488' }
                },
                {
                    name: 'Specificity',
                    type: 'bar',
                    data: data.map(d => d.specificity),
                    itemStyle: { color: '#94a3b8' }
                }
            ]
        };
        myChart.setOption(option);

        // Scatter Chart (AUC vs Sample Size)
        const scatterDom = document.getElementById('scatter');
        const scatterChart = echarts.init(scatterDom);
        const scatterOption = {
            title: { text: '${scene} - AUC vs Sample Size' },
            tooltip: {
                formatter: function (param) {
                    return param.data[2];
                }
            },
            xAxis: { type: 'value', name: 'Sample Size', scale: true },
            yAxis: { type: 'value', name: 'AUC', min: 0.5, max: 1 },
            series: [{
                symbolSize: 20,
                data: data.map(d => [d.sampleSize, d.auc, d.title]),
                type: 'scatter',
                itemStyle: { color: '#7c3aed' }
            }]
        };
        scatterChart.setOption(scatterOption);
    </script>
</body>
</html>`;

    const fileName = `Evidence_Library_${scene.replace(/\s+/g, '_')}_${String(index + 1).padStart(2, '0')}.html`;
    fs.writeFileSync(path.join(CHARTS_DIR, fileName), htmlContent);
    
    // Create companion MD
    const mdContent = `# ${scene} Analysis Chart

## Data Source
Derived from ${sceneData.length} studies in the Evidence Library.

## Metrics
- **Average Sensitivity**: ${(sceneData.reduce((a,b)=>a+b.sensitivity,0)/sceneData.length).toFixed(1)}%
- **Average Specificity**: ${(sceneData.reduce((a,b)=>a+b.specificity,0)/sceneData.length).toFixed(1)}%
- **Total Sample Size**: ${sceneData.reduce((a,b)=>a+b.sampleSize,0)}

## Studies Included
${sceneData.map(d => `- ${d.title} (${d.year})`).join('\n')}
`;
    fs.writeFileSync(path.join(CHARTS_DIR, fileName.replace('.html', '.md')), mdContent);
});
