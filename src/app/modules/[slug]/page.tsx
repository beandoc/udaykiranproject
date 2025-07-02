'use client';

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { quizData, type QuizQuestion } from "@/lib/quiz-data";
import { modulesByRole } from "@/lib/modules-data";
import { CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function QuizPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { toast } = useToast();

    const [questions, setQuestions] = useState<QuizQuestion[]>(() => {
        return quizData[slug] || [];
    });

    const moduleTitle = Object.values(modulesByRole)
        .flatMap(role => role.modules)
        .find(module => module.slug === slug)?.title || 'Knowledge Check';

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerSelect = (answer: string) => {
        if (isSubmitted) return;
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
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    
    const handleSubmit = () => {
        setIsSubmitted(true);
        const correctCount = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
        toast({
            title: "Quiz Submitted!",
            description: `You scored ${correctCount} out of ${questions.length}.`,
        });
    };
    
    const score = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    if (!questions || questions.length === 0) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Quiz not found</h1>
                <p className="text-muted-foreground">Could not find a quiz for this module.</p>
                <Button asChild className="mt-4">
                    <Link href="/modules">Back to Modules</Link>
                </Button>
            </div>
        )
    }

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];

    if (isSubmitted) {
        return (
            <Card className="max-w-3xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">Quiz Results</CardTitle>
                    <CardDescription>You scored {score} out of {questions.length}!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {questions.map((q, index) => {
                        const userAnswer = selectedAnswers[index];
                        const isCorrect = userAnswer === q.correctAnswer;
                        return (
                            <div key={index} className="p-4 border rounded-lg">
                                <p className="font-semibold">{index + 1}. {q.question}</p>
                                <p className={`mt-2 text-sm flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                    {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                    Your answer: {userAnswer || 'Not answered'}
                                </p>
                                {!isCorrect && (
                                    <p className="mt-1 text-sm text-green-700 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Correct answer: {q.correctAnswer}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full" size="lg">
                        <Link href="/modules">Back to Learning Path</Link>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
                <p className="text-sm font-medium text-primary">{moduleTitle}</p>
                <h1 className="text-2xl font-bold font-headline tracking-tight mt-1">Quick Knowledge Check</h1>
                <Progress value={progress} className="mt-4" />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
                    <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup
                        value={selectedAnswer ?? undefined}
                        onValueChange={handleAnswerSelect}
                        className="space-y-3"
                        disabled={isSubmitted}
                    >
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswer === option;
                            const isCorrect = currentQuestion.correctAnswer === option;
                            let stateClass = "";
                            if (isSubmitted) {
                                if (isCorrect) stateClass = "border-green-500 bg-green-50";
                                else if (isSelected && !isCorrect) stateClass = "border-red-500 bg-red-50";
                            }
                            return (
                                <Label key={index} htmlFor={`option-${index}`} className={cn("flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors", stateClass)}>
                                    <RadioGroupItem value={option} id={`option-${index}`} />
                                    <span>{option}</span>
                                </Label>
                            )
                        })}
                    </RadioGroup>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                {currentQuestionIndex === questions.length - 1 ? (
                    <Button onClick={handleSubmit} disabled={!selectedAnswer}>Submit Quiz</Button>
                ) : (
                    <Button onClick={handleNext} disabled={!selectedAnswer}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
