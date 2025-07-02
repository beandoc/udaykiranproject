import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] p-8 md:p-12 text-primary-foreground shadow-xl">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-5 mix-blend-soft-light"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Welcome to Your Kidney Transplant Journey
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
          Empowering you with knowledge, support, and hope every step of the way.
          Whether you&apos;re preparing for transplant, recovering, or supporting a
          loved one, we&apos;re here to guide you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-white/90 shadow-lg px-8 py-6 text-base font-semibold">
            <Link href="/modules">Start Your Learning Path</Link>
          </Button>
          <div className="flex items-center gap-3 rounded-full bg-black/20 px-4 py-2">
            <div className="relative h-2.5 w-24 rounded-full bg-white/20">
                <div className="absolute top-0 left-0 h-full w-[70%] rounded-full bg-white"></div>
            </div>
            <span className="text-sm font-medium">70%</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-0 -translate-x-4 translate-y-4 md:translate-x-0 md:translate-y-0">
        <div className="w-36 h-36 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <GraduationCap className="w-16 h-16 md:w-24 md:h-24 text-white/80" />
        </div>
      </div>
    </div>
  );
}
