import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

export default function ModulesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Educational Modules</h1>
       <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg bg-card">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <BookOpenCheck className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline">Content Coming Soon!</h2>
          <p className="max-w-md mt-2 text-muted-foreground">
            Our comprehensive educational modules are being curated by experts.
            Check back soon for guides on the pre-transplant process, surgery, post-transplant life, and more.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">You'll find interactive content, videos, and quizzes here to help you on your journey.</p>
      </div>
    </div>
  );
}
