import { genkitNext } from '@genkit-ai/next';
import {config} from 'dotenv';
config();

// Import flows to register them with the production API handler
import '@/ai/flows/answer-transplant-questions';
import '@/ai/flows/narrate-content-flow';

// This is the standard Next.js route handler for Genkit.
// It will automatically expose all of your defined flows as API endpoints.
export const { GET, POST, OPTIONS } = genkitNext();
