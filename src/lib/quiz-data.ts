
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
