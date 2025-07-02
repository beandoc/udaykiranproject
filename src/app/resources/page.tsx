
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/app-context";

export default function ResourcesPage() {
  const { t } = useAppContext();
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">{t('resourcesTitle')}</h1>
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Understanding Transplant Surgery: An Animated Guide</CardTitle>
            <CardDescription>
                This short video provides a clear, animated overview of the kidney transplant procedure.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full rounded-lg border"
                    src="https://www.youtube.com/embed/fELn4Fe9Ccc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">A Step-by-Step Look at the Surgery</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">The Incision:</span> The surgeon makes a small cut in the lower abdomen to create an access point.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Placing the New Kidney:</span> The healthy donor kidney is carefully placed into the pelvis. The original, failed kidneys are usually left in place.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Connecting Blood Flow:</span> The new kidney's artery and vein are attached to the patient's blood vessels to establish circulation.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Connecting the Ureter:</span> The new kidney's ureter (the tube that carries urine) is connected to the bladder, allowing the new organ to function.
                        </div>
                    </li>
                </ul>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
