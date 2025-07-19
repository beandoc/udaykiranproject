
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
import React, { Children } from 'react';

// Helper function to extract text from ReactNode, which is how our content is structured.
// This version is designed to handle the simplified content structure.
const extractTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(child => extractTextFromReactNode(child)).join('');
  }
  if (React.isValidElement(node) && node.props.children) {
    const childrenArray = Children.toArray(node.props.children);
    const text = childrenArray.map(child => extractTextFromReactNode(child)).join('');
    
    // Add line breaks for block-level elements to preserve structure
    if (['p', 'h1', 'h2', 'h3', 'h4', 'div', 'li'].includes(node.type as string)) {
      return text + '\n';
    }
    return text;
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
Do not use any information from outside the provided context. Your answers should be clear, concise, and directly address the user's question using the text provided.

CRITICAL INSTRUCTION: The user's question and the provided context are in the language with the code '{{language}}' (en: English, hi: Hindi, mr: Marathi). You MUST respond in the exact same language. For example, if the question is in Hindi, your answer MUST be in Hindi. If the question is in Marathi, your answer MUST be in Marathi. This is a strict requirement.

If the answer cannot be found in the provided context, you MUST respond with the exact phrase in the correct language:
- For English ('en'): "Sorry, I am not sure. Please ask your Nephrologist."
- For Hindi ('hi'): "माफ़ कीजिए, मुझे यकीन नहीं है। कृपया अपने नेफ्रोलॉजिस्ट से पूछें।"
- For Marathi ('mr'): "माफ करा, मला खात्री नाही। कृपया आपल्या नेफ्रोलॉजिस्टला विचारा।"`,
  prompt: `Context from educational modules (in language '{{language}}'):
---
{{context}}
---

User's Question (in language '{{language}}'): {{question}}`,
  model: 'googleai/gemini-1.5-flash-latest',
});


const answerTransplantQuestionsFlow = ai.defineFlow(
  {
    name: 'answerTransplantQuestionsFlow',
    inputSchema: AnswerTransplantQuestionsInputSchema,
    outputSchema: AnswerTransplantQuestionsOutputSchema,
  },
  async ({ question, role, language }) => {
    // 1. Get the list of ALL module slugs, regardless of role.
    const allSlugs = new Set<string>();
    Object.values(modulesByRole).forEach(roleData => {
      roleData.modules.forEach(module => {
        allSlugs.add(module.slug);
      });
    });
    
    // 2. Load the content for those modules in the correct language.
    const contentData = getContentDataForLang(language);
    
    // 3. Extract and combine the text from the relevant modules.
    const context = Array.from(allSlugs)
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
