
export enum StudyCategory {
  ASCUS_TRIAGE = 'ASC-US Triage',
  HR_HPV_NON16_18 = 'Non-16/18 hrHPV',
  POSTMENOPAUSAL = 'Postmenopausal / Older Women',
  SELF_SAMPLING = 'Self-Sampling',
  CLINICAL_OUTCOMES = 'Clinical Outcomes & Prediction',
  METHODOLOGY = 'Methodology Comparison',
  // New Categories for CISENDO
  AUB_TRIAGE = 'AUB Triage',
  PREMENOPAUSAL = 'Premenopausal AUB',
  DIAGNOSTIC_ACCURACY = 'Diagnostic Accuracy'
}

export interface StudyMetrics {
  sensitivity?: number | string;
  specificity?: number | string;
  colposcopyReduction?: number;
  auc?: number;
}

export interface Study {
  id: string;
  title: string;
  url: string; // Used for the main link
  doi?: string; // Display text for DOI
  institution: string; // Primary institution
  authors: string;
  journal: string;
  year: number;
  category: StudyCategory;
  summary: string;
  keyFinding: string;
  metrics: StudyMetrics;
  populationSize?: number;
}

export interface ChartDataPoint {
  name: string;
  Sensitivity: number;
  Specificity: number;
  ReferralReduction?: number;
}

export interface Guideline {
  id: string;
  title: string;
  title_zh: string;
  organization: string;
  organization_zh: string;
  journal: string;
  journal_zh: string;
  year: number;
  summary: string;
  summary_zh: string;
  keyQuote: string;
  keyQuote_zh: string;
  details: string[];
  details_zh: string[];
  visualType: 'consensus-pax1' | 'triage-flow' | 'blue-book' | 'gene-test' | 'marker-2024' | 'emerging-tech' | 'endo-consensus';
  url?: string;
  highlight?: boolean;
}
