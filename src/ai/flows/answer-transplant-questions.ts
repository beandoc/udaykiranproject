// src/ai/flows/answer-transplant-questions.ts
'use server';

/**
 * @fileOverview An AI agent that answers questions about kidney transplants.
 *
 * - answerTransplantQuestions - A function that answers questions about kidney transplants using reliable sources.
 * - AnswerTransplantQuestionsInput - The input type for the answerTransplantQuestions function.
 * - AnswerTransplantQuestionsOutput - The return type for the answerTransplantQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerTransplantQuestionsInputSchema = z.object({
  question: z.string().describe('The question about kidney transplants.'),
});
export type AnswerTransplantQuestionsInput = z.infer<typeof AnswerTransplantQuestionsInputSchema>;

const AnswerTransplantQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about kidney transplants.'),
});
export type AnswerTransplantQuestionsOutput = z.infer<typeof AnswerTransplantQuestionsOutputSchema>;


const answerTransplantQuestionsPrompt = ai.definePrompt({
  name: 'answerTransplantQuestionsPrompt',
  input: {schema: AnswerTransplantQuestionsInputSchema},
  output: {schema: AnswerTransplantQuestionsOutputSchema},
  system: `You are a helpful AI assistant providing information about kidney transplants.
  You will answer the user's question clearly and concisely, based on your training data from reliable medical sources.`,
  prompt: `Answer the following question: {{question}}`,
});


const answerTransplantQuestionsFlow = ai.defineFlow(
  {
    name: 'answerTransplantQuestionsFlow',
    inputSchema: AnswerTransplantQuestionsInputSchema,
    outputSchema: AnswerTransplantQuestionsOutputSchema,
  },
  async input => {
    const {output} = await answerTransplantQuestionsPrompt(input);
    return output!;
  }
);

export async function answerTransplantQuestions(input: AnswerTransplantQuestionsInput): Promise<AnswerTransplantQuestionsOutput> {
  return answerTransplantQuestionsFlow(input);
}
