import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ModulesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">Educational Modules</h1>
       <Card className="text-center">
            <div className="relative w-full h-64">
                <Image
                    src="/images/modules.jpg"
                    alt="A person studying with books and a laptop."
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Content Coming Soon!</CardTitle>
                <CardDescription>
                    Our comprehensive educational modules are being curated by experts.
                    Check back soon for guides on the pre-transplant process, surgery, post-transplant life, and more.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">You'll find interactive content, videos, and quizzes here to help you on your journey.</p>
            </CardContent>
       </Card>
    </div>
  );
}
