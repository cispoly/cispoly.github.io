# RESEARCH

# Open Access

# The performance of JAM3/PAX1 methylation in the diagnosis of high-grade squamous intraepithelial lesions for women with high-risk HPV infection

Dan Sun1,2†, Changfa Shu1†, Fei Zeng1 , Dabao Xu1* and Xingping Zhao1,3,4* 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/6831b26404aa54e7a10a64aedbb06bc007c0124bac12bf283831d097a1f85f52.jpg)


# Abstract

Objective To assess the clinical value of DNA methylation measurement in exfoliated cervical cells for distinguishing high-grade squamous intraepithelial lesions (HSIL) from other cervical abnormalities. 

Methods A total of 276 patients were enrolled, and general clinical information was collected. Exfoliated cervical cells were obtained to assess human papillomavirus (HPV) infection, conduct ThinPrep cytology tests (TCT), and measure methylation levels of JAM3 (△CtJ) and PAX1 (△CtP). Logistic regression was performed to identify factors signifcantly associated with HSIL diagnosis. A conditional inference tree model and the area under the curve (AUC) were employed to evaluate the efcacy of JAM3 and PAX1 methylation in detecting HSIL. 

Results Independent risk factors for HSIL diagnosis included △CtJ, △CtP, atypical squamous cells of undetermined signifcance (ASCUS), and HPV16 infection. The conditional inference tree indicated that $9 6 . 4 \%$ of patients were non-HSIL when $\Delta C \mathrm { t J } > 1 1 . 6 6 ,$ and $9 9 . 1 \%$ were non-HSIL when $\Delta C _ { Ḋ } \mathrm  t Ḍ Ḍ > 1 0 . 9 7 $ . The diagnostic performance of △CtJ/△CtP surpassed that of TCT/HPV alone. Among six methods, the combination of △CtP, TCT, and high-risk HPV (hr-HPV) testing achieved the highest sensitivity $( 9 1 . 2 \% )$ , positive predictive value $( 5 0 . 0 \% )$ , negative predictive value $( 9 8 . 6 \% )$ , and AUC (0.932). 

Conclusion In women with hr-HPV infection, DNA methylation analysis of cervical cytology outperformed traditional TCT or HPV testing. The combination of △CtP with TCT and HPV may ofer the most accurate screening approach for HSIL. 

Keywords High-grade squamous intraepithelial lesions, DNA methylation, JAM3, PAX1, Hr-HPV 

† Dan Sun and Changfa Shu contributed equally to this work. 

*Correspondence: 

Dabao Xu 

dabaoxu2022@163.com 

Xingping Zhao 

zhaoxingping8846@163.com 

1 Department of Gynecology, the Third Xiangya Hospital of Central South 

University, No.138 Tongzipo Road, Hunan 410013, China 

2 The First Afliated Hospital of Guangxi Medical University, 

Nanning 530021, China 

3 Jiangwan Research Institute, Central South University, Changsha 410013, 

China 

4 Postdoctoral Station of Clinical Medicine, the Third Xiangya Hospital 

of Central South University, Changsha 410013, China 

# Introduction

Cervical cancer is one of the most prevalent malignancies among women worldwide, particularly in developing countries [1]. Te rising mortality rates in developing areas such as Eastern Europe, Central Asia, and Africa are attributed to limited access to efective screening methods and low vaccination coverage [2,  3]. Early detection and intervention of cervical cancer, including screening for high-grade squamous intraepithelial lesions (HSIL), are crucial for reducing the incidence of invasive cervical cancer and improving the prognosis of patients [4]. However, efcient and efective screening methods remain lacking. 

Persistent infection with high-risk human papillomavirus (hr-HPV) is the primary cause of cervical intraepithelial neoplasia (CIN) and cervical cancer [5]. While hr-HPV resting is highly sensitive for cervical cancer screening, it sufers from poor specifcity [6, 7]. Te liquid-based Tinprep cytological test (TCT) is traditionally used in screening, but their relatively low sensitivity and subjectivity, particularly in detecting atypical squamous cells of undefned signifcance (ASCUS) [8, 9], limit their efectiveness for guiding clinical decisions. However, next-generation sequencing (NGS) has become an efective approach to assess HPV integration status, in which HPV E6/E7 oncogenes are inserted into the host genome. Many studies demonstrate that HPV integration might be a promising triage strategy for HPV-positive patients. Compared with cytology, HPV integration exhibits promising sensitivity and specifcity for the diagnosis of CIN grade 3 or more severe $\left( \mathrm { C I N } 3 + \right)$ [10, 11]. Although it could help avoid excessive use of invasive cervical biopsies, this NGS-based screening method is resourceintensive and expensive, limiting its application in lowresource area. 

Recent studies have noted that cervical cancer pathogenesis is strongly related to the role of epigenetic changes, particularly DNA methylation in cervical cancer development. DNA methylation is a common epigenetic modifcation and holds promise as a biomarker for cervical cancer diagnosis [12–14]. Detecting DNA methylation levels in key genes during early-stage cervical lesions could facilitate the early identifcation of high-grade lesions, enabling timely clinical intervention and potentially preventing invasive cervical cancer, such as ASCL1/ LHX8 methylation or WID-qCIN test [15–17]. Notably, the Junctional Adhesion Molecule 3 (JAM3) gene has been found to demonstrate higher specifcity and a superior positive predictive value in hr-HPV positive patients compared to cytology, suggesting that JAM3 methylation could serve as a distinguishing marker for such patients [18]. Furthermore, the methylation level of the Paired Box 1 (PAX1) gene has been shown to correlate with the 

increasing likelihood of cervical lesions and to outperform hr-HPV genotyping alone in diagnostic accuracy [19–22]. However, the ability of JAM3 or PAX1 methylation levels in the classifcation and diagnosis of HSIL remains unclear, particularly in combination of other routine tests including TCT and HPV tests. 

Hence, we aimed to evaluate the clinical value of JAM3 and PAX1 methylation levels in diagnosing HSIL, comparing their diagnostic accuracy with that of TCT and HPV testing. Most of all, we further developed a more predictive model using a tree-based machine learning method, the conditional tree model, which was chosen due to its direct decision rules for stratifcation. Its visual representation is directly interpretable, and it can be easily implemented in a clinical setting, particularly for recursive binary splitting [23]. 

# Materials and methods

# Patients

Tis study was conducted in accordance with the Declaration of Helsinki and approved by the ethics committee of the Tird Xiangya Hospital of Central South University (No. 23137). All participants provided written informed consent. During August–November 2022, 276 women diagnosed with reproductive tract hr-HPV infection at the Tird Xiangya Hospital of Central South University were enrolled in this study. A total of 242 patients were pathologically diagnosed with non-HSIL including chronic cervicitis, CIN1, and 34 patients were pathologically diagnosed with HSIL, including CIN2-3. 

Te subject inclusion criteria were as follows: (1) no vaginal medications within 3  months before sampling; (2) no sexual activity or other vaginal operations within 2 days before sampling; (3) no symptoms or signs of genital tract infection; (4) availability of sexual history; (5) signing the informed consent form. Te exclusion criteria were as follows: (1) having received physical therapy and surgery for cervical disease within 3  months; (2) serious heart, liver, kidney, blood system, and autoimmune diseases; (3) incomplete data; (4) multiple hr-HPV infections. 

# Clinical data collection

Te baseline data of patients were collected: (1) general information including age, height, weight, body mass index (BMI), menopause status; (2) TCT results, categorized into HSIL, low-grade squamous intraepithelial lesions (LSIL), ASCUS, and negative for intraepithelial lesion or malignancy (NILM); (3) HPV results, categorized into HPV16, HPV18, HPV52, HPV58, and other infections; (4) cervical transformation zone from colposcopy, categorized into type I, type II, or type III transformation area and postoperative cervix such as post-loop 

electrosurgical excision procedure (LEEP); (5) pathological results of cervical biopsy, categorized into high-grade lesions, low-grade lesions, and chronic cervicitis. Te data were carefully recorded and blindly reviewed by two research assistants. 

# DNA methylation detection

A special plastic brush was used to collect exfoliated cells from the surface of the cervix and from inside the cervical canal by rotating 5 times in a clockwise manner, and the sample was placed into a vial containing cell-fxative solution labeled with the detection barcode. Te samples were then stored at $- 2 0 ^ { \circ } \mathrm { C }$ away from light. DNA methylation detection was performed within 1 month after sampling. Te DNA methylation of samples was measured by a commercial DNA methylation detection kit (Beijing OriginPoly Bio Tec Co., Ltd.). First, a JH-DNA separation and purifcation kit (Spin Column) was used to extract DNA from exfoliated cervical cells, and DNA concentration and quality were determined. Subsequently, the DNA samples were treated with sulfte. Multiple realtime quantitative PCR technology (SLAN-96S Automatic Medical PCR Analysis System) was applied to detect the methylation status of the target PAX1 and JAM3 genes, while GAPDH was adopted as the internal reference gene. Te reaction conditions were as follows: predenaturation at $9 6 ~ ^ { \circ } \mathrm { C }$ for 10 min; 45 cycles of denaturation at $9 4 ~ ^ { \circ } \mathrm { C }$ for 15 s and annealing at $6 4 ~ ^ { \circ } \mathrm { C }$ for 5  s; extension; fuorescence acquisition at $6 0 ~ ^ { \circ } \mathrm { C }$ for $3 0 \ : s$ . Te instrument was cooled at $2 5 ~ ^ { \circ } \mathrm { C }$ for 1 min. After the reaction, the Ct values of JAM3 (△CtJ), PAX1 (△CtP), and internal reference gene $\triangle C \mathrm { t } = \mathrm { C t }$ detection gene—Ct internal reference gene) were calculated. 

# TCT

Te sampling method for TCT was identical to that used for DNA methylation detection. Samples were immediately rinsed in a cell preservation solution vial (Hologic, Inc., Massachusetts, United States) by pushing the collection brush into the vial 10 times, ensuring that the bristles were forced apart. Te exfoliated cells in the solution were processed onto glass slides using the TinPrep 2000 processor. Te slides were then fxed with $9 5 \%$ ethanol and stained. Cytopathologists examined the slides under a microscope, and diagnoses were made according to the revised 2014 cervical cytological grading system [24]. 

# HPV detection

HPV genotyping test was performed as previously described [25]. Briefy, cervical cells were collected by gently scraping the cervix with a brush, and DNA was extracted using the Magnetic Beads DNA Purifcation Kit (HybriBio Ltd., Chaozhou, China) according to the 

manufacturer’s instructions. HPV DNA was amplifed using PCR, and genotyping was conducted with the HPV GenoArray Test Kit (HybriBio Ltd., Chaozhou, China). Tis test detected 21 HPV types, including 14 high-risk types (16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, and 68), 5 low-risk types (6, 11, 42, 43, and 44), and 2 types of uncertain risk (53 and CP8304) [26]. 

# Colposcopy and biopsy

A colposcopy was performed when cervical cancer screening results indicated abnormal cellular changes or hr-HPV positivity. A speculum was inserted to hold apart the vaginal walls, allowing visualization of the cervix and vagina. A Leisegang 3ML colposcope (Leisegang, Berlin, Germany) was placed near the vaginal opening, and $5 \%$ acetic acid and Lugol’s iodine solutions were applied to detect lesions. Transformation zones were classifed as type I, II, or III, depending on visibility [27]. Patients with previous cervical resection surgery or LEEP procedures were considered postoperative. Cervical biopsies were taken from suspicious lesions, with tissue samples fxed in $1 0 \%$ formalin and submitted for histopathological examination. Diagnoses were made by two certifed pathologists through double-blind analysis using optical microscopy. Histopathological results followed WHO guidelines, with CIN1 classifed as low-grade lesions and CIN2-3 as high-grade lesions [28]. For this study, a binary classifcation of HSIL and non-HSIL was used, with low-grade lesions and chronic cervicitis grouped as non-HSIL for statistical analysis. 

# Statistical analysis

Te Shapiro‒Wilk test was used to assess the normality of each variable. Data with a normal distribution were expressed as means ± standard deviations, while nonnormally distributed data were presented as medians (P25, P75). Te independent two-sample t-test or Mann– Whitney U test was applied to analyze continuous variables, while the $\chi ^ { 2 }$ test or Fisher’s exact test was used for categorical variables. Univariate and multivariate logistic regression analyses were performed using SAS 9.4 (SAS Institute, Cary, NC, USA). Correlation analysis was conducted using the Pearson test for continuous variables and the Spearman test for categorical variables. A conditional inference tree was constructed using R version 4.1.3 (R Foundation for Statistical Computing, Vienna, Austria). Te area under the curve (AUC) was employed to evaluate the diagnostic performance of each index for high-grade cervical lesions. A $P$ -value of $< 0 . 0 5$ was considered statistically signifcant. 

# Results

# Clinical characteristics of patients

A total of 276 patients met the inclusion criteria and were analyzed. Based on cervical biopsy histopathology, patients were divided into two groups: non-HSIL $\scriptstyle ( n = 2 4 2 )$ and HSIL $\left( n = 3 4 \right)$ ). Table  1 summarized the comparison of clinical characteristics between these groups. No signifcant diferences were observed in age or BMI. However, the methylation levels of JAM3 and PAX1 were signifcantly lower in the non-HSIL group compared to the HSIL group, indicating distinct epigenetic profles between the groups and consistent with previous reports [29, 30]. 

# Univariate and multivariate logistic regression analysis of risk factors for HSIL

Univariate logistic regression analysis was performed to identify risk factors associated with HSIL. Te analysis revealed that △CtP, △CtJ, TCT_HSIL, TCT_ASCUS, HPV16 infection, HPV52 infection, and HPV58 infection were independent risk factors for HSIL (Table 2). 

Next, multivariate logistic regression analysis was conducted on variables with $\mathrm { P } < 0 . 0 5$ . Due to collinearity between $\triangle \mathrm { C t P }$ and $\triangle \mathrm { C t } ]$ , they were analyzed separately to avoid issues such as inaccurate coefcient estimates, 

difculty in model interpretation, and reduced predictive power. Te results showed that △CtP, △CtJ, ASCUS, and HPV16 infection were independent risk factors for HSIL $( P { < } 0 . 0 5 )$ . 

# Correlation analysis

Correlation analysis indicated a negative correlation between cervical pathology results and $\triangle \mathrm { C t P }$ $( r = - 0 . 4 4 7$ , $P { < } 0 . 0 0 1 { \mathrm { ~ , ~ } }$ ), △CtJ $( r = - 0 . 5 3 2$ , $P { < } 0 . 0 0 1 $ ), TCT $( r = - 0 . 1 7 9$ , $P { = } 0 . 0 0 3 )$ , and HPV $\stackrel { \prime } { r } = - 0 . 2 6 8$ , $P { < } 0 . 0 0 1$ ). Among these, △CtP and $\triangle \mathrm { C t } { }$ showed stronger correlation indices, suggesting a relatively stronger association. No signifcant correlations were found between cervical pathology results and age, BMI, menopausal status, or transformation zone type ( $\scriptstyle P < 0 . 0 5$ , Fig. 1). 

# Conditional inference tree model

To evaluate the predictive ability of JAM3 and PAX1 gene methylation levels for HSIL diagnosis, the variables $\triangle \mathrm { C t } { \mathrm { J } }$ , △CtP, $\Delta C \mathrm { t J + T C T + H P V , }$ , and $\Delta C \mathrm { t P + T C T + H P V }$ were included in the conditional inference tree model (Fig.  2), based on the univariate and multivariate logistic regression analyses. And the cutof value was determined by the Classifcation And Regression Tree (CART) algorithm. Due to the 


Table 1 Clinical characteristics of the study participants


<table><tr><td>Variables</td><td>Total (n = 276)</td><td>non-HSIL group (n = 242)</td><td>HSIL group (n = 34)</td></tr><tr><td>Age /y(range)</td><td>38.50(32.0, 50.0)</td><td>38.00(31.0, 50.0)</td><td>39.50(33.0, 50.0)</td></tr><tr><td>BMI /Kg/m2</td><td>21.50(19.6, 23.8)</td><td>21.50(19.6, 23.8)</td><td>21.50(19.9, 23.8)</td></tr><tr><td>ΔCtP</td><td>10.32(8.18,16.53)</td><td>10.83(8.85,16.88)</td><td>5.62(2.97,8.05)</td></tr><tr><td>ΔCtJ</td><td>14.69(12.32,15.91)</td><td>14.94(13.53,16.03)</td><td>9.59(6.60,11.66)</td></tr><tr><td>Menopause</td><td></td><td></td><td></td></tr><tr><td>No</td><td>207 (75.00)</td><td>180 (74.38)</td><td>27 (79.41)</td></tr><tr><td>Yes</td><td>69 (25.00)</td><td>62 (25.62)</td><td>7 (20.59)</td></tr><tr><td>TCT</td><td></td><td></td><td></td></tr><tr><td>HSILs</td><td>27 (9.78)</td><td>12 (4.96)</td><td>15 (44.12)</td></tr><tr><td>LSILs</td><td>62 (22.46)</td><td>57 (23.55)</td><td>5 (14.71)</td></tr><tr><td>ASCUS</td><td>146 (52.90)</td><td>140 (57.85)</td><td>6 (17.65)</td></tr><tr><td>NILM</td><td>41 (14.86)</td><td>33 (13.64)</td><td>8 (23.52)</td></tr><tr><td>HPV</td><td></td><td></td><td></td></tr><tr><td>16</td><td>61 (22.10)</td><td>42 (17.36)</td><td>19 (55.88)</td></tr><tr><td>18</td><td>20 (7.25)</td><td>20 (8.26)</td><td>0 (0)</td></tr><tr><td>52</td><td>67 (24.28)</td><td>60 (24.79)</td><td>7 (20.59)</td></tr><tr><td>58</td><td>45 (16.30)</td><td>38 (15.70)</td><td>7 (20.59)</td></tr><tr><td>Others</td><td>83 (30.07)</td><td>82 (33.89)</td><td>1 (2.94)</td></tr><tr><td>Colposcopy results</td><td></td><td></td><td></td></tr><tr><td>Type III</td><td>116 (42.03)</td><td>102 (42.15)</td><td>14 (37.84)</td></tr><tr><td>Type II</td><td>24 (8.70)</td><td>22 (9.09)</td><td>2 (5.88)</td></tr><tr><td>Type I</td><td>116 (42.03)</td><td>99 (40.91)</td><td>17 (50.00)</td></tr><tr><td>Postoperation</td><td>20 (7.25)</td><td>19 (7.85)</td><td>1 (6.28)</td></tr></table>


Table 2 Univariate and multivariate logistic regression analyses of the clinical indicators related to HSIL


<table><tr><td rowspan="2">Variables</td><td colspan="2">Univariate</td><td colspan="2">Multivariate (ΔCtP)</td><td colspan="2">Multivariate (ΔCtJ)</td></tr><tr><td>OR (95% CI)</td><td>P</td><td>OR (95% CI)</td><td>P</td><td>OR (95% CI)</td><td>P</td></tr><tr><td>Age (y)</td><td>1.01 (0.98–1.04)</td><td>0.651</td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>BMI (Kg/m2)</td><td>1.01 (0.94–1.08)</td><td>0.693</td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Menopause</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>No</td><td>1.33 (0.55–3.20)</td><td>0.527</td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Yes</td><td>-</td><td></td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>ΔCtP</td><td>0.63 (0.53–0.72)</td><td>&lt;0.001</td><td>0.68 (0.58–0.81)</td><td>&lt;0.001</td><td>-</td><td></td></tr><tr><td>ΔCtJ</td><td>0.62 (0.53–0.71)</td><td>&lt;0.001</td><td>-</td><td></td><td>0.7 (0.6–0.81)</td><td>&lt;0.001</td></tr><tr><td>TCT</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>HSILs</td><td>5.16 (1.75–15.23)</td><td>0.003</td><td>1.85 (0.37–9.11)</td><td>0.452</td><td>2.35 (0.51–10.82)</td><td>0.274</td></tr><tr><td>LSILs</td><td>0.36 (0.11–1.20)</td><td>0.096</td><td>0.25 (0.06–1.14)</td><td>0.073</td><td>0.36 (0.08–1.53)</td><td>0.165</td></tr><tr><td>ASCUS</td><td>0.18 (0.06–0.54)</td><td>0.003</td><td>0.16 (0.04–0.66)</td><td>0.012</td><td>0.17 (0.04–0.67)</td><td>0.012</td></tr><tr><td>NILM</td><td>-</td><td></td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>HPV</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td>37.10(4.80–286.71)</td><td>0.005</td><td>9.91 (1.12–87.36)</td><td>0.039</td><td>11.24 (1.3–96.94)</td><td>0.028</td></tr><tr><td>18</td><td>&lt;0.01 (&lt;0.01-&gt;999.99)</td><td>0.981</td><td>&lt;0.01 (&lt;0.01-&gt;999.99)</td><td>0.976</td><td>&lt;0.01 (&lt;0.01-&gt;999.99)</td><td>0.977</td></tr><tr><td>52</td><td>9.57 (1.15–79.82)</td><td>0.037</td><td>2.14 (0.21–21.79)</td><td>0.520</td><td>2.87 (0.29–28.54)</td><td>0.368</td></tr><tr><td>58</td><td>15.11(1.80–127.15)</td><td>0.013</td><td>4.99 (0.51–48.76)</td><td>0.167</td><td>7.02 (0.75–65.97)</td><td>0.088</td></tr><tr><td>Others</td><td>-</td><td></td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Colposcopy results</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Type III</td><td>-</td><td></td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Type II</td><td>0.66 (0.10–2.60)</td><td>0.603</td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Type I</td><td>1.25 (0.59–2.71)</td><td>0.563</td><td>-</td><td></td><td>-</td><td></td></tr><tr><td>Postoperation</td><td>0.38 (0.02–2.09)</td><td>0.368</td><td>-</td><td></td><td>-</td><td></td></tr></table>

![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/a853baef715a0e4fece376220137d706055e58ea10831ec50ecb33f0c165df8a.jpg)



Fig. 1 Heatmap depicting the correlation between diferent clinical variables. $^ { * } P < 0 . 0 5$


![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/db13dae31a6b4dbe7f0d912a2e08c4ad4b227f10fc83a3c746a3d229091a89eb.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/7d7cb763356e31136ee44c0c02ad007bd987de2dbf8733bc5e228b0a196dcde7.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/152a3562355c16c2d14c97d171bb04914ec6a8d74f1d3f658b6f85e383857277.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/7b5b91007382dc7094cf1828a8726a6a1db18f064a61f05a9f12f592b09f1883.jpg)



Fig. 2 Predictors for the hierarchical diagnosis of HSIL using conditional inference tree. A △CtJ: (1) $\leq 9 . 9 5$ , $2 6 . 9 \%$ of patients were non-HSIL; (2) > 9.95 and ≤ 11.66, $7 5 . 9 \%$ of patients were non-HSIL; $\left( 3 \right) > 1 1 . 6 6$ , $9 6 . 4 \%$ of patients were non-HSIL. B △CtP: (1) $\leq 6 . 2 3$ , $3 2 . 3 \%$ of patients were non-HSIL; $( 2 ) > 6 . 2 3$ and $\leq 1 0 . 9 7$ , $9 0 . 6 \%$ of patients were non-HSIL; $( 3 ) > 1 0 . 9 7 _ { \cdot }$ , $9 9 . 1 \%$ of patients were non-HSIL. C △CtJ +TCT + HPV: (1) △CtJ ≤ 9.95, $2 6 . 9 \%$ of patients were non-HSIL; (2) $\Delta \mathsf { C } \mathsf { U } > 9 . 9 5$ and a TCT result of HSIL: $6 6 . 7 \%$ of patients were non-HSIL; (3) △CtJ > 9.95 and a TCT result of LSILs/ ASCUS: $9 7 . 5 \%$ of patients were diagnosed with non-HSIL; (4) $\Delta \mathsf { C } \mathrm { t J } > 9 . 9 5$ , a TCT result of NILM, and an HPV strain of 18/52/others: all patients were non-HSIL; (5) $\Delta C _ { Ḋ } \mathrm  t J Ḍ Ḍ > 9 . 9 5 ,$ , a TCT result of NILM, and an HPV strain of 16/58: $7 0 . 6 \%$ of patients were non-HSIL. D △CtP +TCT + HPV: (1) $\Delta C _ { Ḋ } \mathrm { t } \mathsf { P } \le 6 . 2 3$ , $3 2 . 3 \%$ of patients were non-HSIL; (2) $\Delta C \mathrm { t } \mathsf { P } > 6 . 2 3$ and a TCT result of LSILs/ASCUS: $9 7 . 9 \%$ of patients were non-HSIL; (3) $\Delta C _ { Ḋ } \mathrm { t } \mathsf { P } > 6 . 2 3$ with a TCT result of HSILs/NILM and an hr-HPV infection of strains 18/52/others: $9 3 . 3 \%$ of patients were non-HSIL; (4) a TCT result of HSIL/NILM, HPV infection of strains 18/52/others and $\Delta C _ { Ḋ } \mathrm { t } \mathsf { P } > 6 . 2 3$ but $\leq 1 0 . 9 7 ; 4 1 . 7 \%$ of patients were non-HSIL; (5) $\Delta C _ { Ḋ } \mathrm { t } \mathsf { P } > 1 0 . 9 7 ,$ a TCT result of HSIL/NILM and hr-HPV infection of strains 18/52/others: all of patients were non-HSIL


collineaty between △CtP and △CtJ, it was inappropriate to construct a model that included both variables simultaneously. 

Figure  2A showed a tree divided into two layers, producing three classifcation rules based on $\triangle \mathrm { C t } { }$ levels: 1) $\triangle C { \sf t J } \le 9 . 9 5$ : Tis category included 26 patients, of whom 7 $( 2 6 . 9 \% )$ were classifed as non-HSIL, while 19 $( 7 3 . 1 \% )$ were diagnosed with HSIL. 2) $\triangle { \mathrm { C t J } } { > } 9 . 9 5$ and $\leq 1 1 . 6 6$ : Tis category contained 29 people, with 22 $( 7 5 . 9 \% )$ classifed as non-HSIL, indicating an increase in the proportion of non-HSIL cases compared to the frst category. 3) $\Delta C \mathrm { t J } > 1 1 . 6 6$ : Tis group contained 221 patients, of whom $9 6 . 4 \%$ were patients with non-HSIL, while only $3 . 6 \%$ were patients with HISL. Tis model demonstrated that as $\triangle \mathrm { C t } { }$ increased, the likelihood of HSIL decreased. When △CtJ exceeded 11.66, the probability of HSIL was very low, indicating that this value may serve as an efective cutof for distinguishing HISL from non-HSIL based on JAX3 methylation levels. 

Figure  2B presented a similar tree model based on △CtJ, also divided into two layers with three classifcation rules: 1) $\mathrm { C t P } \leq 6 . 2 3$ : Tis category included 31 patients, with 10 $( 3 2 . 3 \% )$ classifed as non-HSIL and 21 $( 6 7 . 7 \% )$ diagnosed with HSIL. 2) $\triangle C _ { } \mathrm { t P } { > } 6 . 2 3$ and $\leq 1 0 . 9 7$ : Tis second category consisted of 128 patients, with 116 $( 9 0 . 6 \% )$ classifed as non-HSIL, representing a signifcant increase in non-HSIL cases compared to the frst category. 3) $\triangle C \mathrm { t P } > 1 0 . 9 7 $ : Tis group comprised 117 patients, with almost all classifed as non-HSIL, and only $0 . 9 \%$ diagnosed with HSIL. Similar to the model in Fig.  2A, this tree indicated that as $\triangle \mathrm { C t P }$ increased, the probability of HSIL decreased. When △CtP exceeded 10.97, non-HSIL could be distinguished easily, with a very low likelihood of HSIL. 

We further evaluated the ability of DNA methylation levels, combined with traditional TCT/HPV screening methods, to distinguish patients with HSIL. Te conditional inference tree in Fig. 2C included △CtJ, TCT, and 


Table 3 Accuracy of relevant indicators for screening HSIL


<table><tr><td>Indicators</td><td>Sensitivity</td><td>Specificity</td><td>PPV</td><td>NPV</td><td>AUC (95% CI)</td></tr><tr><td>TCT</td><td>0.676</td><td>0.814</td><td>0.338</td><td>0.947</td><td>0.791 (0.703,0.880)</td></tr><tr><td>HPV</td><td>0.765</td><td>0.669</td><td>0.245</td><td>0.953</td><td>0.784 (0.717,0.851)</td></tr><tr><td>ΔCtP</td><td>0.765</td><td>0.831</td><td>0.388</td><td>0.962</td><td>0.867 (0.804,0.931)</td></tr><tr><td>ΔCtJ</td><td>0.765</td><td>0.880</td><td>0.473</td><td>0.964</td><td>0.841 (0.750,0.932)</td></tr><tr><td>ΔCtP+TCT+HPV</td><td>0.912</td><td>0.872</td><td>0.500</td><td>0.986</td><td>0.932 (0.881,0.983)</td></tr><tr><td>ΔCtJ+TCT+HPV</td><td>0.882</td><td>0.847</td><td>0.448</td><td>0.981</td><td>0.926 (0.876,0.975)</td></tr></table>

HPV: 1) $\triangle C { \sf t J } { \leq } 9 . 9 5 $ : Tis category included 26 patients, with results identical to those described in Fig.  2A. 2) $\triangle { \mathrm { C t J } } { > } 9 . 9 5 $ and a TCT result of HSIL: Tis second category included 15 patients. Te proportion of non-HSIL increased from $2 6 . 9 \%$ to $6 6 . 7 \%$ , while HSIL accounted for $3 3 . 3 \%$ . 3) $\triangle { \mathrm { C t J } } { > } 9 . 9 5$ and a TCT result of LSILs or ASCUS: Tis category consisted of 198 patients, of whom $9 7 . 5 \%$ were diagnosed with non-HSIL. 4) $\triangle { \mathrm { C t J } } { > } 9 . 9 5 $ , a TCT result of NILM, and an HPV strain of 18, 52, or others: Tis category comprised 20 patients, all of whom were diagnosed with non-HSIL. 5) $\triangle { \mathrm { C t J } } { > } 9 . 9 5 $ , a TCT result of NILM, and an HPV strain of 16 or 58: Tis group included 17 patients, 12 $( 7 0 . 6 \% )$ of whom had non-HSIL, while 5 $( 2 9 . 4 \% )$ were diagnosed with HSIL, demonstrating a lower predictive performance than the fourth category. Tese fndings indicated that the combination of △CtJ with TCT and HPV did not signifcantly enhance the predictive ability for HSIL compared to △CtJ or △CtP alone (Fig. 2A, B). In other words, combining △CtJ with TCT and HPV was not superior to using △CtJ or △CtP independently. 

Te conditional inference tree in Fig. 2D incorporated △CtP, TCT, and HPV: 1) $\Delta \mathrm { C t P } \le 6 . 2 3$ : Te results in this category mirrored those in Fig.  2B. 2) $\triangle C _ { } \mathrm { t P } { > } 6 . 2 3$ and a TCT result of LSILs/ASCUS: Tis category included 194 patients, with $9 7 . 9 \%$ diagnosed as non-HSIL. 3) $\triangle \mathrm { C t P } { > } 6 . 2 3$ with a TCT result of HSILs/NILM and an hr-HPV infection of strains 18/52/others: Tis category consisted of 30 patients, $9 3 . 3 \%$ of whom were diagnosed with non-HSIL. 4) a TCT result of HSIL/NILM, HPV infection of strains 18/52/others and $\triangle \mathrm { C t P } { > } 6 . 2 3$ but $\leq 1 0 . 9 7$ : In this category of 12 patients, $4 1 . 7 \%$ were diagnosed as non-HSIL, and the diferentiation between HSIL and non-HSIL was not optimal. 5) $\triangle C \mathrm { t P } > 1 0 . 9 7 $ , a TCT result of HSIL/NILM and hr-HPV infection of strains 18/52/others: Tis group included 9 patients, all 

of whom were diagnosed with non-HSIL. Tis model demonstrated that △CtP combined with TCT and HPV provided good predictive ability for HSIL and efectively distinguished between the two patient groups. 

# Clinical efcacy of single and combined parameters in the diagnosis of high-grade cervical lesions

Based on the results of the conditional inference tree, cutof values of 9.95 and 6.23 were selected as optimal for diagnosing HSIL using $\Delta C ^ { \mathrm { t J } }$ and $\Delta { \mathrm { C t P } } ,$ respectively. To further evaluate the predictive value of diferent models for HSIL diagnosis, we compared the clinical efcacy and AUC values of six models (Table 3). We found that: (1) the combination of △CtP with $\mathrm { T C T + H P V }$ demonstrated the highest clinical efcacy, with a sensitivity of $9 1 . 2 \%$ , specifcity of $8 7 . 2 \%$ , a positive predictive value (PPV) of $5 0 . 0 \%$ , and a negative predictive value (NPV) of $9 8 . 6 \%$ ; (2) the second-best model was △CtJ combined with $\mathrm { T C T + H P V }$ ; (3) the clinical efcacy of $\triangle \mathrm { C t P }$ and $\triangle \mathrm { C t } ]$ alone was comparable, ranking just below their combination with TCT and HPV; (4) the efcacy of TCT or HPV alone was the lowest; (5) the combination of $\Delta C \mathrm { t J + T C T + H P V }$ showed no signifcant advantage over the single application of △CtJ. While it improved sensitivity $8 8 . 2 \%$ vs. $7 6 . 5 \%$ ) and NPV $9 8 . 1 \%$ vs. $9 6 . 4 \%$ ), it slightly reduced specifcity $( 8 4 . 7 \%$ vs. $8 8 . 0 \%$ ) and PPV $( 4 4 . 8 \%$ vs. $4 7 . 3 \%$ ). 

Te ROC curve for each clinical index in diagnosing HSIL was shown in Fig. 3. Te AUC value for △CtP combined with $\mathrm { T C T + H P V }$ was the highest at 0.932. Te model incorporating $\triangle \mathrm { C t } ]$ combined with $\mathrm { T C T + H P V }$ ranked second, with an AUC value of 0.926. Te AUC values for $\triangle \mathrm { C t P }$ and △CtJ alone were 0.867 and 0.841, respectively, both lower than those of the combined models. Te AUC values for TCT and HPV alone were the lowest, at 0.791 and 0.784, respectively. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-02-10/c1030034-6b22-43cc-b563-35d306fc28cd/6ee653360fc801bdc86c5e4c7645156ed30d0880f92978d6509022858d7dbe9e.jpg)



Fig. 3 ROC curve of each clinical index for HSIL diagnosis


# Discussion

Hypermethylation of tumor cell-specifc gene promoters is recognized as an epigenetic mechanism that facilitates tumor occurrence [31]. Hypermethylation of the gene promoter primarily occurs within the CpG islands of promoter regions and their adjacent areas, leading to reduced gene expression without altering the protein-coding sequence. As a result, gene silencing and dysregulation of signal transduction pathways occur, contributing to abnormal gene expression [31,  32]. In terms of epigenetic modifcation of cervical cancer, studies reported specifc DNA methylation profles in tumor suppressor genes, highlighting the potential utility of gene hypermethylation as a biomarker for early diagnosis of precancerous cervical lesions and cervical cancer [33]. 

JAM3 is a transmembrane protein that belongs to the immunoglobulin superfamily. Boers et  al. evaluated the clinical utility of JAM3 gene methylation in diagnosing CIN2 or worse in women with hr-HPV infection using quantitative methods. Tey found that JAM3 methylation had a sensitivity of $6 8 \%$ and specifcity of $9 4 \%$ in all patients, while the sensitivity and specifcity for diagnosing CIN3 or worse were $8 0 \%$ and $7 6 \%$ , respectively [34]. In another study by the same group, JAM3 exhibited high sensitivity and specifcity $8 2 \%$ and $8 8 \%$ , respectively) in diagnosing $\mathrm { C I N } 3 +$ lesions from hr-HPV positive samples collected by physicians. By comparison, cytology showed a sensitivity of $9 1 \%$ but a lower specifcity of $4 8 \%$ [35]. In our study, we found that the efcacy of HSIL using △CtJ alone diminished as the cutof value increased. When 

△CtJ exceeded 11.66, $9 6 . 4 \%$ of patients were diagnosed as non-HSIL, with only $3 . 6 \%$ confrmed as HSIL, demonstrating a strong ability to diferentiate between HSIL and non-HSIL. However, the sensitivity of the conditional inference tree model for diagnosing HSIL was $7 6 . 5 \%$ , lower than previous reports. Tis discrepancy may be due to the inclusion of both hr-HPV and non-hr-HPVinfected individuals in our study, which better refects real-world clinical application. 

PAX1 encodes a conserved region related to transcription factors and plays a critical role in embryonic development [36]. Liu et  al. [37] found that PAX1 gene methylation is prevalent in exfoliated cervical cells from patients with grade III cervical intraepithelial lesions and invasive cervical cancer. Xu et al. [38] reported that while the gene was not methylated in normal cervical cells, methylation occurred in $9 \%$ of CIN1 cases, $4 4 \%$ in CIN2/3, and $1 0 0 \%$ in invasive cervical cancer cases. Our fndings showed that the cutof for △CtP was 6.23, closely aligning with the 6.6 value used in the cervical cancer DNA methylation detection kit (Beijing Origin-Poly Bio Tec Co., Ltd.). When △CtP alone was used with a cutof of 10.97, $9 9 . 3 \%$ of patients were non-HSIL, and only $0 . 9 \%$ were diagnosed with HSIL. Te diagnostic accuracy of △CtP in distinguishing HSIL from non-HSIL was comparable to manual TCT and consistent with previous studies [39]. 

Te sensitivity and specifcity of TCT vary signifcantly depending on the medical expertise in diferent 

regions [40]. A notable proportion of HSIL is missed when patients are diagnosed with ASCUS [41,  42]. Numerous studies suggest that DNA methylation testing exhibits higher specifcity than cytology and greater sensitivity than HPV16/18 genotyping in patients with ASCUS, making it a promising approach for cervical cancer screening [43]. Additionally, several studies [44–46] have shown that methylation markers are more sensitive than protein markers, as methylation changes often occur in the early stages of cancer. Our study demonstrated that △CtP with TCT and HPV provided the optimal model for diagnosing HSIL, achieving a better sensitivity of $9 1 . 2 \%$ , a PPV of $5 0 . 0 \%$ , an NPV of $9 8 . 6 \%$ , an AUC of 0.932 and a compatible specifcity of $8 7 . 2 \%$ , indicating that incorporating △CtP detection improves the accuracy of HPV and TCT in predicting high-grade lesions. 

In addition to sensitivity and specifcity, traditional cytology tests and hr-HPV screening presented several limitations, particularly for large-scale cervical cancer screening worldwide. Conventional cytology tests, such as TCT, require highly skilled cytopathologists, making the process labor-intensive and subjective [47]. In lowincome countries, hr-HPV genotyping is constrained by limited resources, including a shortage of trained personnel and advanced equipment. Furthermore, using hr-HPV testing alone for cervical cancer screening is challenging because only a small percentage of HPV-infected individuals, even those with hr-HPV, will develop cancer [48]. HPV integration test could help to dinstinguish these high- risk patients but requires intensive resources. In contrast, DNA methylation testing ofers more objective and efcient results, as it is quantitative and relative cheap. Additionally, DNA methylation samples can be self-collected at home, with accuracy comparable to those collected by specialized gynecologists [35]. 

However, this study had several limitations. First, the sample size was small, leading to biased or misleading outcomes and necessitating larger-scale prospective studies to validate the fndings. And due to the small size of patients, we were unable to do an external validation, which would help to convince readers or researchers that JAM3/PAX1 methylation test could be a promising triage marker for cervical cancer screening. Second, while the conditional inference tree showed strong predictive ability, it could not quantify the risk associated with each variable. Additionally, the methylation levels of JAM3 and PAX1 could not be combined into a single model due to its collinearity, leaving the combined efcacy of multiple gene methylation levels unclear. Although some statistical approaches, such as principal component analysis and stepwise approaches, could fx the collinearity and 

develop more comprehensive predictive models, we are perusing genes whose methylation level could link to HSIL diagnosis in future to establish a much more accurate model. 

# Conclusion

Tis study highlighted that the methylation levels of specifc genes, such as JAM3 and PAX1, were promising biomarkers for distinguishing HSIL from non-HSIL. When combined with TCT and HPV testing, these markers improved screening accuracy with better sensitivity and specifcity. Mostly, it could prevent unnecessary referrals for colposcopy in population-based screening programs particular in resource-limited areas for women with high-risk HPV infection. Terefore, △CtJ and △CtP were valuable auxiliary diagnostic tools for cervical cancer screening, aiding in the early detection of HSIL and potentially reducing the incidence of invasive cervical cancer. 

# Abbreviations

ASCUS Atypical squamous cells of undetermined signifcance 

AUC The area under the curve 

BMI Body mass index 

CIN Cervical intraepithelial neoplasia 

HPV Human papillomavirus 

hr-HPV High-risk HPV 

JAM3 Junctional Adhesion Molecule 3 

LEEP Loop electrosurgical excision procedure 

LSIL Low-grade squamous intraepithelial lesions 

NGS Next-generation sequencing 

NILM Negative for intraepithelial lesion or malignancy 

NPV Negative predictive value 

PAX1 Paired Box 1 

PPV Positive predictive value 

TCT ThinPrep cytology tests 

# Acknowledgements

Not applicable. 

# Authors’ contributions

X.Z. and D.X. conceived and designed the study. D.S. and C.S. drafted the manuscript and analyzed the data. F.Z. collected data. All authors contributed to the article and approved the submitted version. 

# Funding

None. 

# Data availability

The datasets used and/or analyzed during the current study are available from the corresponding author on reasonable request. (E-mail: zhaoxingping8846@163.com and dabaoxu2022@163.com). 

# Declarations

# Ethics approval and consent to participate

This study was conducted in accordance with the Declaration of Helsinki and approved by the ethics committee of the Third Xiangya Hospital of Central South University (No. 23137). All participants provided written informed consent. 

# Consent for publication

Not applicable. 

# Competing interests

The authors declare no competing interests. 

Received: 23 August 2024 Accepted: 5 December 2024 

Published online:18 December 2024 

# References



1. Allouch S, Malki A, Allouch A, et al. High-risk hpv oncoproteins and PD-1/ PD-L1 interplay in human cervical cancer: Recent evidence and future directions. Front Oncol. 2020;10:914. 





2. Ghanaat M, Goradel NH, Arashkia A, et al. Virus against virus: Strategies for using adenovirus vectors in the treatment of HPV-induced cervical cancer. Acta Pharmacol Sin. 2021;42(12):1981–90. 





3. McCormack M, Gafney D, Tan D, et al. The cervical cancer research network (gynecologic cancer intergroup) roadmap to expand research in low- and middle-income countries. Int J Gynecol Cancer. 2021;31(5):775–8. 





4. Stumbar SE, Stevens M, Feld Z. Cervical cancer and its precursors: A preventative approach to screening, diagnosis, and management. Prim Care. 2019;46(1):117–34. 





5. Crosbie EJ, Einstein MH, Franceschi S, et al. Human papillomavirus and cervical cancer. Lancet (London, England). 2013;382(9895):889–99. 





6. Poirson J, Biquand E, Straub ML, et al. Mapping the interactome of HPV E6 and E7 oncoproteins with the ubiquitin-proteasome system. FEBS J. 2017;284(19):3171–201. 





7. Curry SJ, Krist AH, Owens DK, et al. Screening for cervical cancer: Us preventive services task force recommendation statement. JAMA. 2018;320(7):674–86. 





8. Nkwabong E, Laure Bessi Badjan I, Sando Z. Pap smear accuracy for the diagnosis of cervical precancerous lesions. Trop Doct. 2019;49(1):34-39. 





9. Er Güneri S, Şen S. Women’s experiences after abnormal pap smear results: a qualitative study. J Psychosom Obstet Gynaecol. 2020;41(1):22-29. 





10. Zhou L, Qiu Q, Zhou Q, et al. Long-read sequencing unveils high-resolution HPV integration and its oncogenic progression in cervical cancer. Nat Commun. 2022;13(1):2563. 





11. Hu T, Li K, He L, et al. Testing for viral DNA integration among HPV-positive women to detect cervical precancer: an observational cohort study. BJOG. 2024;131(3):309–18. 





12. el Aliani A, El-Abid H, el Mallali Y, et al. Association between gene promoter methylation and cervical cancer development: Global distribution and a meta-analysis. Cancer Epidemiol Biomarkers Prev. 2021;30(3):450–9. 





13. Zhu H, Zhu H, Tian M, et al. DNA methylation and hydroxymethylation in cervical cancer: diagnosis, prognosis and treatment. Front Genet. 2020;11:347. 





14. van den Helder R, Steenbergen RDM, van Splunter AP, et al. HPV and DNA methylation testing in urine for cervical intraepithelial neoplasia and cervical cancer detection. Clin Cancer Res. 2022;28(10):2061–8. 





15. Güzel C, Van Sten-van’t Hof J, De Kok I, et al. Molecular markers for cervical cancer screenin. Expert Rev Proteomics. 2021;18(8):675–691. 





16. Schreiberhuber L, Barrett JE, Wang J, et al. Cervical cancer screening using DNA methylation triage in a real-world population. Nat Med. 2024;30(8):2251–7. 





17. Verhoef L, Bleeker MCG, Polman N, et al. Evaluation of DNA methylation biomarkers ASCL1 and LHX8 on HPV-positive self-collected samples from primary HPV-based screening. Br J Cancer. 2023;129(1):104–11. 





18. Yin A, Zhang Q, Kong X, et al. Jam3 methylation status as a biomarker for diagnosis of preneoplastic and neoplastic lesions of the cervix. Oncotarget. 2015;6(42):44373–87. 





19. Fang C, Wang SY, Liou YL, et al. The promising role of PAX1 (Aliases: HUP48, OFC2) gene methylation in cancer screening. Mol Genet Genomic Med. 2019;7(3): e506. 





20. Chen Y, Cui Z, Xiao Z, et al. PAX1 AND SOX1 methylation as an initial screening method for cervical cancer: a meta-analysis of individual studies in Asians. Ann Transl Med. 2016;4(19):365. 





21. Nikolaidis C, Nena E, Panagopoulou M, et al. PAX1 methylation as an auxiliary biomarker for cervical cancer screening: A meta-analysis. Cancer Epidemiol. 2015;39(5):682–6. 





22. Obermeyer Z, Emanuel EJ. Predicting the future - big data, machine learning, and clinical medicine. N Engl J Med. 2016;375(13):1216–9. 





23. Ferre A, Poca MA, de la Calzada MD, et al. A conditional inference tree model for predicting sleep-related breathing disorders in patients with chiari malformation type 1: Description and external validation. J Clin Sleep Med. 2019;15(1):89–99. 





24. Nayar R, Wilbur DC. The Pap test and Bethesda 2014. Cancer Cytopathol. 2015;123(5):271–81. 





25. Gao B, Liou YL, Yu Y, et al. The characteristics and risk factors of human papillomavirus infection: An outpatient population-based study in Changsha, hunan. Sci Rep. 2021;11(1):15128. 





26. Tao P, Zheng W, Wang Y, et al. Sensitive HPV genotyping based on the fow-through hybridization and gene chip. J Biomed Biotechnol. 2012;2012: 938780. 





27. Bornstein J, Bentley J, BöSZE P, et al. 2011 colposcopic terminology of the international federation for cervical pathology and colposcopy. Obstet Gynecol. 2012;120(1):166–72. 





28. Höhn AK, Brambs CE, Hiller GGR, et al. 2020 WHO classifcation of female genital tumors. Geburtshilfe Frauenheilkd. 2021;81(10):1145–1153. 





29. Chen X, Jin X, Kong L, et al. Triage performance of PAX1(m)/JAM3(m) in opportunistic cervical cancer screening of non-16/18 human papillomavirus-positive women: a multicenter prospective study in china. Clin Epigenetics. 2024;16(1):108. 





30. Li X, He S, Zhao X, et al. High-grade cervical lesions diagnosed by JAM3/ PAX1 methylation in high-risk human papillomavirus-infected patients. Zhong Nan Da Xue Xue Bao Yi Xue Ban. 2023;48(12):1820–9. 





31. Su PH, Hsu YW, Huang RL, et al. Methylomics of nitroxidative stress on precancerous cells reveals DNA methylation alteration at the transition from in situ to invasive cervical cancer. Oncotarget. 2017;8(39):65281–91 





32. Nishiyama A, Nakanishi M. Navigating the DNA methylation landscape of cancer. Trends in genetics : TIG. 2021;37(11):1012–27. 





33. Zhang L, Tan W, Yang H, et al. Detection of host cell gene/HPV DNA methylation markers: a promising triage approach for cervical cancer. Front Oncol. 2022;12: 831949. 





34. Boers A, Wang R, van Leeuwen RW, et al. Discovery of new methylation markers to improve screening for cervical intraepithelial neoplasia grade 2/3. Clin Epigenetics. 2016;8:29. 





35. Boers A, Bosgraaf RP, van Leeuwen RW, et al. DNA methylation analysis in self-sampled brush material as a triage test in hrHPV-positive women. Br J Cancer. 2014;111(6):1095–101. 





36. Feederle R, Gerber JK, Middleton A, et al. Generation of PAX1/PAX1-specifc monoclonal antibodies. Monoclonal antibodies in immunodiagnosis and immunotherapy. 2016;35(5):259–62. 





37. Liu H, Meng X, Wang J. Real time quantitative methylation detection of PAX1 gene in cervical cancer screening. Int J Gynecol Cancer. 2020;30(10):1488–92. 





38. Xu J, Xu L, Yang B, et al. Assessing methylation status of PAX1 in cervical scrapings, as a novel diagnostic and predictive biomarker, was closely related to screen cervical cancer. Int J Clin Exp Pathol. 2015;8(2):1674–81. 





39. Huang M, Wang T, Li M, et al. Evaluating PAX1 methylation for cervical cancer screening triage in non-16/18 hrHPV-positive women. BMC Cancer. 2024;24(1):913. 





40. Goodman A. HPV testing as a screen for cervical cancer. BMJ. 2015;350:h2372. 





41. Wang M, Hou B, Wang X, et al. Diagnostic value of high-risk human papillomavirus viral load on cervical lesion assessment and ascus triage. Cancer Med. 2021;10(7):2482–8. 





42. Oranratanaphan S, Kobwitaya K, Termrungruanglert W, et al. Value of CCNA1 promoter methylation in triaging ASC-US cytology. Asian Pacifc journal of cancer prevention : APJCP. 2020;21(2):473–7. 





43. Kelly H, Benavente Y, Pavon MA, et al. Performance of DNA methylation assays for detection of high-grade cervical intraepithelial neoplasia (CIN2+): A systematic review and meta-analysis. Br J Cancer. 2019;121(11):954–65. 





44. Brancaccio M, Natale F, Falco G, et al. Cell-free DNA methylation: the new frontiers of pancreatic cancer biomarkers’ discovery. Genes. 2019:11(1):14. 





45. Ciechomska M, Roszkowski L, Maslinski W. DNA methylation as a future therapeutic and diagnostic target in rheumatoid arthritis. Cells. 2019;8(9):953. 





46. Yanatatsaneejit P, Chalertpet K, Sukbhattee J, et al. Promoter methylation of tumor suppressor genes induced by human papillomavirus in cervical cancer. Oncol Lett. 2020;20(1):955–61. 





47. Ramirez AT, Valls J, Baena A, et al. Performance of cervical cytology and HPV testing for primary cervical cancer screening in Latin America: An analysis within the ESTAMPA study. Lancet Reg Health Am. 2023;26: 100593. 





48. Okunade KS. Human papillomavirus and cervical cancer. J Obstet Gynaecol. 2020;40(5):602–8. 



# Publisher’s Note

Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional afliations. 