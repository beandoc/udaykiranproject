export type Module = {
  title: string;
  status: 'Completed' | 'Not Started';
  slug: string;
};

export const patientModules: Module[] = [
  { title: 'Understanding Kidney Disease', status: 'Completed', slug: 'understanding-kidney-disease' },
  { title: 'Chronic Kidney Disease Stages', status: 'Completed', slug: 'ckd-stages' },
  { title: 'Treatment Options Overview', status: 'Completed', slug: 'treatment-options' },
  { title: 'Dialysis vs Transplant', status: 'Not Started', slug: 'dialysis-vs-transplant' },
  { title: 'Transplant Evaluation Process', status: 'Not Started', slug: 'evaluation-process' },
  { title: 'Finding a Donor', status: 'Not Started', slug: 'finding-a-donor' },
  { title: 'Understanding Transplant Matching', status: 'Not Started', slug: 'transplant-matching' },
  { title: 'Pre-Surgery Preparation', status: 'Not Started', slug: 'pre-surgery-prep' },
  { title: 'Surgery Day Experience', status: 'Not Started', slug: 'surgery-day' },
  { title: 'Post-Transplant Recovery', status: 'Not Started', slug: 'post-transplant-recovery' },
  { title: 'Immunosuppressive Medications', status: 'Not Started', slug: 'immunosuppressants' },
  { title: 'Understanding Risk of Rejection', status: 'Not Started', slug: 'understanding-rejection' },
  { title: 'Recognizing Complications', status: 'Not Started', slug: 'recognizing-complications' },
  { title: 'Long-term Care', status: 'Not Started', slug: 'long-term-care' },
  { title: 'Lifestyle Management', status: 'Not Started', slug: 'lifestyle-management' },
  { title: 'Diet and Nutrition', status: 'Not Started', slug: 'diet-and-nutrition' },
  { title: 'Mental Health Support', status: 'Not Started', slug: 'mental-health-support' },
];

export const donorModules: Module[] = [
    { title: 'Understanding Living Donation', status: 'Completed', slug: 'understanding-living-donation' },
    { title: 'Donor Eligibility Criteria', status: 'Completed', slug: 'donor-eligibility' },
    { title: 'Medical Evaluation Process', status: 'Not Started', slug: 'donor-evaluation' },
    { title: 'Understanding Transplant Matching', status: 'Not Started', slug: 'transplant-matching' },
    { title: 'Psychological Assessment', status: 'Not Started', slug: 'psychological-assessment' },
    { title: 'Surgical Procedure Overview', status: 'Not Started', slug: 'donor-surgery' },
    { title: 'Recovery Timeline', status: 'Not Started', slug: 'donor-recovery' },
    { title: 'Potential Risks and Benefits', status: 'Not Started', slug: 'risks-and-benefits' },
    { title: 'Long-term Health Monitoring', status: 'Not Started', slug: 'donor-long-term-health' },
    { title: 'Support Resources', status: 'Not Started', slug: 'donor-support-resources' },
];

export const caregiverModules: Module[] = [
    { title: 'Understanding Your Role', status: 'Completed', slug: 'understanding-your-role' },
    { title: 'Supporting Pre-Transplant', status: 'Completed', slug: 'supporting-pre-transplant' },
    { title: 'Hospital Stay Support', status: 'Completed', slug: 'hospital-stay-support' },
    { title: 'Home Recovery Care', status: 'Completed', slug: 'home-recovery-care' },
    { title: 'Medication Management', status: 'Not Started', slug: 'medication-management' },
    { title: 'Recognizing Warning Signs', status: 'Not Started', slug: 'recognizing-warning-signs' },
    { title: 'Self-Care for Caregivers', status: 'Not Started', slug: 'self-care-for-caregivers' },
    { title: 'Communication with Medical Team', status: 'Not Started', slug: 'communication-with-medical-team' },
];

export const modulesByRole = {
    Patient: { title: "Kidney Patient Education Path", modules: patientModules },
    Donor: { title: "Living Donor Education Path", modules: donorModules },
    Caregiver: { title: "Caregiver Support Path", modules: caregiverModules },
}
