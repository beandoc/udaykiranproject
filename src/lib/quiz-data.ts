
import { modulesByRole } from './modules-data';

export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export const quizData: { [key: string]: QuizQuestion[] } = {
    'understanding-kidney-disease': [
        {
            question: "What is the most significant advantage of a successful kidney transplant?",
            options: [
                "You can eat more sweets.",
                "Freedom from the rigors of dialysis.",
                "You no longer need to see a doctor.",
                "You get a new scar."
            ],
            correctAnswer: "Freedom from the rigors of dialysis."
        },
        {
            question: "What is a major lifelong commitment after receiving a transplant?",
            options: [
                "Wearing a special bracelet.",
                "Taking immunosuppressant medications meticulously.",
                "Only drinking bottled water.",
                "Avoiding all exercise."
            ],
            correctAnswer: "Taking immunosuppressant medications meticulously."
        },
        {
            question: "Which of these is a condition that might prevent someone from being a candidate for a transplant (a contraindication)?",
            options: [
                "A history of a broken arm.",
                "Wearing glasses.",
                "A severe, untreatable active infection.",
                "Being 40 years old."
            ],
            correctAnswer: "A severe, untreatable active infection."
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
            correctAnswer: "To ensure that surgery is a safe and effective option for the patient."
        },
        {
            question: "What is 'HLA Typing'?",
            options: [
                "A test to measure your height and weight.",
                "A specialized blood test to identify key proteins for the best donor match.",
                "A type of exercise you must do before surgery.",
                "The brand of the hospital's surgical equipment."
            ],
            correctAnswer: "A specialized blood test to identify key proteins for the best donor match."
        },
        {
            question: "Who is part of the dedicated transplant team you will meet during evaluation?",
            options: [
                "Only the surgeon.",
                "The hospital CEO and billing department.",
                "The Nephrologist, Surgeon, Nurse Coordinator, and Social Worker.",
                "The pharmacist and physical therapist only."
            ],
            correctAnswer: "The Nephrologist, Surgeon, Nurse Coordinator, and Social Worker."
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
            correctAnswer: "Blood group compatibility and Tissue (HLA) typing"
        },
        {
            question: "Which blood type is known as the 'universal donor'?",
            options: [
                "A",
                "B",
                "AB",
                "O"
            ],
            correctAnswer: "O"
        },
        {
            question: "What does a 'negative' crossmatch test indicate?",
            options: [
                "The donor is not a good match.",
                "The recipient's body is unlikely to immediately attack the donor kidney.",
                "The recipient has a negative attitude.",
                "The test results were lost."
            ],
            correctAnswer: "The recipient's body is unlikely to immediately attack the donor kidney."
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
            correctAnswer: "The lower abdomen"
        },
        {
            question: "What generally happens to the patient's original, failed kidneys?",
            options: [
                "They are always removed during the transplant surgery.",
                "They are usually left in place unless they are causing specific problems.",
                "They are sold to a research lab.",
                "They dissolve over time."
            ],
            correctAnswer: "They are usually left in place unless they are causing specific problems."
        },
        {
            question: "Where does a patient wake up immediately after the surgery is complete?",
            options: [
                "In their hospital room",
                "In the hospital cafeteria",
                "In the Post-Anesthesia Care Unit (PACU)",
                "In the ambulance"
            ],
            correctAnswer: "In the Post-Anesthesia Care Unit (PACU)"
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
            correctAnswer: "Sore throat from the breathing tube"
        },
        {
            question: "What is the purpose of a 'central line' placed during surgery?",
            options: [
                "To measure the patient's height",
                "To play music in the operating room",
                "To administer medications and fluids into a major vein",
                "To hold the surgical tools"
            ],
            correctAnswer: "To administer medications and fluids into a major vein"
        },
        {
            question: "Who will meet with you before surgery to discuss the anesthesia plan?",
            options: [
                "The hospital administrator",
                "The anesthesiologist",
                "A physical therapist",
                "A dietitian"
            ],
            correctAnswer: "The anesthesiologist"
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
            correctAnswer: "Get out of bed and walk with assistance"
        },
        {
            question: "What is a key activity restriction during the first 6-8 weeks at home?",
            options: [
                "Reading books",
                "Watching television",
                "Avoiding heavy lifting (over 5 kg)",
                "Talking on the phone"
            ],
            correctAnswer: "Avoiding heavy lifting (over 5 kg)"
        },
        {
            question: "Why is diligent hand hygiene and avoiding sick people crucial after transplant?",
            options: [
                "To save money on soap",
                "Because your immune system is suppressed by medication, increasing infection risk",
                "It is a hospital rule with no medical basis",
                "To make sure your hands look nice for appointments"
            ],
            correctAnswer: "Because your immune system is suppressed by medication, increasing infection risk"
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
            correctAnswer: "To calm your body's immune system to prevent it from attacking the new kidney"
        },
        {
            question: "For how long must a patient take anti-rejection medications?",
            options: [
                "For the first month only",
                "For the entire life of the transplanted kidney",
                "Only on days when they feel unwell",
                "Until the surgical scar is fully healed"
            ],
            correctAnswer: "For the entire life of the transplanted kidney"
        },
        {
            question: "What should you do if you are experiencing side effects from your medication?",
            options: [
                "Stop taking the medication immediately and on your own",
                "Double the dose to see if it helps",
                "Communicate with your transplant team, as they can often manage the side effects",
                "Ignore the side effects and hope they disappear"
            ],
            correctAnswer: "Communicate with your transplant team, as they can often manage the side effects"
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
            correctAnswer: "Taking your medications exactly as prescribed—the right drug, right dose, right time, every time"
        },
        {
            question: "What is the leading cause of preventable transplant failure?",
            options: [
                "Drinking too much water",
                "Exercising too much",
                "Non-adherence (not taking medication correctly)",
                "Sleeping too much"
            ],
            correctAnswer: "Non-adherence (not taking medication correctly)"
        },
        {
            question: "What is a proven and effective strategy to help remember to take medications?",
            options: [
                "Trying to remember without any aids",
                "Asking a friend to text you occasionally",
                "Using a weekly pill organizer and setting daily alarms on a phone",
                "Writing it on a calendar that you rarely look at"
            ],
            correctAnswer: "Using a weekly pill organizer and setting daily alarms on a phone"
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
            correctAnswer: "A sudden inflammatory response by the immune system, which is often treatable"
        },
        {
            question: "What is often the very first sign of an acute rejection episode?",
            options: [
                "A rash on your arm",
                "A sudden craving for pickles",
                "It often causes no symptoms and is detected by a rise in creatinine on a routine blood test",
                "Your hair starts to hurt"
            ],
            correctAnswer: "It often causes no symptoms and is detected by a rise in creatinine on a routine blood test"
        },
        {
            question: "Which of these symptoms requires an IMMEDIATE call to your transplant team?",
            options: [
                "Feeling a little tired in the afternoon",
                "A fever of 100.4°F / 38°C or higher",
                "A paper cut on your finger",
                "Forgetting where you put your keys"
            ],
            correctAnswer: "A fever of 100.4°F / 38°C or higher"
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
            correctAnswer: "The transplanted organ (the new kidney)"
        },
        {
            question: "What does a rising serum creatinine level in your blood test often indicate?",
            options: [
                "You are getting stronger",
                "It's a sign of a happy, well-functioning kidney",
                "It can be the first signal that the graft is under stress or there's a problem",
                "You ate too much protein for breakfast"
            ],
            correctAnswer: "It can be the first signal that the graft is under stress or there's a problem"
        },
        {
            question: "What is the 'gold standard' or most definitive test to diagnose a problem inside the kidney?",
            options: [
                "Checking your blood pressure",
                "A simple urine test",
                "A kidney biopsy",
                "Asking you how you feel"
            ],
            correctAnswer: "A kidney biopsy"
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
            correctAnswer: "To allow the team to catch potential issues like chronic rejection before they become serious"
        },
        {
            question: "What is a key health screening needed because of the increased risk from immunosuppressants?",
            options: [
                "Eye exams",
                "Hearing tests",
                "Screening for cancers, particularly skin cancer",
                "Dental cleanings"
            ],
            correctAnswer: "Screening for cancers, particularly skin cancer"
        },
        {
            question: "What is a vital way to protect your long-term cardiovascular health?",
            options: [
                "Eating more red meat",
                "Managing your blood pressure, cholesterol, and blood sugar",
                "Avoiding all exercise",
                "Drinking sugary sodas"
            ],
            correctAnswer: "Managing your blood pressure, cholesterol, and blood sugar"
        }
    ],
    'diet-and-nutrition': [
        {
            question: "Which food is absolutely forbidden for transplant patients due to its interaction with medications?",
            options: ["Apple", "Banana", "Grapefruit", "Carrots"],
            correctAnswer: "Grapefruit"
        },
        {
            question: "What is the main reason to control sodium (salt) in your diet?",
            options: [
                "Salt is expensive",
                "To help manage blood pressure and fluid retention",
                "It makes food taste bad",
                "It can stain your teeth"
            ],
            correctAnswer: "To help manage blood pressure and fluid retention"
        },
        {
            question: "Why is food safety (like avoiding raw meat/fish and washing produce) so important?",
            options: [
                "Because your suppressed immune system makes you more vulnerable to foodborne illnesses",
                "It's not important if the food looks clean",
                "Only for the first week after surgery",
                "To make cooking more complicated"
            ],
            correctAnswer: "Because your suppressed immune system makes you more vulnerable to foodborne illnesses"
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
            correctAnswer: "Walking"
        },
        {
            question: "Which types of activities must be avoided for life to protect your new kidney?",
            options: [
                "Gardening",
                "Swimming",
                "Contact sports like football, wrestling, or martial arts",
                "Cooking"
            ],
            correctAnswer: "Contact sports like football, wrestling, or martial arts"
        },
        {
            question: "What should you do if you feel sharp pain or dizziness during exercise?",
            options: [
                "Push through the pain to get stronger",
                "Increase your speed",
                "Stop and rest, and inform your team if it continues",
                "Immediately lift some heavy weights"
            ],
            correctAnswer: "Stop and rest, and inform your team if it continues"
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
            correctAnswer: "Certain immunosuppressive medications like steroids and tacrolimus"
        },
        {
            question: "What is the cornerstone and first step in managing PTDM?",
            options: [
                "Starting insulin injections immediately",
                "Lifestyle modifications like diet and exercise",
                "Trying a new herbal tea",
                "Stopping your transplant medications"
            ],
            correctAnswer: "Lifestyle modifications like diet and exercise"
        },
        {
            question: "Why is it important to control high blood sugar after a transplant?",
            options: [
                "It makes your hair grow faster",
                "It's not important and can be ignored",
                "Uncontrolled high blood sugar can harm the new kidney and your heart over time",
                "It helps you lose weight"
            ],
            correctAnswer: "Uncontrolled high blood sugar can harm the new kidney and your heart over time"
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
            correctAnswer: "Yes, experiencing an emotional rollercoaster is a normal part of this major life event"
        },
        {
            question: "What is a helpful strategy for managing emotional stress during the transplant journey?",
            options: [
                "Keeping all your feelings to yourself",
                "Talking about your feelings with family, friends, or your transplant team",
                "Making major life decisions impulsively",
                "Stopping all physical activity"
            ],
            correctAnswer: "Talking about your feelings with family, friends, or your transplant team"
        },
        {
            question: "What is a key benefit of joining a patient support group?",
            options: [
                "You get free medication",
                "It's a way to complain about doctors",
                "Connecting with peers who truly understand your specific journey can be a source of comfort and validation",
                "It is not beneficial"
            ],
            correctAnswer: "Connecting with peers who truly understand your specific journey can be a source of comfort and validation"
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
            correctAnswer: "The kidney typically lasts longer and the surgery can be scheduled"
        },
        {
            question: "Who can be a living donor?",
            options: [
                "Only an identical twin",
                "Only a parent or sibling",
                "A family member, spouse, friend, or even an altruistic stranger",
                "Anyone who is over 6 feet tall"
            ],
            correctAnswer: "A family member, spouse, friend, or even an altruistic stranger"
        },
        {
            question: "What is the highest priority for the transplant team during the donor evaluation process?",
            options: [
                "Getting the surgery done as quickly as possible",
                "Protecting the donor's health and interests",
                "Making sure the recipient gets the day off work",
                "Completing the paperwork"
            ],
            correctAnswer: "Protecting the donor's health and interests"
        }
    ],
    'donor-eligibility': [
        {
            question: "Which of these medical conditions usually prevents a person from being a living kidney donor?",
            options: [
                "Having a history of a broken leg",
                "Wearing contact lenses",
                "Having diabetes",
                "Being a vegetarian"
            ],
            correctAnswer: "Having diabetes"
        },
        {
            question: "What is a fundamental requirement for any potential living donor?",
            options: [
                "They must be wealthy",
                "They must be making a completely voluntary decision, free from pressure or financial gain",
                "They must be a relative of the recipient",
                "They must have the same hair color as the recipient"
            ],
            correctAnswer: "They must be making a completely voluntary decision, free from pressure or financial gain"
        },
        {
            question: "Why are the eligibility criteria for donors so strict?",
            options: [
                "To make the process difficult",
                "To ensure the donor can live a long, healthy life with one kidney",
                "Because the hospital has too many donors already",
                "To save the hospital money"
            ],
            correctAnswer: "To ensure the donor can live a long, healthy life with one kidney"
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
            correctAnswer: "The donor has their own independent team whose only job is to protect the donor"
        },
        {
            question: "What does the CT scan provide for the surgeons during a donor evaluation?",
            options: [
                "A picture of the donor's brain",
                "A detailed 'roadmap' of the donor's kidney anatomy and blood vessels",
                "A test of the donor's hearing",
                "A measure of the donor's height"
            ],
            correctAnswer: "A detailed 'roadmap' of the donor's kidney anatomy and blood vessels"
        },
        {
            question: "Who makes the final determination on whether it is safe for a potential donor to donate?",
            options: [
                "The potential donor alone",
                "The recipient's family",
                "The entire transplant team, after a meticulous review",
                "The hospital's financial department"
            ],
            correctAnswer: "The entire transplant team, after a meticulous review"
        }
    ],
    'psychological-assessment': [
        {
            question: "What is the psychological assessment for a donor?",
            options: [
                "A difficult test that many people fail",
                "A supportive and confidential conversation to ensure the donor's decision is emotionally healthy and voluntary",
                "A test of the donor's intelligence",
                "A negotiation about payment"
            ],
            correctAnswer: "A supportive and confidential conversation to ensure the donor's decision is emotionally healthy and voluntary"
        },
        {
            question: "The assessment helps to verify that the donor understands the risks and has a good...",
            options: [
                "Sense of humor",
                "Fashion sense",
                "Support system of family and friends for their recovery",
                "Singing voice"
            ],
            correctAnswer: "Support system of family and friends for their recovery"
        },
        {
            question: "The psychological assessment provides a safe space for the donor to...",
            options: [
                "Get a prescription for medication",
                "Voice any worries, fears, or hesitations they might have",
                "Ask for a different surgeon",
                "Meet other donors"
            ],
            correctAnswer: "Voice any worries, fears, or hesitations they might have"
        }
    ],
    'donor-surgery': [
        {
            question: "What is 'laparoscopic nephrectomy'?",
            options: [
                "A traditional open surgery with a very large incision",
                "A minimally invasive 'keyhole' surgery with small incisions",
                "A type of medication given to donors",
                "A brand of surgical camera"
            ],
            correctAnswer: "A minimally invasive 'keyhole' surgery with small incisions"
        },
        {
            question: "What is a major advantage of laparoscopic surgery for the donor?",
            options: [
                "A much longer hospital stay",
                "Considerably more post-operative pain",
                "A faster recovery and smaller scars",
                "Bigger, more noticeable scars"
            ],
            correctAnswer: "A faster recovery and smaller scars"
        },
        {
            question: "Where is the final, slightly larger incision often made to remove the kidney?",
            options: [
                "On the donor's back",
                "On the donor's chest",
                "Low on the abdomen, often below the bikini line",
                "On the donor's neck"
            ],
            correctAnswer: "Low on the abdomen, often below the bikini line"
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
            correctAnswer: "One or two nights"
        },
        {
            question: "What activity restriction is essential for the first 4-6 weeks to prevent a hernia?",
            options: [
                "Sleeping",
                "Walking",
                "Lifting anything heavier than 5 kg",
                "Watching TV"
            ],
            correctAnswer: "Lifting anything heavier than 5 kg"
        },
        {
            question: "When can a donor with a sedentary (desk) job often return to work?",
            options: [
                "Within a week",
                "Within 2-3 weeks",
                "After 2 months",
                "After 6 months"
            ],
            correctAnswer: "Within 2-3 weeks"
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
            correctAnswer: "The immense satisfaction of saving or dramatically improving someone's life"
        },
        {
            question: "What does 'compensatory growth' mean for a donor's remaining kidney?",
            options: [
                "The kidney shrinks",
                "The remaining kidney grows and efficiently takes over the work of two",
                "The kidney stops working",
                "The kidney changes color"
            ],
            correctAnswer: "The remaining kidney grows and efficiently takes over the work of two"
        },
        {
            question: "While very safe, living with one kidney carries a small, long-term increased risk of...",
            options: [
                "Developing a third kidney",
                "Losing your hair",
                "Developing high blood pressure",
                "Becoming a famous actor"
            ],
            correctAnswer: "Developing high blood pressure"
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
            correctAnswer: "At least once a year"
        },
        {
            question: "Which type of over-the-counter medication should donors be cautious with?",
            options: [
                "Vitamin C",
                "Antacids",
                "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs) like ibuprofen",
                "Cough drops"
            ],
            correctAnswer: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs) like ibuprofen"
        },
        {
            question: "What is the key advice for women who wish to have a baby after donating?",
            options: [
                "It is not possible",
                "They must ensure their obstetrician is aware of their donation history for close monitoring",
                "They should not tell their doctor they were a donor",
                "They can proceed without any special precautions"
            ],
            correctAnswer: "They must ensure their obstetrician is aware of their donation history for close monitoring"
        }
    ],
    'understanding-your-role': [
        {
            question: "What is a caregiver's role described as?",
            options: [
                "The person who makes all the medical decisions",
                "An essential member of the team: a cheerleader, organizer, and advocate",
                "Someone who only provides transportation",
                "A person who is not involved in the process"
            ],
            correctAnswer: "An essential member of the team: a cheerleader, organizer, and advocate"
        },
        {
            question: "What is a crucial part of being a caregiver?",
            options: [
                "Arguing with the doctors",
                "Prioritizing your own well-being to provide consistent support",
                "Staying up all night every night",
                "Making sure the patient never sleeps"
            ],
            correctAnswer: "Prioritizing your own well-being to provide consistent support"
        }
    ],
    'supporting-pre-transplant': [
        {
            question: "Why is it helpful for a caregiver to attend appointments with the patient?",
            options: [
                "To get a day off work",
                "To act as a second set of ears and a note-taker",
                "To tell the doctors what to do",
                "To use the hospital's free WiFi"
            ],
            correctAnswer: "To act as a second set of ears and a note-taker"
        },
        {
            question: "What is a practical way to help prepare the home for recovery?",
            options: [
                "Buying new, expensive furniture",
                "Painting the walls a bright color",
                "Deep cleaning, doing laundry, and preparing some simple meals",
                "Adopting a new puppy"
            ],
            correctAnswer: "Deep cleaning, doing laundry, and preparing some simple meals"
        }
    ],
    'hospital-stay-support': [
        {
            question: "What is the most helpful way for a caregiver to manage communication with family and friends?",
            options: [
                "Tell everyone to call the patient's room directly",
                "Act as the single point person for updates to let the patient rest",
                "Post hourly updates on social media with photos",
                "Ignore all calls and texts"
            ],
            correctAnswer: "Act as the single point person for updates to let the patient rest"
        },
        {
            question: "If there was a living donor, what is important for the caregiver to remember?",
            options: [
                "The donor recovers instantly and needs no support",
                "To ensure the donor feels just as cared for and appreciated as the recipient",
                "To ask the donor to help care for the recipient immediately",
                "To focus only on the recipient and ignore the donor"
            ],
            correctAnswer: "To ensure the donor feels just as cared for and appreciated as the recipient"
        }
    ],
    'home-recovery-care': [
        {
            question: "What is the absolute top priority a caregiver can help with during home recovery?",
            options: [
                "Decorating the house",
                "Helping the patient establish an unwavering medication routine",
                "Planning a large welcome-home party",
                "Buying new clothes for the patient"
            ],
            correctAnswer: "Helping the patient establish an unwavering medication routine"
        },
        {
            question: "How can a caregiver act as the 'first line of defense'?",
            options: [
                "By tasting all the food first",
                "By locking all the doors",
                "By tracking vital signs and reporting any new or concerning symptoms to the team",
                "By fighting off any visitors"
            ],
            correctAnswer: "By tracking vital signs and reporting any new or concerning symptoms to the team"
        }
    ],
    'medication-management': [
        {
            question: "What is the most powerful tool against missed or double doses?",
            options: [
                "A good memory",
                "Writing it on your hand",
                "A weekly pill organizer with compartments for each day and time",
                "Asking the patient every few hours if they took their pills"
            ],
            correctAnswer: "A weekly pill organizer with compartments for each day and time"
        },
        {
            question: "What is a good way to manage the medication 'supply chain'?",
            options: [
                "Wait until the very last pill is gone before refilling",
                "Borrow medication from other patients",
                "Be aware of the supply and refill prescriptions at least a week before running out",
                "Assume the hospital will deliver them automatically"
            ],
            correctAnswer: "Be aware of the supply and refill prescriptions at least a week before running out"
        }
    ],
    'recognizing-warning-signs': [
        {
            question: "Which of these symptoms is a critical warning sign requiring an IMMEDIATE call to the transplant team?",
            options: [
                "The patient is bored",
                "The patient has a fever of 100.4°F (38°C) or higher",
                "The patient doesn't like the TV show that's on",
                "The patient is taking a nap"
            ],
            correctAnswer: "The patient has a fever of 100.4°F (38°C) or higher"
        },
        {
            question: "What is the most important rule for a caregiver if they feel something is 'off' with the patient?",
            options: [
                "Wait 24 hours to see if it gets better",
                "Ask a friend for their opinion",
                "Trust your instincts and call the transplant team immediately",
                "Look up the symptoms online and try to treat it yourself"
            ],
            correctAnswer: "Trust your instincts and call the transplant team immediately"
        }
    ],
    'self-care-for-caregivers': [
        {
            question: "Why is it essential, not selfish, for a caregiver to take care of themselves?",
            options: [
                "It isn't essential",
                "To be able to go on vacation",
                "Because you cannot provide consistent, effective support if you are exhausted or burnt out",
                "To show the patient you are stronger than them"
            ],
            correctAnswer: "Because you cannot provide consistent, effective support if you are exhausted or burnt out"
        },
        {
            question: "When friends and family offer to help, what is a good response?",
            options: [
                "\"No, thank you, I can handle everything myself.\"",
                "\"Maybe later.\"",
                "\"Yes, thank you! Could you please pick up some groceries for us?\"",
                "Ignore their offer"
            ],
            correctAnswer: "\"Yes, thank you! Could you please pick up some groceries for us?\""
        }
    ],
    'communication-with-medical-team': [
        {
            question: "What is a good way to prepare for an appointment with the medical team?",
            options: [
                "Hope you remember your questions",
                "Sit down with your loved one beforehand and create a written list of questions",
                "Plan to ask only one question",
                "Let the doctor do all the talking"
            ],
            correctAnswer: "Sit down with your loved one beforehand and create a written list of questions"
        },
        {
            question: "If a doctor uses a medical term you don't understand, what should you do?",
            options: [
                "Nod and pretend you understand",
                "Look it up later on the internet",
                "Politely ask, \"Could you explain that to us in a simpler way?\"",
                "Interrupt them and change the subject"
            ],
            correctAnswer: "Politely ask, \"Could you explain that to us in a simpler way?\""
        }
    ],
    // The 'patient-responsibilities' module is mostly about conduct, so a quiz isn't as applicable.
    // We will leave the default quiz here for now as a placeholder.
    'patient-responsibilities': [
         {
            question: "As a patient, who is the most important member of your care team?",
            options: [
                "The surgeon",
                "The nurse coordinator",
                "You, the patient",
                "The dietitian"
            ],
            correctAnswer: "You, the patient"
        },
        {
            question: "If you don't understand something a doctor says, what should you do?",
            options: [
                "Pretend you understand",
                "Look it up on the internet later",
                "Never hesitate to ask questions for clarification",
                "Ask another patient"
            ],
            correctAnswer: "Never hesitate to ask questions for clarification"
        }
    ]
};

// Add default quiz for other modules for now
const defaultQuiz = quizData['immunosuppressants'].map((q, i) => ({...q, question: `(Question ${i + 1}/10) This is a sample question for this module. The real content is coming soon!`}));

Object.values(modulesByRole).forEach(roleData => {
    roleData.modules.forEach(module => {
        if (!quizData[module.slug]) {
            quizData[module.slug] = defaultQuiz;
        }
    });
});
