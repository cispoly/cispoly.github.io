
import { Study, StudyCategory, ChartDataPoint, Guideline } from './types';
import { parseStudies } from './utils/markdownParser';
import evidenceMd from './source/EVIDENCE_LIBRARY.md?raw';

// Parse studies from markdown
const allStudies = parseStudies(evidenceMd);

export const STUDIES: Study[] = allStudies.CISCER;
export const CISENDO_STUDIES: Study[] = allStudies.CISENDO;
export const CISOVA_STUDIES: Study[] = allStudies.CISOVA;


export const CISENDO_CHART_DATA: ChartDataPoint[] = [
  { name: 'CISENDO (Meth)', Sensitivity: 94.5, Specificity: 94.2 },
  { name: 'Ultrasound (TVS)', Sensitivity: 91.0, Specificity: 58.0 },
  { name: 'Serum CA125', Sensitivity: 41.0, Specificity: 82.0 },
];

export const COMPARISON_DATA: ChartDataPoint[] = [
  { 
    name: 'Cytology (LBC)', 
    Sensitivity: 72.9, 
    Specificity: 42.4, 
    ReferralReduction: 0 
  },
  { 
    name: 'HPV 16/18 Genotyping', 
    Sensitivity: 55.7, 
    Specificity: 66.1, 
    ReferralReduction: 15 // Estimated minor improvement
  },
  { 
    name: 'PAX1/JAM3 Methylation', 
    Sensitivity: 89.6, 
    Specificity: 96.5, 
    ReferralReduction: 78 
  },
];

export const CISCER_INSTITUTIONS = [
  "Peking Union Medical College Hospital (Lead)",
  "Qilu Hospital, Shandong University",
  "Zhejiang Provincial People's Hospital",
  "The Second Affiliated Hospital of Zhejiang University School of Medicine",
  "Tongji Hospital, Tongji Medical College, HUST",
  "West China Second University Hospital, Sichuan University",
  "The Third Xiangya Hospital of Central South University",
  "Peking University People's Hospital",
  "The First Affiliated Hospital of Hunan University of Chinese Medicine",
  "Xuzhou Maternity and Child Health Hospital",
  "Yueyang Central Hospital",
  "Qinghai Red Cross Hospital"
];

export const CISENDO_INSTITUTIONS = [
  "Peking Union Medical College Hospital (Lead)",
  "The Second Hospital of Jilin University",
  "Cangzhou Central Hospital",
  "Peking University International Hospital",
  "Beijing Tiantan Hospital",
  "The Second Affiliated Hospital of Soochow University",
  "Nanjing Maternity and Child Health Care Hospital",
  "Obstetrics & Gynecology Hospital of Fudan University",
  "The Third Xiangya Hospital of Central South University",
  "Shenzhen Luohu People's Hospital",
  "Hainan General Hospital",
  "Shaanxi Provincial People's Hospital",
  "Gansu Provincial Maternity and Child-care Hospital",
  "Inner Mongolia Autonomous Region People's Hospital",
  "IDIBELL (International)"
];

export const CISOVA_INSTITUTIONS = [
  "Peking Union Medical College Hospital (Lead)",
  "Cancer Hospital of Xinjiang Medical University",
  "Inner Mongolia Autonomous Region People's Hospital",
  "The Second Affiliated Hospital of Baotou Medical College",
  "The Second Hospital of Jilin University",
  "Cangzhou Central Hospital",
  "The First Hospital of Hebei Medical University",
  "Beijing Sixth Hospital",
  "Beijing Chuilyangliu Hospital",
  "The Second Hospital of Shandong University",
  "The Affiliated Hospital of Qingdao University",
  "Jiangsu Cancer Hospital",
  "Jiangsu Provincial People's Hospital",
  "International Peace Maternity and Child Health Hospital",
  "Gansu Provincial Maternity and Child-care Hospital",
];

export const CISCER_CLINICAL_TRIAL = {
  sensitivity: 89.6,
  specificity: 96.5,
  n: 1968,
  source: 'Multi-center Clinical Trials (2024-2025)'
};

export interface ComparisonCategory {
  id: string;
  label: string;
  label_zh: string;
  description: string;
  description_zh: string;
  data: {
    study: string;
    method: string;
    method_zh?: string;
    sensitivity: number;
    specificity: number;
    highlight?: boolean;
  }[];
}

export const CISCER_COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    id: 'ascus',
    label: 'ASC-US Triage',
    label_zh: 'ASC-US 分流',
    description: 'Triage of women with Atypical Squamous Cells of Undetermined Significance',
    description_zh: '意义未明的非典型鳞状细胞（ASC-US）人群分流',
    data: [
      { study: 'Chen et al., 2024', method: 'CISCER (Methylation)', method_zh: 'CISCER (甲基化)', sensitivity: 83.8, specificity: 95.8, highlight: true },
      { study: 'Chen et al., 2024', method: 'HPV Testing', method_zh: 'HPV 检测', sensitivity: 100.0, specificity: 10.8 },
    ]
  },
  {
    id: 'hpv1618',
    label: 'HPV 16/18+',
    label_zh: 'HPV 16/18+ 分流',
    description: 'Triage of women positive for HPV 16/18',
    description_zh: 'HPV 16/18 阳性人群分流',
    data: [
      { study: 'Fei et al., 2024', method: 'CISCER (Methylation)', method_zh: 'CISCER (甲基化)', sensitivity: 89.0, specificity: 95.3, highlight: true },
      { study: 'Fei et al., 2024', method: 'Cytology (LBC)', method_zh: '细胞学 (LBC)', sensitivity: 72.0, specificity: 50.4 },
    ]
  },
  {
    id: 'non1618',
    label: 'Non-16/18 HPV',
    label_zh: '非16/18 HPV 分流',
    description: 'Triage of women positive for High-Risk HPV (Non-16/18)',
    description_zh: '非16/18型高危HPV阳性人群分流',
    data: [
      { study: 'Chen et al., 2024', method: 'CISCER (Methylation)', method_zh: 'CISCER (甲基化)', sensitivity: 84.8, specificity: 88.5, highlight: true },
      { study: 'Chen et al., 2024', method: 'Cytology (ASC-US+)', method_zh: '细胞学 (ASC-US+)', sensitivity: 58.4, specificity: 90.1 },
    ]
  },
  {
    id: 'postmenopausal',
    label: 'Postmenopausal',
    label_zh: '绝经后女性',
    description: 'Screening in postmenopausal women (Age ≥50)',
    description_zh: '绝经后女性（≥50岁）筛查',
    data: [
      { study: 'Peng et al., 2025', method: 'CISCER (Methylation)', method_zh: 'CISCER (甲基化)', sensitivity: 93.2, specificity: 93.6, highlight: true },
      { study: 'Peng et al., 2025', method: 'Cytology (LBC)', method_zh: '细胞学 (LBC)', sensitivity: 75.0, specificity: 52.3 },
    ]
  },
  {
    id: 'self',
    label: 'Self-Sampling',
    label_zh: '自取样检测',
    description: 'Performance in self-collected vaginal samples',
    description_zh: '阴道自取样样本检测性能',
    data: [
      { study: 'Yu et al., 2024', method: 'CISCER (Self-Sample)', method_zh: 'CISCER (自取样)', sensitivity: 77.6, specificity: 87.2, highlight: true },
      { study: 'Yu et al., 2024', method: 'Physician-Sample', method_zh: '医生取样', sensitivity: 82.5, specificity: 87.8 },
    ]
  }
];


export const CERVICAL_GUIDELINES: Guideline[] = [
  {
    id: 'consensus-2025',
    title: 'Expert consensus on the workflow, report, and clinical applications of dual-gene methylation detection of PAX1 and JAM3 for cervical cancer',
    title_zh: '子宫颈癌PAX1联合JAM3双基因甲基化检测流程、报告及临床应用专家共识',
    organization: 'Chinese Association of Integrative Medicine, CMA Lab Medicine, et al.',
    organization_zh: '中国中西医结合学会检验医学专业委员会, 中华医学会检验医学分会等',
    journal: 'Chin J Lab Med',
    journal_zh: '中华检验医学杂志',
    year: 2025,
    summary: 'A definitive industry consensus on the clinical use of PAX1/JAM3. Establish standardized testing processes, quality control, and reporting. Defines 8 key consensus points, recommending methylation as a Level 2 (Strong) evidence for screening and triage.',
    summary_zh: '针对PAX1/JAM3临床使用的行业权威共识。建立了标准化的检测流程、质控和报告规范。定义了8项关键共识，推荐甲基化作为筛查和分流的2级（强）证据。',
    keyQuote: 'DNA methylation level change is a new, convenient, and non-invasive cervical cancer detection scheme with clinical feasibility (Grade 2, Strong Recommendation).',
    keyQuote_zh: '共识1：基因甲基化水平改变是一种新型、便捷、无创的子宫颈癌检测方案，具有临床可行性（2级，强推荐）。',
    highlight: true,
    visualType: 'consensus-pax1',
    details: [
        'Consensus 1: New, convenient, non-invasive, Level 2 (Strong) Recommendation.',
        'Consensus 2-5: Standardization of lab processes (PCR/Extraction), QC, and reagents.',
        'Consensus 7: Auxiliary diagnosis to improve accuracy. Combine with HPV/Cytology.',
        'Clinical Use 1: Indicator of persistent HPV infection.',
        'Clinical Use 2: Auxiliary diagnosis. Sensitivity for CIN3+ is 87.6%.',
        'Clinical Use 3: Triage for hrHPV+ or ASC-US/LSIL. Reduces colposcopy referrals by ~50%.'
    ],
    details_zh: [
        '共识1：基因甲基化水平改变是一种新型、便捷、无创的子宫颈癌检测方案，具有临床可行性（2级，强推荐）。',
        '共识2-5：明确了实验室检测流程（提取、转化、PCR）、质控标准及试剂要求。',
        '共识7：作为辅助诊断，提高筛查准确性。需结合HPV/细胞学综合判断。',
        '临床意义1：甲基化水平变化提示HPV持续感染（累积性证据）。',
        '临床意义2：辅助诊断。对于CIN3+病变，灵敏度达87.6%，优于单基因检测。',
        '临床意义3：精准分流。用于hrHPV阳性或细胞学异常（ASC-US/LSIL）分流，减少近50%非必要阴道镜转诊。'
    ],
    url: 'https://doi.org/10.3760/cma.j.cn114452-20241017-00566'
  },
  {
    id: 'consensus-molecular-2025',
    title: 'Chinese Expert Consensus on Standardized Selection of Cervical Cancer Gene Testing Based on Clinical Requirements (2025 Edition)',
    title_zh: '基于临床需求的宫颈癌基因检测规范化选择中国专家共识（2025 年版）',
    organization: 'Expert Group',
    organization_zh: '专家组 (宋玉丽等)',
    journal: 'Oncology Journal',
    journal_zh: '肿瘤学杂志',
    year: 2025,
    summary: 'Recommends HPV-DNA combined with cytology as first-line. Methylation helps supplement cytology shortcomings, aids in distinguishing HPV infection status with sensitivity comparable to TCT.',
    summary_zh: '推荐HPV-DNA联合细胞学作为一线筛查。甲基化有助于弥补细胞学的不足，辅助区分HPV感染状态，灵敏度不亚于TCT。',
    keyQuote: 'Methylation detection has sensitivity and specificity not inferior to TCT; both can be used alone or combined to triage HR-HPV positive patients.',
    keyQuote_zh: '推荐意见1：甲基化检测具有不亚于TCT的灵敏感和特异度，两者单独或联合可用于分流HR-HPV阳性患者。',
    highlight: true,
    visualType: 'gene-test',
    details: [
        'Recommendation 1: HPV-DNA + Cytology is the preferred primary screening.',
        'Methylation & HPV E6/E7 mRNA complement cytology limitations.',
        'Methylation sensitivity/specificity is comparable to Liquid-Based Cytology (TCT).',
        'Evidence Level: Medium; Recommendation Strength: Strong.'
    ],
    details_zh: [
        '推荐意见1：HPV-DNA联合细胞学检测是宫颈癌一线筛查手段。',
        'HPV E6/E7 mRNA检测和甲基化检测可以弥补传统筛查手段的不足。',
        '甲基化检测具有不亚于TCT的灵敏感和特异度。',
        '两者单独或联合可用于分流HR-HPV阳性患者（证据等级：中，推荐强度：强）。'
    ],
    url: 'https://doi.org/10.11735/j.issn.1671-170X.2025.07.B001'
  },
  {
    id: 'guideline-1-2023',
    title: 'Guideline for cervical cancer screening in China (Part 1)',
    title_zh: '中国子宫颈癌筛查指南（一）',
    organization: 'CSCCP, et al.',
    organization_zh: '中国优生科学协会阴道镜和子宫颈病理学分会等',
    journal: 'Chinese Journal of Clinical Obstetrics and Gynecology',
    journal_zh: '中国妇产科临床杂志',
    year: 2023,
    summary: 'Mentions methylation as an emerging screening technology with application prospects, requiring more large-sample prospective data.',
    summary_zh: '提到甲基化作为一种新兴的筛查技术具有应用前景，需要更多的大样本前瞻性数据。',
    keyQuote: 'Other cervical cancer screening methods: such as methylation detection... have certain application prospects in screening.',
    keyQuote_zh: '其他子宫颈癌筛查方法：如甲基化检测... 在筛查中有一定的应用前景。',
    visualType: 'emerging-tech',
    details: [
        'Listed under "Other screening methods" alongside AI and p16/Ki-67.',
        'Acknowledges application prospects.',
        'Call for more large-scale prospective data (which was later provided in 2024-2025 updates).'
    ],
    details_zh: [
        '列为“其他筛查方法”，与AI和p16/Ki-67并列。',
        '承认其在筛查中的应用前景。',
        '呼吁积累更多大样本前瞻性研究数据（后续2024-2025年的共识已补充了这些数据）。'
    ],
    url: 'https://doi.org/10.13390/j.issn.1672-1861.2023.04.029'
  },
  {
    id: 'guideline-2-2025',
    title: 'Guideline for cervical cancer screening in China (Part 2)',
    title_zh: '中国子宫颈癌筛查指南（二）',
    organization: 'CSCCP, CMA Gynecologic Oncology, et al.',
    organization_zh: '中国优生科学协会阴道镜和宫颈病理学分会等',
    journal: 'Chinese Journal of Clinical Obstetrics and Gynecology',
    journal_zh: '中国妇产科临床杂志',
    year: 2025,
    summary: 'Focuses on the management of abnormal screening results. Explicitly recommends methylation as a triage method for HR-HPV positive populations.',
    summary_zh: '重点在于规范子宫颈癌筛查结果异常的分流方法。明确推荐甲基化检测用于HR-HPV阳性人群的分流。',
    keyQuote: 'Methylation detection can be used for the triage of 12 HR-HPV positive populations to reduce the referral rate of colposcopy.',
    keyQuote_zh: 'HR-HPV初筛时，甲基化检测可用于12 HR-HPV检测阳性人群的分流，从而降低阴道镜的转诊率。',
    visualType: 'triage-flow',
    details: [
        'Primary Goal: Refine management to reduce overdiagnosis and missed diagnosis.',
        'Recommendation: For 12 types of HR-HPV (non-16/18) positive patients, Methylation is a valid triage tool.',
        'Recommendation Category: 2B.',
        'Logic: Methylation identifies high-grade lesions more accurately than HPV status alone.'
    ],
    details_zh: [
        '主要目标：通过精细化管理，避免过度诊断与漏诊。',
        '推荐意见：对于非HPV 16/18的其他12种HR-HPV阳性人群，甲基化检测可作为分流方法。',
        '推荐类别：2B类。',
        '逻辑：甲基化能比单纯HPV状态更准确地识别高级别病变风险，从而减少不必要的阴道镜检查。'
    ]
  },
  {
    id: 'bluebook-2023',
    title: 'China Cervical Cancer Comprehensive Prevention and Control Blue Book',
    title_zh: '中国子宫颈癌三级规范化防治蓝皮书',
    organization: 'Lang Jinghe, Chen Fei, et al.',
    organization_zh: '郎景和, 陈飞, 王华庆, 赵方辉',
    journal: 'People\'s Medical Publishing House',
    journal_zh: '人民卫生出版社',
    year: 2023,
    summary: 'A foundational document stating that DNA methylation is closely related to cervical cancer occurrence. Methylation of PAX1, JAM3, and ZNF582 increases with CIN progression.',
    summary_zh: '基础性纲领文件。指出DNA甲基化与子宫颈癌发生密切相关。PAX1、JAM3和ZNF582的甲基化随CIN病变进展而增加，对CIN3+具有高特异性。',
    keyQuote: 'DNA methylation has been confirmed to be related to the occurrence of cervical cancer, with high specificity for CIN3+ clinical results.',
    keyQuote_zh: 'DNA甲基化证实与子宫颈癌的发生相关，并具CIN3+高特异性临床结果。',
    visualType: 'blue-book',
    details: [
        'Mechanism: Hypermethylation of promoter regions silences tumor suppressor genes.',
        'Markers: PAX1, JAM3, ZNF582 confirmed relevant.',
        'Application 1: HR-HPV+ Management (High specificity reducing colposcopy).',
        'Application 2: Fertility Sparing (For young women with CIN2, neg methylation suggests lower risk).',
        'Application 3: LSIL/ASC-US Triage.',
        'Application 4: Type 3 Transformation Zone / Adenocarcinoma (Avoids missed diagnosis).'
    ],
    details_zh: [
        '机制：启动子区域高甲基化导致抑癌基因沉默，易于肿瘤发展。',
        '标志物：PAX1、JAM3、ZNF582等证实与癌变相关。',
        '应用场景1：HR-HPV阳性患者管理（高特异性，减少过度治疗）。',
        '应用场景2：育龄女性管理（年轻CIN2患者若甲基化阴性，可保守随访，保护生育力）。',
        '应用场景3：LSIL/ASC-US 细胞学分流。',
        '应用场景4：三型转化区与腺癌患者管理（弥补细胞学和阴道镜容易漏诊的缺陷）。'
    ]
  },
  {
    id: 'consensus-marker-2024',
    title: 'Expert Consensus on Detection and Clinical Application of Tumor DNA Methylation Markers (2024 Edition)',
    title_zh: '肿瘤DNA甲基化标志物检测及临床应用专家共识（2024版）',
    organization: 'Ding Chunming, Guo Wei, et al.',
    organization_zh: '丁春明, 郭玮等',
    journal: 'Journal of China Cancer Prevention and Treatment',
    journal_zh: '中国癌症防治杂志',
    year: 2024,
    summary: 'General consensus on tumor methylation markers, specifically recommending them for cervical cancer screening and triage applications.',
    summary_zh: '关于肿瘤甲基化标志物的通用共识，特别推荐将其用于宫颈癌筛查和分流应用。',
    keyQuote: 'Tumor DNA methylation markers are recommended for the stratified management of HPV-positive or cytology-abnormal women.',
    keyQuote_zh: '推荐子宫颈癌DNA甲基化筛检临床路径：(1)HPV阳性高风险或细胞学异常女性的分层管理。',
    visualType: 'marker-2024',
    details: [
        'Pathway 1: Stratified management of HPV+ or cytology abnormal women.',
        'Pathway 2: Risk assessment for Type 3 Transformation Zone (TZ) & potential adenocarcinoma.',
        'Pathway 3: Post-treatment monitoring (recurrence detection).',
        'Pathway 4: Evaluation for exiting screening programs.'
    ],
    details_zh: [
        '临床路径1：HPV阳性高风险或细胞学异常女性的分层管理。',
        '临床路径2：宫颈III型转化区与潜在腺癌病人风险评估。',
        '临床路径3：病变（癌）治疗后监测。',
        '临床路径4：退出宫颈癌筛查计划的评估。'
    ]
  }
];

export const ENDO_GUIDELINES: Guideline[] = [
  {
    id: 'consensus-endo-prevention-2025',
    title: 'Chinese Expert Consensus on Tertiary Prevention Strategies for Endometrial Cancer (2025 Edition)',
    title_zh: '子宫内膜癌三级预防策略中国专家共识（2025年版）',
    organization: 'China Maternal and Child Health Association, Shanghai Medical Association. Lead Author: Wang Chao et al.',
    organization_zh: '中国妇幼健康研究会妇产科精准医疗专业委员会, 上海市医学会妇科肿瘤学分会. 执笔专家: 王超 等',
    journal: 'Chin J Pract Gynecol Obstet',
    journal_zh: '中国实用妇科与产科杂志',
    year: 2025,
    summary: 'Comprehensive consensus covering primary, secondary, and tertiary prevention. Highlights gene methylation of endometrial exfoliated cells as a research hotspot and valid screening tool. Explicitly mentions that Beijing Cispoly Biotech\'s product has been approved.',
    summary_zh: '全面涵盖一级、二级和三级预防的专家共识。重点指出子宫内膜脱落细胞基因甲基化检测是研究热点和有效的筛查工具。明确提及北京起源聚禾生物科技有限公司的产品已获批上市。',
    keyQuote: 'Gene methylation level detection used for endometrial cancer screening is a research hotspot... sensitivity 87.0%~94.51%, specificity 86.0%~95.5%. Results are superior to current traditional screening strategies.',
    keyQuote_zh: '基因甲基化水平检测用于子宫内膜癌筛查...诊断敏感度和特异度达87.0%~94.51%、86.0%~95.5%。研究结果均优于目前传统筛查策略。',
    highlight: true,
    visualType: 'endo-consensus',
    details: [
        'Tertiary Prevention Framework: Covers prevention, screening, and treatment.',
        'Key Screening Tool: Methylation of exfoliated cells (CDO1/CELF4).',
        'High Accuracy: Sensitivity up to 94.51%, Specificity up to 95.5%.',
        'Clinical Approval: Cispoly product mentioned as approved for clinical use.'
    ],
    details_zh: [
        '三级预防框架：涵盖病因预防、筛查早诊和康复治疗。',
        '关键筛查工具：子宫内膜脱落细胞甲基化检测（CDO1/CELF4）。',
        '高准确性：灵敏度高达 94.51%，特异度高达 95.5%。',
        '临床获批：明确提及聚禾生物产品获批，具备临床应用资质。'
    ],
    url: 'https://doi.org/10.19538/j.fk2025100110'
  }
];
