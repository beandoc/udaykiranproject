
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
            question: "When are the first few months after a kidney transplant considered?",
            options: [
                "The most stable period",
                "A critical period of adjustment",
                "A time to travel and celebrate",
                "A time to stop all medications"
            ],
            correctAnswer: "A critical period of adjustment"
        },
        {
            question: "How does the frequency of your check-ups change over time after a transplant?",
            options: [
                "They become more frequent",
                "They stay the same",
                "They become less frequent (e.g., from daily to weekly)",
                "You only need one check-up"
            ],
            correctAnswer: "They become less frequent (e.g., from daily to weekly)"
        },
        {
            question: "What is one reason wound healing might be slower after surgery?",
            options: [
                "Drinking too much water",
                "Sleeping too much",
                "Certain medications or conditions like diabetes",
                "Eating too much protein"
            ],
            correctAnswer: "Certain medications or conditions like diabetes"
        },
        {
            question: "What should you do if you notice any changes in your health after going home?",
            options: [
                "Wait a week to see if it gets better",
                "Search for remedies online",
                "Report it to your health care team as soon as possible",
                "Ask a friend for advice"
            ],
            correctAnswer: "Report it to your health care team as soon as possible"
        },
        {
            question: "Why might you need to arrange temporary accommodation after discharge?",
            options: [
                "To have a vacation",
                "If you live a long distance from the transplant hospital",
                "Because your home needs to be redecorated",
                "It is a mandatory rule for all patients"
            ],
            correctAnswer: "If you live a long distance from the transplant hospital"
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
    'donor-evaluation': [
        {
            question: "What is the primary purpose of the medical assessment for a potential living donor?",
            options: [
                "To ensure the donation is safe for the donor.",
                "To see how much the donor can be paid.",
                "To practice the surgery.",
                "To get a discount on hospital fees."
            ],
            correctAnswer: "To ensure the donation is safe for the donor."
        },
        {
            question: "Which of these is NOT a key requirement for being a living kidney donor?",
            options: [
                "Good overall health.",
                "Normal kidney function.",
                "Having the exact same hobbies as the recipient.",
                "Emotional suitability for donation."
            ],
            correctAnswer: "Having the exact same hobbies as the recipient."
        },
        {
            question: "What happens if a previously unknown health problem is discovered in the donor during the evaluation?",
            options: [
                "The process stops immediately and the donor is sent home.",
                "The donor is ignored and the team looks for someone else.",
                "The donor receives support and is referred to a specialist for care.",
                "The donor has to pay for all the tests."
            ],
            correctAnswer: "The donor receives support and is referred to a specialist for care."
        },
        {
            question: "Which of the following tests is part of the donor evaluation process?",
            options: [
                "A driving test.",
                "A cooking class.",
                "A test for blood and tissue type compatibility.",
                "An IQ test."
            ],
            correctAnswer: "A test for blood and tissue type compatibility."
        },
        {
            question: "Besides medical tests, what other type of assessment is typically part of the donor evaluation?",
            options: [
                "A financial audit.",
                "A psychological assessment.",
                "A fashion consultation.",
                "A review of their social media."
            ],
            correctAnswer: "A psychological assessment."
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
            question: "What is the most common method for removing a kidney from a living donor?",
            options: ["Open nephrectomy", "Laparoscopic (keyhole) surgery", "Robotic surgery", "Ultrasound extraction"],
            correctAnswer: "Laparoscopic (keyhole) surgery"
        },
        {
            question: "What is a major advantage of laparoscopic surgery for the donor?",
            options: ["It is a faster operation", "It results in less pain and a quicker recovery", "It guarantees the kidney will work better", "It does not leave any scars"],
            correctAnswer: "It results in less pain and a quicker recovery"
        },
        {
            question: "What does a surgeon use to see inside the donor's body during a laparoscopic procedure?",
            options: ["X-ray goggles", "A microscope", "A laparoscope (a thin tube with a camera)", "A small mirror"],
            correctAnswer: "A laparoscope (a thin tube with a camera)"
        },
        {
            question: "In which situation might an open nephrectomy be performed instead of a laparoscopic one?",
            options: ["If the donor requests it for a bigger scar", "If the donor's anatomy is not suitable for keyhole surgery", "If the hospital's power goes out", "If the donor is left-handed"],
            correctAnswer: "If the donor's anatomy is not suitable for keyhole surgery"
        },
        {
            question: "How is the donor's kidney removed from the body in keyhole surgery?",
            options: ["It is broken into small pieces first", "It is pulled out through one of the tiny incisions", "It is removed through a slightly larger single incision", "It is teleported out"],
            correctAnswer: "It is removed through a slightly larger single incision"
        }
    ],
    'donor-recovery': [
        {
            question: "What is the typical hospital stay for a living kidney donor after surgery?",
            options: ["One day", "Two to three weeks", "Four to ten days", "Over a month"],
            correctAnswer: "Four to ten days"
        },
        {
            question: "For how long should a living donor avoid driving and heavy lifting after surgery?",
            options: ["For two days", "For two weeks", "For at least six weeks", "Until they feel like it"],
            correctAnswer: "For at least six weeks"
        },
        {
            question: "Which type of surgery generally leads to a faster recovery for the donor?",
            options: ["Open nephrectomy", "Laparoscopic (keyhole) surgery", "Both are the same", "Neither, recovery is always 6 months"],
            correctAnswer: "Laparoscopic (keyhole) surgery"
        },
        {
            question: "What is a normal experience for the donor immediately after surgery?",
            options: ["Feeling no pain at all", "Feeling pain around the wound", "Being able to run a marathon", "Going home the same day"],
            correctAnswer: "Feeling pain around the wound"
        },
        {
            question: "Why is it important to follow all of the doctor's recovery instructions?",
            options: ["To get a discount on the hospital bill", "Because it is a legal requirement", "To reduce infection risk and support healing", "To be able to drive sooner"],
            correctAnswer: "To reduce infection risk and support healing"
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
