'use server';
/**
 * @fileOverview A flow for narrating text content using Text-to-Speech.
 *
 * - narrateContent - A function that converts a string of text into an audio data URI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';
import { googleAI } from '@genkit-ai/googleai';

const NarrateContentOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe("The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."),
});

// This type is used internally and not exported, which is valid for "use server" files.
type NarrateContentOutput = z.infer<typeof NarrateContentOutputSchema>;

export async function narrateContent(text: string): Promise<NarrateContentOutput> {
  return narrateContentFlow(text);
}

// Helper function to convert PCM audio buffer to WAV base64 string
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: Buffer[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const narrateContentFlow = ai.defineFlow(
  {
    name: 'narrateContentFlow',
    inputSchema: z.string(),
    outputSchema: NarrateContentOutputSchema,
  },
  async (text) => {
    // Limit text length to avoid overly long and expensive API calls.
    const truncatedText = text.length > 5000 ? text.substring(0, 5000) : text;

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: truncatedText,
    });

    if (!media) {
      throw new Error('No media was returned from the TTS model.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);
