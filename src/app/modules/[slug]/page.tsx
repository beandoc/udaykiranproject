'use client';

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { quizData, type QuizQuestion } from "@/lib/quiz-data";
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, HelpCircle, BookOpen, Volume2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { getContentDataForLang } from "@/lib/content-data";
import { useAppContext } from "@/context/app-context";
import { narrateContent } from "@/ai/flows/narrate-content-flow";
import React from "react";

export default function ModulePage() {
    const params = useParams();
    const slug = params.slug as string;
    const { toast } = useToast();
    const { t, role, modulesByRole, updateModuleStatus, language } = useAppContext();
    
    const [viewMode, setViewMode] = useState<'content' | 'quiz'>('content');
    const [narrationState, setNarrationState] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
    const [audioSrc, setAudioSrc] = useState<string | null>(null);

    const contentDataForLang = useMemo(() => getContentDataForLang(language), [language]);
    const moduleContent = contentDataForLang[slug];

    const [questions, setQuestions] = useState<QuizQuestion[]>(() => {
        return quizData[slug] || [];
    });

    const moduleInfo = modulesByRole[role].modules.find(module => module.slug === slug);

    const moduleTitle = moduleInfo?.title || 'Module';

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerSelect = (answer: string) => {
        if (selectedAnswers[currentQuestionIndex] !== null) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = answer;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    
    const handleSubmit = () => {
        setIsSubmitted(true);
        const correctCount = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
        
        if (moduleInfo?.status === 'Not Started') {
            updateModuleStatus(slug, role);
        }

        toast({
            title: t('quizResultsTitle'),
            description: t('quizResultsScore', { score: correctCount, total: questions.length }),
        });
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(questions.length).fill(null));
        setIsSubmitted(false);
    };

    const extractText = (node: React.ReactNode): string => {
        if (!node) return '';
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join(' ');
        if (React.isValidElement(node) && node.props.children) {
          return React.Children.toArray(node.props.children).map(extractText).join(' ');
        }
        return '';
    };

    const handleNarration = async () => {
        setNarrationState('loading');
        setAudioSrc(null);
        try {
            const textToNarrate = extractText(moduleContent);
            if (!textToNarrate.trim()) {
                throw new Error("No text content found to narrate.");
            }
            const result = await narrateContent(textToNarrate);
            setAudioSrc(result.audioDataUri);
            setNarrationState('playing');
        } catch (error) {
            console.error("Narration failed:", error);
            setNarrationState('error');
            toast({
                title: "Narration Failed",
                description: "Could not generate audio for this content. Please try again later.",
                variant: "destructive"
            });
            setTimeout(() => setNarrationState('idle'), 3000);
        }
    };
    
    const score = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    if (!moduleInfo) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">{t('moduleNotFoundTitle')}</h1>
                <p className="text-muted-foreground">{t('moduleNotFoundDesc')}</p>
                <Button asChild className="mt-4">
                    <Link href="/modules">{t('moduleNotFoundBack')}</Link>
                </Button>
            </div>
        )
    }

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const isAnswered = selectedAnswer !== null;

    if (viewMode === 'content') {
        return (
             <div className="max-w-4xl mx-auto space-y-6">
                <Card>
                    <CardHeader>
                        <p className="text-sm font-medium text-primary">{t(moduleTitle)}</p>
                        <CardTitle className="font-headline text-3xl">{t('contentTitle')}</CardTitle>
                        <CardDescription>
                            {t('contentDescription')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {moduleContent}
                    </CardContent>
                    <CardFooter className="flex-col items-stretch gap-4 sm:flex-row sm:justify-between">
                         <Button variant="outline" asChild>
                            <Link href="/modules">
                                <ChevronLeft className="mr-2 h-4 w-4" /> {t('contentBackToPath')}
                            </Link>
                        </Button>
                        <div className="flex flex-col sm:flex-row gap-2">
                             <Button onClick={handleNarration} disabled={narrationState === 'loading'} variant="secondary">
                                {narrationState === 'loading' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Volume2 className="mr-2 h-4 w-4" />}
                                {t('narrateContent')}
                            </Button>
                            {questions && questions.length > 0 ? (
                                <Button onClick={() => setViewMode('quiz')} size="lg">
                                    {t('contentStartQuiz')} <HelpCircle className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button disabled size="lg">
                                    {t('contentQuizComingSoon')}
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
                {audioSrc && narrationState === 'playing' && (
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('contentNarrationTitle')}</CardTitle>
                            <CardDescription>{t('contentNarrationDesc')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <audio controls autoPlay src={audioSrc} className="w-full">
                                Your browser does not support the audio element.
                            </audio>
                        </CardContent>
                    </Card>
                )}
            </div>
        )
    }

    if (questions.length === 0) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">{t('quizNotFoundTitle')}</h1>
                <p className="text-muted-foreground">{t('quizNotFoundDesc')}</p>
                <Button onClick={() => setViewMode('content')} className="mt-4">
                    <ChevronLeft className="mr-2 h-4 w-4" /> {t('quizBackToContent')}
                </Button>
            </div>
        )
    }

    if (isSubmitted) {
        return (
            <Card className="max-w-3xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">{t('quizResultsTitle')}</CardTitle>
                     <CardDescription>{t('quizResultsCongrats')}</CardDescription>
                    <p className="text-lg font-semibold pt-2">{t('quizResultsScore', { score: score, total: questions.length })}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    {questions.map((q, index) => {
                        const userAnswer = selectedAnswers[index];
                        const isCorrect = userAnswer === q.correctAnswer;
                        return (
                            <div key={index} className="p-4 border rounded-lg">
                                <p className="font-semibold">{index + 1}. {q.question}</p>
                                <p className={cn("mt-2 text-sm flex items-center gap-2", isCorrect ? 'text-green-600' : 'text-red-600')}>
                                    {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                    {t('quizUserAnswer')} {userAnswer || t('quizNotAnswered')}
                                </p>
                                {!isCorrect && (
                                    <p className="mt-1 text-sm text-green-700 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        {t('quizCorrectAnswer')} {q.correctAnswer}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </CardContent>
                <CardFooter className="flex-col sm:flex-row gap-4 w-full">
                    <Button variant="outline" onClick={() => {
                        resetQuiz();
                        setViewMode('content');
                    }} className="w-full sm:w-auto">
                        <BookOpen className="mr-2 h-4 w-4" /> {t('quizReviewContent')}
                    </Button>
                    <Button onClick={resetQuiz} className="w-full sm:w-auto">
                        {t('quizRetake')}
                    </Button>
                    <Button asChild className="w-full sm:w-auto" size="lg">
                        <Link href="/modules">{t('quizBackToPath')}</Link>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
                <p className="text-sm font-medium text-primary">{t(moduleTitle)}</p>
                <h1 className="text-2xl font-bold font-headline tracking-tight mt-1">{t('quizTitle')}</h1>
                <Progress value={progress} className="mt-4" />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('quizQuestionOf', { current: currentQuestionIndex + 1, total: questions.length })}</CardTitle>
                    <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup
                        value={selectedAnswer ?? undefined}
                        onValueChange={handleAnswerSelect}
                        className="space-y-3"
                        disabled={isAnswered}
                    >
                        {currentQuestion.options.map((option, index) => {
                            const isCorrect = option === currentQuestion.correctAnswer;
                            const isSelected = selectedAnswer === option;

                            return (
                                <Label key={index} htmlFor={`option-${index}`} className={cn(
                                    "flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors",
                                    !isAnswered && "hover:bg-muted/50",
                                    isAnswered && isCorrect && "border-green-500 bg-green-100/50 text-green-900 font-semibold",
                                    isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-100/50 text-red-900 font-semibold",
                                    isAnswered && !isSelected && !isCorrect && "opacity-60 cursor-not-allowed",
                                    isAnswered && "cursor-default"
                                )}>
                                    <RadioGroupItem value={option} id={`option-${index}`} className={cn(
                                        isAnswered && isCorrect && "border-green-600 text-green-600",
                                        isAnswered && isSelected && !isCorrect && "border-red-600 text-red-600"
                                    )} />
                                    <span>{option}</span>
                                    {isAnswered && isCorrect && <CheckCircle className="ml-auto w-5 h-5 text-green-600" />}
                                    {isAnswered && isSelected && !isCorrect && <XCircle className="ml-auto w-5 h-5 text-red-600" />}
                                </Label>
                            )
                        })}
                    </RadioGroup>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center">
                 <Button variant="outline" onClick={() => setViewMode('content')}>
                    <BookOpen className="mr-2 h-4 w-4" /> {t('quizBackToContent')}
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> {t('quizPrevious')}
                    </Button>
                    {currentQuestionIndex === questions.length - 1 ? (
                        <Button onClick={handleSubmit} disabled={!selectedAnswer}>{t('quizSubmit')}</Button>
                    ) : (
                        <Button onClick={handleNext} disabled={!selectedAnswer}>
                            {t('quizNext')} <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
