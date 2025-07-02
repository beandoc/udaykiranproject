import { modulesByRole } from './modules-data';

export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export const quizData: { [key: string]: QuizQuestion[] } = {
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
