import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

export default function SymptomLogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Symptom Log</h1>
      <Card className="text-center flex flex-col items-center">
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <HeartPulse className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="font-headline">Symptom Logging Feature Coming Soon</CardTitle>
          <CardDescription className="max-w-md">
            Soon you'll be able to easily log any symptoms you experience. This tool will help you and your
            care team monitor your health and spot trends over time with visual graphs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">We're working on making this feature intuitive and helpful.</p>
        </CardContent>
      </Card>
    </div>
  );
}
