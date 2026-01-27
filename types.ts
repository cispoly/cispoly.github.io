export enum StudyCategory {
  ASCUS_TRIAGE = 'ASC-US Triage',
  HR_HPV_NON16_18 = 'Non-16/18 hrHPV',
  POSTMENOPAUSAL = 'Postmenopausal / Older Women',
  SELF_SAMPLING = 'Self-Sampling',
  CLINICAL_OUTCOMES = 'Clinical Outcomes & Prediction',
  METHODOLOGY = 'Methodology Comparison'
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