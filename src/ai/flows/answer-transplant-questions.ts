'use server';

/**
 * @fileOverview An AI agent that answers questions about kidney transplants by grounding its responses in the provided educational content.
 *
 * - answerTransplantQuestions - A function that answers questions based on the content for a specific user role.
 * - AnswerTransplantQuestionsInput - The input type for the answerTransplantQuestions function.
 * - AnswerTransplantQuestionsOutput - The return type for the answerTransplantQuestions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { modulesByRole } from '@/lib/modules-data';
import { getContentDataForLang } from '@/lib/content-data';
import React from 'react';

// Helper function to extract text from ReactNode, which is how our content is structured.
const extractTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join('');
  }
  if (React.isValidElement(node) && node.props.children) {
    return React.Children.toArray(node.props.children)
      .map(child => extractTextFromReactNode(child))
      .join('');
  }
  return '';
};


const AnswerTransplantQuestionsInputSchema = z.object({
  question: z.string().describe('The question about kidney transplants.'),
  role: z.enum(['Patient', 'Donor', 'Caregiver']).describe("The user's role, which determines the context to use."),
  language: z.enum(['en', 'hi', 'mr']).describe('The language of the question and the desired language for the answer.'),
});
export type AnswerTransplantQuestionsInput = z.infer<typeof AnswerTransplantQuestionsInputSchema>;

const AnswerTransplantQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about kidney transplants.'),
});
export type AnswerTransplantQuestionsOutput = z.infer<typeof AnswerTransplantQuestionsOutputSchema>;


const answerTransplantQuestionsPrompt = ai.definePrompt({
  name: 'answerTransplantQuestionsPrompt',
  input: {
    schema: z.object({
      question: z.string(),
      context: z.string(),
      language: z.string(),
    }),
  },
  output: { schema: AnswerTransplantQuestionsOutputSchema },
  system: `You are a helpful AI assistant for a kidney transplant application called UdayKiran.
Your role is to answer user questions based *only* on the provided context from the educational modules.
Do not use any information from outside the provided context.
Your answers should be clear, concise, and directly address the user's question using the text provided.
If the answer cannot be found in the provided context, you MUST respond with the exact phrase: "Sorry, I am not sure. Please ask your Nephrologist."
The user's question is in the language with code '{{language}}' (en: English, hi: Hindi, mr: Marathi). You MUST respond in the same language.`,
  prompt: `Context from educational modules (in English):
---
{{context}}
---

User's Question: {{question}}`,
  model: 'googleai/gemini-1.5-flash-latest',
});


const answerTransplantQuestionsFlow = ai.defineFlow(
  {
    name: 'answerTransplantQuestionsFlow',
    inputSchema: AnswerTransplantQuestionsInputSchema,
    outputSchema: AnswerTransplantQuestionsOutputSchema,
  },
  async ({ question, role, language }) => {
    // 1. Get the list of module slugs for the given role.
    const modulesForRole = modulesByRole[role].modules;
    const slugs = modulesForRole.map(m => m.slug);
    
    // 2. Load the content for those modules. We'll use the English content as the source of truth for the AI.
    const contentData = getContentDataForLang('en');
    
    // 3. Extract and combine the text from the relevant modules.
    const context = slugs
      .map(slug => {
        const moduleContent = contentData[slug];
        if (moduleContent) {
          const standardText = extractTextFromReactNode(moduleContent.standard);
          const eli10Text = extractTextFromReactNode(moduleContent.eli10);
          return `Module: ${slug}\nStandard Content:\n${standardText}\n\nSimplified Content:\n${eli10Text}`;
        }
        return '';
      })
      .join('\n\n---\n\n');
      
    // 4. Call the prompt with the user's question and the generated context.
    const { output } = await answerTransplantQuestionsPrompt({
      question,
      context,
      language,
    });
    
    return output!;
  }
);

export async function answerTransplantQuestions(input: AnswerTransplantQuestionsInput): Promise<AnswerTransplantQuestionsOutput> {
  return answerTransplantQuestionsFlow(input);
}
