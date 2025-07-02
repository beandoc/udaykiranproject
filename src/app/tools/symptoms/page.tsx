import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SymptomLogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Symptom Log</h1>
       <Card className="text-center">
            <div className="relative w-full h-64">
                <Image
                    src="/images/symptoms.jpg"
                    alt="A person logging symptoms in a journal."
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Symptom Logging Feature Coming Soon</CardTitle>
                <CardDescription>
                    Soon you'll be able to easily log any symptoms you experience. This tool will help you and your
                    care team monitor your health and spot trends over time with visual graphs.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">We're working on making this feature intuitive and helpful.</p>
            </CardContent>
       </Card>
    </div>
  );
}
