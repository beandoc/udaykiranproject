'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/hooks/use-toast";
import { Frown, Meh, Smile } from "lucide-react";
import { useAppContext } from "@/context/app-context";

const symptoms = ["Fever", "Fatigue", "Nausea", "Pain", "Headache", "Shortness of Breath", "Swelling"];
const moods = [
    { name: 'Good', icon: Smile, color: 'text-green-500', tKey: 'symptomsFeelingGood' },
    { name: 'Okay', icon: Meh, color: 'text-yellow-500', tKey: 'symptomsFeelingOkay' },
    { name: 'Bad', icon: Frown, color: 'text-red-500', tKey: 'symptomsFeelingBad' },
];

export default function SymptomLogPage() {
    const { t } = useAppContext();
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
    const [notes, setNotes] = useState("");
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: t('symptomsToastTitle'),
            description: t('symptomsToastDesc'),
            variant: "default",
        });
        // Reset form
        setSelectedMood(null);
        setSelectedSymptoms([]);
        setNotes("");
    }

    const symptomTKeys: {[key: string]: string} = {
        "Fever": "symptomFever",
        "Fatigue": "symptomFatigue",
        "Nausea": "symptomNausea",
        "Pain": "symptomPain",
        "Headache": "symptomHeadache",
        "Shortness of Breath": "symptomShortnessOfBreath",
        "Swelling": "symptomSwelling",
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('symptomsTitle')}</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{t('symptomsCardTitle')}</CardTitle>
                    <CardDescription>{t('symptomsCardDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <Label className="text-base font-semibold">{t('symptomsFeelingPrompt')}</Label>
                            <div className="flex gap-4">
                                {moods.map(mood => (
                                    <button
                                        type="button"
                                        key={mood.name}
                                        onClick={() => setSelectedMood(mood.name)}
                                        className={cn(
                                            "flex flex-col items-center gap-2 p-4 rounded-lg border-2 w-24 h-24 justify-center transition-colors",
                                            selectedMood === mood.name ? 'border-primary bg-primary/10' : 'bg-card hover:bg-muted/50'
                                        )}
                                    >
                                        <mood.icon className={cn("w-8 h-8", mood.color)} />
                                        <span className="text-sm font-medium">{t(mood.tKey)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-base font-semibold">{t('symptomsReportPrompt')}</Label>
                            <ToggleGroup
                                type="multiple"
                                variant="outline"
                                value={selectedSymptoms}
                                onValueChange={(value) => setSelectedSymptoms(value)}
                                className="flex flex-wrap gap-2 justify-start"
                            >
                                {symptoms.map(symptom => (
                                    <ToggleGroupItem key={symptom} value={symptom} className="rounded-full">
                                        {t(symptomTKeys[symptom] || symptom)}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                        
                        <div className="space-y-2">
                             <Label htmlFor="notes" className="text-base font-semibold">{t('symptomsNotesLabel')}</Label>
                             <Textarea
                                id="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder={t('symptomsNotesPlaceholder')}
                             />
                        </div>

                        <Button type="submit" size="lg">{t('symptomsSubmitButton')}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
