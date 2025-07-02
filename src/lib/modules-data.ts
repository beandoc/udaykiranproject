export type Module = {
  title: string;
  duration: number; // in minutes
  status: 'Completed' | 'Not Started';
  slug: string;
};

export const patientModules: Module[] = [
  { title: 'Understanding Kidney Disease', duration: 15, status: 'Completed', slug: 'understanding-kidney-disease' },
  { title: 'Chronic Kidney Disease Stages', duration: 18, status: 'Completed', slug: 'ckd-stages' },
  { title: 'Treatment Options Overview', duration: 20, status: 'Completed', slug: 'treatment-options' },
  { title: 'Dialysis vs Transplant', duration: 22, status: 'Not Started', slug: 'dialysis-vs-transplant' },
  { title: 'Transplant Evaluation Process', duration: 25, status: 'Not Started', slug: 'evaluation-process' },
  { title: 'Finding a Donor', duration: 20, status: 'Not Started', slug: 'finding-a-donor' },
  { title: 'Understanding Transplant Matching', duration: 15, status: 'Not Started', slug: 'transplant-matching' },
  { title: 'Pre-Surgery Preparation', duration: 18, status: 'Not Started', slug: 'pre-surgery-prep' },
  { title: 'Surgery Day Experience', duration: 16, status: 'Not Started', slug: 'surgery-day' },
  { title: 'Post-Transplant Recovery', duration: 24, status: 'Not Started', slug: 'post-transplant-recovery' },
  { title: 'Immunosuppressive Medications', duration: 26, status: 'Not Started', slug: 'immunosuppressants' },
  { title: 'Recognizing Complications', duration: 20, status: 'Not Started', slug: 'recognizing-complications' },
  { title: 'Long-term Care', duration: 22, status: 'Not Started', slug: 'long-term-care' },
  { title: 'Lifestyle Management', duration: 19, status: 'Not Started', slug: 'lifestyle-management' },
  { title: 'Diet and Nutrition', duration: 17, status: 'Not Started', slug: 'diet-and-nutrition' },
  { title: 'Mental Health Support', duration: 15, status: 'Not Started', slug: 'mental-health-support' },
];

export const donorModules: Module[] = [
    { title: 'Understanding Living Donation', duration: 18, status: 'Completed', slug: 'understanding-living-donation' },
    { title: 'Donor Eligibility Criteria', duration: 20, status: 'Completed', slug: 'donor-eligibility' },
    { title: 'Medical Evaluation Process', duration: 25, status: 'Not Started', slug: 'donor-evaluation' },
    { title: 'Understanding Transplant Matching', duration: 15, status: 'Not Started', slug: 'transplant-matching' },
    { title: 'Psychological Assessment', duration: 16, status: 'Not Started', slug: 'psychological-assessment' },
    { title: 'Surgical Procedure Overview', duration: 22, status: 'Not Started', slug: 'donor-surgery' },
    { title: 'Recovery Timeline', duration: 18, status: 'Not Started', slug: 'donor-recovery' },
    { title: 'Potential Risks and Benefits', duration: 20, status: 'Not Started', slug: 'risks-and-benefits' },
    { title: 'Long-term Health Monitoring', duration: 17, status: 'Not Started', slug: 'donor-long-term-health' },
    { title: 'Support Resources', duration: 12, status: 'Not Started', slug: 'donor-support-resources' },
];

export const caregiverModules: Module[] = [
    { title: 'Understanding Your Role', duration: 15, status: 'Completed', slug: 'understanding-your-role' },
    { title: 'Supporting Pre-Transplant', duration: 18, status: 'Completed', slug: 'supporting-pre-transplant' },
    { title: 'Hospital Stay Support', duration: 20, status: 'Completed', slug: 'hospital-stay-support' },
    { title: 'Home Recovery Care', duration: 22, status: 'Completed', slug: 'home-recovery-care' },
    { title: 'Medication Management', duration: 16, status: 'Not Started', slug: 'medication-management' },
    { title: 'Recognizing Warning Signs', duration: 18, status: 'Not Started', slug: 'recognizing-warning-signs' },
    { title: 'Self-Care for Caregivers', duration: 14, status: 'Not Started', slug: 'self-care-for-caregivers' },
    { title: 'Communication with Medical Team', duration: 12, status: 'Not Started', slug: 'communication-with-medical-team' },
];

export const modulesByRole = {
    Patient: { title: "Kidney Patient Education Path", modules: patientModules },
    Donor: { title: "Living Donor Education Path", modules: donorModules },
    Caregiver: { title: "Caregiver Support Path", modules: caregiverModules },
}
