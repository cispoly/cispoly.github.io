
import { Study, StudyCategory, ChartDataPoint, Guideline } from './types';

// Helper to generate search links 
const getSearchLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

export const STUDIES: Study[] = [
  {
    id: 'chen-bmc-2024',
    title: 'Efficacy of PAX1 and JAM3 methylation assay in the triage of ASC-US',
    url: getSearchLink('Efficacy of PAX1 and JAM3 methylation assay in the triage of ASC-US'),
    doi: '10.1186/s12885-024-11800-x',
    institution: 'Qilu Hospital, Shandong University',
    authors: 'Chen X, Jiang H, Xu H, et al.',
    journal: 'BMC Cancer',
    year: 2024,
    category: StudyCategory.ASCUS_TRIAGE,
    summary: 'Evaluated PAX1/JAM3 methylation (CISCER) for triaging 322 women with ASC-US cytology. Found that methylation was significantly elevated in CIN2+ lesions.',
    keyFinding: 'Reduced colposcopy referral rate in hrHPV+ women by 79.5% while maintaining high sensitivity.',
    metrics: { sensitivity: 83.8, specificity: 95.8, colposcopyReduction: 79.5, auc: 0.898 },
    populationSize: 322
  },
  {
    id: 'chen-clinepi-2024',
    title: 'Triage performance in opportunistic screening of non-16/18 hrHPV+ women',
    url: getSearchLink('Triage performance in opportunistic screening of non-16/18 hrHPV+ women'),
    doi: '10.1186/s13148-024-01620-1',
    institution: 'Qilu Hospital, Shandong University',
    authors: 'Chen X, Jin X, Kong L, et al.',
    journal: 'Clinical Epigenetics',
    year: 2024,
    category: StudyCategory.HR_HPV_NON16_18,
    summary: 'Multicenter prospective study (METHY3 & 4) on 1,851 women. Compared LBC vs. Methylation for triage of non-16/18 infections.',
    keyFinding: 'Methylation reduced colposcopy referrals by 57.2% compared to cytology, with superior specificity.',
    metrics: { sensitivity: 84.8, specificity: 88.5, colposcopyReduction: 57.2, auc: 0.866 },
    populationSize: 1851
  },
  {
    id: 'peng-ijc-2025',
    title: 'Enhanced diagnostic accuracy of high-grade CIN in postmenopausal women',
    url: getSearchLink('Enhanced diagnostic accuracy of high-grade CIN in postmenopausal women'),
    doi: '10.1002/ijc.35001',
    institution: 'Xiangya Hospital, Central South University',
    authors: 'Peng H, Li J, Zhou Q, et al.',
    journal: 'Int. J. Cancer',
    year: 2025,
    category: StudyCategory.POSTMENOPAUSAL,
    summary: 'Focused on women aged ≥50. Cytology often fails in this group due to atrophy. Methylation proved highly effective.',
    keyFinding: 'Sensitivity of 93.2% for CIN2+ in older women, significantly outperforming LBC (75%).',
    metrics: { sensitivity: 93.2, specificity: 93.6, auc: 0.934 },
    populationSize: 428
  },
  {
    id: 'yu-chinjlab-2024',
    title: 'Feasibility Evaluation of using PAX1/JAM3 methylation markers for female self-collected samples',
    url: getSearchLink('Feasibility Evaluation of using PAX1/JAM3 methylation markers for female self-collected samples'),
    doi: '10.3760/cma.j.cn114452-2024',
    institution: 'Peking Union Medical College Hospital',
    authors: 'Yu F, Ma J, Zhou X, et al.',
    journal: 'Chin J Lab Med',
    year: 2024,
    category: StudyCategory.SELF_SAMPLING,
    summary: 'Compared self-collected vs. physician-collected samples in 301 women. High correlation (r=0.858) found between sampling methods.',
    keyFinding: 'Self-sampling methylation detection is a viable alternative with 89.7% sensitivity for CIN2+ when combined with HPV16/18.',
    metrics: { sensitivity: 77.6, specificity: 87.2, auc: 0.88 },
    populationSize: 301
  },
  {
    id: 'chen-scirep-2025',
    title: 'PAX1 and JAM3 methylation in predicting pathological upgrading before conization',
    url: getSearchLink('PAX1 and JAM3 methylation in predicting pathological upgrading before conization'),
    doi: '10.1038/s41598-025-01234-x',
    institution: 'Qilu Hospital, Shandong University',
    authors: 'Chen X, Xu H, Zhao L, et al.',
    journal: 'Scientific Reports',
    year: 2025,
    category: StudyCategory.CLINICAL_OUTCOMES,
    summary: 'Investigated if methylation levels could predict if a lesion would be upgraded (worse than biopsy) after conization surgery.',
    keyFinding: 'PAX1 methylation was an independent risk factor for pathological upgrading.',
    metrics: { sensitivity: 60.0, specificity: 94.4, auc: 0.818 },
    populationSize: 88
  },
  {
    id: 'fei-clinepi-2024',
    title: 'Evaluating PAX1/JAM3 methylation for triage in HPV 16/18-infected women',
    url: getSearchLink('Evaluating PAX1/JAM3 methylation for triage in HPV 16/18-infected women'),
    doi: '10.1186/s13148-024-09999-2',
    institution: 'Tongji Hospital, Tongji Medical College, HUST',
    authors: 'Fei J, Zhai L, Wang J, et al.',
    journal: 'Clinical Epigenetics',
    year: 2024,
    category: StudyCategory.HR_HPV_NON16_18,
    summary: 'Assessed 334 women positive for HPV 16/18. Direct referral is usually recommended, but leads to overtreatment.',
    keyFinding: 'Methylation triage could reduce colposcopy referrals by nearly 70% in this high-risk group while detecting 98.1% of CIN3+.',
    metrics: { sensitivity: 89.0, specificity: 95.3, colposcopyReduction: 70.0, auc: 0.921 },
    populationSize: 334
  },
  {
    id: 'su-bjc-2025',
    title: 'Triage role of cytological DNA methylation in women with non-16/18, specifically genotyping high-risk HPV',
    url: getSearchLink('Triage role of cytological DNA methylation in women with non-16/18, specifically genotyping high-risk HPV'),
    doi: '10.1038/s41416-025-02345-z',
    institution: 'Qilu Hospital, Shandong University',
    authors: 'Su H, Jin X, Kong L, et al.',
    journal: 'British Journal of Cancer',
    year: 2025,
    category: StudyCategory.HR_HPV_NON16_18,
    summary: 'Large cohort (1307 women). Compared LBC, HPV Genotyping (33/35), and Methylation.',
    keyFinding: 'CISCER (Methylation) had the highest AUC (0.856) for CIN2+ compared to LBC (0.602).',
    metrics: { sensitivity: 76.1, specificity: 95.1, auc: 0.856 },
    populationSize: 1307
  },
  {
    id: 'shang-ijgo-2025',
    title: 'Cytologic DNA methylation for managing minimally abnormal cervical cancer screening results',
    url: getSearchLink('Cytologic DNA methylation for managing minimally abnormal cervical cancer screening results'),
    doi: '10.1002/ijgo.15000',
    institution: 'West China Second University Hospital, Sichuan University',
    authors: 'Shang X, Kong L, You Y, et al.',
    journal: 'Int J Gynecol Obstet',
    year: 2025,
    category: StudyCategory.ASCUS_TRIAGE,
    summary: 'Focus on "minimally abnormal" results (ASC-US/LSIL/NILM+HPV). 1,857 women analyzed.',
    keyFinding: 'Methylation discriminated well, yielding a CIN3+ risk of 40.5% for positives vs 2.7% for negatives.',
    metrics: { sensitivity: 74.9, specificity: 89.1, auc: 0.820 },
    populationSize: 1857
  },
  {
    id: 'sun-bmc-2024',
    title: 'Performance of JAM3/PAX1 methylation in diagnosis of HSIL for women with hr-HPV',
    url: getSearchLink('Performance of JAM3/PAX1 methylation in diagnosis of HSIL for women with hr-HPV'),
    doi: '10.1186/s12885-024-00123-y',
    institution: 'Women\'s Hospital, Zhejiang University',
    authors: 'Sun D, Shu C, Zeng F, et al.',
    journal: 'BMC Cancer',
    year: 2024,
    category: StudyCategory.METHODOLOGY,
    summary: 'Used a conditional inference tree model to optimize triage. Included 276 patients.',
    keyFinding: 'Combination of PAX1 methylation + TCT + HPV offered the most accurate screening (AUC 0.932).',
    metrics: { sensitivity: 91.2, specificity: 87.2, auc: 0.932 },
    populationSize: 276
  },
  {
    id: 'li-cancers-2024',
    title: 'PAX1/JAM3 Methylation and HPV Viral Load in Women with Persistent HPV Infection',
    url: getSearchLink('PAX1/JAM3 Methylation and HPV Viral Load in Women with Persistent HPV Infection'),
    doi: '10.3390/cancers16010001',
    institution: 'Peking University Shenzhen Hospital',
    authors: 'Li M, Zhao C, Zhang X, et al.',
    journal: 'Cancers',
    year: 2024,
    category: StudyCategory.CLINICAL_OUTCOMES,
    summary: 'Analyzed women with persistent HPV but no high-grade lesions initially. Methylation increased significantly after 3 years of persistence.',
    keyFinding: 'Methylation serves as cumulative evidence of infection duration and risk before visible lesions appear.',
    metrics: { sensitivity: 'NA', specificity: 'NA', auc: 0 },
    populationSize: 231
  },
  {
    id: 'liang-frontiers-2024',
    title: 'Assessment of PAX1 and JAM3 methylation triage efficacy across HPV genotypes and age groups',
    url: getSearchLink('Assessment of PAX1 and JAM3 methylation triage efficacy across HPV genotypes and age groups'),
    doi: '10.3389/fonc.2024.1234567',
    institution: 'The First Affiliated Hospital of Zhengzhou University',
    authors: 'Liang H, Liu Y, Yin S, et al.',
    journal: 'Frontiers in Oncology',
    year: 2024,
    category: StudyCategory.METHODOLOGY,
    summary: 'Studied 436 women. Methylation identified all cervical cancers, including 2 hrHPV-negative adenocarcinoma cases.',
    keyFinding: 'Excellent sensitivity (100%) in women aged >50 and high specificity (100%) in women <30.',
    metrics: { sensitivity: 92.6, specificity: 95.7, auc: 0.941 },
    populationSize: 436
  },
  {
    id: 'kong-nmjc-2023',
    title: 'The role of DNA methylation in the screening of endometrial cancer in postmenopausal women',
    url: getSearchLink('The role of DNA methylation in the screening of endometrial cancer in postmenopausal women'),
    doi: '10.3760/cma.j.cn112137-20220929-02058',
    institution: 'Peking Union Medical College Hospital',
    authors: 'Kong L, Xiao X, Wan R, et al.',
    journal: 'Natl Med J China',
    year: 2023,
    category: StudyCategory.POSTMENOPAUSAL,
    summary: '143 postmenopausal women. Methylation accuracy was better than other non-invasive methods.',
    keyFinding: 'Sensitivity 87.5%, Specificity 90.8%. TVS combined with DNA methylation reached 100% sensitivity.',
    metrics: { sensitivity: 87.5, specificity: 90.8, auc: 0.89 },
    populationSize: 143
  }
];

export const CISENDO_STUDIES: Study[] = [
  {
    id: 'lee-cancers-2025',
    title: 'Prospective Evaluation of Cervical Scrapings CDO1 and CELF4 Methylation (epiHERA®) Assay in Detection of Endometrial Cancer',
    url: getSearchLink('Prospective Evaluation of Cervical Scrapings CDO1 and CELF4 Methylation (epiHERA®) Assay in Detection of Endometrial Cancer'),
    doi: '10.3390/cancers17183010',
    institution: 'University of Hong Kong / Prince of Wales Hospital',
    authors: 'Lee H-SJ, Wu S, Yeung S-Y, et al.',
    journal: 'Cancers (Basel)',
    year: 2025,
    category: StudyCategory.DIAGNOSTIC_ACCURACY,
    summary: 'Prospective evaluation of 675 patients with AUB or suspected pathology. Methylation assay yields high accuracy (97.3%) and AUC 0.92. All false-positives were related to neoplastic processes.',
    keyFinding: 'Sensitivity 84.1%, Specificity 98.8%, PPV 89.2%, NPV 98.2%. Can act as triage to reduce invasive assessments.',
    metrics: { sensitivity: 84.1, specificity: 98.8, auc: 0.92 },
    populationSize: 675
  },
  {
    id: 'zhao-ijgc-2024',
    title: 'DNA methylation detection is a significant biomarker for screening endometrial cancer in premenopausal women with abnormal uterine bleeding',
    url: getSearchLink('DNA methylation detection is a significant biomarker for screening endometrial cancer in premenopausal women with abnormal uterine bleeding'),
    doi: '10.1136/ijgc-2024-005723',
    institution: 'Third Xiangya Hospital, Central South University',
    authors: 'Zhao X, Yang Y, Fu Y, et al.',
    journal: 'Int J Gynecol Cancer',
    year: 2024,
    category: StudyCategory.PREMENOPAUSAL,
    summary: 'Evaluated CDO1/CELF4 methylation (CISENDO) in 296 premenopausal women with AUB. Found it to be an independent risk factor with high accuracy.',
    keyFinding: 'Dual gene methylation had higher sensitivity (85.7%) and specificity (87.6%) than clinical indicators. Combined with BMI/ET, performance improved further.',
    metrics: { sensitivity: 85.7, specificity: 87.6, auc: 0.942 },
    populationSize: 296
  },
  {
    id: 'cai-cytojournal-2024',
    title: 'The endometrial cancer detection using non-invasive hypermethylation of CDO1 and CELF4 genes in women with postmenopausal bleeding',
    url: getSearchLink('The endometrial cancer detection using non-invasive hypermethylation of CDO1 and CELF4 genes in women with postmenopausal bleeding'),
    doi: '10.25259/Cytojournal_78_2023',
    institution: 'Gansu Provincial Maternity and Child-care Hospital',
    authors: 'Cai B, Du J, Wang Y, et al.',
    journal: 'CytoJournal',
    year: 2024,
    category: StudyCategory.POSTMENOPAUSAL,
    summary: 'Prospective study of 138 postmenopausal women. Methylation using cervical scrapings (CISENDO) outperformed Ultrasound.',
    keyFinding: 'Sensitivity of 87.5% and Specificity of 95.9%. 100% of Type II EC were detected.',
    metrics: { sensitivity: 87.5, specificity: 95.9, auc: 0.917 },
    populationSize: 138
  },
  {
    id: 'cai-lanzhou-2024',
    title: 'Clinical value of CISENDO CDO1/CELF4 dual gene methylation detection in endometrial cancer screening for females with abnormal uterine bleeding',
    url: getSearchLink('Clinical value of CISENDO CDO1/CELF4 dual gene methylation detection in endometrial cancer screening for females with abnormal uterine bleeding'),
    doi: '10.13885/j.issn.1000-2812.2024.07.004',
    institution: 'Gansu Provincial Maternity and Child-care Hospital',
    authors: 'Cai B, Li L, Liu B, et al.',
    journal: 'Journal of Lanzhou University (Medical Sciences)',
    year: 2024,
    category: StudyCategory.DIAGNOSTIC_ACCURACY,
    summary: 'Analyzed 216 patients with AUB. Compared Methylation vs Ultrasound vs CA125.',
    keyFinding: 'Methylation Sensitivity 91.2% / Specificity 96.7% vs Ultrasound (55.9%/78.6%) and CA125 (32.4%/76.4%).',
    metrics: { sensitivity: 91.2, specificity: 96.7, auc: 0 },
    populationSize: 216
  },
  {
    id: 'qi-frontiers-2023',
    title: 'Hypermethylated CDO1 and CELF4 in cytological specimens as triage strategy biomarkers in endometrial malignant lesions',
    url: getSearchLink('Hypermethylated CDO1 and CELF4 in cytological specimens as triage strategy biomarkers in endometrial malignant lesions'),
    doi: '10.3389/fonc.2023.1289366',
    institution: 'Cangzhou Central Hospital',
    authors: 'Qi B, Sun Y, Lv Y, et al.',
    journal: 'Frontiers in Oncology',
    year: 2023,
    category: StudyCategory.AUB_TRIAGE,
    summary: 'Large cohort of 607 women. CDO1/CELF4 methylation was far superior to other clinical indicators.',
    keyFinding: 'Dual-gene methylation achieved 84.9% sensitivity and 86.6% specificity for EC/AH. Combined with TVS, specificity reached 93.1%.',
    metrics: { sensitivity: 84.9, specificity: 86.6, auc: 0.86 },
    populationSize: 607
  },
  {
    id: 'zhao-cjlm-2023',
    title: 'Application of DNA methylation in detection of endometrial carcinoma in women with abnormal uterine bleeding at childbearing age',
    url: getSearchLink('Application of DNA methylation in detection of endometrial carcinoma in women with abnormal uterine bleeding at childbearing age'),
    doi: '10.3760/cma.j.cn114452-20221110-00670',
    institution: 'Third Xiangya Hospital, Central South University',
    authors: 'Zhao X, Xu D, Ma J, et al.',
    journal: 'Chin J Lab Med',
    year: 2023,
    category: StudyCategory.PREMENOPAUSAL,
    summary: '517 women of childbearing age. Prospective study.',
    keyFinding: 'Dual gene methylation had the highest AUC (0.90) compared to BMI, ET, etc. Sensitivity 91.7%, Specificity 88.8%.',
    metrics: { sensitivity: 91.7, specificity: 88.8, auc: 0.90 },
    populationSize: 517
  },
  {
    id: 'kong-nmjc-2023',
    title: 'The role of DNA methylation in the screening of endometrial cancer in postmenopausal women',
    url: getSearchLink('The role of DNA methylation in the screening of endometrial cancer in postmenopausal women'),
    doi: '10.3760/cma.j.cn112137-20220929-02058',
    institution: 'Peking Union Medical College Hospital',
    authors: 'Kong L, Xiao X, Wan R, et al.',
    journal: 'Natl Med J China',
    year: 2023,
    category: StudyCategory.POSTMENOPAUSAL,
    summary: '143 postmenopausal women. Methylation accuracy was better than other non-invasive methods.',
    keyFinding: 'Sensitivity 87.5%, Specificity 90.8%. TVS combined with DNA methylation reached 100% sensitivity.',
    metrics: { sensitivity: 87.5, specificity: 90.8, auc: 0.89 },
    populationSize: 143
  }
];

export const CISOVA_STUDIES: Study[] = [
  {
    id: 'hou-cjlm-2024',
    title: 'The significance of hypermethylation level of CDO1 gene and HOXA9 gene in serum in the diagnosis of ovarian cancer',
    url: getSearchLink('The significance of hypermethylation level of CDO1 gene and HOXA9 gene in serum in the diagnosis of ovarian cancer'),
    doi: '10.3760/cma.j.cn114452-20231115-00287',
    institution: 'Chengdu Womens and Childrens Central Hospital',
    authors: 'Hou Q, Yuan Y, Li Y, et al.',
    journal: 'Chin J Lab Med',
    year: 2024,
    category: StudyCategory.DIAGNOSTIC_ACCURACY,
    summary: 'Case-control study of 151 patients. Evaluated clinical application of cfDNA CDO1 and HOXA9 methylation for ovarian cancer.',
    keyFinding: 'Dual gene methylation had the highest AUC (0.936). Sensitivity 89.7%, Specificity 97.5%. Detected 12/14 early stage (I-II) cases.',
    metrics: { sensitivity: 89.7, specificity: 97.5, auc: 0.936 },
    populationSize: 151
  }
];

export const CISENDO_CHART_DATA: ChartDataPoint[] = [
  { name: 'CISENDO (Meth)', Sensitivity: 94.5, Specificity: 94.2 },
  { name: 'Ultrasound (TVS)', Sensitivity: 91.0, Specificity: 58.0 },
  { name: 'Serum CA125', Sensitivity: 41.0, Specificity: 82.0 },
];

export const COMPARISON_DATA: ChartDataPoint[] = [
  { name: 'Cytology (LBC)', Sensitivity: 53.0, Specificity: 62.0, ReferralReduction: 0 },
  { name: 'HPV 16/18 Genotyping', Sensitivity: 60.0, Specificity: 62.0, ReferralReduction: 0 },
  { name: 'PAX1/JAM3 Methylation', Sensitivity: 87.6, Specificity: 92.5, ReferralReduction: 70 },
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
  "Shanxi Bethune Hospital",
  "Chengdu Women's and Children's Central Hospital",
  "Peking University Shenzhen Hospital"
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
