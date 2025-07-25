'use server';
/**
 * @fileOverview A flow for answering questions about kidney transplants.
 *
 * This file defines the AI flow for handling user questions related to kidney
 * transplantation. It uses Genkit to create a structured prompt and flow that
* ensures responses are helpful, safe, and contextually appropriate for the user's role.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

// Define the input schema for the flow.
// This ensures that any data passed to the flow matches this structure.
const AnswerTransplantQuestionsInputSchema = z.object({
  question: z.string().describe('The user\'s question about kidney transplantation.'),
  role: z.string().describe('The user\'s role (e.g., Patient, Donor, Caregiver).'),
  language: z.string().describe('The language for the response (e.g., en, hi, mr).'),
});

// Define the output schema for the flow.
// This tells the AI what format the response should be in.
const AnswerTransplantQuestionsOutputSchema = z.object({
  answer: z.string().describe('A helpful and empathetic answer to the user\'s question.'),
});

// Export the types for use in our frontend components.
export type AnswerTransplantQuestionsInput = z.infer<typeof AnswerTransplantQuestionsInputSchema>;
export type AnswerTransplantQuestionsOutput = z.infer<typeof AnswerTransplantQuestionsOutputSchema>;


/**
 * Defines the main prompt for the AI.
 * This prompt is carefully engineered to guide the AI's behavior.
 */
const answerTransplantQuestionsPrompt = ai.definePrompt({
    name: 'answerTransplantQuestionsPrompt',
    input: { schema: AnswerTransplantQuestionsInputSchema },
    output: { schema: AnswerTransplantQuestionsOutputSchema },
    prompt: `You are a compassionate, knowledgeable, and helpful AI assistant for the UdayKiran application, a support tool for individuals on the kidney transplant journey in India. Your name is "Uday."

Your primary role is to answer questions from users in a clear, supportive, and easy-to-understand manner. You MUST NOT provide medical advice, diagnoses, or treatment plans. Your purpose is to provide educational information and emotional support ONLY.

ALWAYS follow these rules:
1.  **Identify the User's Role**: The user's role is '{{role}}'. Tailor your answer to be most helpful for that role (Patient, Donor, or Caregiver).
2.  **Answer in the User's Language**: The user's preferred language is '{{language}}'. You MUST respond in that language.
3.  **Start with Empathy**: Begin your response with a short, empathetic statement acknowledging their question.
4.  **Provide a Clear Answer**: Answer the user's question based on general knowledge about the transplant process.
5.  **Crucial Disclaimer**: ALWAYS end your response with the following disclaimer, translated into the user's language: "Important: I am an AI assistant and not a medical professional. This information is for educational purposes only. Please consult your transplant team for personal medical advice."

User's question: "{{question}}"
`,
});


/**
 * Defines the Genkit flow.
 * A flow is an executable function that orchestrates AI and other code.
 */
const answerTransplantQuestionsFlow = ai.defineFlow(
  {
    name: 'answerTransplantQuestionsFlow',
    inputSchema: AnswerTransplantQuestionsInputSchema,
    outputSchema: AnswerTransplantQuestionsOutputSchema,
  },
  async (input) => {
    // Execute the prompt with the given input.
    const { output } = await answerTransplantQuestionsPrompt(input);

    // Ensure we have a valid output before returning.
    if (!output) {
      throw new Error('The AI model did not produce a valid output.');
    }

    return output;
  }
);


/**
 * The exported server action that our Next.js component will call.
 * This function acts as a bridge between the frontend and the Genkit flow.
 */
export async function answerTransplantQuestions(input: AnswerTransplantQuestionsInput): Promise<AnswerTransplantQuestionsOutput> {
  return await answerTransplantQuestionsFlow(input);
}
