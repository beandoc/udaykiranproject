import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill } from "lucide-react";

export default function MedicationTrackerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Medication Tracker</h1>
      <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg bg-card">
        <div className="p-4 bg-primary/10 rounded-full mb-4">
          <Pill className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold font-headline">Medication Tracking Coming Soon</h2>
        <p className="max-w-md mt-2 text-muted-foreground">
          A tool to help you manage your medications, set reminders, and track your adherence is under development.
          Staying on top of your medication schedule is crucial, and we want to make it as easy as possible.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">This feature will be available shortly.</p>
      </div>
    </div>
  );
}
