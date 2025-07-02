
import { modulesByRole } from './modules-data';

export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export const quizData: { [key: string]: QuizQuestion[] } = {
    'transplant-matching': [
        {
            question: "What are the two main factors checked during the transplant matching process?",
            options: [
                "Hair color and eye color",
                "Blood group and tissue type (HLA)",
                "Height and weight",
                "Age and gender"
            ],
            correctAnswer: "Blood group and tissue type (HLA)"
        },
        {
            question: "What does 'HLA' stand for in tissue typing?",
            options: [
                "Healthy Lung Activity",
                "Human Liver Antigen",
                "Human Leukocyte Antigen",
                "High Level Antibody"
            ],
            correctAnswer: "Human Leukocyte Antigen"
        },
        {
            question: "Is it possible to receive a kidney from a living donor with a different blood type?",
            options: [
                "No, never",
                "Yes, but only if they are a close relative",
                "Yes, with special pre-surgery treatments",
                "Only for children"
            ],
            correctAnswer: "Yes, with special pre-surgery treatments"
        },
        {
            question: "Why are anti-rejection medications required after a transplant?",
            options: [
                "To prevent the new kidney from getting infections",
                "To help the new kidney produce urine",
                "To stop the immune system from attacking the new kidney",
                "To lower blood pressure"
            ],
            correctAnswer: "To stop the immune system from attacking the new kidney"
        },
        {
            question: "What is the immune system's response to a foreign organ called?",
            options: [
                "Acceptance",
                "Rejection",
                "Adaptation",
                "Fusion"
            ],
            correctAnswer: "Rejection"
        },
    ],
    'surgery-day': [
        {
            question: "How long does a typical kidney transplant surgery last?",
            options: [
                "Less than 1 hour",
                "About 2 to 3 hours",
                "5 to 6 hours",
                "Over 8 hours"
            ],
            correctAnswer: "About 2 to 3 hours"
        },
        {
            question: "Where is the new kidney placed during the transplant operation?",
            options: [
                "In place of one of the old kidneys",
                "In the chest cavity",
                "In the lower abdomen (pelvis)",
                "Attached to the liver"
            ],
            correctAnswer: "In the lower abdomen (pelvis)"
        },
        {
            question: "What usually happens to the original, failed kidneys?",
            options: [
                "They are always removed",
                "They are usually left in place",
                "They dissolve over time",
                "They are donated to science during the surgery"
            ],
            correctAnswer: "They are usually left in place"
        },
        {
            question: "Why might a planned transplant surgery need to be cancelled or postponed?",
            options: [
                "The patient feels nervous",
                "The patient has an active infection",
                "The surgeon is running late",
                "The hospital is too busy"
            ],
            correctAnswer: "The patient has an active infection"
        },
        {
            question: "When do patients typically start taking anti-rejection medication?",
            options: [
                "A week after surgery",
                "Only if signs of rejection appear",
                "A month before surgery",
                "Before the surgery begins"
            ],
            correctAnswer: "Before the surgery begins"
        }
    ],
    'post-transplant-recovery': [
        {
            question: "How long should you generally wait after surgery before engaging in sexual intercourse?",
            options: ["Two weeks", "One month", "About six weeks", "Three months"],
            correctAnswer: "About six weeks"
        },
        {
            question: "Which type of sport should generally be avoided after a kidney transplant?",
            options: ["Swimming (after wound heals)", "Walking", "Contact sports like football or hockey", "Yoga"],
            correctAnswer: "Contact sports like football or hockey"
        },
        {
            question: "What is the most important step for a female patient who wants to become pregnant?",
            options: ["Stop taking all medications", "Start trying immediately", "Plan carefully with the transplant team", "Change their diet without consultation"],
            correctAnswer: "Plan carefully with the transplant team"
        },
        {
            question: "What is the lifting restriction for the first 6 weeks after transplant?",
            options: ["No restriction", "Anything less than 2 kg", "Anything less than 5 kg", "Anything less than 15 kg"],
            correctAnswer: "Anything less than 5 kg"
        },
        {
            question: "What should you do to maintain good oral hygiene?",
            options: ["Brush once a week", "Use a hard-bristled toothbrush", "Brush twice a day with a soft brush and replace it every 2-3 months", "Avoid dentists"],
            correctAnswer: "Brush twice a day with a soft brush and replace it every 2-3 months"
        }
    ],
    'diet-and-nutrition': [
        {
            question: "Which fruit and its juice should be strictly avoided after a transplant?",
            options: ["Apple", "Orange", "Banana", "Grapefruit"],
            correctAnswer: "Grapefruit"
        },
        {
            question: "Which of these foods is considered a 'Good Fat'?",
            options: ["Butter", "Coconut Oil", "Olive Oil", "Bacon"],
            correctAnswer: "Olive Oil"
        },
        {
            question: "Why is it important to avoid salty foods like pickles and chips?",
            options: ["They can stain your teeth", "They can cause excessive swelling and raise blood pressure", "They don't taste good", "They are too expensive"],
            correctAnswer: "They can cause excessive swelling and raise blood pressure"
        },
        {
            question: "What is a good source of dietary fiber?",
            options: ["White bread", "Sugary drinks", "Brown rice and oatmeal", "Fried foods"],
            correctAnswer: "Brown rice and oatmeal"
        },
        {
            question: "How many servings of fruits and vegetables are recommended each day?",
            options: ["One serving", "Two to three servings", "At least five to six servings", "As many as you can eat"],
            correctAnswer: "At least five to six servings"
        }
    ],
    'immunosuppressants': [
        {
            question: "What is the most important thing to remember about taking immunosuppressive medications?",
            options: [
                "Take them only when you feel sick",
                "Take them consistently at the same time every day",
                "Skip doses if you experience side effects",
                "Double the dose if you miss one"
            ],
            correctAnswer: "Take them consistently at the same time every day"
        },
        {
            question: "Why are immunosuppressants necessary after a transplant?",
            options: [
                "To prevent infections",
                "To lower blood pressure",
                "To stop the body from rejecting the new organ",
                "To manage pain"
            ],
            correctAnswer: "To stop the body from rejecting the new organ"
        },
        {
            question: "What is a common side effect of many immunosuppressants?",
            options: [
                "Increased risk of infection",
                "Improved vision",
                "Weight loss",
                "Stronger immune system"
            ],
            correctAnswer: "Increased risk of infection"
        },
        {
            question: "If you suspect you have an infection, you should:",
            options: [
                "Stop taking your immunosuppressants immediately",
                "Contact your transplant team for guidance",
                "Increase your dose of immunosuppressants",
                "Wait for it to go away on its own"
            ],
            correctAnswer: "Contact your transplant team for guidance"
        },
        {
            question: "Which of the following should you avoid while on immunosuppressants?",
            options: [
                "Cooked vegetables",
                "Grapefruit and grapefruit juice",
                "Pasteurized milk",
                "Drinking plenty of water"
            ],
            correctAnswer: "Grapefruit and grapefruit juice"
        },
        {
            question: "What does 'adherence' mean in the context of medication?",
            options: [
                "Sharing medication with others",
                "Taking medication exactly as prescribed",
                "Buying the cheapest brand of medication",
                "Storing medication in the bathroom"
            ],
            correctAnswer: "Taking medication exactly as prescribed"
        },
        {
            question: "How should you handle a missed dose of your immunosuppressant?",
            options: [
                "Take two doses at the next scheduled time",
                "Skip the dose entirely",
                "Follow the specific instructions given by your transplant team",
                "Take the dose as soon as you remember, no matter how late"
            ],
            correctAnswer: "Follow the specific instructions given by your transplant team"
        },
        {
            question: "Sun exposure while on immunosuppressants can increase the risk of:",
            options: [
                "Vitamin D deficiency",
                "Skin cancer",
                "Sunburn only",
                "Hair growth"
            ],
            correctAnswer: "Skin cancer"
        },
        {
            question: "Regular blood tests are required after transplant to:",
            options: [
                "Check for pregnancy",
                "Monitor the function of the transplanted organ and drug levels",
                "See if you need more vitamins",
                "Fulfill an insurance requirement"
            ],
            correctAnswer: "Monitor the function of the transplanted organ and drug levels"
        },
        {
            question: "Which of these is a sign of potential organ rejection?",
            options: [
                "Feeling energetic",
                "Fever, flu-like symptoms, or pain over the transplant site",
                "Clear skin",
                "Normal blood pressure"
            ],
            correctAnswer: "Fever, flu-like symptoms, or pain over the transplant site"
        }
    ],
    'mental-health-support': [
        {
            question: "Is it normal to experience mood swings or feel stressed after a transplant?",
            options: [
                "No, you should feel happy all the time.",
                "Yes, it's a common and normal part of adjusting to a major life event.",
                "Only for the first day.",
                "It means the medication is not working."
            ],
            correctAnswer: "Yes, it's a common and normal part of adjusting to a major life event."
        },
        {
            question: "If you have complex feelings about receiving an organ from a deceased donor, what is a good first step?",
            options: [
                "Ignore the feelings and hope they go away.",
                "Acknowledge that these mixed emotions are normal and valid.",
                "Feel guilty about being happy.",
                "Stop taking your medication."
            ],
            correctAnswer: "Acknowledge that these mixed emotions are normal and valid."
        },
        {
            question: "What common emotional 'roller-coaster' might a transplant patient experience?",
            options: [
                "Feeling hungry and then full.",
                "Feeling sleepy and then awake.",
                "Feeling anxious before medical appointments and relieved after good news.",
                "Feeling cold and then hot."
            ],
            correctAnswer: "Feeling anxious before medical appointments and relieved after good news."
        },
        {
            question: "If you feel overwhelmed by your emotions after your transplant, what is the best thing to do?",
            options: [
                "Keep it to yourself.",
                "Talk about it with your transplant team, a counselor, or a support group.",
                "Go on a long vacation immediately.",
                "Change your diet."
            ],
            correctAnswer: "Talk about it with your transplant team, a counselor, or a support group."
        },
        {
            question: "Is it possible to develop the personality of your organ donor?",
            options: [
                "Yes, it happens frequently.",
                "No, this is a common myth and is not possible.",
                "Only if the donor was a close relative.",
                "It depends on the blood type match."
            ],
            correctAnswer: "No, this is a common myth and is not possible."
        }
    ],
    'understanding-rejection': [
        {
            question: "Why are anti-rejection medications essential after a kidney transplant?",
            options: [
                "To prevent colds and flu",
                "To lower your blood sugar",
                "To stop your immune system from attacking the new kidney",
                "To help the kidney produce more urine"
            ],
            correctAnswer: "To stop your immune system from attacking the new kidney"
        },
        {
            question: "For how long must you take anti-rejection medications?",
            options: [
                "For the first year only",
                "Only when you feel unwell",
                "For as long as the transplanted kidney is working",
                "Until the surgical wound has healed"
            ],
            correctAnswer: "For as long as the transplanted kidney is working"
        },
        {
            question: "What is a common way that early, subtle rejection episodes are detected?",
            options: [
                "By checking your temperature",
                "Through regular blood tests",
                "Through a new pain in your arm",
                "By a change in your appetite"
            ],
            correctAnswer: "Through regular blood tests"
        },
        {
            question: "If you miss a dose of your anti-rejection medication, what should you do first?",
            options: [
                "Take a double dose next time to catch up",
                "Skip it and wait for the next scheduled dose",
                "Follow the specific instructions given to you by your transplant team",
                "Stop taking the medication completely until you feel sick"
            ],
            correctAnswer: "Follow the specific instructions given to you by your transplant team"
        },
        {
            question: "Can transplant rejection episodes be treated?",
            options: [
                "No, any rejection means the transplant has failed completely",
                "Yes, most episodes can be managed successfully, often by adjusting medications",
                "Only if you go back to the hospital for another surgery",
                "Only in the first week after transplant"
            ],
            correctAnswer: "Yes, most episodes can be managed successfully, often by adjusting medications"
        }
    ],
    'long-term-care': [
        {
            question: "Why is it critical to attend all transplant appointments, even if you feel well?",
            options: [
                "To get out of the house for a day.",
                "Because problems like rejection can be found in tests before you feel symptoms.",
                "It's a hospital rule with no medical reason.",
                "To check your weight."
            ],
            correctAnswer: "Because problems like rejection can be found in tests before you feel symptoms."
        },
        {
            question: "What is a major benefit of post-transplant life mentioned in the module?",
            options: [
                "You never have to take medication again.",
                "You can eat more junk food.",
                "Greater personal freedom from the schedule of dialysis.",
                "You get free parking at the hospital."
            ],
            correctAnswer: "Greater personal freedom from the schedule of dialysis."
        },
        {
            question: "How should you view your new kidney?",
            options: [
                "As a temporary fix.",
                "As a unique gift that deserves respect and care.",
                "As something that doesn't require much thought.",
                "As your own property to do with as you wish."
            ],
            correctAnswer: "As a unique gift that deserves respect and care."
        },
        {
            question: "What should you do if your transplant team strongly recommends a test?",
            options: [
                "Postpone it until you feel sick.",
                "Ask for a different, easier test.",
                "Trust their advice, as they have good reasons for it.",
                "Ignore the advice if you feel fine."
            ],
            correctAnswer: "Trust their advice, as they have good reasons for it."
        },
        {
            question: "If you feel unwell between appointments, you should:",
            options: [
                "Wait until your next scheduled visit.",
                "Search online for a diagnosis.",
                "Contact your transplant team immediately.",
                "Take some leftover antibiotics."
            ],
            correctAnswer: "Contact your transplant team immediately."
        }
    ],
    'donor-evaluation': [
        {
            question: "Who is the main point of contact for a living donor throughout the evaluation process?",
            options: [
                "The Surgeon",
                "The Dietitian",
                "The Nurse Coordinator",
                "The Nephrologist"
            ],
            correctAnswer: "The Nurse Coordinator"
        },
        {
            question: "What is one purpose of imaging tests like a CT scan during the donor evaluation?",
            options: [
                "To check the donor's height",
                "To help decide which kidney is healthier for the donor to keep",
                "To test the donor's eyesight",
                "To see if the donor has any broken bones"
            ],
            correctAnswer: "To help decide which kidney is healthier for the donor to keep"
        },
        {
            question: "If a potential donor wants to donate to a specific person, where must their evaluation take place?",
            options: [
                "At any hospital in the country",
                "At the same transplant center as the recipient",
                "At their local doctor's office",
                "They can do the evaluation online"
            ],
            correctAnswer: "At the same transplant center as the recipient"
        },
        {
            question: "Which team member discusses the donor's kidney health and function?",
            options: [
                "The Surgeon",
                "The Dietitian",
                "The Nurse Coordinator",
                "The Nephrologist"
            ],
            correctAnswer: "The Nephrologist"
        },
        {
            question: "What is the role of the dietitian in the donor evaluation process?",
            options: [
                "To prescribe medication",
                "To perform the surgery",
                "To review eating habits and discuss a healthy diet",
                "To draw blood for lab work"
            ],
            correctAnswer: "To review eating habits and discuss a healthy diet"
        }
    ],
    'donor-eligibility': [
        {
            question: "Which of the following conditions may prevent someone from becoming a living kidney donor?",
            options: [
                "A history of seasonal allergies",
                "Having cancer or a history of cancer",
                "Wearing glasses for vision correction",
                "A previous ankle sprain"
            ],
            correctAnswer: "Having cancer or a history of cancer"
        },
        {
            question: "Why is being a smoker a concern for potential kidney donors?",
            options: [
                "It is not a concern.",
                "It increases the risks associated with surgery and long-term health.",
                "It affects hair color.",
                "It's only a concern if the recipient also smokes."
            ],
            correctAnswer: "It increases the risks associated with surgery and long-term health."
        },
        {
            question: "What is one of the key requirements to be considered for living donation?",
            options: [
                "Being a specific age",
                "Having the same favorite color as the recipient",
                "Being in good overall health with normal kidney function",
                "Living in the same city as the hospital"
            ],
            correctAnswer: "Being in good overall health with normal kidney function"
        },
        {
            question: "Is it possible for someone with uncontrolled high blood pressure to donate a kidney?",
            options: [
                "Yes, without any issues.",
                "No, it's generally considered a condition that prevents donation due to health risks.",
                "Only if they promise to control it after surgery.",
                "Yes, but they have to pay more."
            ],
            correctAnswer: "No, it's generally considered a condition that prevents donation due to health risks."
        },
        {
            question: "The transplant team's main priority regarding the donor is:",
            options: [
                "To get the kidney as fast as possible.",
                "To ensure the donor's safety and well-being.",
                "To make sure the donor and recipient become friends.",
                "To publish a paper about the surgery."
            ],
            correctAnswer: "To ensure the donor's safety and well-being."
        }
    ],
    'psychological-assessment': [
        {
            question: "What is the main purpose of the psychological assessment for a living donor?",
            options: [
                "To test the donor's memory",
                "To make sure the donor's choice is voluntary and well-informed",
                "To determine if the donor is a good person",
                "To negotiate the terms of the donation"
            ],
            correctAnswer: "To make sure the donor's choice is voluntary and well-informed"
        },
        {
            question: "What does 'informed consent' mean in the context of donation?",
            options: [
                "The donor has been informed of the surgery date.",
                "The donor understands the medical procedure, including the risks and benefits.",
                "The donor has signed a consent form without reading it.",
                "The recipient has consented to receive the kidney."
            ],
            correctAnswer: "The donor understands the medical procedure, including the risks and benefits."
        },
        {
            question: "Can a potential living donor change their mind about donating?",
            options: [
                "No, once the process starts, they must go through with it.",
                "Only if they pay a penalty fee.",
                "Yes, they can change their mind at any time before the surgery.",
                "Only if the recipient agrees."
            ],
            correctAnswer: "Yes, they can change their mind at any time before the surgery."
        },
        {
            question: "Which of these is a health condition that might prevent someone from being a living donor?",
            options: [
                "Having a common cold a year ago",
                "Having well-controlled high blood pressure",
                "Having diabetes",
                "Having broken a bone in the past"
            ],
            correctAnswer: "Having diabetes"
        },
        {
            question: "The psychological assessment ensures that the donor is NOT being...",
            options: [
                "Generous or selfless",
                "Careful or thoughtful",
                "Forced or paid to donate",
                "Supported by their family"
            ],
            correctAnswer: "Forced or paid to donate"
        }
    ],
    'donor-surgery': [
        {
            question: "How long does the living donor surgery typically take?",
            options: ["Less than 1 hour", "Two to three hours", "Four to five hours", "Over six hours"],
            correctAnswer: "Two to three hours"
        },
        {
            question: "What is a 'pain block' used for in donor surgery?",
            options: ["To put the donor to sleep", "To numb the belly area and reduce pain after surgery", "To prevent infections", "To make the surgery go faster"],
            correctAnswer: "To numb the belly area and reduce pain after surgery"
        },
        {
            question: "What is a common risk associated with having a urinary catheter during surgery?",
            options: ["A hernia", "A Urinary Tract Infection (UTI)", "Bleeding", "High blood pressure"],
            correctAnswer: "A Urinary Tract Infection (UTI)"
        },
        {
            question: "To avoid a hernia after surgery, what should a donor be careful not to do?",
            options: ["Eat too much", "Sleep on their side", "Lift anything heavy", "Walk too soon"],
            correctAnswer: "Lift anything heavy"
        },
        {
            question: "The risk of death from living donor surgery is extremely low, at about:",
            options: ["3 in 100", "3 in 1,000", "3 in 10,000", "3 in 100,000"],
            correctAnswer: "3 in 10,000"
        }
    ],
    'donor-recovery': [
        {
            question: "How long do most living donors stay in the hospital after surgery?",
            options: ["One to two nights", "Three to four nights", "One week", "Two weeks"],
            correctAnswer: "One to two nights"
        },
        {
            question: "What is the general timeframe for a full recovery after donation?",
            options: ["One to two weeks", "Two to three weeks", "Four to six weeks", "Two to three months"],
            correctAnswer: "Four to six weeks"
        },
        {
            question: "When can a donor with a non-physical (desk) job often return to work?",
            options: ["The next day", "After about two weeks", "After six weeks", "After three months"],
            correctAnswer: "After about two weeks"
        },
        {
            question: "What are most donors able to do on the same day as their surgery?",
            options: ["Drive home", "Eat a large meal", "Go for a short walk", "Return to work"],
            correctAnswer: "Go for a short walk"
        },
        {
            question: "Who should a donor talk to before returning to physical activities like sports?",
            options: ["Their boss", "Their family", "The transplant team", "Other donors"],
            correctAnswer: "The transplant team"
        }
    ],
    'risks-and-benefits': [
        {
            question: "What is 'compensatory growth' in a living kidney donor?",
            options: [
                "The donor grows taller after surgery",
                "The remaining kidney grows to take over the work of the donated one",
                "The donor receives financial compensation",
                "The surgical scar grows over time"
            ],
            correctAnswer: "The remaining kidney grows to take over the work of the donated one"
        },
        {
            question: "After donation, about what percentage of original kidney function can a donor expect to have long-term?",
            options: [
                "Exactly 50%",
                "Less than 40%",
                "About 70-80%",
                "100%"
            ],
            correctAnswer: "About 70-80%"
        },
        {
            question: "Compared to the general population, the risk of a donor needing a transplant later in life is:",
            options: [
                "Much higher",
                "Exactly the same",
                "Slightly higher, but still less than 1%",
                "Lower"
            ],
            correctAnswer: "Slightly higher, but still less than 1%"
        },
        {
            question: "What is a key way for donors to stay healthy and reduce long-term risks?",
            options: [
                "Avoiding all exercise",
                "Eating a healthy diet and staying physically active",
                "Only drinking bottled water",
                "Taking the recipient's medications"
            ],
            correctAnswer: "Eating a healthy diet and staying physically active"
        },
        {
            question: "What should a donor do if they feel anxious or depressed after the surgery?",
            options: [
                "Ignore the feelings and hope they go away",
                "Pretend everything is fine so as not to worry anyone",
                "Talk to the transplant team about their physical and emotional health",
                "Stop going to follow-up visits"
            ],
            correctAnswer: "Talk to the transplant team about their physical and emotional health"
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
