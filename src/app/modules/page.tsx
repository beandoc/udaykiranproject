import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

export default function ModulesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Educational Modules</h1>
      <Card className="text-center flex flex-col items-center">
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <BookOpenCheck className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="font-headline">Content Coming Soon!</CardTitle>
          <CardDescription className="max-w-md">
            Our comprehensive educational modules are being curated by experts.
            Check back soon for guides on the pre-transplant process, surgery, post-transplant life, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">You'll find interactive content, videos, and quizzes here to help you on your journey.</p>
        </CardContent>
      </Card>
    </div>
  );
}
