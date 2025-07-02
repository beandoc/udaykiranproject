import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Resource Library</h1>
      <Card className="text-center">
            <div className="relative w-full h-64">
                <Image
                    src="/images/resources.jpg"
                    alt="A library with shelves full of books."
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">A Curated Library is on its Way</CardTitle>
                <CardDescription>
                    We are compiling a trusted list of external websites, support groups, and helpful articles.
                    This section will be your gateway to a wider community of support and information.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Please check back soon.</p>
            </CardContent>
       </Card>
    </div>
  );
}
