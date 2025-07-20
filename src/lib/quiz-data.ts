
export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
};

type QuizDataByLang = {
    [moduleSlug: string]: QuizQuestion[];
}

export const quizData: { [lang: string]: QuizDataByLang } = {
    en: {
        'understanding-kidney-disease': [
            {
                question: "What is the most significant advantage of a successful kidney transplant?",
                options: [
                    "You can eat more sweets.",
                    "Freedom from the rigors of dialysis.",
                    "You no longer need to see a doctor.",
                    "You get a new scar."
                ],
                correctAnswer: "Freedom from the rigors of dialysis.",
                explanation: "The most profound benefit of a transplant is freedom from the time-consuming and difficult process of dialysis, which restores quality of life."
            },
            {
                question: "What is a major lifelong commitment after receiving a transplant?",
                options: [
                    "Wearing a special bracelet.",
                    "Taking immunosuppressant medications meticulously.",
                    "Only drinking bottled water.",
                    "Avoiding all exercise."
                ],
                correctAnswer: "Taking immunosuppressant medications meticulously.",
                explanation: "To prevent rejection of the new kidney, you must take anti-rejection (immunosuppressant) medications every day for the life of the transplant."
            },
            {
                question: "Which of these is a condition that might prevent someone from being a candidate for a transplant (a contraindication)?",
                options: [
                    "A history of a broken arm.",
                    "Wearing glasses.",
                    "A severe, untreatable active infection.",
                    "Being 40 years old."
                ],
                correctAnswer: "A severe, untreatable active infection.",
                explanation: "A severe active infection is an absolute contraindication, as the transplant surgery and immunosuppressant drugs would be too risky."
            },
            {
                question: "Are there fewer or more dietary restrictions after a successful transplant compared to dialysis?",
                options: ["More restrictions", "Fewer restrictions", "The same level of restrictions", "No restrictions at all"],
                correctAnswer: "Fewer restrictions",
                explanation: "A major benefit of a successful transplant is having far fewer restrictions on diet and fluid intake compared to being on dialysis."
            },
            {
                question: "What is the term for when the body's immune system does not accept the new organ?",
                options: ["Acceptance", "Adaptation", "Rejection", "Contraindication"],
                correctAnswer: "Rejection",
                explanation: "Rejection is the process where the body's immune system may not accept the new organ. This is what immunosuppressant medications work to prevent."
            },
            {
                question: "What kind of anesthesia is used for a transplant operation?",
                options: ["Local anesthesia", "Spinal anesthesia", "General anesthesia", "No anesthesia"],
                correctAnswer: "General anesthesia",
                explanation: "A kidney transplant is a major surgery performed under general anesthesia, which means you are completely asleep during the procedure."
            },
            {
                question: "What is a potential side effect of long-term immunosuppressant medication use?",
                options: ["Better hearing", "Stronger bones", "A higher susceptibility to infections", "Faster running speed"],
                correctAnswer: "A higher susceptibility to infections",
                explanation: "Because immunosuppressants calm the immune system, they carry potential side effects, including a higher risk of infections."
            },
            {
                question: "What is the primary goal of the transplant evaluation team?",
                options: ["To finish as quickly as possible", "To ensure a transplant is a safe and viable option for the candidate", "To find reasons to deny a transplant", "To charge for as many tests as possible"],
                correctAnswer: "To ensure a transplant is a safe and viable option for the candidate",
                explanation: "The evaluation team's primary goal is always to ensure the safety and viability of transplantation for each individual."
            },
            {
                question: "Can a successful transplant restore the possibility of pregnancy for women of childbearing age?",
                options: ["No, it makes it impossible", "Yes, it can restore the possibility of pregnancy", "It has no effect on fertility", "This is unknown"],
                correctAnswer: "Yes, it can restore the possibility of pregnancy",
                explanation: "One of the significant benefits of a successful transplant is that it can restore the possibility of pregnancy for women."
            },
            {
                question: "What is the term for the final stage of chronic kidney disease where the kidneys can no longer function on their own?",
                options: ["Early Stage Kidney Disease", "Mid-Stage Kidney Disease", "End-Stage Kidney Disease (ESKD)", "Acute Kidney Injury"],
                correctAnswer: "End-Stage Kidney Disease (ESKD)",
                explanation: "End-Stage Kidney Disease (ESKD) represents the final, permanent stage of chronic kidney disease, where kidney function has declined to a critical point."
            }
        ],
        'evaluation-process': [
            {
                question: "What is the primary goal of the comprehensive transplant evaluation?",
                options: [
                    "To see how much pain a patient can tolerate.",
                    "To ensure that surgery is a safe and effective option for the patient.",
                    "To complete hospital paperwork for billing.",
                    "To test new experimental drugs."
                ],
                correctAnswer: "To ensure that surgery is a safe and effective option for the patient.",
                explanation: "The singular and paramount goal of the evaluation is to ensure that surgery is a safe and effective option for you."
            },
            {
                question: "What is 'HLA Typing'?",
                options: [
                    "A test to measure your height and weight.",
                    "A specialized blood test to identify key proteins for the best donor match.",
                    "A type of exercise you must do before surgery.",
                    "The brand of the hospital's surgical equipment."
                ],
                correctAnswer: "A specialized blood test to identify key proteins for the best donor match.",
                explanation: "HLA (Human Leukocyte Antigen) Typing is a highly specialized blood test that identifies key proteins on your cells to help find the most compatible donor kidney."
            },
            {
                question: "Who is part of the dedicated transplant team you will meet during evaluation?",
                options: [
                    "Only the surgeon.",
                    "The hospital CEO and billing department.",
                    "The Nephrologist, Surgeon, Nurse Coordinator, and Social Worker.",
                    "The pharmacist and physical therapist only."
                ],
                correctAnswer: "The Nephrologist, Surgeon, Nurse Coordinator, and Social Worker.",
                explanation: "During the evaluation, you will meet with key members of your transplant team, which includes the Nephrologist, Surgeon, Nurse Coordinator, Social Worker, and a Dietitian."
            },
            {
                question: "Which of these is a fundamental test done during the evaluation to determine a match?",
                options: [
                    "A test of your running speed",
                    "A blood test to determine your blood type",
                    "A memory test",
                    "A test of your driving skills"
                ],
                correctAnswer: "A blood test to determine your blood type",
                explanation: "Blood tests are fundamental. They determine your blood type for matching, assess kidney and liver function, and screen for infections."
            },
            {
                question: "What is the purpose of an electrocardiogram (ECG) during the evaluation?",
                options: [
                    "To check your lung capacity",
                    "To assess your heart's electrical activity",
                    "To measure your brain waves",
                    "To visualize your stomach"
                ],
                correctAnswer: "To assess your heart's electrical activity",
                explanation: "An electrocardiogram (ECG) is performed as part of the imaging studies to assess the health and electrical activity of your heart."
            },
            {
                question: "How long can the entire evaluation process typically take to complete?",
                options: [
                    "One day",
                    "Two days",
                    "Several weeks",
                    "One year"
                ],
                correctAnswer: "Several weeks",
                explanation: "The comprehensive evaluation process can take several weeks to complete, requiring timeliness from the patient to avoid delays."
            },
            {
                question: "What is the role of the Nurse Coordinator in the transplant team?",
                options: [
                    "To perform the surgery",
                    "To prescribe all medications",
                    "To act as your guide through the evaluation process",
                    "To handle the hospital's finances"
                ],
                correctAnswer: "To act as your guide through the evaluation process",
                explanation: "You will meet with a dedicated Nurse Coordinator who will act as your guide throughout the complex evaluation process."
            },
            {
                question: "Which imaging study is used to visualize your kidneys, bladder, and blood vessels?",
                options: [
                    "MRI of the brain",
                    "CT scan of the chest",
                    "An ultrasound",
                    "A bone density scan"
                ],
                correctAnswer: "An ultrasound",
                explanation: "An ultrasound is a non-invasive imaging test used during the evaluation to get a clear picture of your kidneys, bladder, and blood vessels."
            },
            {
                question: "What is the main reason for screening for infections like HIV or hepatitis?",
                options: [
                    "To determine your blood type",
                    "To identify infections that could cause complications after the transplant",
                    "To check your cholesterol levels",
                    "To fulfill a government requirement"
                ],
                correctAnswer: "To identify infections that could cause complications after the transplant",
                explanation: "Blood tests are used to screen for underlying infections like HIV or hepatitis that could cause serious complications after surgery when you are on immunosuppressant drugs."
            },
            {
                question: "What is required from the patient to ensure the evaluation process moves forward without delays?",
                options: [
                    "Paying extra fees",
                    "Bringing gifts for the staff",
                    "Active participation and timeliness in attending all appointments and tests",
                    "Having a family member call the hospital daily"
                ],
                correctAnswer: "Active participation and timeliness in attending all appointments and tests",
                explanation: "The patient's active participation and timeliness are essential to moving forward on the transplant journey without unnecessary delays."
            }
        ],
        'transplant-matching': [
            {
                question: "What are the two primary scientific factors for matching a kidney?",
                options: [
                    "Age and gender",
                    "Blood group compatibility and Tissue (HLA) typing",
                    "Height and weight",
                    "Diet and exercise habits"
                ],
                correctAnswer: "Blood group compatibility and Tissue (HLA) typing",
                explanation: "The matching process is a sophisticated scientific puzzle with two primary pieces: blood group compatibility and tissue typing (HLA typing)."
            },
            {
                question: "Which blood type is known as the 'universal donor'?",
                options: [ "A", "B", "AB", "O" ],
                correctAnswer: "O",
                explanation: "Blood Type O is the 'universal donor' and can give a kidney to any other blood type (O, A, B, AB)."
            },
            {
                question: "What does a 'negative' crossmatch test indicate?",
                options: [
                    "The donor is not a good match.",
                    "The recipient's body is unlikely to immediately attack the donor kidney.",
                    "The recipient has a negative attitude.",
                    "The test results were lost."
                ],
                correctAnswer: "The recipient's body is unlikely to immediately attack the donor kidney.",
                explanation: "A 'negative' crossmatch shows no reaction, signaling that your body does not have pre-existing antibodies that would immediately attack the donor kidney. This gives a green light for the transplant."
            },
            {
                question: "What does HLA stand for?",
                options: [
                    "Human Liver Antigens",
                    "Human Lung Antigens",
                    "Human Leukocyte Antigens",
                    "Healthy Life Antigens"
                ],
                correctAnswer: "Human Leukocyte Antigens",
                explanation: "HLA stands for Human Leukocyte Antigens, which are proteins on the surface of your cells that the immune system uses to recognize what belongs in your body."
            },
            {
                question: "Why are close relatives, especially siblings, often the best HLA matches?",
                options: [
                    "Because they live in the same house",
                    "Because they eat the same food",
                    "Because you inherit your HLA markers from your parents",
                    "It's just a coincidence"
                ],
                correctAnswer: "Because you inherit your HLA markers from your parents",
                explanation: "You inherit your HLA markers from your parents (three from your mother, three from your father), so siblings have a higher chance of being a close or perfect match."
            },
            {
                question: "What is the purpose of the crossmatch test?",
                options: [
                    "To determine blood type",
                    "To serve as a final safety check before transplant",
                    "To measure the size of the kidney",
                    "To check the recipient's blood pressure"
                ],
                correctAnswer: "To serve as a final safety check before transplant",
                explanation: "The crossmatch test is a final and critical blood test performed just before the transplant that acts as a direct, real-world simulation to ensure safety."
            },
            {
                question: "What does a 'positive' crossmatch indicate?",
                options: [
                    "The recipient is very positive about the surgery",
                    "The recipient has pre-formed antibodies that would attack the donor kidney",
                    "The recipient is a perfect match",
                    "The test was performed correctly"
                ],
                correctAnswer: "The recipient has pre-formed antibodies that would attack the donor kidney",
                explanation: "A 'positive' crossmatch indicates a reaction, meaning the recipient has aggressive antibodies that would attack the donor kidney, and the transplant cannot happen without special treatment."
            },
            {
                question: "Can transplants with partial HLA matches be successful?",
                options: [
                    "No, only perfect 6-out-of-6 matches work",
                    "Yes, excellent outcomes are very common with partial matches due to modern medications",
                    "Only if the donor is a twin",
                    "It is unknown if partial matches can work"
                ],
                correctAnswer: "Yes, excellent outcomes are very common with partial matches due to modern medications",
                explanation: "While a closer HLA match is better, excellent outcomes are very common even with partial matches thanks to modern and effective anti-rejection medications."
            },
            {
                question: "Which blood type is the 'universal recipient'?",
                options: ["O", "A", "B", "AB"],
                correctAnswer: "AB",
                explanation: "Blood Type AB is the 'universal recipient' for blood type and can receive a kidney from any other blood type (O, A, B, AB)."
            },
            {
                question: "A blood type B person can donate a kidney to a person with which blood type(s)?",
                options: ["Only A", "Only O", "B and AB", "A and O"],
                correctAnswer: "B and AB",
                explanation: "Following the rules of compatibility, a person with blood type B can donate to people with blood types B and AB."
            }
        ],
        'surgery-day': [
            {
                question: "What is the typical location for the incision during a kidney transplant?",
                options: [
                    "The upper back, near the original kidneys",
                    "The chest",
                    "The lower abdomen",
                    "The side of the leg"
                ],
                correctAnswer: "The lower abdomen",
                explanation: "The surgeon will make an incision in your lower abdomen, a location chosen because it provides easy access to your major blood vessels and bladder."
            },
            {
                question: "What generally happens to the patient's original, failed kidneys?",
                options: [
                    "They are always removed during the transplant surgery.",
                    "They are usually left in place unless they are causing specific problems.",
                    "They are sold to a research lab.",
                    "They dissolve over time."
                ],
                correctAnswer: "They are usually left in place unless they are causing specific problems.",
                explanation: "Your own kidneys are generally left in place unless they are causing specific problems like persistent infections or are very large."
            },
            {
                question: "Where does a patient wake up immediately after the surgery is complete?",
                options: [
                    "In their hospital room",
                    "In the hospital cafeteria",
                    "In the Post-Anesthesia Care Unit (PACU)",
                    "In the ambulance"
                ],
                correctAnswer: "In the Post-Anesthesia Care Unit (PACU)",
                explanation: "You will wake up in the Post-Anesthesia Care Unit (PACU), also known as the recovery room, where a dedicated team of nurses will monitor you closely."
            },
            {
                question: "What does 'NPO' mean in the hours leading up to surgery?",
                options: [
                    "Take extra medication",
                    "Nothing by mouth (nil per os)",
                    "Do some light exercise",
                    "New Patient Orientation"
                ],
                correctAnswer: "Nothing by mouth (nil per os)",
                explanation: "You will be asked to stop eating and drinking (remain 'NPO' - nil per os) for a set period to ensure your stomach is empty for anesthesia."
            },
            {
                question: "How long does the transplant operation typically last?",
                options: [
                    "30 minutes",
                    "Between two and four hours",
                    "Eight hours",
                    "Over ten hours"
                ],
                correctAnswer: "Between two and four hours",
                explanation: "The operation itself is performed under general anesthesia and typically lasts between two and four hours."
            },
            {
                question: "What is the final step the surgeon performs to make the new kidney functional?",
                options: [
                    "Connecting the kidney's nerve endings",
                    "Attaching the kidney to the rib cage",
                    "Attaching the ureter (urine tube) to your bladder",
                    "Closing the incision"
                ],
                correctAnswer: "Attaching the ureter (urine tube) to your bladder",
                explanation: "Finally, the surgeon will attach the ureter (the tube that carries urine from the kidney) to your bladder, completing the new, functional system."
            },
            {
                question: "What is the purpose of the urinary catheter placed during surgery?",
                options: [
                    "To provide fluids",
                    "To administer pain medication",
                    "To drain urine from the bladder and measure its output",
                    "To monitor heart rate"
                ],
                correctAnswer: "To drain urine from the bladder and measure its output",
                explanation: "A catheter is placed in your bladder to drain urine and measure its output, which is a key indicator of how well the new kidney is working."
            },
            {
                question: "Will you remember the surgical procedure?",
                options: [
                    "Yes, you will be awake and aware",
                    "You might remember parts of it",
                    "No, you will not feel, hear, or remember the procedure",
                    "Only if you try very hard to remember"
                ],
                correctAnswer: "No, you will not feel, hear, or remember the procedure",
                explanation: "The operation is performed under general anesthesia, meaning you will be completely asleep and will not feel, hear, or remember the procedure."
            },
            {
                question: "What is one of the first medications you receive on the day of surgery?",
                options: [
                    "Aspirin",
                    "An antibiotic",
                    "The first dose of your crucial anti-rejection drugs",
                    "A vitamin supplement"
                ],
                correctAnswer: "The first dose of your crucial anti-rejection drugs",
                explanation: "You'll receive some initial medications, including the first dose of your anti-rejection drugs, which begin protecting your new kidney before it's even placed."
            },
            {
                question: "What is the main role of the PACU nursing team?",
                options: [
                    "To help you with paperwork",
                    "To monitor you very closely as the anesthesia wears off",
                    "To order your first meal",
                    "To call your family with updates"
                ],
                correctAnswer: "To monitor you very closely as the anesthesia wears off",
                explanation: "A dedicated team of nurses in the PACU will be monitoring you very closely as the anesthesia wears off to ensure you are stable."
            }
        ],
        'anesthesia-risks': [
            {
                question: "What is a common and temporary side effect as anesthesia wears off?",
                options: [
                    "Stroke",
                    "Sore throat from the breathing tube",
                    "Severe allergic reaction",
                    "Cardiac arrest"
                ],
                correctAnswer: "Sore throat from the breathing tube",
                explanation: "A sore throat from the breathing tube used during surgery is a common, mild, and temporary side effect as the anesthetic wears off."
            },
            {
                question: "What is the purpose of a 'central line' placed during surgery?",
                options: [
                    "To measure the patient's height",
                    "To play music in the operating room",
                    "To administer medications and fluids into a major vein",
                    "To hold the surgical tools"
                ],
                correctAnswer: "To administer medications and fluids into a major vein",
                explanation: "A central line is a larger catheter placed in a major vein in your neck or chest for administering medications and fluids efficiently."
            },
            {
                question: "Who will meet with you before surgery to discuss the anesthesia plan?",
                options: [
                    "The hospital administrator",
                    "The anesthesiologist",
                    "A physical therapist",
                    "A dietitian"
                ],
                correctAnswer: "The anesthesiologist",
                explanation: "Your anesthesiologist will meet with you before surgery to conduct a final assessment, discuss the plan, and answer all of your questions."
            },
            {
                question: "Modern anesthesia is considered remarkably safe due to highly trained staff and what else?",
                options: [
                    "Advanced monitoring technology",
                    "Comfortable operating rooms",
                    "Faster surgical tools",
                    "A good music playlist"
                ],
                correctAnswer: "Advanced monitoring technology",
                explanation: "Modern anesthesia is very safe thanks to highly trained anesthesiologists and advanced monitoring technology that tracks your vital signs continuously."
            },
            {
                question: "What is the purpose of the 'arterial line' monitoring line?",
                options: [
                    "To check for infections",
                    "To provide oxygen",
                    "For beat-to-beat blood pressure monitoring",
                    "To drain excess fluid"
                ],
                correctAnswer: "For beat-to-beat blood pressure monitoring",
                explanation: "An arterial line is a thin catheter, usually in the wrist, that provides continuous, beat-to-beat blood pressure monitoring for safety."
            },
            {
                question: "Is it common to experience nausea or vomiting after surgery?",
                options: [
                    "No, it is very rare",
                    "Yes, it's a common and temporary side effect that the team can manage",
                    "It only happens if the surgery went wrong",
                    "It means you are allergic to the hospital"
                ],
                correctAnswer: "Yes, it's a common and temporary side effect that the team can manage",
                explanation: "It's common to experience some mild, temporary side effects like nausea or vomiting as the anesthetic wears off, and the care team is expert at managing them."
            },
            {
                question: "How does the anesthesia team minimize risks?",
                options: [
                    "By using the same drugs for every patient",
                    "By reviewing your health history to select the safest drugs and techniques for you",
                    "By guessing which drugs might work best",
                    "By asking the patient to choose their own drugs"
                ],
                correctAnswer: "By reviewing your health history to select the safest drugs and techniques for you",
                explanation: "Your anesthesia team meticulously reviews your health history to minimize risks by selecting the safest drugs and techniques specifically for you."
            },
            {
                question: "What is aspiration pneumonia?",
                options: [
                    "A lung infection from hospital air",
                    "A lung infection that can occur if stomach contents enter the lungs",
                    "A common cold",
                    "A side effect of drinking too much water"
                ],
                correctAnswer: "A lung infection that can occur if stomach contents enter the lungs",
                explanation: "Aspiration pneumonia is a rare but serious complication where a lung infection develops if stomach contents are inhaled into the lungs during anesthesia."
            },
            {
                question: "What is a rare but serious complication of anesthesia?",
                options: [
                    "A mild headache",
                    "Dizziness",
                    "A major cardiac event or stroke",
                    "Shivering"
                ],
                correctAnswer: "A major cardiac event or stroke",
                explanation: "While very rare, serious complications of anesthesia can include major events like a heart attack (cardiac event) or stroke."
            },
            {
                question: "What is the main purpose of general anesthesia during your transplant?",
                options: [
                    "To make you feel a little sleepy",
                    "To ensure you are completely unconscious and feel no pain",
                    "To numb only your lower abdomen",
                    "To help you remember the surgery clearly"
                ],
                correctAnswer: "To ensure you are completely unconscious and feel no pain",
                explanation: "General anesthesia is a carefully controlled state of unconsciousness, ensuring you are completely asleep, comfortable, and feel no pain during the procedure."
            }
        ],
        'post-transplant-recovery': [
            {
                question: "What is a vital activity you will be encouraged to do as early as the day after surgery?",
                options: [
                    "Run a marathon",
                    "Eat a large steak dinner",
                    "Get out of bed and walk with assistance",
                    "Go home immediately"
                ],
                correctAnswer: "Get out of bed and walk with assistance",
                explanation: "Early mobility, like walking with assistance, is vital for preventing complications like blood clots and pneumonia and is encouraged as early as the day after surgery."
            },
            {
                question: "What is a key activity restriction during the first 6-8 weeks at home?",
                options: [
                    "Reading books",
                    "Watching television",
                    "Avoiding heavy lifting (over 5 kg)",
                    "Talking on the phone"
                ],
                correctAnswer: "Avoiding heavy lifting (over 5 kg)",
                explanation: "You must avoid heavy lifting for at least 6-8 weeks to allow your incision and abdominal muscles to heal properly and prevent a hernia."
            },
            {
                question: "Why is diligent hand hygiene and avoiding sick people crucial after transplant?",
                options: [
                    "To save money on soap",
                    "Because your immune system is suppressed by medication, increasing infection risk",
                    "It is a hospital rule with no medical basis",
                    "To make sure your hands look nice for appointments"
                ],
                correctAnswer: "Because your immune system is suppressed by medication, increasing infection risk",
                explanation: "Because your immune system is suppressed, you are at a higher risk for infections. Diligent hygiene and avoiding sick people are essential."
            },
            {
                question: "How long is a typical hospital stay after a kidney transplant?",
                options: [
                    "One day",
                    "One month",
                    "One to two weeks",
                    "Less than 12 hours"
                ],
                correctAnswer: "One to two weeks",
                explanation: "The first phase of your recovery is managed in a specialized transplant unit, with a typical hospital stay of one to two weeks."
            },
            {
                question: "What is the focus of your diet after transitioning home?",
                options: [
                    "A high-sugar diet for energy",
                    "A diet with no restrictions",
                    "A heart-healthy and low-salt diet",
                    "A liquid-only diet"
                ],
                correctAnswer: "A heart-healthy and low-salt diet",
                explanation: "Your diet will focus on being heart-healthy and low in salt to protect your new kidney and overall health."
            },
            {
                question: "When can you typically resume driving?",
                options: [
                    "The day you leave the hospital",
                    "After one or two days at home",
                    "After your team gives you the green light, usually after a few weeks",
                    "Immediately"
                ],
                correctAnswer: "After your team gives you the green light, usually after a few weeks",
                explanation: "Driving will be restricted for several weeks until your healing is sufficient and your transplant team gives you approval."
            },
            {
                question: "What is the frequency of follow-up appointments immediately after going home?",
                options: [
                    "Once a year",
                    "They are not necessary",
                    "Once every six months",
                    "Frequently, sometimes several times a week initially"
                ],
                correctAnswer: "Frequently, sometimes several times a week initially",
                explanation: "You will have frequent follow-up appointments when you first go home to continue monitoring your progress and adjusting medication doses."
            },
            {
                question: "What is the purpose of daily blood tests in the hospital?",
                options: [
                    "To see if you are anemic",
                    "To ensure your new kidney is functioning well",
                    "To check for cholesterol",
                    "To fulfill a research requirement"
                ],
                correctAnswer: "To ensure your new kidney is functioning well",
                explanation: "The team will conduct daily blood tests (checking creatinine) to ensure your new kidney is functioning well and to monitor your progress."
            },
            {
                question: "How does your diet progress in the hospital after surgery?",
                options: [
                    "You can eat a full meal immediately",
                    "It slowly progresses from clear liquids back to solid foods",
                    "You must fast for the entire hospital stay",
                    "You start with solid foods and progress to liquids"
                ],
                correctAnswer: "It slowly progresses from clear liquids back to solid foods",
                explanation: "Your diet will slowly progress from clear liquids back to solid foods as your digestive system wakes up from the anesthesia and surgery."
            },
            {
                question: "What is a primary reason that walking soon after surgery is so important?",
                options: [
                    "To explore the hospital",
                    "To prove your strength to the nurses",
                    "To prevent complications like blood clots and pneumonia",
                    "To build muscle in your legs"
                ],
                correctAnswer: "To prevent complications like blood clots and pneumonia",
                explanation: "Getting out of bed and walking is vital for preventing serious post-operative complications like blood clots in the legs and pneumonia."
            }
        ],
        'immunosuppressants': [
            {
                question: "What is the primary purpose of immunosuppressant (anti-rejection) medications?",
                options: [
                    "To cure the common cold",
                    "To calm your body's immune system to prevent it from attacking the new kidney",
                    "To make you stronger for sports",
                    "To improve your eyesight"
                ],
                correctAnswer: "To calm your body's immune system to prevent it from attacking the new kidney",
                explanation: "Immunosuppressants work by calming your body's immune system to prevent it from identifying your new kidney as 'foreign' and attacking it, a process called rejection."
            },
            {
                question: "For how long must a patient take anti-rejection medications?",
                options: [
                    "For the first month only",
                    "For the entire life of the transplanted kidney",
                    "Only on days when they feel unwell",
                    "Until the surgical scar is fully healed"
                ],
                correctAnswer: "For the entire life of the transplanted kidney",
                explanation: "This is not a temporary treatment. You must take these medications every day for the entire life of your transplanted kidney to prevent rejection."
            },
            {
                question: "What should you do if you are experiencing side effects from your medication?",
                options: [
                    "Stop taking the medication immediately and on your own",
                    "Double the dose to see if it helps",
                    "Communicate with your transplant team, as they can often manage the side effects",
                    "Ignore the side effects and hope they disappear"
                ],
                correctAnswer: "Communicate with your transplant team, as they can often manage the side effects",
                explanation: "It is very important to communicate any side effects to your team. They can often be managed effectively by adjusting dosages or trying a different medication."
            },
            {
                question: "Why is taking your doses at the same time each day so important?",
                options: [
                    "It's not important at all",
                    "To maintain a stable, protective level of the medication in your bloodstream",
                    "To make it easier to remember",
                    "Because the pills expire otherwise"
                ],
                correctAnswer: "To maintain a stable, protective level of the medication in your bloodstream",
                explanation: "Taking your doses consistently maintains a stable, protective level of the medication in your blood, often called the 'therapeutic window', which shields your kidney around the clock."
            },
            {
                question: "Who is responsible for adjusting the dosage of your immunosuppressant medications?",
                options: [
                    "You, the patient",
                    "Your local pharmacist",
                    "Your transplant team, based on blood test results",
                    "Your family members"
                ],
                correctAnswer: "Your transplant team, based on blood test results",
                explanation: "Your transplant team are the experts who will manage your dosage. Never, ever change the amount you take without their specific instruction."
            },
            {
                question: "What is the danger of stopping your medication, even for a short time?",
                options: [
                    "It can save you money",
                    "It will lead to rejection and the loss of your transplant",
                    "It has no effect",
                    "It will make you feel more energetic"
                ],
                correctAnswer: "It will lead to rejection and the loss of your transplant",
                explanation: "Stopping your medication, even for a short time, is extremely dangerous and will lead to your immune system attacking the kidney (rejection) and causing graft loss."
            },
            {
                question: "What is a potential side effect of immunosuppressants besides infection risk?",
                options: [
                    "Lower blood pressure",
                    "Lower blood sugar",
                    "High blood pressure or high blood sugar",
                    "Weight loss"
                ],
                correctAnswer: "High blood pressure or high blood sugar",
                explanation: "Besides infection risk, common potential side effects of immunosuppressants can include high blood pressure or high blood sugar, which the team will monitor."
            },
            {
                question: "What is another name for anti-rejection medications?",
                options: [
                    "Painkillers",
                    "Antibiotics",
                    "Immunosuppressants",
                    "Vitamins"
                ],
                correctAnswer: "Immunosuppressants",
                explanation: "These powerful drugs are known as immunosuppressants because they work by suppressing, or calming, your body's immune system."
            },
            {
                question: "Should you change your medication dose yourself if you start feeling better?",
                options: [
                    "Yes, you can lower the dose",
                    "Yes, you can stop taking it",
                    "No, never adjust doses yourself without your team's instruction",
                    "Yes, you can take it every other day"
                ],
                correctAnswer: "No, never adjust doses yourself without your team's instruction",
                explanation: "Never adjust your medication doses on your own, even if you feel perfectly well. The medication is working silently to protect your kidney, and changes must only be made by your transplant team."
            },
            {
                question: "The medications you take are described as a 'peace treaty' between your body and what?",
                options: [
                    "Your family",
                    "The hospital",
                    "Your new kidney",
                    "Your old kidneys"
                ],
                correctAnswer: "Your new kidney",
                explanation: "Think of these medications as a peace treaty that you maintain every single day between your body's immune system and your new, life-saving kidney."
            }
        ],
        'medication-adherence': [
            {
                question: "In the context of transplantation, what does 'adherence' mean?",
                options: [
                    "Sticking to your favorite TV shows",
                    "Taking your medications exactly as prescribed—the right drug, right dose, right time, every time",
                    "Adhering to a strict no-carbohydrate diet",
                    "Only talking to people you agree with"
                ],
                correctAnswer: "Taking your medications exactly as prescribed—the right drug, right dose, right time, every time",
                explanation: "'Adherence' means taking your medications exactly as your team has prescribed. This is the single most important action you can take for your new kidney."
            },
            {
                question: "What is the leading cause of preventable transplant failure?",
                options: [
                    "Drinking too much water",
                    "Exercising too much",
                    "Non-adherence (not taking medication correctly)",
                    "Sleeping too much"
                ],
                correctAnswer: "Non-adherence (not taking medication correctly)",
                explanation: "Non-adherence is the leading cause of preventable graft loss (transplant failure). Even a few missed doses can cause irreversible damage."
            },
            {
                question: "What is a proven and effective strategy to help remember to take medications?",
                options: [
                    "Trying to remember without any aids",
                    "Asking a friend to text you occasionally",
                    "Using a weekly pill organizer and setting daily alarms on a phone",
                    "Writing it on a calendar that you rarely look at"
                ],
                correctAnswer: "Using a weekly pill organizer and setting daily alarms on a phone",
                explanation: "A weekly pillbox with compartments for each day and time is the most effective tool, providing a clear visual check of whether you've taken your dose."
            },
            {
                question: "Why can't you trust the results of your blood tests if you don't take your medicine correctly?",
                options: [
                    "The lab will refuse to do the test",
                    "The test results will be misleading, preventing your team from making the right decisions",
                    "The blood test is not related to medication",
                    "You can trust the results regardless"
                ],
                correctAnswer: "The test results will be misleading, preventing your team from making the right decisions",
                explanation: "Your follow-up blood tests are carefully timed. If you don't take your medicine correctly, the test results will be misleading and your team can't make the right care decisions."
            },
            {
                question: "How should you manage your medication supply?",
                options: [
                    "Wait until you have one pill left before refilling",
                    "Refill your prescriptions at least a week before you run out",
                    "Assume the hospital will automatically send them to you",
                    "Only buy one month's supply at a time"
                ],
                correctAnswer: "Refill your prescriptions at least a week before you run out",
                explanation: "Always be aware of your medication supply and refill prescriptions at least a week before you run out to avoid being caught short."
            },
            {
                question: "What is a good strategy for building a medication routine?",
                options: [
                    "Take your pills whenever you happen to remember",
                    "Link taking your medication to another daily activity you never miss, like brushing your teeth",
                    "Keep your pills in your car",
                    "Change the time you take them every day to keep your body guessing"
                ],
                correctAnswer: "Link taking your medication to another daily activity you never miss, like brushing your teeth",
                explanation: "Linking taking your medication to a solid daily habit (like brushing your teeth) helps make it an automatic part of your routine."
            },
            {
                question: "When traveling, where should you keep your medications?",
                options: [
                    "In your checked baggage",
                    "In your hotel room safe",
                    "Always with you in your hand luggage",
                    "Mail them to your destination ahead of time"
                ],
                correctAnswer: "Always with you in your hand luggage",
                explanation: "When traveling, always carry your medications with you in your hand luggage. Never put them in checked baggage in case it gets lost."
            },
            {
                question: "What should you also pack when traveling, in case of delays?",
                options: [
                    "Extra snacks",
                    "Extra doses of your medication",
                    "A good book",
                    "A travel guide"
                ],
                correctAnswer: "Extra doses of your medication",
                explanation: "It's a smart strategy to pack extra doses of your medication when traveling in case of unexpected travel delays."
            },
            {
                question: "Using a weekly pillbox is a good visual check to see if...",
                options: [
                    "You have the correct number of pills",
                    "You have taken your dose for that time",
                    "The pills are the correct color",
                    "You need a refill soon"
                ],
                correctAnswer: "You have taken your dose for that time",
                explanation: "A pill organizer provides a clear, immediate visual check of whether you've already taken your dose, preventing missed or double doses."
            },
            {
                question: "What can even a few missed doses of medication lead to?",
                options: [
                    "Nothing, it's perfectly fine",
                    "It can allow your immune system to begin attacking your kidney",
                    "It saves you money on prescriptions",
                    "It helps you sleep better"
                ],
                correctAnswer: "It can allow your immune system to begin attacking your kidney",
                explanation: "Even a few missed doses can drop the protective shield of medication in your blood and allow your immune system to begin mounting an attack against your kidney."
            }
        ],
        'understanding-rejection': [
            {
                question: "What is 'acute rejection'?",
                options: [
                    "A personal failure by the patient",
                    "An untreatable event meaning the kidney is lost",
                    "A sudden inflammatory response by the immune system, which is often treatable",
                    "A type of cute puppy"
                ],
                correctAnswer: "A sudden inflammatory response by the immune system, which is often treatable",
                explanation: "Acute rejection is the more common type, where the immune system mounts a sudden response. With prompt treatment, most episodes are fully reversible."
            },
            {
                question: "What is often the very first sign of an acute rejection episode?",
                options: [
                    "A rash on your arm",
                    "A sudden craving for pickles",
                    "It often causes no symptoms and is detected by a rise in creatinine on a routine blood test",
                    "Your hair starts to hurt"
                ],
                correctAnswer: "It often causes no symptoms and is detected by a rise in creatinine on a routine blood test",
                explanation: "Often, acute rejection causes no symptoms and is first detected during routine blood tests that show a rise in your creatinine level."
            },
            {
                question: "Which of these symptoms requires an IMMEDIATE call to your transplant team?",
                options: [
                    "Feeling a little tired in the afternoon",
                    "A fever of 100.4°F / 38°C or higher",
                    "A paper cut on your finger",
                    "Forgetting where you put your keys"
                ],
                correctAnswer: "A fever of 100.4°F / 38°C or higher",
                explanation: "A fever is a key warning sign of either rejection or a serious infection and requires you to contact your transplant team immediately."
            },
            {
                question: "What is 'chronic rejection'?",
                options: [
                    "A rejection that happens only on Tuesdays",
                    "A very fast and aggressive rejection",
                    "A much slower process causing gradual damage over months or years",
                    "A rejection that is easily cured"
                ],
                correctAnswer: "A much slower process causing gradual damage over months or years",
                explanation: "Chronic rejection is a slow, smoldering process where the immune system causes gradual damage and scarring to the kidney over a long period."
            },
            {
                question: "How is acute rejection usually treated?",
                options: [
                    "By stopping all medications",
                    "With over-the-counter pain medicine",
                    "By adjusting medication, sometimes requiring a short hospital stay for IV steroids",
                    "By drinking more water"
                ],
                correctAnswer: "By adjusting medication, sometimes requiring a short hospital stay for IV steroids",
                explanation: "Acute rejection is usually treated by adjusting your medication, and may require a short hospital stay for a course of high-dose intravenous (IV) steroids."
            },
            {
                question: "What does sudden weight gain or increased swelling in your legs signal?",
                options: [
                    "You are building muscle",
                    "A potential sign of rejection or that the kidney is not processing fluids correctly",
                    "You ate too much salt for one meal",
                    "Your shoes are too tight"
                ],
                correctAnswer: "A potential sign of rejection or that the kidney is not processing fluids correctly",
                explanation: "Sudden weight gain or swelling (edema) can be a physical sign of rejection and should be reported to your team immediately."
            },
            {
                question: "When does acute rejection most typically occur?",
                options: [
                    "Many years after the transplant",
                    "Within the first few months after transplant",
                    "Only before the transplant surgery",
                    "It never occurs with modern medicine"
                ],
                correctAnswer: "Within the first few months after transplant",
                explanation: "Acute rejection is the more common type, typically occurring within the first few months after transplant, though it can happen anytime."
            },
            {
                question: "What is the best defense against chronic rejection?",
                options: [
                    "A special diet",
                    "Lifelong medication adherence and a healthy lifestyle",
                    "A specific type of exercise",
                    "There is no defense"
                ],
                correctAnswer: "Lifelong medication adherence and a healthy lifestyle",
                explanation: "Lifelong medication adherence and maintaining a healthy lifestyle are the best defenses against the slow, long-term damage of chronic rejection."
            },
            {
                question: "Is transplant rejection considered a personal failure?",
                options: [
                    "Yes, it means the patient did something wrong",
                    "No, it's a manageable medical event where the immune system recognizes the kidney as foreign",
                    "Yes, it means the patient's body is not strong enough",
                    "No, but it is always the donor's fault"
                ],
                correctAnswer: "No, it's a manageable medical event where the immune system recognizes the kidney as foreign",
                explanation: "It's important to understand rejection as a manageable medical event, not a personal failure. It's a natural response from the immune system."
            },
            {
                question: "Why should you call your team if you have flu-like symptoms?",
                options: [
                    "So they can send you a get-well card",
                    "Because they could signal either rejection or a serious infection",
                    "To get a note for work",
                    "Only if the symptoms last for more than a week"
                ],
                correctAnswer: "Because they could signal either rejection or a serious infection",
                explanation: "A general feeling of being unwell, similar to having the flu, could be a sign of rejection and must be reported to your team."
            }
        ],
        'understanding-graft-health': [
            {
                question: "In transplant terms, what is the 'graft'?",
                options: [
                    "A type of skin cream",
                    "The transplanted organ (the new kidney)",
                    "A construction tool",
                    "A payment made to the hospital"
                ],
                correctAnswer: "The transplanted organ (the new kidney)",
                explanation: "You will often hear your new kidney referred to as the 'graft.' Protecting the health of this precious gift is your most important goal."
            },
            {
                question: "What does a rising serum creatinine level in your blood test often indicate?",
                options: [
                    "You are getting stronger",
                    "It's a sign of a happy, well-functioning kidney",
                    "It can be the first signal that the graft is under stress or there's a problem",
                    "You ate too much protein for breakfast"
                ],
                correctAnswer: "It can be the first signal that the graft is under stress or there's a problem",
                explanation: "Creatinine is a waste product healthy kidneys filter. A rising creatinine is often the very first signal that something may be wrong with the graft."
            },
            {
                question: "What is the 'gold standard' or most definitive test to diagnose a problem inside the kidney?",
                options: [
                    "Checking your blood pressure",
                    "A simple urine test",
                    "A kidney biopsy",
                    "Asking you how you feel"
                ],
                correctAnswer: "A kidney biopsy",
                explanation: "A kidney biopsy, where a tiny piece of the kidney is examined under a microscope, is the definitive tool for diagnosis."
            },
            {
                question: "Why is controlling your blood pressure so important for graft health?",
                options: [
                    "High blood pressure makes you feel more energetic",
                    "Consistently high blood pressure can injure the small blood vessels within the kidney over time",
                    "It's only important for your heart, not your kidney",
                    "Low blood pressure is more dangerous for the kidney"
                ],
                correctAnswer: "Consistently high blood pressure can injure the small blood vessels within the kidney over time",
                explanation: "Keeping your blood pressure well-controlled is essential because high blood pressure can injure the delicate blood vessels in the kidney, leading to long-term damage."
            },
            {
                question: "What is proteinuria?",
                options: [
                    "Having too much protein in your diet",
                    "The presence of protein in the urine, which can be a sign of graft stress",
                    "A type of exercise",
                    "A new brand of protein shake"
                ],
                correctAnswer: "The presence of protein in the urine, which can be a sign of graft stress",
                explanation: "Proteinuria is the presence of protein (albumin) in the urine. Since healthy kidneys keep protein in the blood, finding it in the urine can be an early sign of graft damage."
            },
            {
                question: "Who is the most important guardian of your new kidney?",
                options: ["Your surgeon", "Your nephrologist", "Your nurse coordinator", "You, the patient"],
                correctAnswer: "You, the patient",
                explanation: "You are the most important guardian of your new kidney. Your success depends on your unwavering commitment to self-care and communication."
            },
            {
                question: "What is the most important number your team tracks in your blood tests?",
                options: ["Cholesterol", "Red blood cell count", "Serum creatinine", "Blood sugar"],
                correctAnswer: "Serum creatinine",
                explanation: "Serum creatinine is your most important number. A stable, low level is a sign of a well-functioning graft."
            },
            {
                question: "Is a kidney biopsy a dangerous procedure?",
                options: [
                    "Yes, it is very high-risk",
                    "No, it is a safe and common procedure done under ultrasound guidance",
                    "It requires a long hospital stay",
                    "It is only performed in emergencies"
                ],
                correctAnswer: "No, it is a safe and common procedure done under ultrasound guidance",
                explanation: "A kidney biopsy is a safe and common procedure where a tiny piece of the kidney is removed with a needle under ultrasound guidance and local anesthesia."
            },
            {
                question: "What does a stable, low creatinine level signify?",
                options: [
                    "A sign of a problem",
                    "A sign of a happy, well-functioning graft",
                    "You need more protein",
                    "You need to drink less water"
                ],
                correctAnswer: "A sign of a happy, well-functioning graft",
                explanation: "A stable, low creatinine level is a key indicator that your new kidney is happy and functioning well, as it is efficiently filtering waste from the blood."
            },
            {
                question: "Protecting your graft health is a collaborative effort between you and who?",
                options: [
                    "Your family",
                    "Your friends",
                    "Your transplant team",
                    "Your employer"
                ],
                correctAnswer: "Your transplant team",
                explanation: "Protecting graft health is a collaborative effort, a partnership between you and your transplant team, built on monitoring, communication, and self-care."
            }
        ],
        'long-term-care': [
            {
                question: "Why are regular follow-up appointments crucial even when you feel perfectly healthy?",
                options: [
                    "To get a day off work",
                    "To allow the team to catch potential issues like chronic rejection before they become serious",
                    "The hospital just likes to see you",
                    "To check your height and weight"
                ],
                correctAnswer: "To allow the team to catch potential issues like chronic rejection before they become serious",
                explanation: "Scheduled follow-up appointments are the cornerstone of long-term care, allowing your team to catch potential issues early, before they become serious problems."
            },
            {
                question: "What is a key health screening needed because of the increased risk from immunosuppressants?",
                options: [
                    "Eye exams",
                    "Hearing tests",
                    "Screening for cancers, particularly skin cancer",
                    "Dental cleanings"
                ],
                correctAnswer: "Screening for cancers, particularly skin cancer",
                explanation: "Immunosuppressants can increase the risk for certain cancers, particularly skin cancer, so daily sunscreen use and regular skin checks are vital."
            },
            {
                question: "What is a vital way to protect your long-term cardiovascular health?",
                options: [
                    "Eating more red meat",
                    "Managing your blood pressure, cholesterol, and blood sugar",
                    "Avoiding all exercise",
                    "Drinking sugary sodas"
                ],
                correctAnswer: "Managing your blood pressure, cholesterol, and blood sugar",
                explanation: "Heart disease is a leading concern, so managing blood pressure, cholesterol, and blood sugar through diet, exercise, and medication is essential for cardiovascular health."
            },
            {
                question: "What should you do every day to protect yourself from the increased risk of skin cancer?",
                options: [
                    "Wear a hat sometimes",
                    "Daily use of broad-spectrum sunscreen (SPF 30+)",
                    "Only go out at night",
                    "Nothing is required"
                ],
                correctAnswer: "Daily use of broad-spectrum sunscreen (SPF 30+)",
                explanation: "Because your risk for skin cancer is higher, daily use of broad-spectrum sunscreen is a vital part of your long-term care plan."
            },
            {
                question: "What health issue are transplant patients at risk for due to long-term steroid use?",
                options: [
                    "Improved eyesight",
                    "Stronger muscles",
                    "Weaker bones (osteoporosis)",
                    "Thicker hair"
                ],
                correctAnswer: "Weaker bones (osteoporosis)",
                explanation: "Long-term use of steroids and other factors can weaken bones, increasing the risk of osteoporosis. Your doctor may monitor your bone health."
            },
            {
                question: "Are your follow-up appointments still necessary if you feel great?",
                options: [
                    "No, you can cancel them",
                    "Yes, they are non-negotiable for long-term care",
                    "Only if you have a specific complaint",
                    "You can change them to every 5 years"
                ],
                correctAnswer: "Yes, they are non-negotiable for long-term care",
                explanation: "Even when you feel perfectly healthy, your scheduled follow-up appointments are non-negotiable as they are the cornerstone of long-term monitoring and care."
            },
            {
                question: "What is the leading health concern for transplant recipients besides graft health?",
                options: [
                    "Hearing loss",
                    "Heart disease",
                    "Hair loss",
                    "Dental cavities"
                ],
                correctAnswer: "Heart disease",
                explanation: "Protecting your heart is as important as protecting your kidney. Heart disease is a leading concern for transplant recipients."
            },
            {
                question: "What kind of cancer screening is especially important for transplant recipients?",
                options: [
                    "Only colonoscopies",
                    "Only mammograms",
                    "Regular skin checks with a dermatologist",
                    "No cancer screening is needed"
                ],
                correctAnswer: "Regular skin checks with a dermatologist",
                explanation: "Due to the higher risk of skin cancer, you should perform monthly self-examinations and have regular check-ups with a dermatologist."
            },
            {
                question: "What might your doctor recommend to monitor your bone health?",
                options: [
                    "An X-ray of your hand",
                    "A bone density scan (DEXA scan)",
                    "A blood test",
                    "An MRI of your spine"
                ],
                correctAnswer: "A bone density scan (DEXA scan)",
                explanation: "To monitor for osteoporosis, your doctor may recommend a bone density scan (DEXA scan) to check your bone health."
            },
            {
                question: "Receiving a kidney transplant is the ______ of your medical journey.",
                options: [
                    "end",
                    "beginning of a new chapter",
                    "least important part",
                    "final step with no further action needed"
                ],
                correctAnswer: "beginning of a new chapter",
                explanation: "Receiving a kidney transplant is not the end of your medical journey, but rather the beginning of a new chapter in your health management."
            }
        ],
        'diet-and-nutrition': [
            {
                question: "Which food is absolutely forbidden for transplant patients due to its interaction with medications?",
                options: ["Apple", "Banana", "Grapefruit", "Carrots"],
                correctAnswer: "Grapefruit",
                explanation: "This is a non-negotiable rule. Grapefruit and its juice interfere with the metabolism of crucial anti-rejection medications, leading to dangerously high levels."
            },
            {
                question: "What is the main reason to control sodium (salt) in your diet?",
                options: [
                    "Salt is expensive",
                    "To help manage blood pressure and fluid retention",
                    "It makes food taste bad",
                    "It can stain your teeth"
                ],
                correctAnswer: "To help manage blood pressure and fluid retention",
                explanation: "Controlling sodium is crucial for managing blood pressure and fluid retention, both of which are important for protecting your new kidney and cardiovascular health."
            },
            {
                question: "Why is food safety (like avoiding raw meat/fish and washing produce) so important?",
                options: [
                    "Because your suppressed immune system makes you more vulnerable to foodborne illnesses",
                    "It's not important if the food looks clean",
                    "Only for the first week after surgery",
                    "To make cooking more complicated"
                ],
                correctAnswer: "Because your suppressed immune system makes you more vulnerable to foodborne illnesses",
                explanation: "Because your immune system is suppressed by medication, you are more vulnerable to foodborne illnesses. Diligent food safety is essential to prevent infection."
            },
            {
                question: "What kind of fats should you focus on in a heart-healthy transplant diet?",
                options: [
                    "Saturated fats from butter and fatty meats",
                    "Trans fats from baked goods",
                    "Unsaturated fats from olive oil, avocados, and nuts",
                    "All fats should be avoided"
                ],
                correctAnswer: "Unsaturated fats from olive oil, avocados, and nuts",
                explanation: "To protect your cardiovascular health, you should focus on healthy, unsaturated fats found in sources like olive oil, avocados, nuts, and seeds."
            },
            {
                question: "What is the best way to add flavor to food without using salt?",
                options: [
                    "Use extra sugar",
                    "Use more butter",
                    "Experiment with herbs, spices, and lemon juice",
                    "Use processed sauces"
                ],
                correctAnswer: "Experiment with herbs, spices, and lemon juice",
                explanation: "Instead of adding salt, it's recommended to experiment with other flavorings like herbs, spices, garlic, onion, and lemon juice."
            },
            {
                question: "Why is staying well-hydrated with plenty of water important?",
                options: [
                    "It's not important after a transplant",
                    "It helps your new kidney function properly and flush out waste",
                    "It helps you gain weight",
                    "It raises your blood pressure"
                ],
                correctAnswer: "It helps your new kidney function properly and flush out waste",
                explanation: "Drinking plenty of water is essential for your new kidney to function properly, flush out waste products, and stay healthy."
            },
            {
                question: "Which of these foods are often very high in sodium and should be minimized?",
                options: [
                    "Fresh fruits and vegetables",
                    "Processed foods, canned soups, and fast food",
                    "Plain rice and pasta",
                    "Lean chicken and fish"
                ],
                correctAnswer: "Processed foods, canned soups, and fast food",
                explanation: "Processed foods, canned goods, fast food, and frozen dinners are typically loaded with sodium and should be limited to control blood pressure."
            },
            {
                question: "What should you do with all fruits and vegetables before eating them?",
                options: [
                    "Wipe them with a cloth",
                    "Wash them meticulously under running water",
                    "Peel them, but don't wash them",
                    "No washing is necessary"
                ],
                correctAnswer: "Wash them meticulously under running water",
                explanation: "To ensure food safety, you must wash all fruits and vegetables meticulously to remove any potential bacteria or contaminants."
            },
            {
                question: "Besides grapefruit, what related fruits should also be avoided?",
                options: [
                    "Apples and oranges",
                    "Grapes and berries",
                    "Pomelos and Seville oranges",
                    "Lemons and limes"
                ],
                correctAnswer: "Pomelos and Seville oranges",
                explanation: "The rule to avoid grapefruit also extends to related citrus fruits like pomelos and Seville oranges, which contain similar interfering compounds."
            },
            {
                question: "After transplant, the focus of your diet shifts from restriction to what?",
                options: [
                    "Eating anything you want",
                    "Proactive, healthy eating to protect your new kidney",
                    "Only eating your favorite foods",
                    "A very strict, limited diet"
                ],
                correctAnswer: "Proactive, healthy eating to protect your new kidney",
                explanation: "After transplant, your diet shifts from the heavy restrictions of dialysis to a proactive, heart-healthy eating plan designed to protect your graft and overall well-being."
            }
        ],
        'physical-activity-and-exercise': [
            {
                question: "What is a perfect, low-impact exercise to start with after your transplant?",
                options: [
                    "Heavy weightlifting",
                    "Sprinting",
                    "Walking",
                    "Boxing"
                ],
                correctAnswer: "Walking",
                explanation: "Walking is the perfect post-transplant exercise. It is low-impact, free, and you can easily control the pace and intensity as you regain strength."
            },
            {
                question: "Which types of activities must be avoided for life to protect your new kidney?",
                options: [
                    "Gardening",
                    "Swimming",
                    "Contact sports like football, wrestling, or martial arts",
                    "Cooking"
                ],
                correctAnswer: "Contact sports like football, wrestling, or martial arts",
                explanation: "To protect your new kidney, which is not protected by your rib cage, any contact sports where you could receive a blow must be avoided permanently."
            },
            {
                question: "What should you do if you feel sharp pain or dizziness during exercise?",
                options: [
                    "Push through the pain to get stronger",
                    "Increase your speed",
                    "Stop and rest, and inform your team if it continues",
                    "Immediately lift some heavy weights"
                ],
                correctAnswer: "Stop and rest, and inform your team if it continues",
                explanation: "It's essential to listen to your body. If you feel sharp pain, dizziness, or unusual shortness of breath, it's a signal to stop and rest."
            },
            {
                question: "When is it safe to start swimming after a transplant?",
                options: [
                    "The day after surgery",
                    "Once your surgical incision is completely healed and your team has given approval",
                    "Never, swimming is not allowed",
                    "After one year"
                ],
                correctAnswer: "Once your surgical incision is completely healed and your team has given approval",
                explanation: "Swimming is a fantastic workout, but you must wait until your incision is completely healed and your team gives you the green light to prevent infection."
            },
            {
                question: "What is a major benefit of regular physical activity for transplant recipients?",
                options: [
                    "It increases your risk of rejection",
                    "It helps control weight, blood pressure, and blood sugar",
                    "It weakens your bones",
                    "It's not beneficial"
                ],
                correctAnswer: "It helps control weight, blood pressure, and blood sugar",
                explanation: "Regular exercise plays a critical role in controlling weight, lowering blood pressure, managing blood sugar, and strengthening bones."
            },
            {
                question: "What is the key to beginning an exercise program after surgery?",
                options: [
                    "Starting with the most intense workout possible",
                    "Starting slowly and safely, and listening to your body",
                    "Only exercising once a month",
                    "Joining a professional sports team"
                ],
                correctAnswer: "Starting slowly and safely, and listening to your body",
                explanation: "Your body is recovering from major surgery, so it's essential to start slowly and safely. The goal is gradual, consistent progress."
            },
            {
                question: "Where is your transplanted kidney located?",
                options: [
                    "In your back, protected by your ribs",
                    "In your chest",
                    "In your lower abdomen, not protected by the rib cage",
                    "In your shoulder"
                ],
                correctAnswer: "In your lower abdomen, not protected by the rib cage",
                explanation: "Your new kidney is located in your lower abdomen and is not protected by your rib cage, which is why avoiding contact sports is so important."
            },
            {
                question: "What kind of exercise can you do with a stationary bike?",
                options: [
                    "Only high-intensity sprints",
                    "It's not a recommended form of exercise",
                    "Build cardiovascular fitness without putting stress on your joints",
                    "Only for professional cyclists"
                ],
                correctAnswer: "Build cardiovascular fitness without putting stress on your joints",
                explanation: "A stationary bike is an excellent and safe way to build cardiovascular fitness without the impact stress on your joints."
            },
            {
                question: "Should you consult your transplant team before starting a new exercise regimen?",
                options: [
                    "No, it's not necessary",
                    "Only for high-contact sports",
                    "Yes, always consult your transplant team first",
                    "Only if you feel pain"
                ],
                correctAnswer: "Yes, always consult your transplant team first",
                explanation: "It is essential to always consult your transplant team before beginning any new exercise regimen to ensure it is safe for your specific condition."
            },
            {
                question: "Besides contact sports, what other activity should be avoided long-term to prevent hernias?",
                options: [
                    "Walking",
                    "Very heavy lifting",
                    "Stretching",
                    "Yoga"
                ],
                correctAnswer: "Very heavy lifting",
                explanation: "It's wise to continue to avoid very heavy lifting to prevent hernias from developing near your incision site."
            }
        ],
        'post-transplant-diabetes': [
            {
                question: "What is a primary driver of Post-Transplant Diabetes Mellitus (PTDM)?",
                options: [
                    "Eating too much fruit",
                    "Certain immunosuppressive medications like steroids and tacrolimus",
                    "Not sleeping enough",
                    "Drinking too much water"
                ],
                correctAnswer: "Certain immunosuppressive medications like steroids and tacrolimus",
                explanation: "The primary drivers of PTDM are the essential immunosuppressive medications, particularly steroids and tacrolimus, which can interfere with insulin use."
            },
            {
                question: "What is the cornerstone and first step in managing PTDM?",
                options: [
                    "Starting insulin injections immediately",
                    "Lifestyle modifications like diet and exercise",
                    "Trying a new herbal tea",
                    "Stopping your transplant medications"
                ],
                correctAnswer: "Lifestyle modifications like diet and exercise",
                explanation: "The cornerstone of management is lifestyle modification. This involves adopting a diabetic-friendly diet and engaging in regular physical activity."
            },
            {
                question: "Why is it important to control high blood sugar after a transplant?",
                options: [
                    "It makes your hair grow faster",
                    "It's not important and can be ignored",
                    "Uncontrolled high blood sugar can harm the new kidney and your heart over time",
                    "It helps you lose weight"
                ],
                correctAnswer: "Uncontrolled high blood sugar can harm the new kidney and your heart over time",
                explanation: "Effectively managing PTDM is crucial, as uncontrolled high blood sugar can, over time, harm the small blood vessels in your new kidney and increase heart disease risk."
            },
            {
                question: "Can PTDM occur in patients with no prior history of diabetes?",
                options: [
                    "No, only in pre-existing diabetics",
                    "Yes, it can occur even in individuals with no prior history of diabetes",
                    "It is extremely rare",
                    "Only in older patients"
                ],
                correctAnswer: "Yes, it can occur even in individuals with no prior history of diabetes",
                explanation: "PTDM can occur even in individuals with no prior history of diabetes, primarily due to the side effects of transplant medications."
            },
            {
                question: "What is the role of a dietitian in managing PTDM?",
                options: [
                    "To prescribe medication",
                    "To help you adopt a diabetic-friendly diet",
                    "To perform surgery",
                    "They have no role"
                ],
                correctAnswer: "To help you adopt a diabetic-friendly diet",
                explanation: "The management approach involves working with a dietitian to adopt a diet that limits sugars and refined carbohydrates."
            },
            {
                question: "What might the transplant team do with your medications if you develop PTDM?",
                options: [
                    "Double the dose of steroids",
                    "Stop all medications",
                    "Adjust the regimen to one with less impact on blood sugar",
                    "Nothing, they cannot be changed"
                ],
                correctAnswer: "Adjust the regimen to one with less impact on blood sugar",
                explanation: "In some cases, your team may be able to adjust your anti-rejection medication regimen to one that has less impact on blood sugar."
            },
            {
                question: "Are insulin injections always required for PTDM?",
                options: [
                    "Yes, always",
                    "No, they are a last resort if pills and lifestyle changes are not enough",
                    "Only for patients over 60",
                    "They are never used"
                ],
                correctAnswer: "No, they are a last resort if pills and lifestyle changes are not enough",
                explanation: "If lifestyle changes and oral medications are not sufficient, insulin injections may be required, but sometimes only temporarily."
            },
            {
                question: "Which of these is a risk factor for developing PTDM?",
                options: [
                    "Being underweight",
                    "Having no family history of diabetes",
                    "Being overweight or having a family history of diabetes",
                    "Being very young"
                ],
                correctAnswer: "Being overweight or having a family history of diabetes",
                explanation: "Other factors that can increase your risk for PTDM include being overweight, having a family history of diabetes, or being of an older age."
            },
            {
                question: "How does the team monitor for PTDM?",
                options: [
                    "By checking your temperature",
                    "By monitoring your blood sugar levels very closely",
                    "By measuring your height",
                    "By asking how you feel"
                ],
                correctAnswer: "By monitoring your blood sugar levels very closely",
                explanation: "Your transplant team will monitor your blood sugar levels very closely, especially in the first few months after your surgery when medication doses are highest."
            },
            {
                question: "Can PTDM be resolved for many patients?",
                options: [
                    "No, it is always permanent",
                    "Yes, for many patients, lifestyle changes are enough to resolve the issue",
                    "Only with surgery",
                    "It resolves on its own without any changes"
                ],
                correctAnswer: "Yes, for many patients, lifestyle changes are enough to resolve the issue",
                explanation: "For many patients, making lifestyle changes like improving diet and increasing exercise is enough to resolve the issue of PTDM."
            }
        ],
        'mental-health-support': [
            {
                question: "Is it normal to feel a mix of emotions like joy, anxiety, and even sadness after a transplant?",
                options: [
                    "No, you should only feel happy",
                    "Yes, experiencing an emotional rollercoaster is a normal part of this major life event",
                    "It means the transplant is failing",
                    "Only if you didn't like your donor"
                ],
                correctAnswer: "Yes, experiencing an emotional rollercoaster is a normal part of this major life event",
                explanation: "It is completely normal and expected to experience a wide spectrum of feelings. The path of a transplant recipient is often described as an emotional rollercoaster."
            },
            {
                question: "What is a helpful strategy for managing emotional stress during the transplant journey?",
                options: [
                    "Keeping all your feelings to yourself",
                    "Talking about your feelings with family, friends, or your transplant team",
                    "Making major life decisions impulsively",
                    "Stopping all physical activity"
                ],
                correctAnswer: "Talking about your feelings with family, friends, or your transplant team",
                explanation: "Don't carry the emotional weight alone. Sharing what you're going through with trusted people can be incredibly therapeutic and make you feel less isolated."
            },
            {
                question: "What is a key benefit of joining a patient support group?",
                options: [
                    "You get free medication",
                    "It's a way to complain about doctors",
                    "Connecting with peers who truly understand your specific journey can be a source of comfort and validation",
                    "It is not beneficial"
                ],
                correctAnswer: "Connecting with peers who truly understand your specific journey can be a source of comfort and validation",
                explanation: "Sharing experiences with people who truly understand your specific journey can be a powerful source of comfort, validation, and practical advice."
            },
            {
                question: "What effect can gentle physical activity have on your mental health?",
                options: [
                    "It has no effect",
                    "It is a potent mood booster that can have a significant positive impact",
                    "It can make you feel more depressed",
                    "It is not recommended"
                ],
                correctAnswer: "It is a potent mood booster that can have a significant positive impact",
                explanation: "Gentle physical activity is a potent mood booster. Even a short daily walk can release endorphins and have a significant positive impact on your mental state."
            },
            {
                question: "Is asking for professional support from a social worker or psychologist a sign of weakness?",
                options: [
                    "Yes, you should handle it alone",
                    "No, it's a sign you are taking your total health seriously",
                    "It means you are not grateful for the transplant",
                    "Only weak people need therapy"
                ],
                correctAnswer: "No, it's a sign you are taking your total health seriously",
                explanation: "Actively caring for your mental health is a sign of strength, not weakness. Seeking professional support is a sign you are taking your total health seriously."
            },
            {
                question: "Which medication can sometimes influence or contribute to feelings of low mood or depression?",
                options: [
                    "Aspirin",
                    "Antibiotics",
                    "Steroids (like Prednisolone)",
                    "Pain medication"
                ],
                correctAnswer: "Steroids (like Prednisolone)",
                explanation: "Some patients may experience periods of low mood or depression, which can sometimes be influenced by medications like steroids."
            },
            {
                question: "Is it normal to feel a sense of guilt, especially if you received an organ from a deceased donor?",
                options: [
                    "No, that is a very unusual feeling",
                    "Yes, some patients feel a sense of guilt or a heavy sense of responsibility",
                    "It means you are not a good person",
                    "These feelings should be ignored"
                ],
                correctAnswer: "Yes, some patients feel a sense of guilt or a heavy sense of responsibility",
                explanation: "Some patients feel a sense of guilt or a heavy sense of responsibility, especially with a deceased donor. This is a normal part of the complex emotional experience."
            },
            {
                question: "What is the first step in caring for your mental and emotional health?",
                options: [
                    "Ignoring your feelings",
                    "Prioritizing it just as much as your physical health",
                    "Focusing only on the new kidney",
                    "Waiting for the feelings to go away on their own"
                ],
                correctAnswer: "Prioritizing it just as much as your physical health",
                explanation: "Prioritizing your mental and emotional health is just as vital as caring for the physical health of your new kidney."
            },
            {
                question: "Who are the experts in your transplant program trained to help you navigate emotional challenges?",
                options: [
                    "The surgeons",
                    "The billing department",
                    "Social workers and psychologists",
                    "The hospital security guards"
                ],
                correctAnswer: "Social workers and psychologists",
                explanation: "Your transplant program has social workers and psychologists who are experts in helping patients navigate the emotional challenges of transplantation."
            },
            {
                question: "What is the benefit of voicing your feelings?",
                options: [
                    "It makes others uncomfortable",
                    "It can be incredibly therapeutic and can help you feel less isolated",
                    "There is no benefit",
                    "It is a sign of weakness"
                ],
                correctAnswer: "It can be incredibly therapeutic and can help you feel less isolated",
                explanation: "Voicing your feelings to trusted individuals is a key strategy for emotional well-being as it can be therapeutic and reduce feelings of isolation."
            }
        ],
        'understanding-living-donation': [
            {
                question: "What is a major advantage of receiving a kidney from a living donor?",
                options: [
                    "The surgery is always shorter",
                    "The kidney typically lasts longer and the surgery can be scheduled",
                    "It costs less money",
                    "You don't need to take anti-rejection medication"
                ],
                correctAnswer: "The kidney typically lasts longer and the surgery can be scheduled",
                explanation: "Kidneys from living donors have significant advantages: they last longer and allow the surgery to be scheduled at an optimal time."
            },
            {
                question: "Who can be a living donor?",
                options: [
                    "Only an identical twin",
                    "Only a parent or sibling",
                    "A family member, spouse, friend, or even an altruistic stranger",
                    "Anyone who is over 6 feet tall"
                ],
                correctAnswer: "A family member, spouse, friend, or even an altruistic stranger",
                explanation: "A living donor can be a close family member, a more distant relative, a spouse, a close friend, or even an altruistic stranger."
            },
            {
                question: "What is the highest priority for the transplant team during the donor evaluation process?",
                options: [
                    "Getting the surgery done as quickly as possible",
                    "Protecting the donor's health and interests",
                    "Making sure the recipient gets the day off work",
                    "Completing the paperwork"
                ],
                correctAnswer: "Protecting the donor's health and interests",
                explanation: "The donor's well-being is the highest priority throughout the entire process. The evaluation is focused on donor safety."
            },
            {
                question: "What is a fundamental requirement for a potential living donor's decision?",
                options: [
                    "It must be done for financial gain",
                    "It must be completely voluntary and free from any pressure",
                    "It must be decided by the recipient's family",
                    "It must be a quick decision"
                ],
                correctAnswer: "It must be completely voluntary and free from any pressure",
                explanation: "A fundamental requirement is that the donor is making a completely voluntary and well-informed decision, entirely free from any form of pressure or coercion."
            },
            {
                question: "How does a living donor transplant affect the waiting list?",
                options: [
                    "It makes the waiting list longer",
                    "It allows the recipient to avoid a potentially long and uncertain wait on the deceased donor list",
                    "It has no effect on the waiting list",
                    "It moves the recipient to the bottom of the list"
                ],
                correctAnswer: "It allows the recipient to avoid a potentially long and uncertain wait on the deceased donor list",
                explanation: "Living donation allows the surgery to be scheduled, avoiding a potentially long and uncertain wait on the deceased donor list."
            },
            {
                question: "What kind of health must a potential living donor be in?",
                options: [
                    "Average health",
                    "Slightly unwell",
                    "Excellent physical and mental health",
                    "It doesn't matter"
                ],
                correctAnswer: "Excellent physical and mental health",
                explanation: "The fundamental requirements for any potential donor are that they must be in excellent physical and mental health."
            },
            {
                question: "Does the living donor share a medical team with the recipient?",
                options: [
                    "Yes, they share the same doctors and nurses",
                    "No, the donor has their own dedicated and independent team of advocates",
                    "They only share a surgeon",
                    "They only share a social worker"
                ],
                correctAnswer: "No, the donor has their own dedicated and independent team of advocates",
                explanation: "The potential donor is assigned their own dedicated team of advocates whose sole responsibility is to protect the donor's health and interests."
            },
            {
                question: "Which chronic condition typically disqualifies someone from being a living donor?",
                options: [
                    "Seasonal allergies",
                    "Uncontrolled high blood pressure or diabetes",
                    "Mild acne",
                    "Needing glasses to read"
                ],
                correctAnswer: "Uncontrolled high blood pressure or diabetes",
                explanation: "Potential donors must be free from chronic conditions like uncontrolled high blood pressure, diabetes, cancer, or significant heart disease."
            },
            {
                question: "How do kidneys from living donors generally compare to those from deceased donors?",
                options: [
                    "They are of lower quality",
                    "They typically begin working immediately, function better, and last longer",
                    "There is no difference in quality",
                    "They take longer to start working"
                ],
                correctAnswer: "They typically begin working immediately, function better, and last longer",
                explanation: "Kidneys from living donors have significant advantages: they typically begin working immediately, function more effectively, and last, on average, many years longer."
            },
            {
                question: "What is the term for a stranger who donates a kidney to someone in need?",
                options: [
                    "A paid donor",
                    "An altruistic stranger",
                    "A volunteer",
                    "A temporary donor"
                ],
                correctAnswer: "An altruistic stranger",
                explanation: "A living donor can even be an altruistic stranger who is moved to help someone in need, making a purely selfless decision."
            }
        ],
        'donor-eligibility': [
            {
                question: "What is the absolute highest priority in the world of living donation?",
                options: [
                    "The recipient's comfort",
                    "The health and safety of the donor",
                    "The speed of the surgery",
                    "The cost of the procedure"
                ],
                correctAnswer: "The health and safety of the donor",
                explanation: "In the world of living donation, the health and safety of the donor is the absolute highest priority."
            },
            {
                question: "Which of these medical conditions usually prevents a person from being a living kidney donor?",
                options: [
                    "Having a history of a broken leg",
                    "Wearing contact lenses",
                    "Having diabetes",
                    "Being a vegetarian"
                ],
                correctAnswer: "Having diabetes",
                explanation: "Certain pre-existing health conditions like diabetes (both Type 1 and Type 2) make it unsafe for an individual to donate a kidney."
            },
            {
                question: "What is a fundamental requirement for any potential living donor's decision?",
                options: [
                    "They must be wealthy",
                    "They must be making a completely voluntary decision, free from pressure or financial gain",
                    "They must be a relative of the recipient",
                    "They must have the same hair color as the recipient"
                ],
                correctAnswer: "They must be making a completely voluntary decision, free from pressure or financial gain",
                explanation: "A core requirement is that the decision must be fully voluntary, free of any pressure, coercion, or financial gain."
            },
            {
                question: "What is the typical age range for a potential living donor?",
                options: [ "25-35", "18-70", "40-50", "Over 65 only" ],
                correctAnswer: "18-70",
                explanation: "While every center has specific guidelines, a potential donor is typically an adult between the ages of 18 and 70."
            },
            {
                question: "Why are the eligibility criteria for donors so strict?",
                options: [
                    "To make the process difficult",
                    "To ensure the donor can live a long, healthy life with one kidney",
                    "Because the hospital has too many donors already",
                    "To save the hospital money"
                ],
                correctAnswer: "To ensure the donor can live a long, healthy life with one kidney",
                explanation: "The eligibility criteria are intentionally strict to ensure that the donor is not placed at any undue risk and can live a long, healthy life with one kidney."
            },
            {
                question: "Does having a compatible blood type guarantee you can be a donor?",
                options: [
                    "Yes, it's the only requirement",
                    "No, you must also have normal kidney function and be in good overall health",
                    "Yes, as long as you are the right age",
                    "No, you must also be a close relative"
                ],
                correctAnswer: "No, you must also have normal kidney function and be in good overall health",
                explanation: "Blood type compatibility is just one requirement. A donor must also have normal kidney function and be in excellent overall health."
            },
            {
                question: "What is a common reason related to weight that might prevent donation?",
                options: [
                    "Being too tall",
                    "Being too short",
                    "Significant obesity (a high BMI)",
                    "Being underweight"
                ],
                correctAnswer: "Significant obesity (a high BMI)",
                explanation: "Significant obesity, indicated by a high Body Mass Index (BMI), increases surgical risk and is a condition that can prevent donation."
            },
            {
                question: "Is it possible to donate if you have a history of recurrent kidney stones?",
                options: [
                    "Yes, it is always allowed",
                    "No, this usually prevents donation",
                    "Only if the stones were small",
                    "Only if you promise not to get them again"
                ],
                correctAnswer: "No, this usually prevents donation",
                explanation: "A history of recurrent kidney stones is one of the medical conditions that usually makes it unsafe for an individual to donate a kidney."
            },
            {
                question: "Can someone with active or recently treated cancer be a living donor?",
                options: [
                    "Yes, without any restrictions",
                    "No, this is a medical condition that usually prevents donation",
                    "Only if the cancer was in their foot",
                    "Yes, if they get permission from their family"
                ],
                correctAnswer: "No, this is a medical condition that usually prevents donation",
                explanation: "To protect the donor's long-term health, having an active or recently treated cancer is a condition that typically prevents donation."
            },
            {
                question: "How is the final decision on a donor's eligibility made?",
                options: [
                    "Based on a single blood test",
                    "The donor decides on their own",
                    "The recipient's family decides",
                    "It is based on a careful evaluation of the donor's individual health profile"
                ],
                correctAnswer: "It is based on a careful evaluation of the donor's individual health profile",
                explanation: "Every potential donor is evaluated carefully on an individual basis, and the final decision always rests on what is safest for the donor."
            }
        ],
        'donor-evaluation': [
            {
                question: "What is a key principle of the donor evaluation process?",
                options: [
                    "The donor and recipient share the same medical team",
                    "The donor has their own independent team whose only job is to protect the donor",
                    "The process is rushed to get it done quickly",
                    "The recipient's needs are the only priority"
                ],
                correctAnswer: "The donor has their own independent team whose only job is to protect the donor",
                explanation: "A key principle is that the donor has their own independent team, completely separate from the recipient's team, to ensure the donor's best interests are the top priority."
            },
            {
                question: "What does the CT scan provide for the surgeons during a donor evaluation?",
                options: [
                    "A picture of the donor's brain",
                    "A detailed 'roadmap' of the donor's kidney anatomy and blood vessels",
                    "A test of the donor's hearing",
                    "A measure of the donor's height"
                ],
                correctAnswer: "A detailed 'roadmap' of the donor's kidney anatomy and blood vessels",
                explanation: "A CT scan of the abdomen provides the surgeons with a detailed 'roadmap' of the donor's kidney anatomy and blood vessels to plan the surgery."
            },
            {
                question: "Who makes the final determination on whether it is safe for a potential donor to donate?",
                options: [
                    "The potential donor alone",
                    "The recipient's family",
                    "The entire transplant team, after a meticulous review",
                    "The hospital's financial department"
                ],
                correctAnswer: "The entire transplant team, after a meticulous review",
                explanation: "After all information is gathered, the entire transplant team convenes to meticulously review the results and collectively make the final determination."
            },
            {
                question: "What is often the first step in the evaluation process?",
                options: [
                    "A full-day of tests at the hospital",
                    "A detailed health questionnaire and initial blood tests",
                    "A meeting with the hospital CEO",
                    "A fitness test"
                ],
                correctAnswer: "A detailed health questionnaire and initial blood tests",
                explanation: "The process often begins with a detailed health questionnaire and initial blood tests to confirm blood type and basic kidney function, which can often be done remotely."
            },
            {
                question: "Is the donor evaluation process confidential?",
                options: [
                    "No, the results are public",
                    "Yes, it is a comprehensive, confidential, and careful process",
                    "Only some parts are confidential",
                    "It is only confidential if the donor pays extra"
                ],
                correctAnswer: "Yes, it is a comprehensive, confidential, and careful process",
                explanation: "The donor evaluation is a confidential process designed to protect the potential donor's privacy and health."
            },
            {
                question: "During the evaluation, the potential donor meets with a social worker or psychologist to ensure...",
                options: [
                    "They are wealthy enough",
                    "They are a good person",
                    "The decision is voluntary and well-supported",
                    "They can cook well"
                ],
                correctAnswer: "The decision is voluntary and well-supported",
                explanation: "The donor meets with a social worker or psychologist to ensure their decision is voluntary, they are well-supported, and they understand the process."
            },
            {
                question: "What is a 24-hour urine collection used for?",
                options: [
                    "To check for hydration levels",
                    "To provide an in-depth analysis of kidney function",
                    "To see what the donor ate",
                    "It is not a real test"
                ],
                correctAnswer: "To provide an in-depth analysis of kidney function",
                explanation: "A 24-hour urine collection is part of the in-depth medical tests to provide a comprehensive analysis of the donor's kidney function."
            },
            {
                question: "Why is it important that the donor has an independent medical team?",
                options: [
                    "To make the process more complicated",
                    "To ensure there is no conflict of interest and the donor's health is the only priority",
                    "It is a legal requirement with no medical benefit",
                    "To increase the cost of the evaluation"
                ],
                correctAnswer: "To ensure there is no conflict of interest and the donor's health is the only priority",
                explanation: "Having a separate team ensures that the donor's best interests are always the top priority, free from any conflict of interest related to the recipient's needs."
            },
            {
                question: "The full-day evaluation at the transplant center includes both medical tests and what else?",
                options: [
                    "A tour of the city",
                    "Consultations with the transplant team",
                    "A gourmet lunch",
                    "A physical fitness exam"
                ],
                correctAnswer: "Consultations with the transplant team",
                explanation: "The full-day evaluation includes both in-depth medical tests and consultations with the key members of the donor's transplant team."
            },
            {
                question: "Who informs the potential donor of the team's final decision?",
                options: [
                    "The recipient",
                    "A letter in the mail",
                    "A member of the donor's dedicated medical team",
                    "The hospital billing department"
                ],
                correctAnswer: "A member of the donor's dedicated medical team",
                explanation: "After the team review, the donor is informed of the team's final decision about their eligibility to donate."
            }
        ],
        'psychological-assessment': [
            {
                question: "What is the primary purpose of the psychological assessment for a donor?",
                options: [
                    "It's a difficult test that many people fail",
                    "It's a supportive conversation to ensure the donor's decision is emotionally healthy and voluntary",
                    "It's a test of the donor's intelligence",
                    "It's a negotiation about payment for the kidney"
                ],
                correctAnswer: "It's a supportive conversation to ensure the donor's decision is emotionally healthy and voluntary",
                explanation: "The assessment is not a test to be passed or failed, but rather a supportive and confidential conversation to ensure a donor is making a decision that is right for them."
            },
            {
                question: "The assessment helps to verify that the donor understands the risks and has a good...",
                options: [
                    "Sense of humor",
                    "Fashion sense",
                    "Support system of family and friends for their recovery",
                    "Singing voice"
                ],
                correctAnswer: "Support system of family and friends for their recovery",
                explanation: "A key goal is to discuss the donor's social support network—the family and friends who will be there to help them during their recovery."
            },
            {
                question: "The psychological assessment provides a safe space for the donor to...",
                options: [
                    "Get a prescription for medication",
                    "Voice any worries, fears, or hesitations they might have",
                    "Ask for a different surgeon",
                    "Meet other donors"
                ],
                correctAnswer: "Voice any worries, fears, or hesitations they might have",
                explanation: "The assessment provides a safe and private space for the potential donor to voice any worries, fears, or hesitations they might have about the process."
            },
            {
                question: "What does the term 'informed consent' mean in this context?",
                options: [
                    "The donor has been informed of the hospital's visiting hours",
                    "The donor has a clear and realistic understanding of the surgery, risks, and recovery",
                    "The donor has consented to be in a research study",
                    "The donor has been informed of the cost"
                ],
                correctAnswer: "The donor has a clear and realistic understanding of the surgery, risks, and recovery",
                explanation: "A goal of the assessment is to verify 'informed consent,' meaning the donor fully understands all aspects of the donation process."
            },
            {
                question: "The assessment aims to confirm that the decision to donate is free from what?",
                options: [
                    "Any happiness",
                    "Family support",
                    "Pressure, coercion, or promise of financial gain",
                    "Medical advice"
                ],
                correctAnswer: "Pressure, coercion, or promise of financial gain",
                explanation: "It is critical to confirm that the decision is entirely the donor's own, made freely and without any external pressure or financial incentive."
            },
            {
                question: "Who typically conducts the psychological assessment?",
                options: [
                    "The surgeon",
                    "A social worker or psychologist",
                    "The recipient's primary doctor",
                    "A hospital administrator"
                ],
                correctAnswer: "A social worker or psychologist",
                explanation: "The assessment is a confidential conversation with a professional, such as a social worker or psychologist, who is part of the donor's advocacy team."
            },
            {
                question: "What is a key topic of discussion regarding the donor's mental health?",
                options: [
                    "Their favorite movies",
                    "Their childhood memories",
                    "To assess for any existing conditions that could make the stress of donation difficult",
                    "Their political views"
                ],
                correctAnswer: "To assess for any existing conditions that could make the stress of donation difficult",
                explanation: "The conversation assesses for any existing mental health conditions, like severe depression or anxiety, that could make the stress of surgery and recovery more challenging."
            },
            {
                question: "Is the psychological assessment confidential?",
                options: [
                    "No, the details are shared with the recipient",
                    "Yes, it is a supportive and confidential conversation",
                    "Only if the donor requests it",
                    "No, it is part of a public record"
                ],
                correctAnswer: "Yes, it is a supportive and confidential conversation",
                explanation: "The assessment is a confidential conversation, providing a private space for the donor to discuss their feelings and motivations."
            },
            {
                question: "What is the guiding principle of the psychological assessment?",
                options: [
                    "The hospital's reputation",
                    "The recipient's happiness",
                    "The donor's total well-being—physical and emotional",
                    "The speed of the transplant process"
                ],
                correctAnswer: "The donor's total well-being—physical and emotional",
                explanation: "The donor's total well-being, both physical and emotional, is always the guiding principle of the assessment process."
            },
            {
                question: "The assessment explores the donor's personal reasons for wanting to donate, also known as their...",
                options: [
                    "Hobbies",
                    "Motivations",
                    "Daily routine",
                    "Dietary preferences"
                ],
                correctAnswer: "Motivations",
                explanation: "The assessment includes an open dialogue about the donor's personal motivations for wanting to give this extraordinary gift."
            }
        ],
        'donor-surgery': [
            {
                question: "Why might a surgeon choose an open nephrectomy over a laparoscopic one?",
                options: [
                    "Because it is an easier surgery",
                    "For reasons related to the donor's specific anatomy or safety",
                    "Because the hospital prefers older techniques",
                    "If the donor requests it"
                ],
                correctAnswer: "For reasons related to the donor's specific anatomy or safety",
                explanation: "The decision to perform an open nephrectomy is always made with the donor's ultimate safety as the number one priority, often due to anatomy or previous surgeries."
            },
            {
                question: "How does the incision in an open nephrectomy compare to a laparoscopic one?",
                options: [
                    "It is much smaller",
                    "There are multiple small incisions",
                    "It is a single, larger incision",
                    "The incisions are identical"
                ],
                correctAnswer: "It is a single, larger incision",
                explanation: "In an open nephrectomy, the surgeon makes a single, larger incision, typically on the donor's side or upper abdomen, unlike the small keyhole incisions of laparoscopy."
            },
            {
                question: "What can a donor expect regarding their hospital stay after an open nephrectomy?",
                options: [
                    "They go home the same day",
                    "A longer hospital stay, typically 2 to 4 days",
                    "A shorter hospital stay than with laparoscopy",
                    "A hospital stay of several weeks"
                ],
                correctAnswer: "A longer hospital stay, typically 2 to 4 days",
                explanation: "Recovery from an open nephrectomy generally involves a longer hospital stay, typically around 2 to 4 days, compared to a laparoscopic procedure."
            },
            {
                question: "Why is post-operative pain typically more significant after an open surgery?",
                options: [
                    "Because doctors use less pain medication",
                    "Because the incision is larger and cuts through more muscle tissue",
                    "It's not more significant, it's less",
                    "The pain is only psychological"
                ],
                correctAnswer: "Because the incision is larger and cuts through more muscle tissue",
                explanation: "Because the incision is larger and involves cutting through more muscle tissue, donors can expect more significant post-operative pain, which is carefully managed."
            },
            {
                question: "How long is the typical recovery period before returning to normal activities after open surgery?",
                options: ["1-2 weeks", "3-4 weeks", "6 to 8 weeks", "4 months"],
                correctAnswer: "6 to 8 weeks",
                explanation: "Donors can expect a longer period of restricted activity and a slower return to work and normal daily life, often requiring 6 to 8 weeks."
            },
            {
                question: "What is the primary factor in deciding which surgical method to use?",
                options: [
                    "The surgeon's preference",
                    "The cost of the procedure",
                    "Providing the safest possible operation for the individual donor",
                    "The donor's insurance plan"
                ],
                correctAnswer: "Providing the safest possible operation for the individual donor",
                explanation: "The choice of surgical method is always based on providing the safest possible operation for the individual donor's specific circumstances."
            },
            {
                question: "Does an open nephrectomy have a worse long-term outcome for the donor's health?",
                options: [
                    "Yes, it is much riskier long-term",
                    "No, the long-term outcome for the donor's health is just as excellent",
                    "The long-term outcomes are unknown",
                    "Yes, it significantly shortens life expectancy"
                ],
                correctAnswer: "No, the long-term outcome for the donor's health is just as excellent",
                explanation: "While the recovery is more demanding, the long-term outcome for the donor's health is just as excellent as with a laparoscopic surgery."
            },
            {
                question: "What is a nephrectomy?",
                options: [
                    "The surgery to remove a lung",
                    "The surgery to remove a kidney",
                    "The surgery to remove the appendix",
                    "The surgery to repair a hernia"
                ],
                correctAnswer: "The surgery to remove a kidney",
                explanation: "The surgery to remove a donor's kidney is called a nephrectomy."
            },
            {
                question: "How does the surgeon see the kidney during an open nephrectomy?",
                options: [
                    "Using a camera on a monitor",
                    "By directly seeing and accessing the kidney through the incision",
                    "Using an X-ray machine",
                    "They work by feel only"
                ],
                correctAnswer: "By directly seeing and accessing the kidney through the incision",
                explanation: "The larger incision allows the surgeon to directly see and access the kidney without the use of a camera."
            },
            {
                question: "What is a reason a surgeon might choose open surgery?",
                options: [
                    "The donor has blue eyes",
                    "The donor is very tall",
                    "The donor has scar tissue from previous abdominal surgeries",
                    "The donor has a tattoo"
                ],
                correctAnswer: "The donor has scar tissue from previous abdominal surgeries",
                explanation: "An open surgery might be chosen for various reasons, such as the presence of scar tissue from previous abdominal surgeries which can make laparoscopy difficult."
            }
        ],
        'donor-recovery': [
            {
                question: "How long do most living donors stay in the hospital?",
                options: [
                    "One week",
                    "Three to four days",
                    "One or two nights",
                    "They go home the same day"
                ],
                correctAnswer: "One or two nights",
                explanation: "Thanks to minimally invasive techniques, the hospital stay for a donor is brief, often just one or two nights."
            },
            {
                question: "What activity restriction is essential for the first 4-6 weeks to prevent a hernia?",
                options: [
                    "Sleeping",
                    "Walking",
                    "Lifting anything heavier than 5 kg",
                    "Watching TV"
                ],
                correctAnswer: "Lifting anything heavier than 5 kg",
                explanation: "It's essential to not lift anything heavier than 5 kg for 4-6 weeks to allow your abdominal muscles to heal properly and prevent a hernia."
            },
            {
                question: "When can a donor with a sedentary (desk) job often return to work?",
                options: [
                    "Within a week",
                    "Within 2-3 weeks",
                    "After 2 months",
                    "After 6 months"
                ],
                correctAnswer: "Within 2-3 weeks",
                explanation: "Most people with sedentary (desk) jobs can return to work within a relatively short period of 2-3 weeks."
            },
            {
                question: "What is a crucial activity donors are encouraged to do on the same day as their surgery?",
                options: [
                    "Answer work emails",
                    "Get out of bed and take short walks",
                    "Eat a large meal",
                    "Have many visitors"
                ],
                correctAnswer: "Get out of bed and take short walks",
                explanation: "You will be encouraged to get out of bed and take short walks on the very same day as your surgery to prevent complications like blood clots."
            },
            {
                question: "How long should a donor wait before driving?",
                options: [
                    "They can drive home from the hospital",
                    "For 1-2 weeks, or as long as they are taking prescription pain medication",
                    "For at least one month",
                    "There are no driving restrictions"
                ],
                correctAnswer: "For 1-2 weeks, or as long as they are taking prescription pain medication",
                explanation: "You should not drive for 1-2 weeks, and not at all while you are taking prescription pain medication."
            },
            {
                question: "What can a donor expect to feel in the weeks after returning home?",
                options: [
                    "More energetic than ever before",
                    "More tired than usual as the body dedicates energy to healing",
                    "No different than before surgery",
                    "Ready to run a race"
                ],
                correctAnswer: "More tired than usual as the body dedicates energy to healing",
                explanation: "You will likely feel more tired than usual for a few weeks as your body dedicates a significant amount of energy to healing from the surgery."
            },
            {
                question: "When is the urinary catheter placed during surgery usually removed?",
                options: [
                    "Before the surgery",
                    "On the morning after the procedure",
                    "After one week",
                    "It is not removed"
                ],
                correctAnswer: "On the morning after the procedure",
                explanation: "The urinary catheter is usually removed on the morning after your procedure, allowing you even more freedom of movement."
            },
            {
                question: "What kind of diet can a donor expect the day after surgery?",
                options: [
                    "A regular, solid food diet",
                    "A liquid-only diet",
                    "No food or drink is allowed",
                    "A high-fat diet"
                ],
                correctAnswer: "A regular, solid food diet",
                explanation: "You will be able to drink liquids soon after surgery and progress to a regular diet by the next day."
            },
            {
                question: "When does a donor typically have their first follow-up appointment after going home?",
                options: [
                    "The next day",
                    "About two weeks after going home",
                    "After three months",
                    "After one year"
                ],
                correctAnswer: "About two weeks after going home",
                explanation: "You will have a follow-up appointment with your surgeon about two weeks after you go home to check on your progress and incisions."
            },
            {
                question: "What is the key to speeding up the healing process for a donor?",
                options: [
                    "Staying in bed as much as possible",
                    "Getting back on their feet safely and engaging in gentle activity",
                    "Eating as much as possible",
                    "Avoiding all contact with the medical team"
                ],
                correctAnswer: "Getting back on their feet safely and engaging in gentle activity",
                explanation: "The entire medical team is focused on helping the donor get back on their feet safely, as early and gentle movement is the key to speeding up healing."
            }
        ],
        'risks-and-benefits': [
            {
                question: "What is the primary, personal benefit for a living donor?",
                options: [
                    "They get paid a large amount of money",
                    "They get a long vacation from work",
                    "The immense satisfaction of saving or dramatically improving someone's life",
                    "They no longer have to pay taxes"
                ],
                correctAnswer: "The immense satisfaction of saving or dramatically improving someone's life",
                explanation: "The primary benefit of donation is deeply personal and psychological: the immense satisfaction that comes from this selfless act."
            },
            {
                question: "What does 'compensatory growth' mean for a donor's remaining kidney?",
                options: [
                    "The kidney shrinks",
                    "The remaining kidney grows and efficiently takes over the work of two",
                    "The kidney stops working",
                    "The kidney changes color"
                ],
                correctAnswer: "The remaining kidney grows and efficiently takes over the work of two",
                explanation: "Living with one kidney is very safe. The remaining kidney undergoes 'compensatory growth' and efficiently takes over the work of two."
            },
            {
                question: "While very safe, living with one kidney carries a small, long-term increased risk of...",
                options: [
                    "Developing a third kidney",
                    "Losing your hair",
                    "Developing high blood pressure",
                    "Becoming a famous actor"
                ],
                correctAnswer: "Developing high blood pressure",
                explanation: "Long-term studies show a small increase in the risk of developing high blood pressure or a slight decrease in kidney function compared to non-donors."
            },
            {
                question: "What is the estimated risk of death from the donor operation itself?",
                options: ["1 in 100", "1 in 1,000", "3 in 10,000", "1 in 100,000"],
                correctAnswer: "3 in 10,000",
                explanation: "The risk of death from the donor operation itself is extremely low, estimated at about 3 in 10,000 procedures."
            },
            {
                question: "What is a benefit for the recipient of a living donor transplant?",
                options: [
                    "They have to wait longer for a kidney",
                    "They get a lower quality organ",
                    "They get a transplant sooner and the kidney is likely to last longer",
                    "The surgery is riskier"
                ],
                correctAnswer: "They get a transplant sooner and the kidney is likely to last longer",
                explanation: "For the recipient, a living donor kidney means getting a transplant sooner and receiving a high-quality organ that is likely to last longer."
            },
            {
                question: "Is it true that for a healthy, well-screened individual, the overall risk from donating is very low?",
                options: [
                    "No, it is a very high-risk procedure for everyone",
                    "Yes, the overall risk to health from donating a kidney is very low",
                    "The risks are unknown",
                    "The risks are the same as having a cold"
                ],
                correctAnswer: "Yes, the overall risk to health from donating a kidney is very low",
                explanation: "It's important to state clearly: for a healthy, well-screened individual, the overall risk to health from donating a kidney is very low."
            },
            {
                question: "What is a potential short-term surgical risk for a donor?",
                options: ["Better vision", "Increased strength", "Bleeding, infection, or pain", "Weight loss"],
                correctAnswer: "Bleeding, infection, or pain",
                explanation: "Like any major surgery, donation carries the standard short-term risks related to anesthesia, bleeding, infection, pain, and blood clots."
            },
            {
                question: "What is the absolute risk of a donor ever needing a kidney transplant themselves in the future?",
                options: ["Very high, about 50%", "About 10%", "Less than 1%", "Zero, it's impossible"],
                correctAnswer: "Less than 1%",
                explanation: "The absolute risk of a donor ever needing a kidney transplant themselves in the future remains very low, at less than 1%."
            },
            {
                question: "What emotional risk might a donor face, especially if the transplant is not successful?",
                options: [
                    "Extreme happiness",
                    "A sense of disappointment or anxiety",
                    "No emotional reaction",
                    "A desire to donate again immediately"
                ],
                correctAnswer: "A sense of disappointment or anxiety",
                explanation: "While most donors have a positive experience, some may struggle with anxiety or disappointment, which is why the psychological assessment and support are so important."
            },
            {
                question: "What does the ability to schedule a living donor surgery provide for families?",
                options: [
                    "More stress and uncertainty",
                    "A sense of control and predictability",
                    "A guaranteed successful outcome",
                    "A longer hospital stay"
                ],
                correctAnswer: "A sense of control and predictability",
                explanation: "The ability to schedule the surgery provides a sense of control and predictability for the donor, the recipient, and their families."
            }
        ],
        'donor-long-term-health': [
            {
                question: "How often should a living donor have an annual check-up with their primary care physician?",
                options: [
                    "Every 5 years",
                    "At least once a year",
                    "Only if they feel sick",
                    "Never, it's not necessary"
                ],
                correctAnswer: "At least once a year",
                explanation: "It is strongly recommended that you have a check-up with your primary care physician at least once a year to monitor your health."
            },
            {
                question: "Which type of over-the-counter medication should donors be cautious with?",
                options: [
                    "Vitamin C",
                    "Antacids",
                    "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs) like ibuprofen",
                    "Cough drops"
                ],
                correctAnswer: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs) like ibuprofen",
                explanation: "Be cautious with NSAIDs like ibuprofen and naproxen, as high doses or prolonged use can be harmful to kidneys. Always consult your doctor."
            },
            {
                question: "What is the key advice for women who wish to have a baby after donating?",
                options: [
                    "It is not possible",
                    "They must ensure their obstetrician is aware of their donation history for close monitoring",
                    "They should not tell their doctor they were a donor",
                    "They can proceed without any special precautions"
                ],
                correctAnswer: "They must ensure their obstetrician is aware of their donation history for close monitoring",
                explanation: "Women who have donated can have healthy pregnancies, but it is crucial that their obstetrician is aware of their donation history for close monitoring of potential issues."
            },
            {
                question: "What is the expected outcome for the vast majority of living donors?",
                options: [
                    "A life with many health complications",
                    "A shorter life expectancy",
                    "A long, healthy, and completely normal life with one kidney",
                    "A life requiring daily medication"
                ],
                correctAnswer: "A long, healthy, and completely normal life with one kidney",
                explanation: "For those who give the gift of life, living a long, healthy, and completely normal life with one kidney is the standard and expected outcome."
            },
            {
                question: "What three key tests should be part of a donor's annual check-up?",
                options: [
                    "Blood pressure, blood test (creatinine), and urine test (albuminuria)",
                    "Hearing test, eye exam, and dental check",
                    "Cholesterol, blood sugar, and weight",
                    "X-ray, MRI, and CT scan"
                ],
                correctAnswer: "Blood pressure, blood test (creatinine), and urine test (albuminuria)",
                explanation: "The annual visit should include three key tests: a blood pressure check, a serum creatinine blood test, and a urine test for albumin."
            },
            {
                question: "What kind of diet is recommended for donors to maintain long-term health?",
                options: [
                    "A high-salt diet",
                    "A diet rich in fruits, vegetables, and whole grains, and low in salt and processed foods",
                    "A diet consisting only of protein",
                    "A diet with no restrictions"
                ],
                correctAnswer: "A diet rich in fruits, vegetables, and whole grains, and low in salt and processed foods",
                explanation: "The advice for donors is the same as for anyone wanting a healthy life: a balanced diet, low in salt and processed foods."
            },
            {
                question: "What does maintaining a healthy weight do for a donor?",
                options: [
                    "It has no effect on health",
                    "It increases the strain on the kidney",
                    "It reduces the overall strain on the body's systems, including the heart and kidney",
                    "It is only for cosmetic reasons"
                ],
                correctAnswer: "It reduces the overall strain on the body's systems, including the heart and kidney",
                explanation: "Maintaining a healthy weight is important as it reduces the overall strain on all of your body's systems, which helps protect your remaining kidney."
            },
            {
                question: "Before taking any new medication (prescription or over-the-counter), what should a donor do?",
                options: [
                    "Take it immediately",
                    "Ask a friend for advice",
                    "Always consult their doctor first",
                    "Double the recommended dose"
                ],
                correctAnswer: "Always consult their doctor first",
                explanation: "To protect your kidney, it is very important to always consult your doctor before taking any new medication, even over-the-counter ones."
            },
            {
                question: "What is a slightly higher risk for women who become pregnant after donation?",
                options: [
                    "Having twins",
                    "Developing issues like gestational diabetes or preeclampsia",
                    "Having an easy delivery",
                    "There are no increased risks"
                ],
                correctAnswer: "Developing issues like gestational diabetes or preeclampsia",
                explanation: "Women who have donated carry a slightly higher risk for developing issues like gestational diabetes or preeclampsia (a form of high blood pressure in pregnancy)."
            },
            {
                question: "What does eGFR, calculated from a creatinine test, measure?",
                options: [
                    "Your heart rate",
                    "Your lung capacity",
                    "An estimate of how well your kidney is filtering waste",
                    "Your blood sugar level"
                ],
                correctAnswer: "An estimate of how well your kidney is filtering waste",
                explanation: "The serum creatinine test is used to calculate your eGFR (estimated Glomerular Filtration Rate), which confirms your remaining kidney is functioning perfectly."
            }
        ]
    },
    hi: {
        'understanding-kidney-disease': [
            {
                question: "एक सफल किडनी प्रत्यारोपण का सबसे महत्वपूर्ण लाभ क्या है?",
                options: [
                    "आप अधिक मिठाई खा सकते हैं।",
                    "डायलिसिस की कठोरता से मुक्ति।",
                    "आपको अब डॉक्टर को देखने की आवश्यकता नहीं है।",
                    "आपको एक नया निशान मिलता है।"
                ],
                correctAnswer: "डायलिसिस की कठोरता से मुक्ति।",
                explanation: "प्रत्यारोपण का सबसे गहरा लाभ डायलिसिस की समय लेने वाली और कठिन प्रक्रिया से मुक्ति है, जो जीवन की गुणवत्ता को पुनर्स्थापित करता है।"
            },
            {
                question: "प्रत्यारोपण प्राप्त करने के बाद एक प्रमुख आजीवन प्रतिबद्धता क्या है?",
                options: [
                    "एक विशेष कंगन पहनना।",
                    "इम्यूनोसप्रेसेंट दवाओं को सावधानीपूर्वक लेना।",
                    "केवल बोतलबंद पानी पीना।",
                    "सभी व्यायाम से बचना।"
                ],
                correctAnswer: "इम्यूनोसप्रेसेंट दवाओं को सावधानीपूर्वक लेना।",
                explanation: "नई किडनी की अस्वीकृति को रोकने के लिए, आपको प्रत्यारोपण के जीवन के लिए हर दिन एंटी-रिजेक्शन (इम्यूनोसप्रेसेंट) दवाएं लेनी चाहिए।"
            },
            {
                question: "इनमें से कौन सी स्थिति किसी को प्रत्यारोपण के लिए उम्मीदवार होने से रोक सकती है (एक निषेध)?",
                options: [
                    "टूटे हुए हाथ का इतिहास।",
                    "चश्मा पहनना।",
                    "एक गंभीर, अनुपचारित सक्रिय संक्रमण।",
                    "40 वर्ष का होना।"
                ],
                correctAnswer: "एक गंभीर, अनुपचारित सक्रिय संक्रमण।",
                explanation: "एक गंभीर सक्रिय संक्रमण एक पूर्ण निषेध है, क्योंकि प्रत्यारोपण सर्जरी और इम्यूनोसप्रेसेंट दवाएं बहुत जोखिम भरी होंगी।"
            },
            {
                question: "डायलिसिस की तुलना में एक सफल प्रत्यारोपण के बाद कम या अधिक आहार प्रतिबंध हैं?",
                options: ["अधिक प्रतिबंध", "कम प्रतिबंध", "समान स्तर के प्रतिबंध", "कोई प्रतिबंध नहीं"],
                correctAnswer: "कम प्रतिबंध",
                explanation: "एक सफल प्रत्यारोपण का एक बड़ा लाभ डायलिसिस पर होने की तुलना में आहार और द्रव सेवन पर बहुत कम प्रतिबंध होना है।"
            },
            {
                question: "जब शरीर की प्रतिरक्षा प्रणाली नए अंग को स्वीकार नहीं करती है तो उस शब्द का क्या अर्थ है?",
                options: ["स्वीकृति", "अनुकूलन", "अस्वीकृति", "निषेध"],
                correctAnswer: "अस्वीकृति",
                explanation: "अस्वीकृति वह प्रक्रिया है जहां शरीर की प्रतिरक्षा प्रणाली नए अंग को स्वीकार नहीं कर सकती है। यह वह है जिसे इम्यूनोसप्रेसेंट दवाएं रोकने के लिए काम करती हैं।"
            },
            {
                question: "एक प्रत्यारोपण ऑपरेशन के लिए किस प्रकार की एनेस्थीसिया का उपयोग किया जाता है?",
                options: ["स्थानीय एनेस्थीसिया", "स्पाइनल एनेस्थीसिया", "सामान्य एनेस्थीसिया", "कोई एनेस्थीसिया नहीं"],
                correctAnswer: "सामान्य एनेस्थीसिया",
                explanation: "एक किडनी प्रत्यारोपण सामान्य एनेस्थीसिया के तहत की जाने वाली एक बड़ी सर्जरी है, जिसका अर्थ है कि आप प्रक्रिया के दौरान पूरी तरह से सो रहे हैं।"
            },
            {
                question: "दीर्घकालिक इम्यूनोसप्रेसेंट दवा के उपयोग का एक संभावित दुष्प्रभाव क्या है?",
                options: ["बेहतर सुनना", "मजबूत हड्डियां", "संक्रमण के प्रति उच्च संवेदनशीलता", "तेज दौड़ने की गति"],
                correctAnswer: "संक्रमण के प्रति उच्च संवेदनशीलता",
                explanation: "क्योंकि इम्यूनोसप्रेसेंट प्रतिरक्षा प्रणाली को शांत करते हैं, वे संभावित दुष्प्रभावों को लेकर आते हैं, जिसमें संक्रमण का अधिक खतरा शामिल है।"
            },
            {
                question: "प्रत्यारोपण मूल्यांकन टीम का प्राथमिक लक्ष्य क्या है?",
                options: ["जितनी जल्दी हो सके समाप्त करना", "यह सुनिश्चित करना कि प्रत्यारोपण उम्मीदवार के लिए एक सुरक्षित और व्यवहार्य विकल्प है", "प्रत्यारोपण से इनकार करने के कारण खोजना", "जितनी संभव हो उतनी परीक्षाओं के लिए शुल्क लेना"],
                correctAnswer: "यह सुनिश्चित करना कि प्रत्यारोपण उम्मीदवार के लिए एक सुरक्षित और व्यवहार्य विकल्प है",
                explanation: "मूल्यांकन टीम का प्राथमिक लक्ष्य हमेशा प्रत्येक व्यक्ति के लिए प्रत्यारोपण की सुरक्षा और व्यवहार्यता सुनिश्चित करना होता है।"
            },
            {
                question: "क्या एक सफल प्रत्यारोपण प्रसव उम्र की महिलाओं के लिए गर्भावस्था की संभावना को बहाल कर सकता है?",
                options: ["नहीं, यह इसे असंभव बना देता है", "हाँ, यह गर्भावस्था की संभावना को बहाल कर सकता है", "इसका प्रजनन क्षमता पर कोई प्रभाव नहीं पड़ता है", "यह अज्ञात है"],
                correctAnswer: "हाँ, यह गर्भावस्था की संभावना को बहाल कर सकता है",
                explanation: "एक सफल प्रत्यारोपण के महत्वपूर्ण लाभों में से एक यह है कि यह महिलाओं के लिए गर्भावस्था की संभावना को बहाल कर सकता है।"
            },
            {
                question: "क्रोनिक किडनी रोग के अंतिम चरण के लिए क्या शब्द है जहां किडनी अपने दम पर काम नहीं कर सकती हैं?",
                options: ["प्रारंभिक चरण किडनी रोग", "मध्य-चरण किडनी रोग", "अंतिम चरण किडनी रोग (ESKD)", "तीव्र किडनी की चोट"],
                correctAnswer: "अंतिम चरण किडनी रोग (ESKD)",
                explanation: "अंतिम चरण किडनी रोग (ESKD) क्रोनिक किडनी रोग के अंतिम, स्थायी चरण का प्रतिनिधित्व करता है, जहां किडनी का कार्य एक महत्वपूर्ण बिंदु तक गिर गया है।"
            }
        ]
    },
    mr: {
        'understanding-kidney-disease': [
            {
                question: "यशस्वी मूत्रपिंड प्रत्यारोपणाचा सर्वात महत्त्वाचा फायदा कोणता आहे?",
                options: [
                    "तुम्ही जास्त मिठाई खाऊ शकता.",
                    "डायलिसिसच्या त्रासातून मुक्तता.",
                    "तुम्हाला आता डॉक्टरकडे जाण्याची गरज नाही.",
                    "तुम्हाला एक नवीन व्रण मिळतो."
                ],
                correctAnswer: "डायलिसिसच्या त्रासातून मुक्तता.",
                explanation: "प्रत्यारोपणाचा सर्वात मोठा फायदा म्हणजे डायलिसिसच्या वेळखाऊ आणि कठीण प्रक्रियेतून मुक्तता, ज्यामुळे जीवनाची गुणवत्ता पुन्हा प्राप्त होते."
            },
            {
                question: "प्रत्यारोपणानंतर आयुष्यभराची मोठी जबाबदारी कोणती आहे?",
                options: [
                    "विशेष ब्रेसलेट घालणे.",
                    "इम्युनोसप्रेसंट औषधे काळजीपूर्वक घेणे.",
                    "फक्त बाटलीबंद पाणी पिणे.",
                    "सर्व व्यायाम टाळणे."
                ],
                correctAnswer: "इम्युनोसप्रेसंट औषधे काळजीपूर्वक घेणे.",
                explanation: "नवीन मूत्रपिंडाचा नकार टाळण्यासाठी, तुम्हाला प्रत्यारोपणाच्या आयुष्यभर दररोज अँटी-रिजेक्शन (इम्युनोसप्रेसंट) औषधे घ्यावी लागतील."
            },
            {
                question: "खालीलपैकी कोणती स्थिती एखाद्याला प्रत्यारोपणासाठी उमेदवार होण्यापासून रोखू शकते (एक विरोधाभास)?",
                options: [
                    "तुटलेल्या हाताचा इतिहास.",
                    "चष्मा घालणे.",
                    "एक गंभीर, उपचार न करता येणारे सक्रिय संक्रमण.",
                    "४० वर्षांचे असणे."
                ],
                correctAnswer: "एक गंभीर, उपचार न करता येणारे सक्रिय संक्रमण.",
                explanation: "एक गंभीर सक्रिय संक्रमण हा एक पूर्ण विरोधाभास आहे, कारण प्रत्यारोपण शस्त्रक्रिया आणि इम्युनोसप्रेसंट औषधे खूप धोकादायक असतील."
            },
            {
                question: "डायलिसिसच्या तुलनेत यशस्वी प्रत्यारोपणानंतर आहारावर कमी निर्बंध असतात की जास्त?",
                options: ["जास्त निर्बंध", "कमी निर्बंध", "समान पातळीचे निर्बंध", "कोणतेही निर्बंध नाहीत"],
                correctAnswer: "कमी निर्बंध",
                explanation: "यशस्वी प्रत्यारोपणाचा एक मोठा फायदा म्हणजे डायलिसिसवर असण्याच्या तुलनेत आहार आणि द्रव सेवनावर खूप कमी निर्बंध असणे."
            },
            {
                question: "जेव्हा शरीराची रोगप्रतिकार प्रणाली नवीन अवयव स्वीकारत नाही तेव्हा त्या स्थितीला काय म्हणतात?",
                options: ["स्वीकृती", "अनुकूलन", "नकार", "विरोधाभास"],
                correctAnswer: "नकार",
                explanation: "नकार ही एक प्रक्रिया आहे जिथे शरीराची रोगप्रतिकार प्रणाली नवीन अवयव स्वीकारू शकत नाही. इम्युनोसप्रेसंट औषधे हेच टाळण्यासाठी काम करतात."
            },
            {
                question: "प्रत्यारोपण शस्त्रक्रियेसाठी कोणत्या प्रकारची भूल दिली जाते?",
                options: ["स्थानिक भूल", "स्पाइनल भूल", "सामान्य भूल", "कोणतीही भूल नाही"],
                correctAnswer: "सामान्य भूल",
                explanation: "मूत्रपिंड प्रत्यारोपण ही एक मोठी शस्त्रक्रिया आहे जी सामान्य भूल देऊन केली जाते, याचा अर्थ प्रक्रियेदरम्यान तुम्ही पूर्णपणे झोपलेले असता."
            },
            {
                question: "दीर्घकाळ इम्युनोसप्रेसंट औषधांच्या वापराचा संभाव्य दुष्परिणाम कोणता आहे?",
                options: ["चांगली ऐकण्याची क्षमता", "मजबूत हाडे", "संसर्गाची जास्त शक्यता", "जलद धावण्याचा वेग"],
                correctAnswer: "संसर्गाची जास्त शक्यता",
                explanation: "इम्युनोसप्रेसंट रोगप्रतिकार प्रणालीला शांत करत असल्यामुळे, त्यांचे संभाव्य दुष्परिणाम असतात, ज्यात संसर्गाचा धोका वाढणे समाविष्ट आहे."
            },
            {
                question: "प्रत्यारोपण मूल्यांकन टीमचे प्राथमिक ध्येय काय आहे?",
                options: ["शक्य तितक्या लवकर पूर्ण करणे", "प्रत्यारोपण उमेदवारासाठी एक सुरक्षित आणि व्यवहार्य पर्याय असल्याची खात्री करणे", "प्रत्यारोपण नाकारण्याची कारणे शोधणे", "शक्य तितक्या चाचण्यांसाठी शुल्क आकारणे"],
                correctAnswer: "प्रत्यारोपण उमेदवारासाठी एक सुरक्षित आणि व्यवहार्य पर्याय असल्याची खात्री करणे",
                explanation: "मूल्यांकन टीमचे प्राथमिक ध्येय नेहमीच प्रत्येक व्यक्तीसाठी प्रत्यारोपणाची सुरक्षितता आणि व्यवहार्यता सुनिश्चित करणे असते."
            },
            {
                question: "यशस्वी प्रत्यारोपण बाळंतपणाच्या वयाच्या महिलांसाठी गर्भधारणेची शक्यता पुनर्संचयित करू शकते का?",
                options: ["नाही, ते अशक्य करते", "होय, ते गर्भधारणेची शक्यता पुनर्संचयित करू शकते", "याचा प्रजनन क्षमतेवर कोणताही परिणाम होत नाही", "हे अज्ञात आहे"],
                correctAnswer: "होय, ते गर्भधारणेची शक्यता पुनर्संचयित करू शकते",
                explanation: "यशस्वी प्रत्यारोपणाच्या महत्त्वपूर्ण फायद्यांपैकी एक म्हणजे ते महिलांसाठी गर्भधारणेची शक्यता पुनर्संचयित करू शकते."
            },
            {
                question: "तीव्र मूत्रपिंड रोगाच्या अंतिम टप्प्याला काय म्हणतात जिथे मूत्रपिंड स्वतःहून काम करू शकत नाहीत?",
                options: ["प्रारंभिक टप्प्यातील मूत्रपिंड रोग", "मध्यम टप्प्यातील मूत्रपिंड रोग", "अंतिम टप्प्यातील मूत्रपिंड रोग (ESKD)", "तीव्र मूत्रपिंडाची इजा"],
                correctAnswer: "अंतिम टप्प्यातील मूत्रपिंड रोग (ESKD)",
                explanation: "अंतिम टप्प्यातील मूत्रपिंड रोग (ESKD) हा तीव्र मूत्रपिंड रोगाचा अंतिम, कायमचा टप्पा आहे, जिथे मूत्रपिंडाचे कार्य गंभीर पातळीपर्यंत कमी झाले आहे."
            }
        ]
    }
};

