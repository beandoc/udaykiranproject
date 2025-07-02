import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

export default function SymptomLogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Symptom Log</h1>
      <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg bg-card">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <HeartPulse className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline">Symptom Logging Feature Coming Soon</h2>
          <p className="max-w-md mt-2 text-muted-foreground">
            Soon you'll be able to easily log any symptoms you experience. This tool will help you and your
            care team monitor your health and spot trends over time with visual graphs.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">We're working on making this feature intuitive and helpful.</p>
        </div>
    </div>
  );
}
