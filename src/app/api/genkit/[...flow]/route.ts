import {genkitNextApiHandler} from '@genkit-ai/next';
import '@/ai/genkit'; // This will initialize the genkit configuration.

// Import all flows to register them with the API handler for production.
import '@/ai/flows/answer-transplant-questions';
import '@/ai/flows/narrate-content-flow';

export const {GET, POST} = genkitNextApiHandler();
