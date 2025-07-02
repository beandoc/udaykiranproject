import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, HeartPulse, Library, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">Here's your personalized health dashboard.</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Continue Your Journey</CardTitle>
            <CardDescription>You're 40% through the "Pre-Transplant" module.</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={40} className="mb-4" />
            <Button asChild>
              <Link href="/modules">
                Resume Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="text-primary" />
              <span>AI Assistant</span>
            </CardTitle>
            <CardDescription>Have questions? Get reliable answers instantly.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/assistant">
                Ask a Question <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
                <BookOpen className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-headline">Educational Modules</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Explore comprehensive guides on your transplant journey.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <HeartPulse className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-headline">Health Tools</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Track medications and log symptoms to stay on top of your health.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <Library className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-headline">Resource Library</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Access a curated list of links, articles, and support groups.</CardDescription>
            </CardContent>
          </Card>
      </div>

       <Card className="w-full">
            <div className="grid md:grid-cols-2">
                <div className="p-6 flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Featured: Nutrition for a Healthy Kidney</CardTitle>
                        <CardDescription className="mt-2">Learn about the best foods to eat before and after your transplant to support your new kidney and overall well-being.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild>
                            <Link href="/modules">Read More</Link>
                        </Button>
                    </CardContent>
                </div>
                <div className="relative h-64 md:h-auto">
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="A vibrant plate of healthy food including fresh vegetables and lean protein."
                        data-ai-hint="healthy food"
                        fill
                        className="object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </Card>
    </div>
  );
}
