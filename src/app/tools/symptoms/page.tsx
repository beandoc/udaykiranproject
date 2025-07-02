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

const symptoms = ["Fever", "Fatigue", "Nausea", "Pain", "Headache", "Shortness of Breath", "Swelling"];
const moods = [
    { name: 'Good', icon: Smile, color: 'text-green-500' },
    { name: 'Okay', icon: Meh, color: 'text-yellow-500' },
    { name: 'Bad', icon: Frown, color: 'text-red-500' },
];

export default function SymptomLogPage() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
    const [notes, setNotes] = useState("");
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Symptoms Logged",
            description: "Your symptom report has been saved successfully.",
            variant: "default",
        });
        // Reset form
        setSelectedMood(null);
        setSelectedSymptoms([]);
        setNotes("");
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">Symptom Log</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Daily Symptom Check</CardTitle>
                    <CardDescription>Log your symptoms to share with your care team.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <Label className="text-base font-semibold">How are you feeling today?</Label>
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
                                        <span className="text-sm font-medium">{mood.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-base font-semibold">Any symptoms to report?</Label>
                            <ToggleGroup
                                type="multiple"
                                variant="outline"
                                value={selectedSymptoms}
                                onValueChange={(value) => setSelectedSymptoms(value)}
                                className="flex flex-wrap gap-2 justify-start"
                            >
                                {symptoms.map(symptom => (
                                    <ToggleGroupItem key={symptom} value={symptom} className="rounded-full">
                                        {symptom}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                        
                        <div className="space-y-2">
                             <Label htmlFor="notes" className="text-base font-semibold">Additional notes</Label>
                             <Textarea
                                id="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Any other symptoms or concerns..."
                             />
                        </div>

                        <Button type="submit" size="lg">Save Symptom Report</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
