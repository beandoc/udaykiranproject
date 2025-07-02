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
  isReliableSource: z.boolean().describe('Whether the information is from a reliable source, such as a clinical study.'),
});
export type AnswerTransplantQuestionsOutput = z.infer<typeof AnswerTransplantQuestionsOutputSchema>;

const checkSourceReliability = ai.defineTool({
  name: 'checkSourceReliability',
  description: 'Checks if the provided information comes from a reliable source, such as a clinical study.',
  inputSchema: z.object({
    information: z.string().describe('The information to check for reliability.'),
  }),
  outputSchema: z.boolean(),
}, async (input) => {
  // Placeholder implementation: Replace with actual reliability check logic
  // This could involve querying a database of known reliable sources
  // or using an external API to verify the source.
  // For now, we'll just return true if the information contains the phrase "clinical study".
  return input.information.toLowerCase().includes('clinical study');
});

const answerTransplantQuestionsPrompt = ai.definePrompt({
  name: 'answerTransplantQuestionsPrompt',
  input: {schema: AnswerTransplantQuestionsInputSchema},
  output: {schema: AnswerTransplantQuestionsOutputSchema},
  tools: [checkSourceReliability],
  prompt: `You are a helpful AI assistant providing information about kidney transplants.

  Answer the following question clearly and concisely:
  {{question}}

  After answering, use the checkSourceReliability tool to determine if the source of your information is reliable.`,
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
