import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MedicationTrackerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Medication Tracker</h1>
      <Card className="text-center">
            <div className="relative w-full h-64">
                <Image
                    src="/images/medication.jpg"
                    alt="A collection of pills and a medication bottle."
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Medication Tracking Coming Soon</CardTitle>
                <CardDescription>
                  A tool to help you manage your medications, set reminders, and track your adherence is under development.
                  Staying on top of your medication schedule is crucial, and we want to make it as easy as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">This feature will be available shortly.</p>
            </CardContent>
       </Card>
    </div>
  );
}
