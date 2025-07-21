import {config} from 'dotenv';
config();

// This file is the entrypoint for the Genkit developer UI.
// It is used to register all the defined flows.

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {genkitNext} from '@genkit-ai/next';

genkit({
  plugins: [googleAI(), genkitNext()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

import './flows/answer-transplant-questions';
import './flows/narrate-content-flow';