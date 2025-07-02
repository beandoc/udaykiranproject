import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Library } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Resource Library</h1>
      <Card className="text-center flex flex-col items-center">
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <Library className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="font-headline">A Curated Library is on its Way</CardTitle>
          <CardDescription className="max-w-md">
            We are compiling a trusted list of external websites, support groups, and helpful articles.
            This section will be your gateway to a wider community of support and information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please check back soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
