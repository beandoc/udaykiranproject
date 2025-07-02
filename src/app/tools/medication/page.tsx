import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill } from "lucide-react";

export default function MedicationTrackerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Medication Tracker</h1>
      <Card className="text-center flex flex-col items-center">
        <CardHeader className="items-center">
           <div className="p-4 bg-primary/10 rounded-full mb-4">
            <Pill className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="font-headline">Medication Tracking Coming Soon</CardTitle>
          <CardDescription className="max-w-md">
            A tool to help you manage your medications, set reminders, and track your adherence is under development.
            Staying on top of your medication schedule is crucial, and we want to make it as easy as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This feature will be available shortly.</p>
        </CardContent>
      </Card>
    </div>
  );
}
