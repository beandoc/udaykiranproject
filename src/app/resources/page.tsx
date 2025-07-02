
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
                            <span className="font-semibold">The Incision:</span> The surgeon makes an incision in the lower abdomen. This cut allows them to access the major blood vessels and the bladder where the new kidney will be connected.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Placing the New Kidney:</span> The healthy donor kidney is carefully placed into the iliac fossa (the curved surface of the hip bone). The original, failed kidneys are usually left in place unless they are causing problems.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Connecting Blood Flow:</span> This is a critical step. The surgeon first connects the new kidney's vein to the patient's iliac vein. Then, the new kidney's artery is connected to the patient's iliac artery. This process, called anastomosis, establishes blood flow to the new organ.
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Checking for Function:</span> Once blood is flowing, the kidney should "pink up," changing color to a healthy pink. The team checks for any bleeding and ensures good blood perfusion. Urine may start to be produced at this stage.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Connecting the Ureter:</span> The new kidney's ureter (the tube that carries urine) is connected to the bladder. This allows the new organ to function properly and drain urine from the body.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">Closing the Incision:</span> Once all connections are secure and the kidney is functioning well, the surgeon carefully closes the incision in layers, using absorbable sutures for the skin.
                        </div>
                    </li>
                </ul>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
