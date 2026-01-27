
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Global / App
  'app.logo.subtitle': { en: "Biotech", zh: "生物科技" },
  'nav.home': { en: "Home", zh: "首页" },
  'nav.products': { en: "Products", zh: "产品" },
  'nav.guides': { en: "Guides", zh: "指南" },
  'nav.guides.cervical': { en: "Cervical Cancer", zh: "宫颈癌" },
  'nav.guides.endo': { en: "Endometrial Cancer", zh: "子宫内膜癌" },
  'nav.guides.ovarian': { en: "Ovarian Cancer", zh: "卵巢癌" },
  'nav.about': { en: "About", zh: "关于我们" },
  'nav.contact': { en: "Contact", zh: "联系我们" },
  'nav.ciscer': { en: "CISCER (Cervical)", zh: "CISCER (宫颈癌)" },
  'nav.cisendo': { en: "CISENDO (Endometrial)", zh: "CISENDO (内膜癌)" },
  'nav.cisova': { en: "CISOVA (Ovarian)", zh: "CISOVA (卵巢癌)" },
  
  // Guides Page
  'guides.title': { en: "Clinical Guidelines & Consensus", zh: "临床指南与共识" },
  'guides.subtitle': { en: "Authoritative support for methylation technology", zh: "权威指南支持甲基化技术" },
  'guides.cervical.desc': { 
    en: "Explore the latest expert consensus and guidelines supporting the use of DNA methylation for cervical cancer screening and triage.",
    zh: "探索支持使用DNA甲基化进行宫颈癌筛查和分流的最新专家共识和指南。" 
  },
  'guides.endo.desc': { 
    en: "Latest expert consensus recognizing DNA methylation of endometrial exfoliated cells as a superior screening strategy for endometrial cancer prevention.",
    zh: "最新专家共识认可子宫内膜脱落细胞DNA甲基化检测作为优于传统的子宫内膜癌筛查策略。" 
  },
  'guides.ovarian.desc': { 
    en: "Clinical guidelines for ovarian cancer screening are evolving. Stay tuned for updates.",
    zh: "卵巢癌筛查的临床指南正在不断发展中。敬请关注更新。" 
  },
  'guides.comingSoon': { en: "Coming Soon", zh: "即将推出" },

  // Home Page
  'home.hero.title': { en: "Guardians of Women's Health", zh: "守护女性健康" },
  'home.hero.subtitle': { en: "Pioneering Early Gynecological Tumor Detection", zh: "妇科肿瘤早筛早诊的领跑者" },
  'home.hero.desc': { 
    en: "CISPOLY is dedicated to improving women's quality of life through precise, non-invasive molecular diagnostics.", 
    zh: "起源聚禾致力于通过精准、无创的分子诊断技术，提高女性的生存质量。" 
  },
  'home.hero.btn': { en: "Explore Our Solutions", zh: "探索我们的解决方案" },

  'home.mission.title': { en: "Our Mission", zh: "我们的使命" },
  'home.mission.desc': { 
    en: "We aim to transform the landscape of gynecological oncology from reactive treatment to proactive, early prevention.", 
    zh: "我们的目标是将妇科肿瘤的诊疗模式从被动治疗转变为主动、早期的预防与筛查。" 
  },

  'home.products.title': { en: "Comprehensive Protection", zh: "全方位防护体系" },
  'home.products.ciscer.desc': { en: "Precision Triage for Cervical Cancer Screening (PAX1/JAM3)", zh: "宫颈癌筛查的精准分流 (PAX1/JAM3)" },
  'home.products.cisendo.desc': { en: "Non-invasive Diagnosis for Endometrial Cancer (CDO1/CELF4)", zh: "子宫内膜癌无创辅助诊断 (CDO1/CELF4)" },
  'home.products.cisova.desc': { en: "Liquid Biopsy for Early Ovarian Cancer (CDO1/HOXA9)", zh: "卵巢癌早期液体活检 (CDO1/HOXA9)" },
  'home.products.learn': { en: "Learn More", zh: "了解更多" },

  'home.tech.title': { en: "Why DNA Methylation?", zh: "为什么选择 DNA 甲基化？" },
  'home.tech.subtitle': { en: "The Ideal Marker for Non-Invasive Early Screening", zh: "无创早筛早诊的理想标志物" },
  'home.tech.p1': { 
    en: "DNA methylation is an 'early warning system'. Aberrant methylation occurs at the very beginning of tumorigenesis, often years before structural changes visible to ultrasound or symptoms appear.", 
    zh: "DNA 甲基化是“早期预警系统”。异常甲基化发生在肿瘤发生的极早期，通常早于超声可见的结构改变或症状出现数年。" 
  },
  'home.tech.p2': { 
    en: "It allows for non-invasive detection. Methylated tumor DNA is released into body fluids (blood, cervical mucus), enabling accurate detection via simple swabs or blood draws without invasive surgery.", 
    zh: "它实现了无创检测。甲基化的肿瘤 DNA 会释放到体液（血液、宫颈黏液）中，无需侵入性手术，仅通过简单的拭子或抽血即可实现精准检测。" 
  },

  // Contact Page
  'contact.title': { en: "Get in Touch", zh: "联系我们" },
  'contact.subtitle': { en: "We'd love to hear from you. Here's how you can reach us.", zh: "我们期待您的来信。您可以通过以下方式联系我们。" },
  'contact.address.label': { en: "Address", zh: "地址" },
  'contact.address.value': { en: "4th floor, building 6, yard 50, Huatuo Road, Daxing District, Beijing, China", zh: "中国北京市大兴区华陀路50号院6号楼4层" },
  'contact.email.label': { en: "Email", zh: "邮箱" },
  'contact.tel.label': { en: "Tel", zh: "电话" },
  'contact.form.title': { en: "Send us a Message", zh: "给我们留言" },
  'contact.form.name': { en: "Name", zh: "姓名" },
  'contact.form.org': { en: "Organization / Company", zh: "组织 / 公司" },
  'contact.form.email': { en: "Email", zh: "邮箱" },
  'contact.form.phone': { en: "Phone", zh: "电话" },
  'contact.form.message': { en: "Message", zh: "留言" },
  'contact.form.defaultMessage': { en: "Welcome to contact us!", zh: "欢迎联系！" },
  'contact.form.submit': { en: "Send Message", zh: "发送消息" },
  'contact.form.success': { en: "Message sent successfully!", zh: "消息发送成功！" },
  'contact.map.title': { en: "Our Location", zh: "我们的位置" },

  // Hero - Ciscer
  'hero.tag.womensHealth': { en: "Women's Health", zh: "女性健康" },
  'hero.tag.molecularPrecision': { en: "Molecular Precision", zh: "分子精准" },
  'hero.title.prefix': { en: "Redefining Care with", zh: "以温柔的精准" },
  'hero.title.highlight': { en: "Gentle Precision", zh: "重新定义关怀" },
  'hero.description': { 
    en: "A narrative review of PAX1 and JAM3 methylation. Transforming cervical screening from anxiety-inducing uncertainty to accurate, data-driven reassurance.", 
    zh: "PAX1 和 JAM3 甲基化综述。将宫颈癌筛查从令人焦虑的不确定性转变为准确、数据驱动的安心。" 
  },
  'hero.btn.evidence': { en: "Explore the Evidence", zh: "探索证据" },
  'hero.btn.simulator': { en: "Clinical Simulator", zh: "临床模拟器" },
  
  // Hero - Cisendo
  'hero.cisendo.title.prefix': { en: "Endometrial Health", zh: "子宫内膜健康" },
  'hero.cisendo.title.highlight': { en: "Non-Invasive Clarity", zh: "无创的清晰" },
  'hero.cisendo.description': { 
    en: "A breakthrough in Endometrial Cancer detection. Using CDO1 and CELF4 methylation from a simple cervical swab to triage Abnormal Uterine Bleeding (AUB) with high accuracy.", 
    zh: "子宫内膜癌检测的突破。利用 CDO1 和 CELF4 甲基化，仅需宫颈拭子即可对异常子宫出血 (AUB) 进行高精度分流。" 
  },

  // Hero - Cisova
  'hero.cisova.title.prefix': { en: "Ovarian Health", zh: "卵巢健康" },
  'hero.cisova.title.highlight': { en: "Liquid Biopsy Breakthrough", zh: "液体活检突破" },
  'hero.cisova.description': { 
    en: "The first global non-invasive blood test for early Ovarian Cancer detection. Detecting CDO1 and HOXA9 methylation markers from just 5mL of peripheral blood.", 
    zh: "全球首个无创卵巢癌早期检测血液测试。仅需 5mL 外周血即可检测 CDO1 和 HOXA9 甲基化标志物。" 
  },
  
  // NMPA Certification
  'hero.nmpa.title': { en: "NMPA Approved", zh: "国家药监局批准" },
  'hero.nmpa.subtitle': { en: "Class III Medical Device", zh: "第三类医疗器械" },
  'hero.nmpa.no': { en: "Reg. No: 20233400253", zh: "注册证号：国械注准20233400253" },
  'hero.nmpa.cisendo.no': { en: "Reg. No: 20243402610", zh: "注册证号：国械注准20243402610" },
  'hero.nmpa.cisova.no': { en: "Reg. No: 20253402443", zh: "注册证号：国械注准20253402443" },

  // About Page
  'about.title': { en: "About CISPOLY", zh: "关于起源聚禾" },
  'about.intro.title': { en: "CISPOLY Biotech", zh: "CISPOLY 起源聚禾" },
  'about.intro.desc': { 
    en: "Since its establishment in 2020, Beijing Cispoly Biotech Co., Ltd. has been a technology enterprise driven by innovation and dedicated to health. As a pioneer in early screening and diagnosis of gynecological tumors, and a certified high-tech enterprise, we focus on R&D, production, and sales of early screening products and automated equipment. We emphasize evidence-based methylation applications, having conducted multiple prospective multi-center clinical trials. Cispoly fills the gap in clinical screening with innovative technology, especially in non-invasive endometrial cancer screening, aiming to benefit women in China and globally.",
    zh: "自2020年成立以来，北京起源聚禾生物科技有限公司是以创新科技为驱动、以关注健康为宗旨的科技企业。聚禾生物是妇科肿瘤早筛早诊领域的开拓者，作为国家级与中关村认证的高新技术企业，专注于妇女肿瘤和相关疾病的早筛早诊产品以及相关的自动化检测设备的研发、生产和销售。聚禾生物注重甲基化应用的循证依据与临床及学术研究，目前已开展多项前瞻性多中心临床试验，并取得丰富数据成果。聚禾生物以创新性的技术填补了妇科肿瘤筛查场景的不足，尤其是以无创技术对内膜癌筛查填补了该临床应用的空白。期许未来将有机会填补临床诊疗路径的不足，并能够造福于中国乃至全球的妇女。"
  },
  'about.tech.title': { en: "DNA Methylation Technology", zh: "DNA 甲基化技术" },
  'about.tech.subtitle': { en: "Leading the New Track of Gynecological Cancer Screening", zh: "依托DNA甲基化技术，领跑妇科癌症早筛早诊新赛道" },
  'about.tech.desc': {
    en: "As a core mechanism of epigenetic regulation, aberrant DNA methylation is an early molecular feature of gynecological cancers (cervical, ovarian, endometrial), appearing far earlier than genetic mutations or morphological changes. We focus on addressing the pain points of early screening, breaking through traditional bottlenecks to build a precise, non-invasive, and efficient screening system.",
    zh: "作为表观遗传调控的核心机制，DNA甲基化异常是妇科癌症（宫颈癌、卵巢癌、子宫内膜癌）发生发展的早期分子特征，其出现远早于基因突变、组织形态学病变及临床症状。我司深耕DNA甲基化技术研发与临床转化，聚焦妇科癌症早筛早诊痛点，突破传统筛查技术瓶颈，凭借该技术的独特优势，构建起精准、无创、高效的妇科癌症筛查体系，为临床提供从早期预警到精准诊断的全链条解决方案。"
  },
  'about.point1.title': { en: "1. Early Warning & Precision", zh: "一、早期预警精准前瞻" },
  'about.point1.desc': { 
    en: "DNA methylation abnormalities are precursor molecular events. We capture these signals in the precancerous stage, breaking the 'late diagnosis' limitation.", 
    zh: "肿瘤发生是癌前病变向浸润癌渐进发展的过程，而DNA甲基化异常是肿瘤发生的前驱分子事件，可在病变早期甚至癌前阶段精准捕获异常信号，打破传统技术“发现即中晚期”的局限。" 
  },
  'about.point1.detail': {
    en: "Cervical: PAX1/JAM3 detects risk after HPV integration but before cytology changes. Ovarian/Endometrial: CDO1/HOXA9/CELF4 capture signals from blood/swabs in Stage I.",
    zh: "宫颈癌：聚焦PAX1、JAM3，在细胞学异常前预警。卵巢癌/内膜癌：通过CDO1、HOXA9及CELF4，在癌前病变或I期捕获信号，将卵巢癌I期检出率提升至30%以上。"
  },
  'about.point2.title': { en: "2. Dual High Efficiency", zh: "二、双高效能突破瓶颈" },
  'about.point2.desc': { 
    en: "Our exclusive marker panels achieve high sensitivity and specificity, significantly reducing misdiagnosis and missed diagnosis.", 
    zh: "传统妇科癌症筛查常面临假阳性率高、漏诊风险大等问题，我司基于DNA甲基化技术的特异性分子特征，打造专属标志物检测面板，实现灵敏度与特异性双重提升。" 
  },
  'about.point2.detail': {
    en: "Cervical: Distinguishes high-risk HPV infections with >90% specificity. Ovarian/Endometrial: Distinguishes benign vs malignant with >85-90% sensitivity and specificity, outperforming CA125.",
    zh: "宫颈癌：特异性达90%以上，解决HPV假阳性问题。卵巢癌/内膜癌：灵敏度与特异性均突破90%，解决CA125假阳性高的问题。"
  },
  'about.point3.title': { en: "3. Non-Invasive & Convenient", zh: "三、无创微创适配广泛" },
  'about.point3.desc': { 
    en: "Compatible with cfDNA, cervical swabs, and lavage fluid. No need for surgery, solving compliance issues with invasive tests.", 
    zh: "我司依托DNA甲基化技术的样本适配优势，构建无创/微创筛查方案，解决传统侵入性检测（诊刮、活检等）导致的人群依从性低、难以大规模推广的痛点。" 
  },
  'about.point3.detail': {
    en: "Cervical: Same as HPV swab. Ovarian/Endometrial: 'One tube of blood' or swab for non-invasive screening.",
    zh: "宫颈癌：沿用HPV/TCT取样流程。卵巢癌/内膜癌：通过“一管血”或拭子实现无创筛查，降低患者顾虑。"
  },
  'about.point4.title': { en: "4. Superior Stability", zh: "四、标志物稳定性优异" },
  'about.point4.desc': { 
    en: "DNA methylation is more stable than RNA/Protein, withstanding transport and storage, ensuring reliable signals even in basic medical settings.", 
    zh: "DNA甲基化作为DNA共价修饰，相较于RNA、蛋白质等生物标志物，具有更强的稳定性与抗降解能力，可耐受常温保存与长途运输，即使在基层样本处理条件有限的场景下，仍能保持清晰的检测信号。" 
  },
  'about.point5.title': { en: "5. Multi-dimensional Value", zh: "五、多维延伸赋能临床" },
  'about.point5.desc': { 
    en: "Going beyond screening: Risk stratification, High-risk population monitoring (BRCA/Lynch), and Adjunct diagnosis for difficult pathological cases.", 
    zh: "我司依托DNA甲基化技术，不止于早期筛查，更实现临床价值的多维延伸：风险分层指导干预、高危人群精准防控、疑难病例辅助诊断。" 
  },
  'about.footer': { 
    en: "We focus on 'Early Warning, Dual Efficiency, Non-Invasive, and Stability' to empower gynecological cancer prevention and protect women's health.", 
    zh: "我司以DNA甲基化技术为核心，凭借“早期预警、双高效能、无创便捷、稳定可靠”的技术优势，赋能妇科癌症精准防控，守护女性健康。" 
  },

  // Clinical Challenge - Ciscer
  'challenge.title': { en: "The Clinical Challenge", zh: "临床挑战" },
  'challenge.desc': { 
    en: "Traditional screening faces a dual dilemma. While HPV testing is sensitive, it lacks specificity (leading to overtreatment). Conversely, Cytology (LBC) is subjective and can miss high-grade lesions.", 
    zh: "传统筛查面临双重困境。HPV 检测虽然敏感但缺乏特异性（导致过度治疗），而细胞学检查（LBC）具有主观性，容易漏诊高度病变。" 
  },
  'challenge.step1': { en: "1. Broad Screening", zh: "1. 广泛筛查" },
  'challenge.step1.desc': { en: "Mass screening identifies many HPV+ or ASC-US cases.", zh: "大规模筛查发现许多 HPV+ 或 ASC-US 病例。" },
  'challenge.step2a.title': { en: "Low Specificity", zh: "低特异性" },
  'challenge.step2a.desc': { en: "HPV testing generates many False Positives, causing anxiety & overtreatment.", zh: "HPV 检测产生许多假阳性，引起焦虑和过度治疗。" },
  'challenge.step2b.title': { en: "Missed Diagnosis", zh: "漏诊" },
  'challenge.step2b.desc': { en: "Cytology is subjective, leading to False Negatives (missed lesions).", zh: "细胞学具有主观性，导致假阴性（漏诊病变）。" },
  'challenge.step3': { en: "3. Methylation Triage", zh: "3. 甲基化分流" },
  'challenge.step3.desc': { en: "High Sensitivity & Specificity. Precise & Reliable", zh: "高敏感性与特异性。精准且可靠。" },

  // Clinical Challenge - Cisendo
  'challenge.cisendo.title': { en: "The AUB Dilemma", zh: "异常子宫出血的困境" },
  'challenge.cisendo.desc': { 
    en: "Abnormal Uterine Bleeding (AUB) is common, but identifying Endometrial Cancer is difficult. Ultrasound is often vague, leading to painful, invasive procedures for benign cases.", 
    zh: "异常子宫出血 (AUB) 很常见，但识别子宫内膜癌很困难。超声检查通常含糊不清，导致良性病例也需要接受痛苦的侵入性检查。" 
  },
  'challenge.cisendo.step1': { en: "1. Symptom: AUB", zh: "1. 症状：异常出血" },
  'challenge.cisendo.step1.desc': { en: "Patients present with irregular bleeding. Only ~10% have cancer.", zh: "患者出现不规则出血。只有约 10% 患有癌症。" },
  'challenge.cisendo.step2a.title': { en: "Ultrasound Limits", zh: "超声局限性" },
  'challenge.cisendo.step2a.desc': { en: "High false positives. Cannot reliably distinguish benign polyps from cancer.", zh: "假阳性率高。无法可靠区分良性息肉和癌症。" },
  'challenge.cisendo.step2b.title': { en: "Invasive Pain", zh: "侵入性痛苦" },
  'challenge.cisendo.step2b.desc': { en: "Hysteroscopy & D&C are invasive, painful, and often unnecessary.", zh: "宫腔镜和刮宫术具有侵入性、痛苦，且往往是不必要的。" },
  'challenge.cisendo.step3': { en: "3. The Solution", zh: "3. 解决方案" },
  'challenge.cisendo.step3.desc': { en: "CISENDO: Non-invasive cervical swab detecting endometrial markers.", zh: "CISENDO：检测内膜标志物的无创宫颈拭子。" },

  // Clinical Challenge - Cisova
  'challenge.cisova.title': { en: "The Silent Killer", zh: "沉默的杀手" },
  'challenge.cisova.desc': { 
    en: "Ovarian cancer has the highest mortality rate among gynecological cancers. 80% of patients are diagnosed at late stages, where the 5-year survival rate drops drastically (95% early vs <40% late).", 
    zh: "卵巢癌在妇科肿瘤中死亡率最高。80% 的患者在晚期确诊，五年生存率急剧下降（早期 95% vs 晚期 <40%）。" 
  },
  'challenge.cisova.step1': { en: "Hard to Detect", zh: "难以发现" },
  'challenge.cisova.step1.desc': { en: "Symptoms like bloating and pain are non-specific. 95% of patients lack specific warning signs.", zh: "腹胀、腹痛等症状缺乏特异性。95% 的患者没有明确的预警信号。" },
  'challenge.cisova.step2a.title': { en: "Imaging Limits", zh: "影像学局限" },
  'challenge.cisova.step2a.desc': { en: "Ultrasound depends heavily on operator experience and struggles to distinguish benign masses.", zh: "超声检查严重依赖操作者经验，且难以区分良性肿块。" },
  'challenge.cisova.step2b.title': { en: "Biomarker Limits", zh: "标志物局限" },
  'challenge.cisova.step2b.desc': { en: "CA125 has low sensitivity (~50%) for early-stage cancer and high false positives.", zh: "CA125 对早期癌症的敏感性低（约 50%），且假阳性率高。" },
  'challenge.cisova.step3': { en: "The Solution", zh: "解决方案" },
  'challenge.cisova.step3.desc': { en: "CISOVA: Blood-based liquid biopsy detecting tumor DNA methylation.", zh: "CISOVA：检测肿瘤 DNA 甲基化的血液液体活检。" },

  // Scenarios - General
  'scenarios.title': { en: "Clinical Application Scenarios", zh: "临床应用场景" },
  'scenarios.desc': { 
    en: "PAX1 and JAM3 methylation assays have demonstrated robust clinical utility across a diverse range of screening and diagnostic contexts.", 
    zh: "PAX1 和 JAM3 甲基化检测在多种筛查和诊断场景中展现了强大的临床实用性。" 
  },
  // Scenarios - Ciscer
  'scenarios.ascus.title': { en: "ASC-US Triage", zh: "ASC-US 分流" },
  'scenarios.ascus.desc': { en: "Distinguishing high-grade CIN from inflammation or minor changes in women with ASC-US cytology results.", zh: "在 ASC-US 细胞学结果的女性中，区分高度 CIN 与炎症或轻微病变。" },
  'scenarios.hrhpv.title': { en: "Non-16/18 hrHPV", zh: "非 16/18 型 hrHPV" },
  'scenarios.hrhpv.desc': { en: "Reducing unnecessary colposcopies in the large group of women infected with high-risk HPV types other than 16 or 18.", zh: "减少感染非 16/18 型高危 HPV 女性群体中不必要的阴道镜检查。" },
  'scenarios.postmeno.title': { en: "Postmenopausal", zh: "绝经后女性" },
  'scenarios.postmeno.desc': { en: "Providing superior specificity compared to cytology in older women where atrophy can lead to false positives.", zh: "在老年女性中提供优于细胞学的特异性，避免因萎缩导致的假阳性。" },
  'scenarios.postcon.title': { en: "Post-Conization", zh: "锥切术后" },
  'scenarios.postcon.desc': { en: "Predicting pathological upgrading and monitoring for residual or recurrent disease after surgical treatment.", zh: "预测病理升级，并监测手术治疗后的残留或复发疾病。" },
  'scenarios.self.title': { en: "Self-Sampling", zh: "自取样" },
  'scenarios.self.desc': { en: "Molecular triage of self-collected vaginal samples, offering a convenient alternative to clinician-collected smears.", zh: "自取样阴道样本的分子分流，为医生取样涂片提供了一种便捷的替代方案。" },
  // Scenarios - Cisendo
  'scenarios.aub.title': { en: "AUB Triage", zh: "异常出血分流" },
  'scenarios.aub.desc': { en: "Primary tool for women with Abnormal Uterine Bleeding to decide on invasive procedures.", zh: "作为异常子宫出血女性决定是否进行侵入性手术的首要工具。" },
  'scenarios.fertility.title': { en: "Fertility Sparing", zh: "生育力保护" },
  'scenarios.fertility.desc': { en: "Avoiding D&C induced endometrial damage in young women wishing to conceive.", zh: "避免因刮宫术导致的子宫内膜损伤，保护年轻女性的生育能力。" },
  'scenarios.highrisk.title': { en: "High Risk Monitoring", zh: "高危人群监测" },
  'scenarios.highrisk.desc': { en: "Regular non-invasive monitoring for Lynch Syndrome carriers or those with metabolic syndrome.", zh: "针对林奇综合征携带者或代谢综合征患者的定期无创监测。" },
  
  // Scenarios - Cisova
  'scenarios.cisova.description': {
    en: "The CDO1 and HOXA9 methylation test quantitatively detects gene methylation in plasma cfDNA. It serves as a vital auxiliary diagnostic tool for suspected ovarian cancer, particularly when ultrasound findings are atypical or inconclusive, offering a non-invasive alternative.",
    zh: "CDO1和HOXA9甲基化检测用于体外定性检测人血浆游离 DNA 中 CDO1 和 HOXA9 基因的甲基化水平。适用于临床上对疑似卵巢癌患者的辅助诊断，尤其是影像学超声检查不典型、无法判断良恶性的患者，使患者多了一种无创性卵巢癌辅助诊断方法的选择。"
  },
  'scenarios.cisova.adjunct.title': { en: "Adjunct to Imaging", zh: "影像学辅助诊断" },
  'scenarios.cisova.adjunct.desc': { en: "Resolves the dilemma of over-treatment vs. delayed diagnosis for indeterminate adnexal masses (cystic-solid, uneven echoes).", zh: "解决附件区囊实性包块或回声不均时，面临手术过度或观察延误的两难困境。" },
  'scenarios.cisova.indep.title': { en: "Independent Screening", zh: "独立筛查" },
  'scenarios.cisova.indep.desc': { en: "For health-conscious individuals or those with early symptoms. Overcomes limitations of imaging inconvenience and non-specific CA125 elevation.", zh: "针对健康关注人群或早期症状人群。克服影像学检查不便及 CA125 非特异性升高的局限。" },
  'scenarios.cisova.brca.title': { en: "Hereditary Risk (BRCA)", zh: "BRCA 突变/家族史" },
  'scenarios.cisova.brca.desc': { 
    en: "A crucial monitoring tool for high-risk populations, including carriers of BRCA1/2 mutations or those with a family history of ovarian cancer.", 
    zh: "针对 BRCA1/2 基因突变携带者或有卵巢癌家族史的高危人群，提供一种敏感的无创监测手段。" 
  },

  // Advantages - General
  'advantages.badge': { en: "Why It Matters", zh: "重要意义" },
  'advantages.title': { en: "The Methylation Advantage", zh: "甲基化优势" },
  'advantages.desc': { 
    en: "Methylation assays address the critical limitations of current screening methods through molecular innovation.", 
    zh: "甲基化检测通过分子创新解决了当前筛查方法的关键局限。" 
  },
  // Advantages - Ciscer
  'adv.specificity.title': { en: "Superior Specificity", zh: "卓越的特异性" },
  'adv.specificity.desc': { en: "Significantly reduces false positives compared to HPV testing, sparing women from unnecessary anxiety and invasive procedures.", zh: "与 HPV 检测相比显著减少假阳性，使女性免受不必要的焦虑和侵入性检查。" },
  'adv.objective.title': { en: "Objective & Automated", zh: "客观且自动化" },
  'adv.objective.desc': { en: "Eliminates the subjective variability of cytology (human error). Results are quantitative and reproducible.", zh: "消除了细胞学的主观变异性（人为误差）。结果定量且可重复。" },
  'adv.referrals.title': { en: "Reduced Referrals", zh: "减少转诊" },
  'adv.referrals.desc': { en: "Studies show a reduction in colposcopy referrals by ~60-70% in hrHPV+ women, optimizing healthcare resources.", zh: "研究表明，hrHPV+ 女性的阴道镜转诊减少了约 60-70%，优化了医疗资源。" },
  'adv.npv.title': { en: "High Negative Predictive Value", zh: "高阴性预测值" },
  'adv.npv.desc': { en: "A negative result provides strong reassurance (NPV > 99% for CIN3+), allowing for safe, extended follow-up intervals.", zh: "阴性结果提供了强有力的保证（CIN3+ 的 NPV > 99%），允许安全、延长的随访间隔。" },
  'adv.precision.title': { en: "Molecular Precision", zh: "分子精准" },
  'adv.precision.desc': { en: "Detects epigenetic changes that often precede morphological changes visible under a microscope.", zh: "检测通常先于显微镜下可见的形态学变化的表观遗传改变。" },
  'adv.pan.title': { en: "Pan-Genotype Utility", zh: "全基因型适用" },
  'adv.pan.desc': { en: "Effective triage regardless of HPV genotype (16/18 or non-16/18), simplifying clinical decision-making algorithms.", zh: "无论 HPV 基因型如何（16/18 或非 16/18）均能有效分流，简化了临床决策流程。" },
  
  // Advantages - Cisendo (Updated based on PDF)
  'adv.cisendo.coverage.title': { en: "Broad Population Coverage", zh: "产品预期用途覆盖人群广泛" },
  'adv.cisendo.coverage.desc': { en: "Designed to be used in combination with imaging, suitable for high-risk, increased-risk, and symptomatic populations.", zh: "与影像学联合使用，适用于高风险、风险增加及有症状人群。" },
  'adv.cisendo.convenience.title': { en: "Convenient Sampling", zh: "取样方便" },
  'adv.cisendo.convenience.desc': { en: "Uses the same non-invasive cervical swab as HPV/TCT. No need for invasive uterine cavity sampling.", zh: "与HPV、TCT采用同样的样本与无创取样方式，无需有/微创的宫腔取样进行甲基化检测。" },
  'adv.cisendo.market.title': { en: "Fills Clinical Gap", zh: "临床竞品空白" },
  'adv.cisendo.market.desc': { en: "One of the few non-invasive, high-accuracy methods available for early endometrial cancer diagnosis.", zh: "子宫内膜癌早诊流程无创且高准确率的方法学少。" },
  'adv.cisendo.data.title': { en: "Rigorous Clinical Data", zh: "临床数据严谨、优秀" },
  'adv.cisendo.data.desc': { en: "Multi-center trial with 4,818 cases. Sensitivity 94.51%, Specificity 94.16%.", zh: "临床试验4家权威单位共计入组4818例，灵敏度94.51%，特异性94.16%。" },
  'adv.cisendo.throughput.title': { en: "High Throughput", zh: "操作简单，通量大" },
  'adv.cisendo.throughput.desc': { en: "Single run tests 94 samples with same-day reporting.", zh: "一次上机检测94个样本，可当天出报告。" },

  // Advantages - Cisova
  'adv.cisova.blood.title': { en: "Convenient Sampling", zh: "取样方便" },
  'adv.cisova.blood.desc': { en: "Only requires 5mL of peripheral blood. Truly non-invasive compared to tissue biopsy.", zh: "仅需 5mL 外周血。与组织活检相比，真正的无创检测。" },
  'adv.cisova.gap.title': { en: "Fills Clinical Gap", zh: "填补临床空白" },
  'adv.cisova.gap.desc': { en: "Few non-invasive, high-accuracy methods exist for early ovarian cancer diagnosis.", zh: "卵巢癌早诊流程中缺乏无创且高准确率的方法学。" },
  'adv.cisova.data.title': { en: "Rigorous Clinical Data", zh: "临床数据严谨" },
  'adv.cisova.data.desc': { en: "Multi-center trial with 1421 cases. Sensitivity 93.19%, Specificity 92.78%.", zh: "临床试验4家权威单位共计入组1421例，灵敏度93.19%，特异性92.78%。" },

  // App Section - Ciscer
  'app.evidenceBased': { en: "Evidence Based", zh: "循证基础" },
  'app.dataDriven': { en: "Data-Driven Precision", zh: "数据驱动的精准" },
  'app.dataDesc': { 
    en: "Aggregated data from over 10,000 women across multiple multicenter studies reveals a consistent pattern: Methylation testing drastically reduces unnecessary referrals (green bars) compared to cytology, without sacrificing the ability to detect disease (sensitivity).", 
    zh: "来自多项多中心研究的超过 10,000 名女性的汇总数据显示了一个一致的模式：与细胞学相比，甲基化检测在不牺牲疾病检出能力（敏感性）的情况下，大幅减少了不必要的转诊（绿色柱状图）。" 
  },
  'app.point1': { en: "~70% reduction in colposcopy referrals for hrHPV+ women, significantly reducing patient anxiety.", zh: "hrHPV+ 女性的阴道镜转诊减少约 70%，显著降低患者焦虑。" },
  'app.point2': { en: "High specificity (~90-95%) in postmenopausal women, outperforming traditional cytology.", zh: "绝经后女性的特异性高（约 90-95%），优于传统细胞学。" },
  'app.point3': { en: "Excellent concordance with self-sampled specimens, enabling easier access to screening.", zh: "与自取样样本具有极好的一致性，使筛查更容易获得。" },

  // App Section - Cisendo (Evidence & Validation)
  'cisendo.evidence.title': { en: "Superior Clinical Performance", zh: "卓越的临床表现" },
  'cisendo.dataDesc': {
    en: "Prospective studies show that CISENDO outperforms traditional Ultrasound (TVS) and serum markers (CA125). While TVS is sensitive, it lacks specificity. CISENDO offers both, detecting over 90% of cancers with few false positives.",
    zh: "前瞻性研究表明，CISENDO 优于传统超声 (TVS) 和血清标志物 (CA125)。虽然 TVS 很敏感，但缺乏特异性。CISENDO 兼具两者，可检测出 90% 以上的癌症，且假阳性极少。"
  },
  'cisendo.point1': { en: "94.51% Sensitivity in clinical trials, comparable to invasive tissue sampling.", zh: "临床试验中灵敏度达 94.51%，可与侵入性组织取样相媲美。" },
  'cisendo.point2': { en: "Outperforms Ultrasound in specificity, reducing unnecessary hysteroscopies.", zh: "在特异性方面优于超声，减少了不必要的宫腔镜检查。" },
  'cisendo.point3': { en: "Works effectively for both pre-menopausal and post-menopausal women.", zh: "对绝经前和绝经后女性均有效。" },

  // App Section - Cisova (Evidence & Validation)
  'cisova.evidence.title': { en: "Superior Detection Performance", zh: "卓越的检测性能" },
  'cisova.dataDesc': {
    en: "CISOVA demonstrates significantly higher accuracy than standard markers like CA125 and Ultrasound, especially in early-stage detection. In a multi-center trial with 1421 patients, it achieved over 93% sensitivity.",
    zh: "CISOVA 显示出比 CA125 和超声等标准标志物更高的准确性，特别是在早期检测中。在包含 1421 名患者的多中心试验中，其灵敏度超过 93%。"
  },
  'cisova.point1': { en: "93.19% Sensitivity for Ovarian Cancer, far exceeding CA125 (69.9%).", zh: "卵巢癌灵敏度达 93.19%，远超 CA125 (69.9%)。" },
  'cisova.point2': { en: "Helps avoid 38% of missed diagnoses in cases where imaging is atypical.", zh: "帮助避免 38% 因影像学不典型而导致的漏诊。" },
  'cisova.point3': { en: "High detection rate (12/14) even in early Stage I-II cancers.", zh: "即使在早期的 I-II 期癌症中，检出率也高达 12/14。" },
  
  // Cisova Innovation (Added to correct missing keys)
  'inn.cisova.title': { en: "Scientific Basis: Liquid Biopsy", zh: "科学基础：液体活检" },
  'inn.cisova.desc': { en: "Detecting tumor DNA released into the bloodstream.", zh: "检测释放到血液中的肿瘤 DNA。" },
  'inn.cisova.ctdna': { en: "Circulating Tumor DNA", zh: "循环肿瘤 DNA (ctDNA)" },
  'inn.cisova.ctdna.desc': { en: "Tumor cells release DNA into the blood through apoptosis, necrosis, and active secretion.", zh: "肿瘤细胞通过凋亡、坏死和主动分泌将 DNA 释放到血液中。" },
  'inn.cisova.markers': { en: "CDO1 & HOXA9", zh: "CDO1 和 HOXA9" },
  'inn.cisova.markers.desc': { en: "Specific genes that become hypermethylated in ovarian cancer, detectable via qPCR.", zh: "在卵巢癌中发生高甲基化的特定基因，可通过 qPCR 检测。" },
  'inn.cisova.mechanism.desc': { en: "This strategy allows for screening, diagnosis, and prognosis estimation from a simple blood draw.", zh: "该策略允许通过简单的抽血进行筛查、诊断和预后评估。" },

  // Cisova Clinical Data (Added to correct missing keys)
  'data.cisova.title': { en: "Clinical Trial Results", zh: "临床试验结果" },
  'data.cisova.subtitle': { en: "Prospective Multi-center Study (N=1421)", zh: "前瞻性多中心研究 (N=1421)" },
  'data.cisova.superior': { en: "Superior Assessment Tool", zh: "更优的评估工具" },
  'data.cisova.superior.desc': { en: "CISOVA outperforms traditional methods in sensitivity for early ovarian cancer.", zh: "针对早期卵巢癌，禾薇益的灵敏度优于传统方法。" },
  'data.cisova.rescue.title': { en: "Rescuing Missed Diagnoses", zh: "避免漏诊" },
  'data.cisova.rescue.desc': { en: "CISOVA helps avoid 38% of missed diagnoses in atypical imaging results (n=144/157).", zh: "禾薇益帮助避免影像学结果中 38% 的卵巢癌漏诊率 (n=144/157)。" },
  'data.cisova.subgroups.title': { en: "Robust Performance Across All Groups", zh: "全亚组优异表现" },
  'data.cisova.subgroups.desc': {
    en: "High detection efficacy maintained across different pathological types, clinical stages (especially early stage), age groups, and menopausal statuses.",
    zh: "在不同病理类型、不同分期（尤其是早期）、不同年龄组、不同绝经状态及不同上皮癌类型中均保持较高的检测效能。"
  },

  // Clinical Data Section (New)
  'data.title': { en: "Evidence & Validation", zh: "证据与验证" },
  'data.subtitle': { en: "Addressing the limitations of current imaging standards.", zh: "解决当前影像学标准的局限性。" },
  'data.missed.title': { en: "Imaging Limitations", zh: "影像学局限" },
  'data.missed.desc': { en: "Imaging tools miss approx. 55% of Endometrial Cancer cases.", zh: "影像学作为评估工具：漏诊约 55% 内膜癌病例。" },
  'data.rescue.title': { en: "Rescue Rate", zh: "挽救率" },
  'data.rescue.desc': { en: "CISENDO helps avoid 50% of the missed diagnoses from imaging.", zh: "禾蔻安可帮助避免影像学检测结果中 50% 的内膜癌漏诊率。" },
  'data.followup.title': { en: "Long-term Follow-up", zh: "半年随访数据" },
  'data.followup.desc': { en: "In nearly 1000 patients followed for 6 months, 3 EC and 2 EIN cases were identified.", zh: "近千人半年随访发现3例内膜癌和2例EIN。" },

  // Innovation (Updated Science Basis)
  'inn.title': { en: "Scientific Basis: Cervical Shedding", zh: "科学基础：宫颈脱落细胞用于子宫内膜癌早诊" },
  'inn.desc': { en: "Convenient and sensitive detection mechanism.", zh: "便捷且灵敏的检测机制。" },
  'inn.cdo1': { en: "Shedding Dynamics", zh: "脱落动力学" },
  'inn.cdo1.desc': { en: "Endometrial cancer cells have weaker intercellular adhesion than normal cells, making them prone to shedding.", zh: "内膜癌细胞间的黏附力较正常细胞弱，常脱落累积在子宫颈管。" },
  'inn.celf4': { en: "Sample Feasibility", zh: "样本可行性" },
  'inn.celf4.desc': { en: "Cervical brush samples from endometrial cancer patients contain ~19% endometrial cells, primarily cancer cells.", zh: "内膜癌患者的宫颈刷取样本中有19%内膜细胞，主要为内膜癌细胞。" },
  'inn.mechanism': { en: "Why CDO1 & CELF4?", zh: "为什么选择 CDO1 和 CELF4？" },
  'inn.mechanism.desc': { 
    en: "PCR high sensitivity detects these markers in cervical swabs. CDO1 is a tumor suppressor often silenced by methylation. CELF4 methylation correlates with malignant transformation.", 
    zh: "PCR的高灵敏度可以满足脱落细胞样本类型的要求。CDO1/CELF4基因甲基化在子宫颈脱落细胞检测内膜癌具优异性。" 
  },

  // Smart Triage (Updated)
  'triage.title': { en: "Smart Screening and Triage", zh: "智能筛查与分流" },
  'triage.subtitle': { en: "Preventing unnecessary invasive procedures while ensuring no missed diagnoses.", zh: "既避免过度的非必要有创操作，也避免超声检查的漏诊。" },
  'triage.root': { en: "Secondary Prevention Screening", zh: "子宫内膜癌二级预防筛查" },
  'triage.highRisk': { en: "High Risk Group", zh: "高风险人群" },
  'triage.increasedRisk': { en: "Increased Risk Group", zh: "风险增加人群" },
  'triage.symptomatic': { en: "Symptomatic Group", zh: "有症状人群" },
  'triage.combined': { en: "Imaging + CISENDO Assessment", zh: "影像学联合禾蔻安评估" },
  'triage.imgAtypical': { en: "Imaging Atypical", zh: "影像学不典型" },
  'triage.imgTypical': { en: "Imaging Typical", zh: "影像学典型" },
  'triage.cisendoEval': { en: "CISENDO Assessment", zh: "禾蔻安评估" },
  'triage.lowRisk': { en: "Low Risk", zh: "低风险" },
  'triage.cisHigh': { en: "CISENDO High Risk", zh: "禾蔻安高风险" },
  'triage.cisLow': { en: "CISENDO Low Risk", zh: "禾蔻安低风险" },
  'triage.followup': { en: "Follow-up", zh: "随访" },
  'triage.referral': { en: "Referral", zh: "转诊" },
  'triage.outcome.biopsy': { en: "Hysteroscopy / Biopsy", zh: "宫腔镜 / 活检" },
  
  // New Definition
  'triage.def.title': { en: "Definition of Imaging Typical", zh: "影像学典型定义" },
  'triage.def.content': { 
    en: "(1) Diffuse or localized irregular moderate echoes in the uterine cavity, with a few hypoechoic space-occupying lesions and abundant blood flow signals detectable in the periphery and interior of the lesion and/or (2) Pelvic mass with ascites; signs of distant metastasis.", 
    zh: "(1)宫腔内弥漫性或局限性不规则的中等回声，少数可见低回声的占位病变且病灶周边及内部可检出较丰富的血流信号和/或 (2)盆腔见肿块并可见腹水;远处转移征象" 
  },

  // Simulator Interaction
  'sim.cisendo.step1': { en: "Select Patient Profile", zh: "选择患者类型" },
  'sim.cisendo.step1.btn1': { en: "High Risk (Lynch Syndrome, etc.)", zh: "高风险（林奇综合征等）" },
  'sim.cisendo.step1.btn2': { en: "Increased Risk (Metabolic Syndrome)", zh: "风险增加（代谢综合征）" },
  'sim.cisendo.step1.btn3': { en: "Symptomatic (AUB / Postmenopausal Bleeding)", zh: "有症状（AUB / 绝经后出血）" },
  'sim.cisendo.step2': { en: "Perform Assessment", zh: "进行评估" },
  'sim.cisendo.step2.desc': { en: "Combined Transvaginal Ultrasound (TVS) and CISENDO Methylation Test.", zh: "联合经阴道超声 (TVS) 和禾蔻安甲基化检测。" },
  'sim.cisendo.step3': { en: "Enter Assessment Results", zh: "输入评估结果" },
  'sim.cisendo.step3.typical': { en: "Imaging Typical (Thickened/Mass)", zh: "影像学典型（增厚/肿块）" },
  'sim.cisendo.step3.atypical_high': { en: "Imaging Atypical + CISENDO High Risk", zh: "影像学不典型 + 禾蔻安高风险" },
  'sim.cisendo.step3.atypical_low': { en: "Imaging Atypical + CISENDO Low Risk", zh: "影像学不典型 + 禾蔻安低风险" },
  'sim.cisendo.outcome.refer': { en: "Recommendation: Referral", zh: "建议：转诊" },
  'sim.cisendo.outcome.refer.desc': { en: "Proceed to Hysteroscopy/Biopsy for histological confirmation.", zh: "进行宫腔镜/活检以确认组织学诊断。" },
  'sim.cisendo.outcome.follow': { en: "Recommendation: Follow-up", zh: "建议：随访" },
  'sim.cisendo.outcome.follow.desc': { en: "Low risk of malignancy. Avoid unnecessary invasive procedures.", zh: "恶性肿瘤风险低。避免不必要的侵入性操作。" },

  // Charts
  'charts.title': { en: "Performance Comparison", zh: "性能对比" },
  'charts.subtitle': { en: "Comparing Sensitivity, Specificity, and Colposcopy Reduction", zh: "敏感性、特异性和阴道镜转诊减少率对比" },
  'charts.footer': { 
    en: "* Comparison illustrates that PAX1/JAM3 methylation maintains high sensitivity (detection of disease) while significantly improving specificity and reducing unnecessary colposcopies compared to standard Cytology and HPV Genotyping.", 
    zh: "* 对比显示，PAX1/JAM3 甲基化在保持高敏感性（疾病检出）的同时，显著提高了特异性并减少了不必要的阴道镜检查（相比传统细胞学和 HPV 分型）。" 
  },
  'charts.sensitivity': { en: "Sensitivity", zh: "敏感性" },
  'charts.specificity': { en: "Specificity", zh: "特异性" },
  'charts.reduction': { en: "Referral Reduction", zh: "转诊减少率" },
  'charts.lbc': { en: "Cytology (LBC)", zh: "细胞学 (LBC)" },
  'charts.hpv': { en: "HPV 16/18 Genotyping", zh: "HPV 16/18 分型" },
  'charts.meth': { en: "PAX1/JAM3 Methylation", zh: "PAX1/JAM3 甲基化" },

  // Simulator (Existing keys kept, just adding generic ones if needed)
  'sim.title': { en: "Clinical Triage Simulator", zh: "临床分流模拟器" },
  'sim.subtitle': { en: "Interactive Tool: Simulate patient management pathways.", zh: "交互式工具：模拟患者管理路径。" },
  'sim.toggleChart': { en: "Show/Hide Flowchart", zh: "显示/隐藏 流程图" },
  'sim.reset': { en: "Reset", zh: "重置" },
  'sim.chartTitle': { en: "PAX1/JAM3 Methylation Triage Workflow", zh: "PAX1/JAM3 甲基化分流流程" },
  'sim.step1': { en: "Step 1: Patient presents with...", zh: "第一步：患者表现为..." },
  'sim.btn.ascus': { en: "ASC-US Cytology", zh: "ASC-US 细胞学" },
  'sim.btn.ascus.desc': { en: "Atypical Squamous Cells of Undetermined Significance on Pap smear.", zh: "巴氏涂片意义未明的非典型鳞状细胞。" },
  'sim.btn.non1618': { en: "hrHPV Positive (Non-16/18)", zh: "hrHPV 阳性 (非 16/18)" },
  'sim.btn.non1618.desc': { en: "Positive for high-risk HPV types (e.g., 31, 33, 45, etc.), excluding 16/18.", zh: "高危 HPV 类型（如 31, 33, 45 等）阳性，排除 16/18。" },
  'sim.btn.1618': { en: "hrHPV Positive (16/18)", zh: "hrHPV 阳性 (16/18)" },
  'sim.btn.1618.desc': { en: "Positive for the highest risk genotypes 16 or 18. Typically immediate referral.", zh: "最高危基因型 16 或 18 阳性。通常立即转诊。" },
  'sim.step2': { en: "Step 2: Perform PAX1/JAM3 Methylation Test", zh: "第二步：进行 PAX1/JAM3 甲基化检测" },
  'sim.pos': { en: "Positive (+)", zh: "阳性 (+)" },
  'sim.pos.desc': { en: "Elevated methylation levels detected.", zh: "检测到甲基化水平升高。" },
  'sim.neg': { en: "Negative (-)", zh: "阴性 (-)" },
  'sim.neg.desc': { en: "Methylation levels below threshold.", zh: "甲基化水平低于阈值。" },
  'sim.rec.colpo': { en: "Recommendation: Colposcopy", zh: "建议：阴道镜检查" },
  'sim.rec.colpo.desc': { 
    en: "The positive predictive value in this group is high enough to warrant immediate investigation. Evidence suggests a significantly higher risk of underlying CIN2+ or CIN3+.", 
    zh: "该组的阳性预测值足以进行立即调查。证据表明潜在 CIN2+ 或 CIN3+ 的风险显著较高。" 
  },
  'sim.evidence': { en: "Supporting Evidence:", zh: "支持证据：" },
  'sim.rec.followup': { en: "Recommendation: Routine Follow-up", zh: "建议：常规随访" },
  'sim.rec.consider': { en: "Recommendation: Consider Follow-up", zh: "建议：考虑随访" },
  'sim.rec.neg.desc1': { 
    en: "Traditionally, HPV 16/18+ prompts immediate colposcopy. However, a negative methylation result indicates a significantly lower risk of current high-grade disease.", 
    zh: "传统上，HPV 16/18+ 提示立即阴道镜检查。然而，甲基化阴性结果表明当前患高度病变的风险显著较低。" 
  },
  'sim.rec.neg.desc2': { 
    en: "The risk of high-grade lesions is extremely low. You have likely avoided an unnecessary colposcopy.", 
    zh: "高度病变的风险极低。您可能避免了不必要的阴道镜检查。" 
  },
  'sim.pathway': { en: "Pathway:", zh: "路径：" },
  'sim.interact': { en: "Interact with the buttons above to begin simulation...", zh: "与上方按钮交互以开始模拟..." },

  // Institutions
  'inst.collab': { en: "Collaboration", zh: "合作机构" },
  'inst.title': { en: "Participating Institutions", zh: "参与机构" },
  'inst.desc': { en: "Leading medical centers contributing to the multi-center research.", zh: "参与多中心研究的领先医疗中心。" },

  // Library
  'lib.title': { en: "The Evidence Library", zh: "证据库" },
  'lib.desc': { en: "Explore the key studies defining this new standard.", zh: "探索定义这一新标准的关键研究。" },
  'lib.filter.All': { en: "All", zh: "全部" },
  'lib.filter.ASCUS': { en: "ASC-US Triage", zh: "ASC-US 分流" },
  'lib.filter.Non1618': { en: "Non-16/18 hrHPV", zh: "非 16/18 hrHPV" },
  'lib.filter.Postmen': { en: "Postmenopausal", zh: "绝经后" },
  'lib.filter.Self': { en: "Self-Sampling", zh: "自取样" },
  'lib.filter.Outcome': { en: "Clinical Outcomes", zh: "临床结果" },
  'lib.filter.Method': { en: "Methodology", zh: "方法学" },
  'lib.filter.AUB': { en: "AUB Triage", zh: "AUB 分流" },
  'lib.filter.Premen': { en: "Premenopausal AUB", zh: "绝经前 AUB" },
  'lib.filter.Diagnostic': { en: "Diagnostic Accuracy", zh: "诊断准确性" },
  'lib.card.sens': { en: "Sensitivity", zh: "敏感性" },
  'lib.card.spec': { en: "Specificity", zh: "特异性" },
  'lib.card.n': { en: "n", zh: "样本量" },

  // Footer
  'footer.disclaimer': { en: "This site is for educational purposes only and does not constitute medical advice.", zh: "本网站仅用于教育目的，不构成医疗建议。" }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
