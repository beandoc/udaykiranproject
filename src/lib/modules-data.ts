export type Module = {
  title: string;
  duration: number; // in minutes
  status: 'Completed' | 'Not Started';
  slug: string;
};

export const patientModules: Module[] = [
  { title: 'Understanding Kidney Disease', duration: 2, status: 'Completed', slug: 'understanding-kidney-disease' },
  { title: 'Chronic Kidney Disease Stages', duration: 1, status: 'Completed', slug: 'ckd-stages' },
  { title: 'Treatment Options Overview', duration: 1, status: 'Completed', slug: 'treatment-options' },
  { title: 'Dialysis vs Transplant', duration: 1, status: 'Not Started', slug: 'dialysis-vs-transplant' },
  { title: 'Transplant Evaluation Process', duration: 2, status: 'Not Started', slug: 'evaluation-process' },
  { title: 'Finding a Donor', duration: 1, status: 'Not Started', slug: 'finding-a-donor' },
  { title: 'Understanding Transplant Matching', duration: 2, status: 'Not Started', slug: 'transplant-matching' },
  { title: 'Pre-Surgery Preparation', duration: 1, status: 'Not Started', slug: 'pre-surgery-prep' },
  { title: 'Surgery Day Experience', duration: 6, status: 'Not Started', slug: 'surgery-day' },
  { title: 'Post-Transplant Recovery', duration: 4, status: 'Not Started', slug: 'post-transplant-recovery' },
  { title: 'Immunosuppressive Medications', duration: 2, status: 'Not Started', slug: 'immunosuppressants' },
  { title: 'Understanding Risk of Rejection', duration: 3, status: 'Not Started', slug: 'understanding-rejection' },
  { title: 'Recognizing Complications', duration: 1, status: 'Not Started', slug: 'recognizing-complications' },
  { title: 'Long-term Care', duration: 1, status: 'Not Started', slug: 'long-term-care' },
  { title: 'Lifestyle Management', duration: 1, status: 'Not Started', slug: 'lifestyle-management' },
  { title: 'Diet and Nutrition', duration: 1, status: 'Not Started', slug: 'diet-and-nutrition' },
  { title: 'Mental Health Support', duration: 2, status: 'Not Started', slug: 'mental-health-support' },
];

export const donorModules: Module[] = [
    { title: 'Understanding Living Donation', duration: 2, status: 'Completed', slug: 'understanding-living-donation' },
    { title: 'Donor Eligibility Criteria', duration: 1, status: 'Completed', slug: 'donor-eligibility' },
    { title: 'Medical Evaluation Process', duration: 1, status: 'Not Started', slug: 'donor-evaluation' },
    { title: 'Understanding Transplant Matching', duration: 2, status: 'Not Started', slug: 'transplant-matching' },
    { title: 'Psychological Assessment', duration: 1, status: 'Not Started', slug: 'psychological-assessment' },
    { title: 'Surgical Procedure Overview', duration: 2, status: 'Not Started', slug: 'donor-surgery' },
    { title: 'Recovery Timeline', duration: 1, status: 'Not Started', slug: 'donor-recovery' },
    { title: 'Potential Risks and Benefits', duration: 3, status: 'Not Started', slug: 'risks-and-benefits' },
    { title: 'Long-term Health Monitoring', duration: 1, status: 'Not Started', slug: 'donor-long-term-health' },
    { title: 'Support Resources', duration: 1, status: 'Not Started', slug: 'donor-support-resources' },
];

export const caregiverModules: Module[] = [
    { title: 'Understanding Your Role', duration: 1, status: 'Completed', slug: 'understanding-your-role' },
    { title: 'Supporting Pre-Transplant', duration: 1, status: 'Completed', slug: 'supporting-pre-transplant' },
    { title: 'Hospital Stay Support', duration: 1, status: 'Completed', slug: 'hospital-stay-support' },
    { title: 'Home Recovery Care', duration: 1, status: 'Completed', slug: 'home-recovery-care' },
    { title: 'Medication Management', duration: 1, status: 'Not Started', slug: 'medication-management' },
    { title: 'Recognizing Warning Signs', duration: 1, status: 'Not Started', slug: 'recognizing-warning-signs' },
    { title: 'Self-Care for Caregivers', duration: 1, status: 'Not Started', slug: 'self-care-for-caregivers' },
    { title: 'Communication with Medical Team', duration: 1, status: 'Not Started', slug: 'communication-with-medical-team' },
];

export const modulesByRole = {
    Patient: { title: "Kidney Patient Education Path", modules: patientModules },
    Donor: { title: "Living Donor Education Path", modules: donorModules },
    Caregiver: { title: "Caregiver Support Path", modules: caregiverModules },
}
