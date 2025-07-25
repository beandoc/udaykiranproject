import {config} from 'dotenv';
config();

// This file is the entrypoint for the Genkit developer UI.
// It is used to register all the defined flows.

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

genkit({
  plugins: [googleAI()],
});

// Import flows to register them with the dev UI
import '@/ai/flows/answer-transplant-questions';
import '@/ai/flows/narrate-content-flow';
