import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Library } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Resource Library</h1>
      <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg bg-card">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <Library className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline">A Curated Library is on its Way</h2>
          <p className="max-w-md mt-2 text-muted-foreground">
            We are compiling a trusted list of external websites, support groups, and helpful articles.
            This section will be your gateway to a wider community of support and information.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Please check back soon.</p>
        </div>
    </div>
  );
}
