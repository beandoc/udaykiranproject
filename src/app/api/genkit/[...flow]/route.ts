import {genkitNextApiHandler} from '@genkit-ai/next';
import '@/ai/flows/answer-transplant-questions';
import '@/ai/flows/narrate-content-flow';

export const {GET, POST} = genkitNextApiHandler();
