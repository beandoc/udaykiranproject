
'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { answerTransplantQuestions } from '@/ai/flows/answer-transplant-questions';
import type { AnswerTransplantQuestionsOutput } from '@/ai/flows/answer-transplant-questions';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, Bot, User, Mic } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppContext } from '@/context/app-context';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";


const FormSchema = z.object({
  question: z.string().min(10, { message: 'Please enter a question of at least 10 characters.' }),
});

type FormValues = z.infer<typeof FormSchema>;

// Extend the Window interface for SpeechRecognition
declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

export default function AssistantPage() {
  const { t, role, language } = useAppContext();
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);
  const [response, setResponse] = useState<AnswerTransplantQuestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);


  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      question: '',
    },
  });

   useEffect(() => {
    if (typeof window !== 'undefined') {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            
            recognition.onstart = () => {
                setIsListening(true);
            };
            
            recognition.onend = () => {
                setIsListening(false);
            };

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                form.setValue('question', transcript);
            };

            recognition.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                let toastMessage = 'Speech recognition error. Please try again.';
                if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                    toastMessage = "Microphone access denied. Please allow microphone access in your browser settings.";
                } else if (event.error === 'no-speech') {
                    toastMessage = "No speech was detected. Please try again.";
                }
                 toast({
                    title: "Voice Input Error",
                    description: toastMessage,
                    variant: "destructive"
                });
            };
            
            recognitionRef.current = recognition;
        } else {
             console.warn("Speech Recognition API not supported in this browser.");
        }
    }
   }, []);

  const handleMicClick = () => {
    if (!recognitionRef.current) {
        toast({
            title: "Voice Input Not Supported",
            description: "Your browser does not support voice input.",
            variant: "destructive"
        });
        return;
    }
    if (isListening) {
        recognitionRef.current.stop();
    } else {
        // Set the language for recognition
        const langCode = {
            en: 'en-US',
            hi: 'hi-IN',
            mr: 'mr-IN'
        }[language] || 'en-US';
        recognitionRef.current.lang = langCode;

        recognitionRef.current.start();
    }
  };


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);
    setLastQuestion(data.question);

    try {
      const result = await answerTransplantQuestions({ question: data.question, role });
      setResponse(result);
    } catch (err) {
      setError(t('assistantError'));
      console.error(err);
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline tracking-tight">{t('assistantTitle')}</h1>
        <p className="text-muted-foreground">{t('assistantDescription')}</p>
      </header>

      <div className="flex-grow space-y-6 overflow-y-auto pr-4">
        {lastQuestion && (
            <div className="flex items-start gap-4 justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-xl">
                    <p>{lastQuestion}</p>
                </div>
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                    <User className="h-5 w-5" />
                </span>
            </div>
        )}

        {isLoading && (
            <div className="flex items-start gap-4">
                 <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                    <Bot className="h-5 w-5" />
                </span>
                <div className="bg-card rounded-lg p-4 w-full max-w-xl space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </div>
        )}
        
        {error && (
            <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-destructive/20 text-destructive">
                    <Bot className="h-5 w-5" />
                </span>
                <div className="bg-destructive/10 border border-destructive/20 text-destructive-foreground rounded-lg p-4 w-full max-w-xl">
                    <p>{error}</p>
                </div>
            </div>
        )}

        {response && (
            <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                    <Bot className="h-5 w-5" />
                </span>
                <div className="bg-card rounded-lg p-4 w-full max-w-xl">
                    <p className="text-card-foreground">{response.answer}</p>
                </div>
            </div>
        )}

        {!isLoading && !response && !lastQuestion &&(
             <Card className="max-w-xl mx-auto border-dashed">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <Sparkles className="text-primary"/>
                        <span>{t('assistantDefaultCardTitle')}</span>
                    </CardTitle>
                    <CardDescription>
                        {t('assistantDefaultCardDesc')}
                    </CardDescription>
                </CardHeader>
            </Card>
        )}
      </div>

      <div className="mt-auto pt-6 bg-background/80 backdrop-blur-sm sticky bottom-0">
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem className="flex-grow relative">
                    <FormControl>
                      <Textarea
                        placeholder={isListening ? 'Listening...' : t('assistantFormPlaceholder')}
                        className="min-h-12 resize-none bg-card pr-12"
                        {...field}
                      />
                    </FormControl>
                     <Button 
                        type="button" 
                        variant="ghost"
                        size="icon"
                        onClick={handleMicClick}
                        className={cn(
                            "absolute top-1/2 right-2 -translate-y-1/2 rounded-full",
                            isListening && "text-destructive animate-pulse"
                        )}
                        aria-label="Ask by voice"
                     >
                        <Mic className="h-5 w-5" />
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                  {isLoading ? t('assistantFormButtonLoading') : t('assistantFormButton')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
