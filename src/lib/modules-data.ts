
export type Module = {
  title: string;
  status: 'Completed' | 'Not Started';
  slug: string;
  audioSrc?: {
    en?: string;
    hi?: string;
    mr?: string;
  };
};

export type RoleData = {
    title: string;
    modules: Module[];
};

export type ModulesByRole = {
    Patient: RoleData;
    Donor: RoleData;
    Caregiver: RoleData;
};

export const patientModules: Module[] = [
  { 
    title: 'Understanding Kidney Disease', 
    status: 'Completed', 
    slug: 'understanding-kidney-disease', 
    audioSrc: {
        en: '/audio/understanding-kidney-disease-en.mp3',
        hi: '/audio/understanding-kidney-disease-hi.mp3',
        mr: '/podcasts/patient-episode-1-mr.wav'
    }
  },
  { title: 'Transplant Evaluation Process', status: 'Not Started', slug: 'evaluation-process' },
  { title: 'Understanding Transplant Matching', status: 'Not Started', slug: 'transplant-matching' },
  { title: 'Surgery Day Experience', status: 'Not Started', slug: 'surgery-day' },
  { title: 'Know Possible Risks of Anesthesia', status: 'Not Started', slug: 'anesthesia-risks'},
  { title: 'Post-Transplant Recovery', status: 'Not Started', slug: 'post-transplant-recovery' },
  { title: 'Immunosuppressive Medications', status: 'Not Started', slug: 'immunosuppressants' },
  { title: 'Medication Adherence', status: 'Not Started', slug: 'medication-adherence' },
  { title: 'Understanding Risk of Rejection', status: 'Not Started', slug: 'understanding-rejection' },
  { title: "Understanding Your New Kidney's Health", status: 'Not Started', slug: 'understanding-graft-health' },
  { title: 'Long-term Care', status: 'Not Started', slug: 'long-term-care' },
  { title: 'Diet and Nutrition', status: 'Not Started', slug: 'diet-and-nutrition' },
  { title: 'Physical Activity & Exercise', status: 'Not Started', slug: 'physical-activity-and-exercise' },
  { title: 'Post-Transplant Diabetes', status: 'Not Started', slug: 'post-transplant-diabetes' },
  { title: 'Mental Health Support', status: 'Not Started', slug: 'mental-health-support' },
];

export const donorModules: Module[] = [
    { 
        title: 'Understanding Living Donation', 
        status: 'Completed', 
        slug: 'understanding-living-donation', 
        audioSrc: {
            en: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            hi: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', // Placeholder
            mr: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'  // Placeholder
        }
    },
    { title: 'Donor Eligibility Criteria', status: 'Not Started', slug: 'donor-eligibility' },
    { title: 'Medical Evaluation Process', status: 'Not Started', slug: 'donor-evaluation' },
    { title: 'Understanding Transplant Matching', status: 'Not Started', slug: 'transplant-matching' },
    { title: 'Psychological Assessment', status: 'Not Started', slug: 'psychological-assessment' },
    { title: 'Surgical Procedure Overview', status: 'Not Started', slug: 'donor-surgery' },
    { title: 'Know Possible Risks of Anesthesia', status: 'Not Started', slug: 'anesthesia-risks'},
    { title: 'Recovery Timeline', status: 'Not Started', slug: 'donor-recovery' },
    { title: 'Potential Risks and Benefits', status: 'Not Started', slug: 'risks-and-benefits' },
    { title: 'Long-term Health Monitoring', status: 'Not Started', slug: 'donor-long-term-health' },
    { title: 'Patient Responsibilities', status: 'Not Started', slug: 'patient-responsibilities' },
];

export const caregiverModules: Module[] = [
    { 
        title: 'Understanding Your Role', 
        status: 'Completed', 
        slug: 'understanding-your-role',
        audioSrc: {
            en: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
            hi: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', // Placeholder
            mr: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'  // Placeholder
        }
    },
    { title: 'Supporting Pre-Transplant', status: 'Not Started', slug: 'supporting-pre-transplant' },
    { title: 'Hospital Stay Support', status: 'Not Started', slug: 'hospital-stay-support' },
    { title: 'Home Recovery Care', status: 'Not Started', slug: 'home-recovery-care' },
    { title: 'Medication Management', status: 'Not Started', slug: 'medication-management' },
    { title: 'Recognizing Warning Signs', status: 'Not Started', slug: 'recognizing-warning-signs' },
    { title: 'Self-Care for Caregivers', status: 'Not Started', slug: 'self-care-for-caregivers' },
    { title: 'Communication with Medical Team', status: 'Not Started', slug: 'communication-with-medical-team' },
    { title: 'Patient Responsibilities', status: 'Not Started', slug: 'patient-responsibilities' },
];

export const modulesByRole: ModulesByRole = {
    Patient: { title: "Kidney Patient Education Path", modules: patientModules },
    Donor: { title: "Kidney Donor Education Path", modules: donorModules },
    Caregiver: { title: "Caregiver Support Path", modules: caregiverModules },
}
