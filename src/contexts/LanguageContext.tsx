import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh';

type Translations = {
  [key: string]: {
    en: string;
    zh: string;
  };
};

const translations: Translations = {
  // Hero
  // SEO
  'seo.home.title': { en: "CISPOLY - Precision Methylation for Cancer Triage", zh: "起源聚禾 - 癌症筛查与甲基化精准分流" },
  'seo.home.description': { 
    en: "Leading innovator in DNA methylation technology for women's health. Discover our NMPA-approved solutions for Cervical (CISCER), Endometrial (CISENDO), and Ovarian (CISOVA) cancer detection.", 
    zh: "女性健康DNA甲基化技术的领先创新者。探索我们获NMPA批准的宫颈癌（CISCER）、子宫内膜癌（CISENDO）和卵巢癌（CISOVA）检测解决方案。" 
  },
  'seo.home.keywords': { en: "methylation, cancer triage, cervical cancer, endometrial cancer, ovarian cancer, CISPOLY", zh: "甲基化, 癌症分流, 宫颈癌, 子宫内膜癌, 卵巢癌, 起源聚禾" },

  'seo.ciscer.title': { en: "CISCER - Cervical Cancer Methylation Triage (PAX1/JAM3)", zh: "CISCER 禾宫康 - 宫颈癌甲基化分流 (PAX1/JAM3)" },
  'seo.ciscer.description': { 
    en: "High-accuracy methylation test (PAX1/JAM3) for cervical cancer triage. Reduces unnecessary colposcopies for HPV-positive women with superior specificity.", 
    zh: "用于宫颈癌分流的高精度甲基化检测（PAX1/JAM3）。以卓越的特异度减少HPV阳性女性不必要的阴道镜检查。" 
  },

  'seo.cisendo.title': { en: "CISENDO - Endometrial Cancer Detection (CDO1/CELF4)", zh: "CISENDO 禾蔻安 - 子宫内膜癌检测 (CDO1/CELF4)" },
  'seo.cisendo.description': { 
    en: "The world's first non-invasive endometrial cancer detection tool using CDO1 and CELF4 methylation. Ideal for triaging Abnormal Uterine Bleeding (AUB).", 
    zh: "全球首个利用CDO1和CELF4甲基化进行子宫内膜癌无创检测的工具。异常子宫出血（AUB）分流的理想选择。" 
  },

  'seo.cisova.title': { en: "CISOVA - Ovarian Cancer Liquid Biopsy (CDO1/HOXA9)", zh: "CISOVA 禾薇益 - 卵巢癌液体活检 (CDO1/HOXA9)" },
  'seo.cisova.description': { 
    en: "Breakthrough liquid biopsy for early ovarian cancer detection. CDO1 and HOXA9 methylation markers offer superior sensitivity over CA125.", 
    zh: "卵巢癌早期检测的突破性液体活检。CDO1和HOXA9甲基化标志物提供优于CA125的灵敏度。" 
  },

  'seo.about.title': { en: "About CISPOLY - Pioneering Epigenetic Diagnostics", zh: "关于起源聚禾 - 开创表观遗传诊断" },
  'seo.about.description': { 
    en: "Learn about Beijing OriginPoly Bio-Tec Co.,Ltd., a National High-Tech Enterprise dedicated to saving lives through innovative cancer screening technologies.", 
    zh: "了解北京起源聚禾生物科技有限公司，一家致力于通过创新癌症筛查技术挽救生命的国家高新技术企业。" 
  },

  'seo.contact.title': { en: "Contact Us - CISPOLY", zh: "联系我们 - 起源聚禾" },
  'seo.contact.description': { 
    en: "Get in touch with CISPOLY for collaboration, product inquiries, or support. Located in Daxing District, Beijing.", 
    zh: "联系起源聚禾洽谈合作、产品咨询或技术支持。位于北京大兴区。" 
  },

  'seo.guides.cervical.title': { en: "Cervical Cancer Screening Guidelines & Consensus", zh: "宫颈癌筛查指南与共识" },
  'seo.guides.cervical.description': { 
    en: "Comprehensive clinical guidelines for cervical cancer screening. Understand the role of methylation in triaging HR-HPV positive patients.", 
    zh: "宫颈癌筛查的综合临床指南。了解甲基化在HR-HPV阳性患者分流中的作用。" 
  },

  'seo.guides.endo.title': { en: "Endometrial Cancer Prevention Consensus (2025)", zh: "子宫内膜癌预防共识 (2025)" },
  'seo.guides.endo.description': { 
    en: "Expert consensus on endometrial cancer tertiary prevention strategies. Methylation recommended for high-risk and AUB population triage.", 
    zh: "子宫内膜癌三级预防策略专家共识。推荐甲基化用于高危及AUB人群分流。" 
  },

  'seo.guides.ovarian.title': { en: "Ovarian Cancer Screening Research & Guidelines", zh: "卵巢癌筛查研究与指南" },
  'seo.guides.ovarian.description': { 
    en: "Latest research and emerging guidelines for ovarian cancer screening. The shift towards liquid biopsy and methylation markers.", 
    zh: "卵巢癌筛查的最新研究和新兴指南。向液体活检和甲基化标志物的转变。" 
  },
  'hero.tag.womensHealth': { en: "Women's Health", zh: "女性健康" },
  'hero.tag.molecularPrecision': { en: "Molecular Precision", zh: "分子精准" },
  'hero.title.prefix': { en: "Next Generation", zh: "新一代" },
  'hero.title.highlight': { en: "Epigenetic Cancer Screening", zh: "表观遗传癌症筛查" },
  'hero.description': { 
    en: "Pioneering the future of diagnostics with high-precision DNA methylation technology. Our comprehensive portfolio covers Cervical (PAX1/JAM3), Endometrial (CDO1/CELF4), and Ovarian (CDO1/HOXA9) cancers, offering non-invasive solutions that redefine early detection and triage.", 
    zh: "利用高精度DNA甲基化技术引领诊断的未来。我们的综合产品组合涵盖宫颈癌（PAX1/JAM3）、子宫内膜癌（CDO1/CELF4）和卵巢癌（CDO1/HOXA9），提供重新定义早期检测和分流的无创解决方案。" 
  },
  'hero.btn.evidence': { en: "Clinical Evidence", zh: "临床证据" },
  'hero.btn.simulator': { en: "Triage Simulator", zh: "分流模拟器" },
  'hero.nmpa.title': { en: "NMPA Approved", zh: "NMPA 批准" },
  'hero.nmpa.subtitle': { en: "Class III Medical Device", zh: "三类医疗器械" },
  'hero.nmpa.no': { en: "Reg. No. 20223400287", zh: "注册证号 20223400287" },
  
  // CISCER Specifics
  'hero.ciscer.title.prefix': { en: "Cervical Cancer", zh: "宫颈癌" },
  'hero.ciscer.title.highlight': { en: "Precision Triage", zh: "精准分流" },
  'hero.ciscer.description': { 
    en: "The gold standard for cervical cancer triage harnessing the synergistic power of PAX1 and JAM3 methylation markers. This dual-gene panel accurately distinguishes high-grade lesions (CIN2+) from benign changes in HPV-positive women, significantly reducing unnecessary colposcopies while preventing missed diagnoses.", 
    zh: "利用PAX1和JAM3甲基化标志物协同作用的宫颈癌分流金标准。该双基因组合能准确区分HPV阳性女性中的高级别病变（CIN2+）与良性改变，在显著减少不必要阴道镜检查的同时防止漏诊。" 
  },
  'hero.nmpa.ciscer.no': { en: "NMPA Approved: 20223400287", zh: "国械注准 20223400287" },

  // CISENDO Specifics
  'hero.cisendo.title.prefix': { en: "Endometrial Cancer", zh: "子宫内膜癌" },
  'hero.cisendo.title.highlight': { en: "Early Detection", zh: "早期检测" },
  'hero.cisendo.description': { 
    en: "The world's first non-invasive detection tool for endometrial cancer using CDO1 and CELF4 methylation markers. Optimized for women with Abnormal Uterine Bleeding (AUB) and high-risk factors, it offers a superior alternative to traditional ultrasound, ruling out malignancy with high negative predictive value.", 
    zh: "全球首个利用CDO1和CELF4甲基化标志物无创检测子宫内膜癌的工具。专为异常子宫出血（AUB）及高危因素女性优化，提供优于传统超声的替代方案，以极高的阴性预测值排除恶性肿瘤。" 
  },
  'hero.nmpa.cisendo.no': { en: "NMPA Approved: 20243402610", zh: "国械注准 20243402610" },
  
  // CISOVA Specifics
  'hero.cisova.title.prefix': { en: "Ovarian Cancer", zh: "卵巢癌" },
  'hero.cisova.title.highlight': { en: "Liquid Biopsy", zh: "液体活检" },
  'hero.cisova.description': { 
    en: "A breakthrough in liquid biopsy technology for the early detection of ovarian cancer using CDO1 and HOXA9 methylation. This dual-gene panel identifies circulating tumor DNA (ctDNA) with superior sensitivity compared to traditional CA125/HE4 markers, particularly for early-stage disease.", 
    zh: "利用CDO1和HOXA9甲基化进行卵巢癌早期检测的液体活检技术突破。该双基因组合识别循环肿瘤DNA（ctDNA），其灵敏度优于传统的CA125/HE4标志物，特别是对于早期疾病。" 
  },
  'hero.nmpa.cisova.no': { en: "NMPA Approved: 20253402443", zh: "国械注准 20253402443" },

  // Library / Cards
  'lib.card.sens': { en: "Sensitivity", zh: "灵敏度" },
  'lib.card.spec': { en: "Specificity", zh: "特异度" },
  'lib.card.n': { en: "N", zh: "样本量" },
  'lib.title': { en: "Evidence Library", zh: "证据库" },
  'lib.desc': { en: "Comprehensive collection of peer-reviewed studies validation our multi-cancer early detection pipeline.", zh: "验证我们多癌种早筛管线的同行评审研究的综合收集。" },
  'lib.filter.All': { en: "All Studies", zh: "全部文献" },
  'lib.filter.ASCUS': { en: "ASC-US Triage", zh: "ASC-US 分流" },
  'lib.filter.Non1618': { en: "Non-16/18 hrHPV", zh: "非16/18型高危HPV" },
  'lib.filter.HPV1618': { en: "HPV 16/18 Triage", zh: "HPV 16/18 分流" },
  'lib.filter.HrHPV': { en: "hrHPV Triage", zh: "高危HPV 分流" },
  'lib.filter.Postmen': { en: "Postmenopausal", zh: "绝经后女性" },
  'lib.filter.Self': { en: "Self-Sampling", zh: "自采样" },
  'lib.filter.MiniAbnormal': { en: "Minimally Abnormal", zh: "轻微异常" },
  'lib.filter.PathUpgrade': { en: "Pathological Upgrading", zh: "病理升级" },
  'lib.filter.Dysbiosis': { en: "Vaginal Dysbiosis", zh: "阴道菌群失调" },
  'lib.filter.Genotyping': { en: "HPV Genotyping", zh: "HPV基因分型" },
  'lib.filter.HSIL': { en: "HSIL Diagnosis", zh: "HSIL 诊断" },
  'lib.filter.mRNA': { en: "mRNA Triage", zh: "mRNA 分流" },
  'lib.filter.Protocol': { en: "Treatment Protocol", zh: "治疗方案" },
  'lib.filter.Outcome': { en: "Outcomes", zh: "临床结局" },
  'lib.filter.Method': { en: "Methodology", zh: "方法学" },
  'lib.filter.AUB': { en: "AUB Triage", zh: "AUB 分流" },
  'lib.filter.Premen': { en: "Premenopausal", zh: "绝经前" },
  'lib.filter.DiagAcc': { en: "Diagnostic Accuracy", zh: "诊断准确性" },
  'lib.filter.HrHpv': { en: "HR-HPV Triage", zh: "HR-HPV 分流" },
  'lib.filter.Review': { en: "Review", zh: "综述" },

  // Charts
  'charts.title': { en: "Performance Comparison", zh: "性能比较" },
  'charts.subtitle': { en: "Methylation vs Traditional Methods", zh: "甲基化与传统方法" },
  'charts.sensitivity': { en: "Sensitivity", zh: "灵敏度" },
  'charts.specificity': { en: "Specificity", zh: "特异度" },
  'charts.reduction': { en: "Referral Reduction", zh: "转诊减少" },
  'charts.footer': { en: "* Data aggregated from multi-center clinical trials.", zh: "* 数据汇总自多中心临床试验。" },
  'charts.badge.clinical': { en: "Clinical Evidence", zh: "临床验证" },
  'charts.trial.title': { en: "Clinical Trial Data", zh: "临床试验数据" },
  'charts.trial.description': { 
    en: "Conducted at Peking Union Medical College Hospital, Zhejiang Provincial People's Hospital, The Second Affiliated Hospital of Zhejiang University School of Medicine", 
    zh: "在 北京协和医院、浙江省人民医院、浙江大学医学院附属第二医院 进行" 
  },
  'charts.source': { en: "Source", zh: "来源" },

  // Simulator
  'sim.title': { en: "Smart Triage Simulator", zh: "智能分流模拟器" },
  'sim.subtitle': { en: "Interactive decision support tool based on latest guidelines", zh: "基于最新指南的交互式决策支持工具" },
  'sim.toggleChart': { en: "Show Flowchart / Hide Flowchart", zh: "显示流程图 / 隐藏流程图" },
  'sim.reset': { en: "Reset", zh: "重置" },
  'sim.chartTitle': { en: "Clinical Pathway", zh: "临床路径" },
  'sim.step1': { en: "Select Patient Status", zh: "选择患者状态" },
  'sim.btn.ascus': { en: "ASC-US Cytology", zh: "ASC-US 细胞学" },
  'sim.btn.ascus.desc': { en: "Atypical Squamous Cells of Undetermined Significance", zh: "意义未明的非典型鳞状细胞" },
  'sim.btn.non1618': { en: "hrHPV (+) Non-16/18", zh: "hrHPV (+) 非16/18型" },
  'sim.btn.non1618.desc': { en: "Positive for 12 other high-risk HPV types", zh: "其他12种高危HPV阳性" },
  'sim.btn.1618': { en: "hrHPV (+) 16/18", zh: "hrHPV (+) 16/18型" },
  'sim.btn.1618.desc': { en: "Positive for HPV 16 or 18", zh: "HPV 16或18阳性" },
  'sim.step2': { en: "Methylation Test Result", zh: "甲基化检测结果" },
  'sim.pos': { en: "Positive (+)", zh: "阳性 (+)" },
  'sim.pos.desc': { en: "High methylation levels detected", zh: "检测到高甲基化水平" },
  'sim.neg': { en: "Negative (-)", zh: "阴性 (-)" },
  'sim.neg.desc': { en: "Normal methylation levels", zh: "甲基化水平正常" },
  'sim.rec.colpo': { en: "Recommendation: Colposcopy", zh: "建议：阴道镜检查" },
  'sim.rec.colpo.desc': { en: "Immediate referral to colposcopy is recommended due to high risk of CIN2+.", zh: "由于CIN2+风险高，建议立即转诊阴道镜。" },
  'sim.evidence': { en: "Clinical Evidence:", zh: "临床证据：" },
  'sim.rec.neg.desc1': { en: "Risk is low. Routine follow-up or re-testing in 12 months is generally safe.", zh: "风险较低。通常建议12个月后随访或复查。" },
  'sim.rec.neg.desc2': { en: "Extremely low risk of high-grade lesions. Safe to follow up.", zh: "高级别病变风险极低。随访是安全的。" },
  'sim.rec.consider': { en: "Recommendation: Consider Follow-up", zh: "建议：考虑随访" },
  'sim.rec.followup': { en: "Recommendation: Follow-up", zh: "建议：随访" },
  'sim.interact': { en: "Interact with options above", zh: "与上方选项交互" },
  'sim.pathway': { en: "Pathway:", zh: "路径：" },
  'sim.cisendo.step1': { en: "Select Risk Group", zh: "选择风险组" },
  'sim.cisendo.step1.btn1': { en: "High Risk (Lynch/History)", zh: "高危（林奇综合征/病史）" },
  'sim.cisendo.step1.btn2': { en: "Increased Risk (Obesity/PCOS)", zh: "风险增加（肥胖/多囊卵巢综合征）" },
  'sim.cisendo.step1.btn3': { en: "Symptomatic (AUB)", zh: "有症状（AUB）" },
  'sim.cisendo.step2': { en: "Combined Assessment", zh: "综合评估" },
  'sim.cisendo.step2.desc': { en: "Perform Transvaginal Ultrasound (TVS) + Methylation Test", zh: "进行经阴道超声 (TVS) + 甲基化检测" },
  'sim.cisendo.step3': { en: "Assessment Results", zh: "评估结果" },
  'sim.cisendo.step3.typical': { en: "TVS Typical", zh: "TVS 典型" },
  'sim.cisendo.step3.cis_high': { en: "Cisendo High Risk", zh: "禾蔻安高风险" },
  'sim.cisendo.step3.atypical': { en: "TVS Atypical", zh: "TVS 非典型" },
  'sim.cisendo.step3.cis_low': { en: "Cisendo Low Risk", zh: "禾蔻安低风险" },
  'sim.cisendo.step2b': { en: "Cisendo Assessment", zh: "禾蔻安评估" },
  'sim.cisendo.outcome.refer': { en: "Referral: Hysteroscopy/Biopsy", zh: "转诊：宫腔镜/活检" },
  'sim.cisendo.outcome.refer.desc': { en: "High likelihood of pathology. Tissue diagnosis required.", zh: "病变可能性高。需组织学诊断。" },
  'sim.cisendo.outcome.follow': { en: "Follow-up / Conservative", zh: "随访 / 保守治疗" },
  'sim.cisendo.outcome.follow.desc': { en: "Low risk. Monitor symptoms and re-evaluate if necessary.", zh: "低风险。监测症状，必要时重新评估。" },

  // Cisendo Simulator Diagram Keys
  'triage.title': { en: "Endometrial Cancer Triage Strategy", zh: "子宫内膜癌筛查分流策略" },
  'triage.subtitle': { en: "Based on Chinese Expert Consensus on Tertiary Prevention Strategies (2025)", zh: "基于《子宫内膜癌三级预防策略中国专家共识（2025年版）》" },
  'triage.root': { en: "Endometrial Cancer Screening", zh: "子宫内膜癌二级预防筛查" },
  'triage.highRisk': { en: "High Risk (Lynch/History)", zh: "高危人群" },
  'triage.increasedRisk': { en: "Increased Risk (Obesity)", zh: "风险增加人群" },
  'triage.symptomatic': { en: "Symptomatic (AUB)", zh: "有症状人群" },
  'triage.combined': { en: "Imaging + Cisendo Assessment", zh: "影像学联合禾蔻安评估" },
  'triage.imgAtypical': { en: "Imaging Atypical", zh: "影像学不典型" },
  'triage.imgTypical': { en: "Imaging Typical", zh: "影像学典型" },
  'triage.imgTypical.def': { 
    en: "(1) Diffuse or localized irregular medium echoes in the uterine cavity, a few hypoechoic space-occupying lesions with abundant blood flow signals around and inside the lesion and/or (2) Pelvic mass and ascites; signs of distant metastasis", 
    zh: "(1)宫腔内弥漫性或局限性不规则的中等回声，少数可见低回声的占位病变且病灶周边及内部可检出较丰富的血流信号和/或 (2)盆腔见肿块并可见腹水;远处转移征象" 
  },
  'triage.cisHigh': { en: "Cisendo High Risk", zh: "禾蔻安高风险" },
  'triage.cisLow': { en: "Cisendo Low Risk", zh: "禾蔻安低风险" },
  'triage.cisendoEval': { en: "Cisendo Assessment", zh: "禾蔻安评估" },
  'triage.lowRisk': { en: "Low Risk", zh: "低风险" },
  'triage.risk.high': { en: "High Risk", zh: "高风险" },
  'triage.referral': { en: "Referral", zh: "转诊" },
  'triage.outcome.biopsy': { en: "Hysteroscopy/Biopsy", zh: "宫腔镜/活检" },
  'triage.followup': { en: "Follow-up", zh: "随访" },
  'triage.def.title': { en: "Consensus Definition", zh: "共识解读" },
  'triage.def.content': { 
    en: "For women with AUB or high-risk factors, combining Transvaginal Ultrasound (TVS) with Methylation testing significantly improves diagnostic accuracy. Positive methylation indicates a high likelihood of malignancy.", 
    zh: "对于AUB或高危因素女性，经阴道超声(TVS)联合甲基化检测可显著提高诊断准确性。甲基化阳性提示子宫内膜恶性病变可能性高，建议进行侵入性评估。" 
  },

  // CISENDO Performance Card
  'cisendo.perf.missed': { en: "Missed by Imaging", zh: "影像学漏诊" },
  'cisendo.perf.rescued': { en: "Rescued", zh: "挽回漏诊" },
  'cisendo.perf.rescued.tooltip': { 
    en: "Reduces 50% of missed diagnoses caused by imaging through methylation.", 
    zh: "通过应用甲基化方法，降低了影像学造成的 50% 的漏诊。" 
  },
  'cisendo.perf.followup': { en: "Follow-up", zh: "随访" },
  'cisendo.perf.cohort': { en: "Cohort", zh: "队列" },

  // Footer / Common
  'footer.disclaimer': { en: "© 2020 - 2026 CISPOLY Biotech. For healthcare professional use only.", zh: "© 2020 - 2026 起源聚禾生物。仅供医疗专业人士参考。" },
  'inst.collab': { en: "Collaborations", zh: "合作机构" },
  'inst.title': { en: "Trusted by Top Institutions", zh: "顶级机构信赖" },
  'inst.desc': { en: "Our technology is validated by leading research hospitals.", zh: "我们的技术已得到领先研究型医院的验证。" },

  // Scenarios
  'scenarios.title': { en: "Clinical Scenarios", zh: "临床应用场景" },
  'scenarios.desc': { en: "Where methylation testing adds the most value.", zh: "甲基化检测最具价值的应用场景。" },
  'scenarios.ascus.title': { en: "ASC-US Triage", zh: "ASC-US 分流" },
  'scenarios.ascus.desc': { en: "Distinguish high-risk lesions from benign changes in equivocal cytology with PAX1/JAM3 precision.", zh: "利用PAX1/JAM3的高精度，在模棱两可的细胞学结果中区分高危病变和良性改变。" },
  'scenarios.hrhpv.title': { en: "hrHPV+ Management", zh: "hrHPV+ 管理" },
  'scenarios.hrhpv.desc': { en: "Reduce unnecessary colposcopies for non-16/18 infections by identifying true disease progression.", zh: "通过识别真正的疾病进展，减少非16/18型感染不必要的阴道镜检查。" },
  'scenarios.postmeno.title': { en: "Postmenopausal", zh: "绝经后" },
  'scenarios.postmeno.desc': { en: "Overcome cytological atrophy and sampling challenges with molecular accuracy (PAX1/JAM3).", zh: "利用分子精度（PAX1/JAM3）克服细胞学萎缩和取样挑战。" },
  'scenarios.postmeno.desc.cisendo': { en: "Overcome cytological atrophy and sampling challenges with molecular accuracy (CDO1/CELF4).", zh: "利用分子精度（CDO1/CELF4）克服细胞学萎缩和取样挑战。" },
  'scenarios.postcon.title': { en: "Post-Conization", zh: "锥切术后" },
  'scenarios.postcon.desc': { en: "Predict residual disease or occult invasion with high negative predictive value.", zh: "以高阴性预测值预测残留病变或隐匿性浸润。" },
  'scenarios.self.title': { en: "Self-Sampling", zh: "自取样" },
  'scenarios.self.desc': { en: "Enabling home-based screening with high sensitivity comparable to clinician-collected samples.", zh: "实现高灵敏度的居家筛查，效果媲美临床医生取样。" },
  'scenarios.aub.title': { en: "AUB Triage", zh: "AUB 分流" },
  'scenarios.aub.desc': { en: "Accurate triage for Abnormal Uterine Bleeding using CDO1/CELF4 to rule out malignancy.", zh: "利用CDO1/CELF4对异常子宫出血进行准确分流，排除恶性肿瘤。" },
  'scenarios.highrisk.title': { en: "High Risk Screening", zh: "高危人群筛查" },
  'scenarios.highrisk.desc': { en: "Enhanced screening for Lynch syndrome or high BMI populations using endometrial methylation markers.", zh: "利用子宫内膜甲基化标志物加强对林奇综合征或高BMI人群的筛查。" },
  'scenarios.cisova.adjunct.title': { en: "Adjunct to Ultrasound", zh: "超声辅助" },
  'scenarios.cisova.adjunct.desc': { en: "Clarify indeterminate adnexal masses with a simple blood test (CDO1/HOXA9).", zh: "通过简单的血液检测（CDO1/HOXA9）明确不确定的附件包块。" },
  'scenarios.cisova.indep.title': { en: "Independent Screening", zh: "独立筛查" },
  'scenarios.cisova.indep.desc': { en: "Early detection in high-risk populations, overcoming the limitations of CA125.", zh: "克服CA125的局限性，实现高危人群的早期检测。" },
  'scenarios.cisova.brca.title': { en: "BRCA Mutation Carriers", zh: "BRCA 突变携带者" },
  'scenarios.cisova.brca.desc': { en: "Intensive, non-invasive monitoring for genetic risk groups.", zh: "针对遗传风险人群的密集、无创监测。" },
  'scenarios.cisova.description': { en: "Targeting the silent killer with liquid biopsy precision using CDO1 and HOXA9.", zh: "利用CDO1和HOXA9的液体活检精度靶向“沉默杀手”。" },

  // Challenges
  'challenge.title': { en: "The Clinical Challenge", zh: "临床挑战" },
  'challenge.desc': { en: "Balancing sensitivity and specificity in cancer screening is the eternal struggle of diagnostics.", zh: "在癌症筛查中平衡灵敏度和特异度是诊断学永恒的难题。" },
  'challenge.step1': { en: "Broad Screening", zh: "广泛筛查" },
  'challenge.step1.desc': { en: "HPV or Cytology identifies many at-risk women, but often lacks specificity.", zh: "HPV或细胞学识别出许多高危女性，但往往缺乏特异度。" },
  'challenge.step2a.title': { en: "Low Specificity", zh: "特异度低" },
  'challenge.step2a.desc': { en: "Too many false positives lead to overtreatment and anxiety.", zh: "过多的假阳性导致过度治疗和焦虑。" },
  'challenge.step2b.title': { en: "Missed Diagnosis", zh: "漏诊" },
  'challenge.step2b.desc': { en: "Traditional methods miss glandular lesions and early-stage ovarian cancers.", zh: "传统方法容易漏诊腺体病变和早期卵巢癌。" },
  'challenge.step3': { en: "The Solution", zh: "解决方案" },
  'challenge.step3.desc': { en: "Methylation provides the precise molecular filter needed to identify true disease.", zh: "甲基化提供了识别真正疾病所需的精准分子过滤器。" },
  'challenge.cisova.title': { en: "Ovarian Cancer Challenge", zh: "卵巢癌挑战" },
  'challenge.cisova.desc': { en: "Late diagnosis remains the biggest hurdle, with 70% of cases found at Stage III/IV.", zh: "晚期诊断仍是最大障碍，70%的病例在III/IV期才被发现。" },
  'challenge.cisova.step1': { en: "Late Presentation", zh: "就诊晚" },
  'challenge.cisova.step1.desc': { en: "Symptoms are vague, leading to delayed intervention.", zh: "症状模糊，导致干预延迟。" },
  'challenge.cisova.step2a.title': { en: "Limited Tools", zh: "手段有限" },
  'challenge.cisova.step2a.desc': { en: "CA125 lacks sensitivity for early stages (only ~50%).", zh: "CA125对早期缺乏灵敏度（仅约50%）。" },
  'challenge.cisova.step2b.title': { en: "Imaging Limits", zh: "影像局限" },
  'challenge.cisova.step2b.desc': { en: "Ultrasound cannot reliably distinguish benign from malignant masses.", zh: "超声难以可靠区分良恶性包块。" },
  'challenge.cisova.step3': { en: "Liquid Biopsy", zh: "液体活检" },
  'challenge.cisova.step3.desc': { en: "Detecting ctDNA methylation signals (CDO1/HOXA9) early in blood.", zh: "早期检测血液中的ctDNA甲基化信号（CDO1/HOXA9）。" },

  // Advantages
  'advantages.badge': { en: "Advantages", zh: "优势" },
  'advantages.title': { en: "Why Choose Methylation?", zh: "为什么选择甲基化？" },
  'advantages.desc': { en: "Superior performance characteristics for modern screening protocols.", zh: "现代筛查方案的卓越性能特征。" },
  'adv.specificity.title': { en: "High Specificity", zh: "高特异度" },
  'adv.specificity.desc': { en: "Reduces false positives significantly, minimizing unnecessary referrals.", zh: "显著减少假阳性，最大限度地减少不必要的转诊。" },
  'adv.objective.title': { en: "Objective", zh: "客观" },
  'adv.objective.desc': { en: "Automated PCR analysis removes subjective human interpretation error.", zh: "自动化PCR分析消除了主观的人为解释误差。" },
  'adv.referrals.title': { en: "Fewer Referrals", zh: "减少转诊" },
  'adv.referrals.desc': { en: "Reduces colposcopy burden by ~50% in HPV+ populations.", zh: "在HPV+人群中减少约50%的阴道镜负担。" },
  'adv.npv.title': { en: "High NPV", zh: "高阴性预测值" },
  'adv.npv.desc': { en: "Reliably rules out disease, allowing for safe extended follow-up intervals.", zh: "可靠排除疾病，允许安全的延长随访间隔。" },
  'adv.precision.title': { en: "Precision", zh: "精准" },
  'adv.precision.desc': { en: "Detects molecular changes before morphology becomes visible.", zh: "在形态变得可见之前检测分子变化。" },
  'adv.pan.title': { en: "Pan-Genotype", zh: "全基因型" },
  'adv.pan.desc': { en: "Works effectively across all high-risk HPV types.", zh: "在所有高危HPV类型中均有效。" },
  'adv.cisendo.coverage.title': { en: "Broad Coverage", zh: "覆盖广泛" },
  'adv.cisendo.coverage.desc': { en: "Detects various histological subtypes including endometrioid and serous carcinoma.", zh: "检测多种组织学亚型，包括子宫内膜样癌和浆液性癌。" },
  'adv.cisendo.convenience.title': { en: "Convenient", zh: "便捷" },
  'adv.cisendo.convenience.desc': { en: "Uses cervical scrapings, avoiding the pain and complexity of endometrial biopsy.", zh: "使用宫颈刮片，避免子宫内膜活检的疼痛和复杂性。" },
  'adv.cisendo.market.title': { en: "Market Ready", zh: "市场就绪" },
  'adv.cisendo.market.desc': { en: "First approved product of its kind with NMPA certification.", zh: "同类首个获得NMPA认证的获批产品。" },
  'adv.cisendo.data.title': { en: "Robust Data", zh: "数据详实" },
  'adv.cisendo.data.desc': { en: "Validated in large prospective multi-center cohorts across China.", zh: "在中国的大型前瞻性多中心队列中得到验证。" },
  'adv.cisendo.throughput.title': { en: "High Throughput", zh: "高通量" },
  'adv.cisendo.throughput.desc': { en: "Suitable for mass screening programs with automated workflows.", zh: "适合具有自动化工作流程的大规模筛查项目。" },
  'adv.cisova.blood.title': { en: "Blood-Based", zh: "血液检测" },
  'adv.cisova.blood.desc': { en: "Non-invasive phlebotomy sample, high compliance.", zh: "无创静脉采血样本，依从性高。" },
  'adv.cisova.gap.title': { en: "Fills the Gap", zh: "填补空白" },
  'adv.cisova.gap.desc': { en: "Effective where CA125 fails, particularly in early-stage non-mucinous types.", zh: "在CA125失效处有效，特别是早期非粘液性类型。" },
  'adv.cisova.data.title': { en: "Strong Evidence", zh: "强有力证据" },
  'adv.cisova.data.desc': { en: "Demonstrated high sensitivity in early stages (I/II).", zh: "在早期阶段（I/II）表现出高灵敏度。" },

  // Navigation
  'app.logo.subtitle': { en: "Epigenetics", zh: "表观遗传" },
  'nav.home': { en: "Home", zh: "首页" },
  'nav.products': { en: "Products", zh: "产品" },
  'nav.ciscer': { en: "CISCER (Cervical)", zh: "CISCER (宫颈)" },
  'nav.cisendo': { en: "CISENDO (Endometrial)", zh: "CISENDO (内膜)" },
  'nav.cisova': { en: "CISOVA (Ovarian)", zh: "CISOVA (卵巢)" },
  'nav.guides': { en: "Guidelines", zh: "指南" },
  'nav.guides.cervical': { en: "Cervical Guidelines", zh: "宫颈癌指南" },
  'nav.guides.endo': { en: "Endometrial Guidelines", zh: "内膜癌指南" },
  'nav.guides.ovarian': { en: "Ovarian Guidelines", zh: "卵巢癌指南" },
  'nav.about': { en: "About", zh: "关于" },
  'nav.contact': { en: "Contact", zh: "联系" },
  'nav.blog': { en: "Blog", zh: "博客" },

  // App / Page specific
  'app.evidenceBased': { en: "Evidence Based", zh: "循证医学" },
  'app.dataDriven': { en: "Data Driven Precision", zh: "数据驱动的精准" },
  'app.dataDesc': { en: "Our technology is backed by rigorous clinical studies comparing it against gold standards like Pathology and standard Imaging.", zh: "我们的技术得到严格临床研究的支持，并与病理学和标准影像学等金标准进行对比。" },
  'app.point1': { en: "Higher specificity than cytology.", zh: "比特异度高于细胞学。" },
  'app.point2': { en: "Objective results reducing human error.", zh: "客观结果减少人为误差。" },
  'app.point3': { en: "Effective for triage.", zh: "有效的分流手段。" },

  // Innovation / Tech
  'inn.title': { en: "Scientific Innovation", zh: "科学创新" },
  'inn.desc': { en: "The mechanism behind our epigenetic markers: CDO1 and CELF4.", zh: "我们表观遗传标志物背后的机制：CDO1 和 CELF4。" },
  'inn.cdo1': { en: "CDO1 Gene", zh: "CDO1 基因" },
  'inn.cdo1.desc': { en: "Cysteine Dioxygenase Type 1. A tumor suppressor gene often silenced by promoter hypermethylation in gynecological cancers.", zh: "半胱氨酸双加氧酶1型。一种在妇科肿瘤中常因启动子高甲基化而沉默的抑癌基因。" },
  'inn.celf4': { en: "CELF4 Gene", zh: "CELF4 基因" },
  'inn.celf4.desc': { en: "CUGBP Elav-Like Family Member 4. A neural RNA-binding protein gene frequently methylated in endometrial carcinoma.", zh: "CUGBP Elav样家族成员4。一种在子宫内膜癌中经常甲基化的神经RNA结合蛋白基因。" },
  'inn.mechanism': { en: "Mechanism of Action", zh: "作用机制" },
  'inn.mechanism.desc': { en: "Tumor cells shed DNA with specific methylation patterns. Our assay detects these signals from minimal samples (cervical scrapings or blood) via PCR.", zh: "肿瘤细胞脱落带有特定甲基化模式的DNA。我们的检测通过PCR从微量样本（宫颈刮片或血液）中检测这些信号。" },
  'inn.cisova.title': { en: "Liquid Biopsy Tech", zh: "液体活检技术" },
  'inn.cisova.desc': { en: "Detecting circulating tumor DNA (ctDNA) in blood using CDO1 and HOXA9.", zh: "利用 CDO1 和 HOXA9 检测血液中的循环肿瘤DNA (ctDNA)。" },
  'inn.cisova.ctdna': { en: "ctDNA Analysis", zh: "ctDNA 分析" },
  'inn.cisova.ctdna.desc': { en: "Captures fragments of tumor DNA circulating in the bloodstream released by apoptotic tumor cells.", zh: "捕获由凋亡肿瘤细胞释放到血液循环中的肿瘤DNA片段。" },
  'inn.cisova.markers': { en: "Dual Markers (CDO1/HOXA9)", zh: "双标志物 (CDO1/HOXA9)" },
  'inn.cisova.markers.desc': { en: "The combination of CDO1 and HOXA9 methylation maximizes sensitivity for early-stage detection.", zh: "CDO1和HOXA9甲基化的组合最大化了早期检测的灵敏度。" },
  'inn.cisova.mechanism.desc': { en: "Tumors release DNA into blood. We detect the methylated CDO1 and HOXA9 signals.", zh: "肿瘤向血液释放DNA。我们检测甲基化的 CDO1 和 HOXA9 信号。" },

  // Data Sections
  'data.title': { en: "Clinical Performance", zh: "临床性能" },
  'data.subtitle': { en: "Real-world data statistics.", zh: "真实世界数据统计。" },
  'data.missed.title': { en: "Missed by Imaging", zh: "影像学漏诊" },
  'data.missed.desc': { en: "Traditional imaging often misses early lesions or cannot distinguish atypical hyperplasia.", zh: "传统影像学常漏诊早期病变或无法区分非典型增生。" },
  'data.rescue.title': { en: "Rescued by Methylation", zh: "甲基化挽救" },
  'data.rescue.desc': { en: "Methylation identifies cases missed by other methods, acting as a crucial safety net.", zh: "甲基化识别出其他方法漏诊的病例，充当关键的安全网。" },
  'data.followup.title': { en: "Follow-up Success", zh: "随访成功" },
  'data.followup.desc': { en: "Successfully monitoring progression and identifying recurrence early.", zh: "成功监测进展并早期识别复发。" },
  'cisendo.evidence.title': { en: "Evidence for Endometrial Cancer", zh: "子宫内膜癌证据" },
  'cisendo.dataDesc': { en: "Comparison with Ultrasound and CA125 in large cohorts.", zh: "在大型队列中与超声和CA125的比较。" },
  'cisendo.point1': { en: "Superior Sensitivity (94.5%) vs Ultrasound.", zh: "优于超声的灵敏度 (94.5%)。" },
  'cisendo.point2': { en: "Excellent Specificity (95.5%) reducing false alarms.", zh: "优秀的特异度 (95.5%)，减少误报。" },
  'cisendo.point3': { en: "Complementary to TVS for indeterminate cases.", zh: "对TVS不确定的病例具有互补性。" },
  'data.cisova.title': { en: "Ovarian Cancer Data", zh: "卵巢癌数据" },
  'data.cisova.subtitle': { en: "Breakthrough sensitivity statistics from clinical trials.", zh: "来自临床试验的突破性灵敏度统计。" },
  'data.cisova.superior': { en: "Superior Accuracy", zh: "卓越准确性" },
  'data.cisova.superior.desc': { en: "Compared to CA125 and Ultrasound, especially in early stages.", zh: "相比CA125和超声，特别是在早期阶段。" },
  'data.cisova.rescue.title': { en: "Rescue Rate", zh: "挽救率" },
  'data.cisova.rescue.desc': { en: "Detection of occult cases missed by standard imaging.", zh: "检测标准影像学漏诊的隐匿病例。" },
  'data.cisova.subgroups.title': { en: "Subgroup Analysis", zh: "亚组分析" },
  'data.cisova.subgroups.desc': { en: "Consistent performance across stages (I-IV) and histological types.", zh: "在各分期（I-IV）和组织学类型中表现一致。" },

  // About Page
  'about.title': { en: "About CISPOLY", zh: "关于起源聚禾" },
  'about.intro.title': { en: "Leading Brand in Gynecological Cancer Early Diagnosis", zh: "妇科肿瘤早诊领先品牌" },
  'about.intro.desc': { en: "Since its establishment in 2020, Beijing Cispoly Biotech Co., Ltd. has been driven by innovation and dedicated to health. As a pioneer in gynecological tumor early screening and diagnosis, and a certified National and Zhongguancun High-Tech Enterprise, we focus on the R&D, production, and sales of screening products for women's cancers and related automated equipment. Cispoly prioritizes evidence-based methylation research, conducting multiple prospective multi-center clinical trials with significant results. Our innovative technology addresses gaps in screening, particularly filling the clinical void for non-invasive endometrial cancer screening. We aspire to further improve clinical pathways and benefit women in China and globally.", zh: "从2020年成立以来，北京起源聚禾生物科技有限公司就是以创新科技为驱动、以关注健康为宗旨的科技企业。聚禾生物是妇科肿瘤早筛早诊领域的开拓者，作为国家级与中关村认证的高新技术企业，专注于妇女肿瘤和相关疾病的早筛早诊产品以及相关的自动化检测设备的研发、生产和销售。 聚禾生物注重甲基化应用的循证依据与临床及学术研究，目前已开展多项前瞻性多中心临床试验，并取得丰富数据成果。聚禾生物以创新性的技术填补了妇科肿瘤筛查场景的不足，尤其是以无创技术对内膜癌筛查填补了该临床应用的空白。 期许未来将有机会填补临床诊疗路径的不足，并能够造福于中国乃至全球的妇女。" },
  'about.tech.title': { en: "Our Technology", zh: "我们的技术" },
  'about.tech.subtitle': { en: "Methylation Detection Platform", zh: "甲基化检测平台" },
  'about.tech.desc': { en: "Proprietary technology enabling high sensitivity and specificity. By analyzing the methylation status of specific gene promoters (PAX1, JAM3, CDO1, CELF4, HOXA9), we can detect cancer signals much earlier than morphological changes.", zh: "专有技术实现高灵敏度和特异度。通过分析特定基因启动子（PAX1、JAM3、CDO1、CELF4、HOXA9）的甲基化状态，我们可以比形态学改变更早地检测到癌症信号。" },
  'about.point1.title': { en: "Early Detection", zh: "早期检测" },
  'about.point1.desc': { en: "Finding cancer when it is most treatable.", zh: "在最可治疗时发现癌症。" },
  'about.point1.detail': { en: "Pre-cancerous lesions.", zh: "癌前病变。" },
  'about.point2.title': { en: "Innovation", zh: "创新" },
  'about.point2.desc': { en: "Cutting edge biomarkers.", zh: "前沿生物标志物。" },
  'about.point2.detail': { en: "Patented markers.", zh: "专利标志物。" },
  'about.point3.title': { en: "Quality", zh: "质量" },
  'about.point3.desc': { en: "Rigorous quality control.", zh: "严格的质量控制。" },
  'about.point3.detail': { en: "ISO Certified.", zh: "ISO 认证。" },
  'about.point4.title': { en: "Reliability", zh: "可靠性" },
  'about.point4.desc': { en: "Consistent results.", zh: "结果一致。" },
  'about.point5.title': { en: "Impact", zh: "影响力" },
  'about.point5.desc': { en: "Improving women's health globally.", zh: "改善全球女性健康。" },
  'about.footer': { en: "Committed to saving lives through early detection.", zh: "致力于通过早筛挽救生命。" },

  // Home Page
  'home.hero.title': { en: "Redefining Women's Cancer Screening", zh: "重新定义女性癌症筛查" },
  'home.hero.subtitle': { en: "Precision Epigenetics for Early Detection", zh: "用于早期检测的精准表观遗传学" },
  'home.hero.desc': { 
    en: "Advanced DNA methylation tests for Cervical (PAX1/JAM3), Endometrial (CDO1/CELF4), and Ovarian (CDO1/HOXA9) cancers. Non-invasive, accurate, and reliable.", 
    zh: "用于宫颈癌（PAX1/JAM3）、子宫内膜癌（CDO1/CELF4）和卵巢癌（CDO1/HOXA9）的先进DNA甲基化检测。无创、准确、可靠。" 
  },
  'home.hero.btn': { en: "Explore Products", zh: "探索产品" },
  'home.mission.title': { en: "Our Mission", zh: "我们的使命" },
  'home.mission.desc': { en: "To make cancer screening accurate, accessible, and non-invasive.", zh: "让癌症筛查变得准确、可及且无创。" },
  'home.products.title': { en: "Our Solutions", zh: "我们的解决方案" },
  'home.products.ciscer.desc': { en: "Dual-gene PAX1/JAM3 methylation for precise Cervical Cancer Triage, reducing unnecessary colposcopies.", zh: "双基因PAX1/JAM3甲基化用于精准宫颈癌分流，减少不必要的阴道镜检查。" },
  'home.products.cisendo.desc': { en: "Non-invasive CDO1/CELF4 methylation for Endometrial Cancer detection, ideal for AUB patients.", zh: "无创CDO1/CELF4甲基化用于子宫内膜癌检测，是AUB患者的理想选择。" },
  'home.products.cisova.desc': { en: "Liquid Biopsy for Ovarian Cancer using CDO1/HOXA9, filling the gap in early screening.", zh: "利用CDO1/HOXA9进行卵巢癌液体活检，填补早期筛查的空白。" },
  'home.products.learn': { en: "Learn More", zh: "了解更多" },
  'home.guides.title': { en: "Clinical Guidelines", zh: "临床指南" },
  'home.guides.read': { en: "Read Guide", zh: "阅读指南" },
  'guides.cervical.desc': { en: "Comprehensive guidelines for cervical cancer screening and triage, recommending methylation for HR-HPV+ management.", zh: "宫颈癌筛查和分流的综合指南，推荐甲基化用于HR-HPV+管理。" },
  'guides.endo.desc': { en: "Expert consensus on endometrial cancer prevention (2025 Edition), endorsing methylation as a valid screening tool.", zh: "子宫内膜癌三级预防策略中国专家共识（2025年版），认可甲基化作为有效的筛查工具。" },
  'guides.ovarian.desc': { en: "Emerging evidence and guidelines for ovarian cancer screening using novel biomarkers.", zh: "利用新型生物标志物进行卵巢癌筛查的新兴证据和指南。" },
  'home.tech.title': { en: "Why DNA Methylation?", zh: "为什么选择 DNA 甲基化？" },
  'home.tech.subtitle': { en: "The Ideal Marker for Non-Invasive Early Screening", zh: "无创早筛早诊的理想标志物" },
  'home.tech.p1': { en: "DNA methylation is an early event in carcinogenesis, occurring before morphological changes visible under a microscope. It acts as a stable, measurable biomarker.", zh: "DNA甲基化是致癌过程中的早期事件，发生在显微镜下可见的形态改变之前。它作为一种稳定、可测量的生物标志物。" },
  'home.tech.p2': { en: "By detecting specific hypermethylated gene promoters, we can identify precancerous lesions and cancer with high sensitivity and specificity, often from non-invasive samples.", zh: "通过检测特定的高甲基化基因启动子，我们可以高灵敏度和高特异度地识别癌前病变和癌症，通常只需无创样本。" },

  // Contact
  'contact.title': { en: "Contact Us", zh: "联系我们" },
  'contact.subtitle': { en: "Get in touch with our team.", zh: "与我们的团队取得联系。" },
  'contact.address.label': { en: "Address", zh: "地址" },
  'contact.address.value': { en: "No. 5, Building 5, Yard 50, Huatuo Road, Daxing District, Beijing, China (Postal Code: 102609)", zh: "中国北京市大兴区华佗路50号院5号楼（邮政编码：102609）" },
  'contact.email.label': { en: "Email", zh: "邮箱" },
  'contact.tel.label': { en: "Phone", zh: "电话" },
  'contact.map.viewLarger': { en: "View Larger Map", zh: "查看大图" },
  'contact.form.title': { en: "Send us a message", zh: "发送消息" },
  'contact.form.success': { en: "Message Sent!", zh: "消息已发送！" },
  'contact.form.name': { en: "Name", zh: "姓名" },
  'contact.form.phone': { en: "Phone", zh: "电话" },
  'contact.form.org': { en: "Organization", zh: "机构" },
  'contact.form.email': { en: "Email", zh: "邮箱" },
  'contact.form.message': { en: "Message", zh: "消息" },
  'contact.form.defaultMessage': { en: "I am interested in...", zh: "我对...感兴趣" },
  'contact.form.submit': { en: "Submit", zh: "提交" },

  // Guidelines Page
  'guides.title': { en: "Clinical Guidelines", zh: "临床指南" },
  'guides.subtitle': { en: "Expert Consensus & Standards", zh: "专家共识与标准" },
  'guides.comingSoon': { en: "Coming Soon", zh: "敬请期待" },


  // HomePage Products - Features & Details
  'home.products.ciscer.features.0': { en: "PAX1 / JAM3 Dual-Gene", zh: "PAX1 / JAM3 双基因" },
  'home.products.ciscer.features.1': { en: "High Specificity Triage", zh: "高特异度分流" },
  'home.products.ciscer.features.2': { en: "Reduces Colposcopy Referrals", zh: "减少阴道镜转诊" },
  'home.products.ciscer.detailedFeatures.0': { en: "Analyzes methylation levels of PAX1 and JAM3 genes to accurately identify high-grade lesions.", zh: "分析PAX1和JAM3基因的甲基化水平，准确识别高级别病变。" },
  'home.products.ciscer.detailedFeatures.1': { en: "Offers superior specificity compared to HPV testing, reducing unnecessary anxiety and overtreatment.", zh: "相比HPV检测提供更优的特异度，减少不必要的焦虑和过度治疗。" },
  'home.products.ciscer.detailedFeatures.2': { en: "Significantly decreases unnecessary colposcopy referrals by precisely distinguishing true risks.", zh: "通过精确区分真正风险，显著减少不必要的阴道镜转诊。" },
  'home.products.ciscer.targetAudience': { en: "Primary triage for HPV-positive women & ASC-US cytology results.", zh: "HPV阳性女性及ASC-US细胞学结果的一级分流。" },

  'home.products.cisendo.features.0': { en: "CDO1 / CELF4 Methylation", zh: "CDO1 / CELF4 甲基化" },
  'home.products.cisendo.features.1': { en: "Non-invasive Detection", zh: "无创检测" },
  'home.products.cisendo.features.2': { en: "Ideal for AUB Triage", zh: "AUB分流的理想选择" },
  'home.products.cisendo.detailedFeatures.0': { en: "Detects epigenetic changes in CDO1 and CELF4 genes, highly associated with endometrial cancer.", zh: "检测与子宫内膜癌高度相关的CDO1和CELF4基因表观遗传变化。" },
  'home.products.cisendo.detailedFeatures.1': { en: "Requires only non-invasive sampling methods, improving patient compliance and comfort.", zh: "仅需无创取样方法，提高患者依从性和舒适度。" },
  'home.products.cisendo.detailedFeatures.2': { en: "Perfectly suited for triaging women with Abnormal Uterine Bleeding (AUB) to rule out malignancy.", zh: "非常适合对异常子宫出血（AUB）女性进行分流以排除恶性肿瘤。" },
  'home.products.cisendo.targetAudience': { en: "Women with Abnormal Uterine Bleeding (AUB) or endometrial thickening.", zh: "异常子宫出血（AUB）或子宫内膜增厚的女性。" },

  'home.products.cisova.features.0': { en: "CDO1 / HOXA9 Markers", zh: "CDO1 / HOXA9 标志物" },
  'home.products.cisova.features.1': { en: "Liquid Biopsy Innovation", zh: "液体活检创新" },
  'home.products.cisova.features.2': { en: "Early Screening Solution", zh: "早期筛查解决方案" },
  'home.products.cisova.detailedFeatures.0': { en: "Targets specific methylation markers CDO1 and HOXA9 for early detection of ovarian cancer.", zh: "靶向特定的甲基化标志物CDO1和HOXA9进行卵巢癌早期检测。" },
  'home.products.cisova.detailedFeatures.1': { en: "Leverages cutting-edge liquid biopsy technology for detection from blood or cervical scrapings.", zh: "利用尖端液体活检技术，从血液或宫颈刮片中检测。" },
  'home.products.cisova.detailedFeatures.2': { en: "Provides a breakthrough solution for early-stage screening where traditional imaging often fails.", zh: "为传统影像学经常失效的早期筛查提供突破性解决方案。" },
  'home.products.cisova.targetAudience': { en: "Detection for pelvic masses, family history, or high-risk populations.", zh: "盆腔肿块、家族史或高危人群的检测。" },

  // HomePage UI Labels
  'home.ui.targetPopulation': { en: "Target Population", zh: "目标人群" },
  'home.ui.clinicalPathway': { en: "Clinical Pathway", zh: "临床路径" },
  'home.ui.clinicalPerformance': { en: "Clinical Performance", zh: "临床性能" },
  'home.ui.sensitivity': { en: "Sensitivity", zh: "灵敏度" },
  'home.ui.specificity': { en: "Specificity", zh: "特异度" },

  // CISOVA Specific UI
  'home.cisova.superiorAccuracy': { en: "Superior Accuracy", zh: "卓越准确性" },
  'home.cisova.method': { en: "Method", zh: "方法" },
  'home.cisova.ratio': { en: "Sen. / Spe.", zh: "灵敏. / 特." },
  'home.cisova.rescueRate': { en: "Rescue Rate", zh: "挽救率" },
  'home.cisova.rescueDesc': { en: "of missed cases detected", zh: "的漏诊病例被检出" },
  'home.cisova.cisova': { en: "CISOVA", zh: "CISOVA" },
  'home.cisova.ultrasound': { en: "Ultrasound", zh: "超声" },
  'home.cisova.ca125': { en: "CA125", zh: "CA125" },

  // MethylationProcessAnimation Labels
  'home.animation.tumorSite': { en: "Tumor Site", zh: "肿瘤部位" },
  'home.animation.sampleCollection': { en: "Sample Collection", zh: "样本采集" },
  'home.animation.pcrAnalysis': { en: "PCR Analysis", zh: "PCR分析" },
  'home.animation.epigeneticMarkers': { en: "Epigenetic Markers", zh: "表观遗传标志物" },

  // Clinical Pathway Diagram Labels
  'home.pathway.hpvcytology': { en: "HPV (+) / Cytology (ASC-US)", zh: "HPV (+) / 细胞学 (ASC-US)" },
  'home.pathway.methylation': { en: "PAX1/JAM3 Methylation", zh: "PAX1/JAM3 甲基化" },
  'home.pathway.positive': { en: "Positive (+)", zh: "阳性 (+)" },
  'home.pathway.referColpo': { en: "Refer to Colposcopy", zh: "转诊阴道镜" },
  'home.pathway.negative': { en: "Negative (-)", zh: "阴性 (-)" },
  'home.pathway.followup': { en: "Follow-up", zh: "随访" },

  // Blog Pages
  'blog.title': { en: "CISPOLY Blog", zh: "CISPOLY 博客" },
  'blog.subtitle': { en: "Latest updates, research findings, and insights into methylation-based cancer triage.", zh: "最新更新、研究发现和甲基化癌症分流的见解。" },
  'blog.noPosts': { en: "No posts found.", zh: "未找到文章。" },
  'blog.readMore': { en: "Read More", zh: "阅读更多" },
  'blog.seo.title': { en: "Blog - Insights & Updates", zh: "博客 - 见解与更新" },
  'blog.seo.description': { en: "Latest news, clinical research updates, and insights on methylation-based cancer triage from CISPOLY.", zh: "来自CISPOLY的最新资讯、临床研究更新和甲基化癌症分流见解。" },
  'blog.postNotFound': { en: "Post not found", zh: "文章未找到" },
  'blog.returnToBlog': { en: "Return to Blog", zh: "返回博客" },
  'blog.backToBlog': { en: "Back to Blog", zh: "返回博客" },
  'blog.publishedBy': { en: "Published by / Author", zh: "发布者 / 作者" },

  // Contact Page
  'contact.error.submitFailed': { en: "There was a problem submitting your form. Please try again.", zh: "提交表单时出现问题。请重试。" },
  'contact.error.connection': { en: "There was a problem submitting your form. Please check your connection.", zh: "提交表单时出现问题。请检查您的连接。" },
  'contact.form.thankYou': { en: "We will get back to you shortly.", zh: "我们会尽快回复您。" },
  'contact.form.sendAnother': { en: "Send another message", zh: "发送另一条消息" },
  'contact.validation.name': { en: "Please enter your name", zh: "请输入您的姓名" },
  'contact.validation.email': { en: "Please enter your email", zh: "请输入您的邮箱" },
  'contact.validation.message': { en: "Please enter your message", zh: "请输入您的消息" },

  // Navigation Mobile
  'nav.langSwitch.mobile': { en: "Switch to 中文", zh: "切换到 English" },

  // Guides Visual Components
  'guides.visual.appSpectrum': { en: "Clinical Application Spectrum", zh: "临床应用范围" },
  'guides.visual.standards': { en: "Standards", zh: "标准" },
  'guides.visual.qcProcess': { en: "QC & Process", zh: "质控与流程" },
  'guides.visual.triage': { en: "Triage", zh: "分流" },
  'guides.visual.reduceColpo': { en: "Reduce Colposcopy", zh: "减少阴道镜" },
  'guides.visual.diagnosis': { en: "Diagnosis", zh: "诊断" },
  'guides.visual.highAccuracy': { en: "High Accuracy", zh: "高准确性" },
  'guides.visual.reports': { en: "Reports", zh: "报告" },
  'guides.visual.standardized': { en: "Standardized", zh: "标准化" },

  'guides.visual.synergyTriage': { en: "Synergistic Triage", zh: "协同分流" },
  'guides.visual.synergyDesc': { en: "Methylation compensates for cytology's subjectivity, offering objective molecular precision.", zh: "甲基化弥补了细胞学的主观性，提供客观的分子精度。" },

  'guides.visual.precisionFiltering': { en: "Precision Filtering", zh: "精准过滤" },
  'guides.visual.12hrhpv': { en: "12 HR-HPV Positive", zh: "12种高危HPV阳性" },
  'guides.visual.methylationTest': { en: "Methylation Test", zh: "甲基化检测" },
  'guides.visual.negativeFollowup': { en: "Negative\n(Follow-up)", zh: "阴性\n(随访)" },
  'guides.visual.positiveColpo': { en: "Positive\n(Colposcopy)", zh: "阳性\n(阴道镜)" },

  'guides.visual.clinicalPathway': { en: "Clinical Pathway", zh: "临床路径" },
  'guides.visual.riskStrat': { en: "Risk Stratification", zh: "风险分层" },
  'guides.visual.manageHpv': { en: "Manage HPV+ / Cytology Abnormal", zh: "管理HPV+ / 细胞学异常" },
  'guides.visual.type3Tz': { en: "Type 3 TZ Assess", zh: "III型转化区评估" },
  'guides.visual.hiddenLesions': { en: "Identify hidden/glandular lesions", zh: "识别隐匿/腺体病变" },
  'guides.visual.postOp': { en: "Post-op Monitor", zh: "术后监测" },
  'guides.visual.detectRecurrence': { en: "Detect recurrence early", zh: "早期检测复发" },
  'guides.visual.exitScreening': { en: "Exit Screening", zh: "退出筛查" },
  'guides.visual.safeCriteria': { en: "Safe criteria to stop screening", zh: "安全停止筛查的标准" },

  'guides.visual.emergingTech': { en: "Emerging Technology", zh: "新兴技术" },
  'guides.visual.promising': { en: "Promising", zh: "有前景" },
  'guides.visual.futureStandard': { en: "Future Standard", zh: "未来标准" },
  'guides.visual.emergingDesc': { en: "Identified as a key method with significant application prospects requiring prospective data.", zh: "被确定为具有重大应用前景的关键方法，需要前瞻性数据支持。" },

  'guides.visual.coreFoundation': { en: "Core Foundation", zh: "核心基础" },
  'guides.visual.applications': { en: "Applications", zh: "应用" },
  'guides.visual.applicationsDesc': { en: "Triage • Fertility • Adeno", zh: "分流 • 生育力 • 腺癌" },
  'guides.visual.markers': { en: "Markers", zh: "标志物" },
  'guides.visual.markersDesc': { en: "PAX1 • JAM3 • ZNF582", zh: "PAX1 • JAM3 • ZNF582" },
  'guides.visual.mechanism': { en: "Mechanism", zh: "机制" },
  'guides.visual.mechanismDesc': { en: "Epigenetic Silencing", zh: "表观遗传沉默" },

};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language with priority:
  // 1. LocalStorage setting (user preference)
  // 2. Browser language setting (auto-detection)
  // 3. Default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('app_language');
      if (savedLanguage === 'en' || savedLanguage === 'zh') {
        return savedLanguage;
      }

      // Check browser language
      if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.toLowerCase();
        // Match any 'zh-*' (zh-CN, zh-TW, zh-HK) or just 'zh'
        if (browserLang.startsWith('zh')) {
          return 'zh';
        }
      }
    } catch (e) {
      console.warn('Failed to detect language preference:', e);
    }

    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app_language', lang);
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};