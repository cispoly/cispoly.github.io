
export interface Coordinate {
  name: string;
  value: [number, number];
}

export const INSTITUTION_COORDINATES: Record<string, [number, number]> = {
  // Beijing
  "Peking Union Medical College Hospital (Lead)": [116.417, 39.914],
  "Peking University People's Hospital": [116.363, 39.937],
  "Peking University International Hospital": [116.249, 40.103],
  "Beijing Tiantan Hospital": [116.401, 39.878],
  "Beijing Sixth Hospital": [116.418, 39.940],
  "Beijing Chuilyangliu Hospital": [116.467, 39.895],
  
  // Shandong
  "Qilu Hospital, Shandong University": [117.026, 36.657],
  "The Second Hospital of Shandong University": [117.054, 36.689],
  "The Affiliated Hospital of Qingdao University": [120.354, 36.069],
  
  // Zhejiang
  "Zhejiang Provincial People's Hospital": [120.159, 30.291],
  "The Second Affiliated Hospital of Zhejiang University School of Medicine": [120.179, 30.252],
  
  // Hubei
  "Tongji Hospital, Tongji Medical College, HUST": [114.265, 30.579],
  
  // Sichuan
  "West China Second University Hospital, Sichuan University": [104.067, 30.627],
  
  // Hunan
  "The Third Xiangya Hospital of Central South University": [112.937, 28.225],
  "The First Affiliated Hospital of Hunan University of Chinese Medicine": [112.986, 28.183],
  "Yueyang Central Hospital": [113.129, 29.375],
  
  // Jiangsu
  "Xuzhou Maternity and Child Health Hospital": [117.185, 34.263],
  "The Second Affiliated Hospital of Soochow University": [120.575, 31.305],
  "Nanjing Maternity and Child Health Care Hospital": [118.775, 32.040],
  "Jiangsu Cancer Hospital": [118.790, 32.073],
  "Jiangsu Provincial People's Hospital": [118.766, 32.048],
  
  // Qinghai
  "Qinghai Red Cross Hospital": [101.780, 36.621],
  
  // Jilin
  "The Second Hospital of Jilin University": [125.334, 43.864],
  
  // Hebei
  "Cangzhou Central Hospital": [116.864, 38.304],
  "The First Hospital of Hebei Medical University": [114.544, 38.043],
  
  // Shanghai
  "Obstetrics & Gynecology Hospital of Fudan University": [121.498, 31.213],
  "International Peace Maternity and Child Health Hospital": [121.438, 31.197],
  
  // Guangdong
  "Shenzhen Luohu People's Hospital": [114.123, 22.545],
  
  // Hainan
  "Hainan General Hospital": [110.298, 20.016],
  
  // Shaanxi
  "Shaanxi Provincial People's Hospital": [108.932, 34.249],
  
  // Gansu
  "Gansu Provincial Maternity and Child-care Hospital": [103.826, 36.059],
  
  // Inner Mongolia
  "Inner Mongolia Autonomous Region People's Hospital": [111.688, 40.817],
  "The Second Affiliated Hospital of Baotou Medical College": [109.840, 40.657],
  
  // Xinjiang
  "Cancer Hospital of Xinjiang Medical University": [87.618, 43.834],
  
  // International
  "IDIBELL (International)": [2.108, 41.352] // Barcelona (Approx) - won't show on China map, handled separately
};

export const getInstitutionCoordinates = (institutions: string[]) => {
  return institutions
    .map(name => {
      const coord = INSTITUTION_COORDINATES[name];
      return coord ? { name, value: [...coord, 1] } : null; // value: [long, lat, size]
    })
    .filter((item): item is { name: string; value: number[] } => item !== null);
};
