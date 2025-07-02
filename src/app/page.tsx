import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, HeartPulse, Library, User, HeartHandshake, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function InfoCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="group">
      <Card className="h-full transition-colors hover:border-primary hover:bg-primary/5">
        <CardHeader className="flex-row items-start gap-4 space-y-0">
          <div className="p-3 rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="font-headline text-lg mb-1">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}


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

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Define Your Role</CardTitle>
                <CardDescription>Personalize your experience by selecting your role.</CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup defaultValue="patient" className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="patient" id="patient" />
                        <Label htmlFor="patient" className="flex items-center gap-2 font-normal">
                            <User className="h-4 w-4 text-muted-foreground" /> <span>Patient</span>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="donor" id="donor" />
                        <Label htmlFor="donor" className="flex items-center gap-2 font-normal">
                            <HeartHandshake className="h-4 w-4 text-muted-foreground" /> <span>Donor</span>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="caregiver" id="caregiver" />
                        <Label htmlFor="caregiver" className="flex items-center gap-2 font-normal">
                            <Users className="h-4 w-4 text-muted-foreground" /> <span>Caregiver</span>
                        </Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard 
            href="/modules"
            icon={<BookOpen className="w-6 h-6 text-primary" />} 
            title="Educational Modules"
            description="Explore guides on your transplant journey."
          />
          <InfoCard 
            href="/tools/symptoms"
            icon={<HeartPulse className="w-6 h-6 text-primary" />}
            title="Health Tools"
            description="Track medications and log symptoms."
          />
          <InfoCard 
            href="/resources"
            icon={<Library className="w-6 h-6 text-primary" />}
            title="Resource Library"
            description="Access curated articles and support groups."
          />
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
                        src="/images/nutrition.jpg"
                        alt="A vibrant plate of healthy food including fresh vegetables and lean protein."
                        fill
                        className="object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </Card>
    </div>
  );
}
