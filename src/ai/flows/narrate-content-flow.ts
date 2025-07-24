import { z } from 'zod';
import wav from 'wav';
// import { googleAI } from '@genkit-ai/googleai';

const NarrateContentOutputSchema = z.object({
  audioDataUri: z.string(),
});

// export const narrateContentFlow = defineFlow(
//   {
//     name: 'narrate-content-flow',
//     inputSchema: z.string(),
//     outputSchema: NarrateContentOutputSchema,
//     description: 'Narrates the given content using Google AI',
//   }, // flow options
//   async (content, {
//     context,
//   }) => {
//     console.log('starting narrate flow');
//     // Generate audio from the content using Google AI
//     const audioData = await googleAI().generateTextToSpeech({
//       text: content,
//       model: 'gemini-1.5-pro-audio',
//       voice: 'en-US-Standard-H',
//     });

//     // Get the audio data as a buffer
//     const audioBuffer = Buffer.from(audioData.audio, 'base64');

//     // Encode the audio buffer as a WAV file
//     const wavEncoder = new wav.Writer({
//       channels: 1,
//       sampleRate: 24000,
//       bitDepth: 16,
//     });

//     wavEncoder.write(audioBuffer);
//     wavEncoder.end();

//     const chunks = [];
//     for await (const chunk of wavEncoder) {
//       chunks.push(chunk);
//     }

//     const wavBuffer = Buffer.concat(chunks);

//     // Convert the WAV buffer to a data URI
//     const audioDataUri = `data:audio/wav;base64,${wavBuffer.toString('base64')}`;

//     return {
//       audioDataUri,
//     };
//   }
// );
