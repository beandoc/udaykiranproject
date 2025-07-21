import {config} from 'dotenv';
config();

// This file is the entrypoint for the Genkit developer UI.
// It is used to register all the defined flows for local development.

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

genkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

// Import all flows to register them with the dev UI
import './flows/answer-transplant-questions';
import './flows/narrate-content-flow';
