import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This is a simplified, shared Genkit configuration.
// It is imported by flows to define prompts, tools, and other AI constructs.
// The main plugin configuration for the dev server is in dev.ts.

export const ai = genkit({
  plugins: [googleAI()],
});
