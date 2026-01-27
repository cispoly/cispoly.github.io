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

  // Hero
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
  
  // NMPA Certification
  'hero.nmpa.title': { en: "NMPA Approved", zh: "国家药监局批准" },
  'hero.nmpa.subtitle': { en: "Class III Medical Device", zh: "第三类医疗器械" },
  'hero.nmpa.no': { en: "Reg. No: 20233400253", zh: "注册证号：国械注准20233400253" },

  // Clinical Challenge
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

  // Scenarios
  'scenarios.title': { en: "Clinical Application Scenarios", zh: "临床应用场景" },
  'scenarios.desc': { 
    en: "PAX1 and JAM3 methylation assays have demonstrated robust clinical utility across a diverse range of screening and diagnostic contexts.", 
    zh: "PAX1 和 JAM3 甲基化检测在多种筛查和诊断场景中展现了强大的临床实用性。" 
  },
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

  // Advantages
  'advantages.badge': { en: "Why It Matters", zh: "重要意义" },
  'advantages.title': { en: "The Methylation Advantage", zh: "甲基化优势" },
  'advantages.desc': { 
    en: "PAX1 and JAM3 methylation assays address the critical limitations of current screening methods through molecular innovation.", 
    zh: "PAX1 和 JAM3 甲基化检测通过分子创新解决了当前筛查方法的关键局限。" 
  },
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

  // App Section
  'app.evidenceBased': { en: "Evidence Based", zh: "循证基础" },
  'app.dataDriven': { en: "Data-Driven Precision", zh: "数据驱动的精准" },
  'app.dataDesc': { 
    en: "Aggregated data from over 10,000 women across multiple multicenter studies reveals a consistent pattern: Methylation testing drastically reduces unnecessary referrals (green bars) compared to cytology, without sacrificing the ability to detect disease (sensitivity).", 
    zh: "来自多项多中心研究的超过 10,000 名女性的汇总数据显示了一个一致的模式：与细胞学相比，甲基化检测在不牺牲疾病检出能力（敏感性）的情况下，大幅减少了不必要的转诊（绿色柱状图）。" 
  },
  'app.point1': { en: "~70% reduction in colposcopy referrals for hrHPV+ women, significantly reducing patient anxiety.", zh: "hrHPV+ 女性的阴道镜转诊减少约 70%，显著降低患者焦虑。" },
  'app.point2': { en: "High specificity (~90-95%) in postmenopausal women, outperforming traditional cytology.", zh: "绝经后女性的特异性高（约 90-95%），优于传统细胞学。" },
  'app.point3': { en: "Excellent concordance with self-sampled specimens, enabling easier access to screening.", zh: "与自取样样本具有极好的一致性，使筛查更容易获得。" },

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

  // Simulator
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