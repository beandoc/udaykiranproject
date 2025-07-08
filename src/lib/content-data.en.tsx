
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video, Info, Ban, UtensilsCrossed, Leaf, Beef, Milk, Carrot, ShieldCheck, HeartHandshake, BrainCircuit, UserCheck, MessageSquare, CalendarClock, School, BellRing, Users, BookOpen, ClipboardList, Clock, Heart, Bed, Home, Pill, Siren, HelpCircle, Bike, HeartPulse, ShieldAlert, Scale, FlaskConical, Target, Stethoscope, Lightbulb, User, CheckCircle, HandCoins, Building, FileText, Smile, ShieldQuestion, Thermometer, Frown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { ModuleContentData } from './content-data';

const takeawayColors = [
    "bg-blue-100 dark:bg-blue-900/30 border-blue-500/20", 
    "bg-green-100 dark:bg-green-900/30 border-green-500/20", 
    "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-500/20", 
    "bg-slate-100 dark:bg-slate-800/50 border-slate-500/20"
];

const KeyTakeaways = ({ takeaways }: { takeaways: { icon: React.ElementType, text: string }[] }) => (
    <div className="mt-8">
        <h3 className="text-xl font-bold font-headline pt-4 border-t">Key Takeaways</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {takeaways.map((takeaway, index) => (
                <Card key={index} className={`border ${takeawayColors[index % takeawayColors.length]} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <CardHeader>
                        <CardTitle className="flex items-start gap-3 text-base font-semibold">
                            <takeaway.icon className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                            <span>{takeaway.text}</span>
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
);

const ELI10Layout = ({ title, explanation, takeaways }: { title: string, explanation: React.ReactNode, takeaways: { icon: React.ElementType, text: string }[] }) => (
    <div className="space-y-6 text-base leading-relaxed">
        <h3 className="text-xl font-bold font-headline text-primary">{title}</h3>
        {explanation}
        <KeyTakeaways takeaways={takeaways} />
    </div>
);


// --- Content Data Definitions ---

const contentData: ModuleContentData = {
    'understanding-kidney-disease': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Basic Information About Kidney Transplantation</h2>
                <p>A kidney transplant is a treatment for kidney failure, but it is not a cure. A transplant offers a more active life, without needing dialysis. However, your new kidney will require ongoing care. You will need to take medications to stop your body rejecting the kidney (anti-rejection) for as long as you have the transplanted kidney.</p>
                <p>If a kidney transplant stops working, dialysis treatment will be necessary again. Another transplant may also be possible.</p>
                <p>A kidney can be donated by living donors, such as family or friends, or deceased donors. To receive a kidney transplant from a deceased donor, you will first have to be added to the kidney transplant waiting list.</p>
                <p>Having a transplant from a living kidney donor means you may have better outcomes. If you have a transplant from a living donor it usually means you will not have to wait as long for your transplant.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Who can have a kidney transplant?</h3>
                <p>When exploring the available treatment options for kidney failure, you should discuss with your doctor if kidney transplantation is an option. It is important to understand that a kidney transplant is not suitable for everyone, as the risks of the operation or the medications may make your health worse.</p>
                <p>Factors affecting your suitability for a kidney transplant include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Your general health, apart from kidney failure</li>
                    <li>Agreement with the idea of transplantation and acceptance of the risks involved</li>
                    <li>Self care, i.e. taking medications regularly, eating a healthy diet, stopping smoking</li>
                    <li>Willingness to go through with the tests and the transplant surgery</li>
                    <li>Willingness to take the anti-rejection medications.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">Are kidney transplants successful?</h3>
                <p>Kidney transplants are very successful. On average, 95 per cent of transplants are working one year later. If the transplant works well for the first year, the chances are good that it will function very well for many years.</p>
                <p>How long your transplanted kidney will work can depend on many factors. Some people have had kidney transplants that have lasted more than 30 years.</p>
                <p>Success rates are higher with living donor kidneys than for deceased donor kidneys.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-4xl font-bold text-primary">96%</p>
                        <p className="font-semibold">of people alive after five years (living donor)</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-4xl font-bold text-secondary-foreground">90%</p>
                        <p className="font-semibold">of people alive after five years (deceased donor)</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-4xl font-bold text-primary">90%</p>
                        <p className="font-semibold">of transplanted kidneys working after five years (living donor)</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-4xl font-bold text-secondary-foreground">83%</p>
                        <p className="font-semibold">of transplanted kidneys working after five years (deceased donor)</p>
                    </div>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Target, text: "95% of transplants are working one year later." },
                    { icon: Heart, text: "Living donor kidneys have a 90% success rate at five years, compared to 83% for deceased donor kidneys." },
                    { icon: Pill, text: "A transplant is a treatment, not a cure. You will need lifelong anti-rejection medication." },
                    { icon: ShieldAlert, text: "The major surgery is not suitable for everyone; your overall health is a critical factor." }
                ]} />
            </div>
        ),
        eli10: (
            <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Imagine your kidneys are like tiny cleaning machines for your blood. When they stop working well, it's called kidney failure. A transplant is like getting a brand new cleaning machine from someone else so your body can stay clean and healthy. You'll need to take special medicine every day to make sure your body and the new kidney become good friends and don't fight each other.</p>
                }
                takeaways={[
                    { icon: Target, text: "95% of transplants are working one year later." },
                    { icon: Heart, text: "Living donor kidneys have a 90% success rate at five years, compared to 83% for deceased donor kidneys." },
                    { icon: Pill, text: "A transplant is a treatment, not a cure. You will need lifelong anti-rejection medication." },
                    { icon: ShieldAlert, text: "The major surgery is not suitable for everyone; your overall health is a critical factor." }
                ]}
            />
        )
    },
    'understanding-living-donation': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Understanding Living Donation</h2>
                <p>Transplantable kidneys can come from two sources: living donors or deceased donors. A living donor is typically someone the recipient knows, such as a family member or a close friend, who chooses to donate one of their two healthy kidneys. A deceased donor is an individual whose family has consented to organ donation after their passing.</p>
                <p>It is crucial to discuss your thoughts on kidney transplantation with your support network. Understanding the differences between receiving a kidney from a living versus a deceased donor is an important step. Your healthcare team can provide personalized information to help you understand all available options.</p>
        
                <h3 className="text-xl font-bold font-headline pt-4">Who can be a living donor?</h3>
                <p>A living donor can be a relative like a parent, sibling, or adult child. However, unrelated individuals such as a spouse or a friend can also be donors if they are a suitable match. The evaluation process to confirm compatibility is thorough and can take time. Modern medical advancements have made transplantation possible even in complex cases, such as when the donor and recipient have different blood types.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Benefits of Living Donation</h3>
                <p>The primary advantage of living donation is timing. The wait for a deceased donor kidney can be long, sometimes years. A living donor can significantly shorten this wait. It can even allow for a "pre-emptive" transplant, which occurs before the recipient needs to start dialysis.</p>
                <p>Furthermore, surgery with a living donor can be scheduled in advance, which offers several benefits:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>It minimizes the time the kidney is outside a body (known as 'cold ischemia time'), which is a key factor in the long-term success of the transplant.</li>
                    <li>This planning gives both the donor and recipient time to prepare for the surgery and recovery.</li>
                    <li>Generally, transplants from living donors have a higher rate of long-term success compared to those from deceased donors.</li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: Clock, text: "Significantly shortens wait time compared to the years-long deceased donor list." },
                    { icon: CalendarClock, text: "Allows for a planned, pre-emptive transplant before dialysis is needed." },
                    { icon: Heart, text: "Minimizes 'cold ischemia time' for the kidney, boosting long-term success." },
                    { icon: HeartHandshake, text: "A living donor can be family, a friend, or even an unrelated altruistic person." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Think of needing a new kidney like needing a special spare part for your body. You can get this part from two places: from someone who has passed away, or from a kind person who is still alive and has an extra one to share (we all have two, but only need one!). Getting a kidney from a living person is often faster and the new part might work better and for longer.</p>
                }
                takeaways={[
                    { icon: Clock, text: "Significantly shortens wait time compared to the years-long deceased donor list." },
                    { icon: CalendarClock, text: "Allows for a planned, pre-emptive transplant before dialysis is needed." },
                    { icon: Heart, text: "Minimizes 'cold ischemia time' for the kidney, boosting long-term success." },
                    { icon: HeartHandshake, text: "A living donor can be family, a friend, or even an unrelated altruistic person." }
                ]}
            />
        )
    },
     'evaluation-process': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Transplant Evaluation Process</h2>
                <p>Before being placed on the kidney transplant waiting list, you must undergo a series of comprehensive tests. This evaluation, often called a "transplant work-up," is designed to ensure that you are physically and mentally prepared for both the transplant surgery and the lifelong care required afterward.</p>
                <p>This thorough assessment helps your medical team confirm that a transplant is the safest and most effective treatment for you.</p>

                <h3 className="text-xl font-bold font-headline pt-4">What does the evaluation include?</h3>
                <p>The medical tests used to assess your health before a transplant are extensive and may include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Overall Health Assessment:</strong> A general review of your health, including your weight and other vital metrics.</li>
                    <li><strong>Blood Tests:</strong> To check for blood type, compatibility, and screen for various conditions.</li>
                    <li><strong>Dental Check-up:</strong> To identify and treat any potential sources of infection before the transplant.</li>
                    <li><strong>Cancer Screenings:</strong> Routine screenings such as Pap smears, prostate exams, and bowel cancer checks are important.</li>
                    <li><strong>Heart and Lung Tests:</strong> X-rays and other diagnostic tests to ensure your heart and lungs are strong enough for surgery.</li>
                    <li><strong>Vascular and Bladder Exams:</strong> Tests to check the health of your arteries, veins, and bladder to ensure they can support the new kidney.</li>
                </ul>
                <p className="pt-2">Successfully completing this work-up is a critical step on your journey toward receiving a new kidney.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Living Donor Assessment</h3>
                <p>If someone offers to be your living donor, they will undergo a similar evaluation to ensure they are healthy enough to donate. This includes tests to confirm their kidney is in good condition and to check for compatibility with you. The entire assessment for both you and a potential donor can take several months to complete, depending on individual health factors.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Staying Healthy While You Wait</h3>
                <p>It's vital to maintain your health while on the transplant waiting list to ensure the best possible outcome. Key steps include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Adhering to your regular dialysis schedule.</li>
                    <li>Following your recommended diet and fluid restrictions.</li>
                    <li>Taking all medications as prescribed.</li>
                    <li>Managing your weight with diet and physical activity.</li>
                    <li>Visiting your dentist regularly to prevent infections.</li>
                    <li>Protecting your skin from the sun to help prevent skin cancer post-transplant.</li>
                    <li>Being a non-smoker.</li>
                    <li>Keeping all your vaccinations up to date.</li>
                    <li>Avoiding blood transfusions, if possible.</li>
                </ul>
                <p className="pt-2">You will also need routine blood tests for tissue typing and antibody screening. These are essential for finding a compatible donor, so it is crucial not to miss them. Regular reviews with your care team are also an opportunity to discuss any concerns you have during your transplant preparation.</p>
                <KeyTakeaways takeaways={[
                    { icon: Stethoscope, text: "Mandatory 'transplant work-up' ensures you are strong enough for surgery." },
                    { icon: ShieldCheck, text: "Key tests include heart, lung, and dental exams to eliminate risks." },
                    { icon: Users, text: "Any potential living donor must also undergo a complete health evaluation." },
                    { icon: Target, text: "Adherence to your dialysis schedule and diet while waiting is critical for success." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Before you can get a new kidney, doctors need to check if your body is ready for a big surgery. It's like a car getting a full check-up before a long race. They will check your heart, lungs, and even your teeth to make sure you are strong and healthy enough for the transplant. This is to keep you safe and give the new kidney the best chance to work well.</p>
                }
                takeaways={[
                    { icon: Stethoscope, text: "Mandatory 'transplant work-up' ensures you are strong enough for surgery." },
                    { icon: ShieldCheck, text: "Key tests include heart, lung, and dental exams to eliminate risks." },
                    { icon: Users, text: "Any potential living donor must also undergo a complete health evaluation." },
                    { icon: Target, text: "Adherence to your dialysis schedule and diet while waiting is critical for success." }
                ]}
            />
        )
    },
    'transplant-matching': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Understanding Transplant Matching</h2>
                <p>For a kidney transplant to be successful, the donor's kidney must be a good match for the recipient. Think of it like finding the right key for a lock. This matching process helps prevent your body's immune system from rejecting the new organ. There are two main types of matching: blood group and tissue type.</p>

                <h3 className="text-xl font-bold font-headline pt-4">1. Blood Group Matching</h3>
                <p>Just like with a blood transfusion, the donor's and recipient's blood types (A, B, AB, O) must be compatible. Your body naturally has antibodies against other blood types. If you receive a kidney from someone with an incompatible blood type, your immune system will immediately attack it.</p>
                <p>For deceased donors, a compatible blood group is essential. However, with advances in medicine, it's sometimes possible to receive a kidney from a <strong>living donor</strong> even if your blood types don't match. This is called an <strong>ABO incompatible transplant</strong>. It requires special pre-surgery treatments to remove the harmful antibodies from your blood, allowing your body to accept the new kidney.</p>

                <h3 className="text-xl font-bold font-headline pt-4">2. Tissue Type (HLA) Matching</h3>
                <p>Your immune system is your body's defense force, protecting you from foreign invaders like germs. It identifies your own cells using special proteins on their surface called Human Leukocyte Antigens (HLA). You can think of these HLA proteins as your cells' unique ID cards.</p>
                <p>A transplanted kidney comes with its own set of HLA ID cards. Your immune system will recognize these as "foreign" and may launch an attack, which is known as <strong>rejection</strong>. To prevent this, doctors try to find a donor whose HLA type is as close as possible to yours. A closer match can lead to better long-term success.</p>
                <p>This is also why <strong>anti-rejection medications</strong> (immunosuppressants) are a lifelong necessity after a transplant. These medications work by "telling" your immune system to be less aggressive and to accept the new kidney, regardless of the HLA match.</p>
                <KeyTakeaways takeaways={[
                    { icon: CheckCircle, text: "Blood group (A, B, AB, O) must be compatible for a deceased donor transplant." },
                    { icon: User, text: "Tissue type (HLA) matching is crucial; a closer match reduces rejection risk." },
                    { icon: Lightbulb, text: "ABO-incompatible transplants are possible from living donors with special pre-treatment." },
                    { icon: Pill, text: "You MUST take lifelong anti-rejection medication, regardless of the match quality." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>To get a new kidney, it has to be a good "match" for your body, like a key fitting into a lock. Doctors check two things. First, your blood type (like A, B, O) must match. Second, they check special "ID cards" on your cells called HLA. The closer the match, the better. Even with a good match, you'll need medicine to tell your body's defense team (your immune system) to be nice to the new kidney and not fight it.</p>
                }
                takeaways={[
                    { icon: CheckCircle, text: "Blood group (A, B, AB, O) must be compatible for a deceased donor transplant." },
                    { icon: User, text: "Tissue type (HLA) matching is crucial; a closer match reduces rejection risk." },
                    { icon: Lightbulb, text: "ABO-incompatible transplants are possible from living donors with special pre-treatment." },
                    { icon: Pill, text: "You MUST take lifelong anti-rejection medication, regardless of the match quality." }
                ]}
            />
        )
    },
    'surgery-day': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">What to Expect on Surgery Day</h2>
                <p>Being prepared for your kidney transplant surgery can help ease some of the anxiety. Here’s a general overview of what happens before, during, and after the procedure.</p>
                
                <Alert className="mt-6">
                    <Video className="h-4 w-4" />
                    <AlertTitle>Visual Learner? Watch a Video!</AlertTitle>
                    <AlertDescription className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <p>To see how the surgery works, check out our animated video guide.</p>
                        <Button asChild variant="outline" size="sm" className="mt-2 sm:mt-0">
                            <Link href="/resources">Go to Resource Library</Link>
                        </Button>
                    </AlertDescription>
                </Alert>

                <h3 className="text-xl font-bold font-headline pt-4">Before the Surgery</h3>
                <p>Once you are admitted to the hospital, you will undergo a final series of checks to ensure you are ready for the operation. This typically includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>A thorough physical examination by the medical team.</li>
                    <li>You may need to have one last dialysis session to ensure your body is in the best possible state for surgery.</li>
                    <li>You will begin taking anti-rejection medications. These are crucial to prepare your immune system and help prevent your body from rejecting the new kidney.</li>
                </ul>
                <p className="pt-2">It's important to know that the surgery may be postponed if any last-minute health concerns arise, such as an active infection.</p>

                <h3 className="text-xl font-bold font-headline pt-4">During the Surgery</h3>
                <p>The transplant operation itself usually takes about two to three hours. Here's what happens in the operating room:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>The surgeon will make an incision in your lower abdomen, either on the right or left side.</li>
                    <li>The new, healthy kidney is carefully placed in your pelvis.</li>
                    <li>The surgeon connects the new kidney’s artery and vein to the major blood vessels that lead to your leg. This establishes blood flow to the new organ.</li>
                    <li>The new kidney’s ureter (the tube that drains urine) is then connected to your bladder.</li>
                </ul>
                
                <h3 className="text-xl font-bold font-headline pt-4">What About My Old Kidneys?</h3>
                <p>A common question is whether the old, failed kidneys are removed. In most cases, they are left in place. This avoids a more extensive surgery. However, if your kidneys are causing problems (for example, if they are very large due to polycystic kidney disease and causing pain or infection), they may be removed in a separate procedure before your transplant.</p>

                <h3 className="text-xl font-bold font-headline pt-4">After the Surgery</h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <p>After the transplant surgery, it is normal to feel some pain around your wound. You will be given medication to help with this.</p>
                        <p>Your transplanted kidney may start to make urine immediately, or you may need dialysis for a few days. If you need dialysis, it does not mean that your transplanted kidney will not work. It just may need a bit of time to recover from the transplant procedure.</p>
                        <p>A catheter will be placed in your bladder for around five days to drain your urine into a bag. This helps your health care team to check that your kidney is working well. Often there are tubes from your wound draining away extra fluid. These are usually removed after a few days.</p>
                    </div>
                    <div className="space-y-2">
                        <Image 
                            src="https://placehold.co/400x450.png" 
                            alt="Diagram showing the placement of a transplanted kidney in the pelvis."
                            width={400}
                            height={450}
                            className="rounded-lg mx-auto border"
                            data-ai-hint="kidney anatomy"
                        />
                        <p className="text-xs text-center text-muted-foreground">An illustration of a transplanted kidney, ureter, and the original diseased kidneys.</p>
                    </div>
                </div>
                
                <h3 className="text-xl font-bold font-headline pt-8">Recovery in the Hospital</h3>
                <p>The blood tests for creatinine and eGFR measure how well your kidney is working. These may already be familiar to you. In many cases, your creatinine and eGFR will improve significantly, returning to a healthier range.</p>
                <p>The amount of fluid you take in is important. The nurses may be asking you regularly how much you have had to drink. If your new kidney is working well, the amount of fluid you are able to drink will increase.</p>
                <p>It is important to do coughing, breathing, and leg exercises while you are restricted to bed rest. This helps to:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Keep your airways clear and reduce the risk of chest infections.</li>
                    <li>Encourage good blood flow and prevent blood clots in your legs.</li>
                </ul>
                <p>A physiotherapist may assist you with an exercise plan. You will probably be able to sit out of bed on the first day after your surgery. You should be able to go for a walk within a couple of days.</p>
                <p>Reducing the risk of an infection is very important. For this reason, your visitor numbers may be limited, and you may be in a separate room to minimize exposure to germs.</p>
                <p>The length of time that you will need to stay in hospital after the transplant surgery will depend on how well your body responds to the new kidney and whether you have any complications. Most people are in hospital for between six and ten days. You may feel better immediately after your surgery, or you may take longer to adjust.</p>
                
                <h3 className="text-2xl font-bold font-headline pt-8 border-t mt-8">The Living Donor Transplant Experience</h3>
                <p>If you are receiving a kidney from a living donor, the process has a few extra, well-planned steps. Here’s what you can expect.</p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold font-headline">Before the Surgery</h4>
                        <p>In the week leading up to the scheduled date, both you and your donor will have a final round of tests. This is to ensure everyone is healthy and ready. A final "cross-match" blood test is also done to confirm compatibility one last time.</p>
                        <p>You will both be admitted to the hospital, usually the day before the procedure. As the recipient, you might have one last dialysis session to prepare your body for the transplant.</p>

                        <h4 className="text-xl font-semibold font-headline pt-4">During the Surgery</h4>
                        <p>For you, the surgery to place the new kidney is exactly the same as described earlier. The main difference in a living donation is how the kidney is retrieved from your donor. Most donors now undergo a minimally invasive procedure called <strong>laparoscopic nephrectomy</strong> (keyhole surgery).</p>
                        <p>In this procedure, the surgeon makes a few small incisions in the donor's abdomen. A tiny camera and specialized tools are used to carefully detach the kidney, which is then removed through one slightly larger incision.</p>
                    </div>
                    <div className="space-y-2">
                        <Image 
                            src="https://placehold.co/400x300.png" 
                            alt="Diagram showing the small incisions for a laparoscopic nephrectomy."
                            width={400}
                            height={300}
                            className="rounded-lg mx-auto border"
                            data-ai-hint="laparoscopic surgery"
                        />
                        <p className="text-xs text-center text-muted-foreground">Laparoscopic surgery involves several small incisions, leading to a quicker recovery.</p>
                    </div>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Clock, text: "The surgery lasts 2-3 hours under general anesthesia." },
                    { icon: Home, text: "Your old, failed kidneys are usually left inside your body." },
                    { icon: CalendarClock, text: "A catheter will be in your bladder for around 5 days post-surgery." },
                    { icon: Info, text: "Some new kidneys have 'delayed function' and may require temporary dialysis. This is not a sign of failure." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>On surgery day, doctors will do some final checks. The surgery takes a few hours. They will put you to sleep so you don't feel anything. A surgeon will make a small opening in your lower belly and place the new kidney inside, connecting it to your blood vessels and bladder. Usually, they leave your old kidneys where they are. After you wake up, you will be in the hospital for about a week to recover and make sure the new kidney is working.</p>
                }
                takeaways={[
                    { icon: Clock, text: "The surgery lasts 2-3 hours under general anesthesia." },
                    { icon: Home, text: "Your old, failed kidneys are usually left inside your body." },
                    { icon: CalendarClock, text: "A catheter will be in your bladder for around 5 days post-surgery." },
                    { icon: Info, text: "Some new kidneys have 'delayed function' and may require temporary dialysis. This is not a sign of failure." }
                ]}
            />
        )
    },
    'post-transplant-recovery': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Living With Your New Kidney</h2>
                <p>You should be able to return to normal activities and work within three to six months of your transplant. You will need to allow time for your wound to heal and for your stomach muscles to get strong again. Regular exercise is an important part of staying healthy. It is recommended that you start regular exercise under the guidance of your health care team.</p>
                <p>You will need to manage your medications carefully. It is important that you take your medications exactly as prescribed by your doctor. Support from your pharmacist as well as a pill organizer might be needed as there will be a large number of medications needed at specific times of the day.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Hygiene and Self-Care at Home</h3>
                <p>Keeping yourself healthy and avoiding infection is crucial after your transplant. Here are some key guidelines for self-care as you recover.</p>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                    <div>
                        <h4 className="font-bold mb-2">Oral Hygiene</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Maintain good oral hygiene by brushing with a soft-bristled toothbrush twice a day.</li>
                            <li>Replace your toothbrush every 2-3 months to prevent bacteria buildup.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Personal Hygiene</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Take a shower at least once a day and wear clean clothes.</li>
                            <li>Until your wound has fully healed, you can clean your body with a wet towel.</li>
                            <li>After bathing, gently pat the incision area dry. If you notice any fluid oozing or suspect an infection, contact your doctor immediately.</li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-bold mb-2">Avoid Crowded Places</h4>
                         <p>For the first three months after your transplant, it's best to avoid crowded public places like cinemas, restaurants, and busy stores. Also, limit contact with animals and birds to reduce your risk of infection.</p>
                    </div>
                     <div>
                         <h4 className="font-bold mb-2">Avoid Tobacco</h4>
                         <p>The use of tobacco in any form is strongly discouraged. It increases surgical risks and the chance of cancer, heart attack, and stroke.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Activity and Intimacy After Transplant</h3>
                <p>Resuming physical and sexual activity are important milestones in your recovery. Here’s what you need to know to do so safely.</p>
                
                <h4 className="font-semibold pt-2">Physical Activity</h4>
                <p>As you gain strength and endurance, your ability to be physically active will increase. Use common sense as your guide. It's best to start slowly and gradually increase your activity level. As a general rule, you should avoid contact sports (like football or hockey) to protect your new kidney.</p>

                <h4 className="font-semibold pt-4">Sexual Activity</h4>
                <p>Your new kidney is well-protected, and sexual activity will not harm it. However, as with any major surgery, it's wise to wait about six weeks before engaging in sexual intercourse to allow your incision and muscles to fully heal. It's also very important to take precautions against sexually transmitted diseases.</p>
                
                <h4 className="font-semibold pt-4">Family Planning for Men</h4>
                <p>Most men regain sexual desire and function that may have been lost during kidney failure. However, certain medications, like those for high blood pressure, can sometimes affect sexual function. If you notice a change, do not hesitate to discuss it with your transplant team. Men should also discuss any family planning goals with the team.</p>

                <Alert variant="destructive" className="mt-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Important Information for Women: Pregnancy After Transplant</AlertTitle>
                    <AlertDescription>
                         <p>Pregnancy in a transplant recipient is considered high risk. All immunosuppressive medications carry some risk in pregnancy; in particular, mycophenolate mofetil/sodium and the mammalian (mechanistic) target of rapamycin (mTOR) inhibitors are contraindicated in pregnancy. The most effective safe form of contraception should be used to avoid unplanned pregnancies in transplant recipients.</p>
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: Home, text: "Return to normal activities and work is possible within 3-6 months." },
                    { icon: Ban, text: "Avoid all contact sports to protect your new kidney." },
                    { icon: ShieldAlert, text: "For women: Pregnancy is high-risk and requires careful planning with your transplant team." },
                    { icon: ShieldCheck, text: "Strict hygiene is crucial to avoid infection, especially in the first 3 months." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>After your surgery, your job is to heal and get strong. You'll need to be very careful to stay clean to avoid germs. It's important to take it easy at first. You can start walking, but no heavy lifting! After a few months, you'll feel much more like your old self and can get back to most of your normal activities, including work. Just remember to be gentle with your body as it heals.</p>
                }
                takeaways={[
                    { icon: Home, text: "Return to normal activities and work is possible within 3-6 months." },
                    { icon: Ban, text: "Avoid all contact sports to protect your new kidney." },
                    { icon: ShieldAlert, text: "For women: Pregnancy is high-risk and requires careful planning with your transplant team." },
                    { icon: ShieldCheck, text: "Strict hygiene is crucial to avoid infection, especially in the first 3 months." }
                ]}
            />
        )
    },
    'immunosuppressants': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Side Effects of Anti-Rejection Medications</h2>
                <p>While anti-rejection medications are essential, they can come with side effects. The good news is that your medical team can usually manage these by adjusting the dosage of your medication. It's important to communicate openly with your team about how you're feeling.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Common Side Effects</h3>
                <p>Some of the possible side effects you might experience include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 columns-1 md:columns-2">
                    <li>Increased risk of getting infections</li>
                    <li>Puffiness in your face or stomach</li>
                    <li>Changes in hair, like unwanted growth or hair loss</li>
                    <li>Increased appetite and potential weight gain</li>
                    <li>Mood swings</li>
                    <li>Higher risk of developing high blood pressure, diabetes, or some cancers (particularly skin cancer)</li>
                    <li>Pimples or acne</li>
                    <li>Muscle weakness or shakiness in your hands</li>
                    <li>Stomach problems, such as indigestion or diarrhea</li>
                </ul>
                <p className="pt-2">If any of these side effects become a concern, make sure to discuss them with your healthcare team. There are often ways to manage them.</p>

                <div className="mt-6 p-6 rounded-lg bg-destructive/10 border-l-4 border-destructive">
                    <h3 className="text-xl font-bold font-headline text-destructive-foreground">Important Reminders</h3>
                    <p className="mt-2 text-destructive-foreground/90">Always remember these key points for your safety:</p>
                    <ul className="list-disc list-inside space-y-3 mt-4 text-destructive-foreground/90">
                        <li><strong>Inform other doctors:</strong> If you see other health professionals (like a dentist or a specialist), always tell them you've had a kidney transplant and what medications you are taking.</li>
                        <li><strong>Check before taking *any* new medicine:</strong> Before you take any new medication—even those prescribed by another doctor or something you can buy over-the-counter at a pharmacy or supermarket—you must check with your nephrologist or transplant team first. Some common medicines can interfere with your anti-rejection drugs.</li>
                        <li><strong>Never stop your medication:</strong> Do not stop taking your anti-rejection medication for any reason unless you are explicitly told to do so by your transplant team. This is crucial for protecting your new kidney.</li>
                    </ul>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: ShieldAlert, text: "WARNING: Never stop taking your medication unless explicitly told to by your transplant team." },
                    { icon: ShieldQuestion, text: "Check with your transplant doctor before taking ANY new medicine, even over-the-counter drugs." },
                    { icon: Users, text: "Increased risk of infection is a major side effect; be vigilant about hygiene." },
                    { icon: Ban, text: "Grapefruit and its juice are strictly forbidden as they interfere with some of these medications." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>The special medicine you take to protect your new kidney is very powerful. It works by telling your body's defense team (immune system) to be calm. Because your defense team is calmer, it's easier to get sick, so you have to be careful. The medicine can also have other effects, like making you hungry or shaky. If anything feels weird, just tell your doctor. They can often help without changing the important medicine.</p>
                }
                takeaways={[
                    { icon: ShieldAlert, text: "WARNING: Never stop taking your medication unless explicitly told to by your transplant team." },
                    { icon: ShieldQuestion, text: "Check with your transplant doctor before taking ANY new medicine, even over-the-counter drugs." },
                    { icon: Users, text: "Increased risk of infection is a major side effect; be vigilant about hygiene." },
                    { icon: Ban, text: "Grapefruit and its juice are strictly forbidden as they interfere with some of these medications." }
                ]}
            />
        )
    },
    'medication-adherence': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Critical Importance of Medication Adherence</h2>
                <p>Taking your immunosuppressive medications correctly is the single most important thing you can do to protect your new kidney. Adherence means taking the right dose, at the right time, in the right way—for as long as you have the transplant. It's a lifelong commitment.</p>
        
                <Alert variant="destructive">
                    <Ban className="h-4 w-4" />
                    <AlertTitle>The Golden Rules of Adherence</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Dose & Timing:</strong> Never change the dose or timing of your medication unless your transplant team tells you to.</li>
                            <li><strong>Consistency is Key:</strong> Take your medications at the same time every day.</li>
                            <li><strong>Don't Change Brands:</strong> Different brands of the same medication can act differently in your body. Never switch brands without your nephrologist's permission.</li>
                        </ul>
                    </AlertDescription>
                </Alert>
        
                <p>Even if your kidney is functioning perfectly, you must continue taking your medication. Chronic rejection can be subtle and hard to detect in its early stages. Once it's established, it's often irreversible. Your medication is your shield against it.</p>
                
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><School className="text-primary"/>Educational & Medical Strategies</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-start gap-3">
                                <UserCheck className="w-6 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Know Your Meds:</span> Learn the name, dosage, and purpose of each medication. Your team will reinforce this at every visit.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Understand Side Effects:</span> Be informed about potential adverse effects and discuss any concerns. Your team can often treat side effects without reducing your essential dose.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <CalendarClock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Simplify Your Routine:</span> Your team will try to reduce the number and frequency of medications, ideally to once or twice daily.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Ask Questions:</span> Always inquire about problems or concerns during clinic visits.</div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><HeartHandshake className="text-primary"/>Behavioral & Psychosocial Support</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Build a Support System:</span> Involve family or friends who can help you stay on track.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <BrainCircuit className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Treat Mental Health:</span> Address any depression, anxiety, or other psychological issues. Your mental well-being is key to successful adherence.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <BellRing className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Integrate and Remind:</span> Make taking your medication part of your daily routine (e.g., with breakfast). Use digital alarms, pillboxes, or alerts to help you remember.</div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div><span className="font-semibold">Non-Judgmental Discussion:</span> Your team will always discuss adherence in a supportive, non-judgmental way. Be honest about any challenges you're facing.</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Target, text: "Adherence is your #1 job. Missing even one dose can lead to irreversible rejection." },
                    { icon: Clock, text: "Take pills at the exact same time every day. Use alarms and pillboxes." },
                    { icon: Ban, text: "NEVER change the brand of your medication without your doctor's permission." },
                    { icon: MessageSquare, text: "Be honest with your team about any challenges; they can help without judgment." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Taking your medicine every day, on time, is the MOST important job you have. Think of the medicine as a superhero shield for your new kidney. Even if you feel great, the shield must always be up to protect it. Missing even one dose can weaken the shield and let your body start fighting the kidney, which is very dangerous. Using a pillbox or setting a phone alarm can help you remember!</p>
                }
                takeaways={[
                    { icon: Target, text: "Adherence is your #1 job. Missing even one dose can lead to irreversible rejection." },
                    { icon: Clock, text: "Take pills at the exact same time every day. Use alarms and pillboxes." },
                    { icon: Ban, text: "NEVER change the brand of your medication without your doctor's permission." },
                    { icon: MessageSquare, text: "Be honest with your team about any challenges; they can help without judgment." }
                ]}
            />
        )
    },
    'understanding-rejection': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Understanding Transplant Rejection</h2>
                <p>You must take anti-rejection medications for as long as your transplanted kidney is working. These medications partially block your body’s immune system to prevent it from attacking your new kidney.</p>
                <p>There are many different medications used to prevent rejection. For each one, it's vital to know when and how to take them, what to do if you miss a dose, and any potential side effects or dietary restrictions. Your pharmacist is a great resource, and using a pill organizer can be very helpful.</p>
                <p>In the early period after your transplant, you may have some rejection episodes. Often, these are only detected by your regular blood tests. These episodes can usually be managed with changes to your medications. Some cases may require extra treatments like plasma exchange (to remove harmful antibodies) or special infusions. Most rejection episodes can be treated successfully. However, rejection can happen at any time, which is why it's crucial to follow all medical instructions and attend regular check-ups.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Types of Rejection Episodes</h3>
                <ul className="list-none space-y-4 pl-0">
                    <li className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold">Hyperacute Rejection</h4>
                        <p>This is very rare and can occur minutes or hours after the transplant. It is untreatable, and the kidney must be removed immediately.</p>
                    </li>
                    <li className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold">Acute Rejection</h4>
                        <p>This type usually occurs in the first few weeks. It often has no symptoms and is detected by rising creatinine levels in your blood tests. A biopsy of the kidney is often used to confirm the diagnosis. Mild acute rejection is common and can usually be treated successfully with medication changes.</p>
                    </li>
                    <li className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-bold">Chronic Rejection</h4>
                        <p>This is a gradual process of scarring and damage that occurs over several years. It can be difficult to treat and may eventually lead to kidney failure, requiring a return to dialysis or another transplant.</p>
                    </li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: CheckCircle, text: "Acute rejection is common in early weeks and often treatable if caught early." },
                    { icon: Clock, text: "Chronic rejection is a slow process that can occur over years and is harder to treat." },
                    { icon: Stethoscope, text: "Rejection is often detected by blood tests before you feel any symptoms." },
                    { icon: Pill, text: "Taking your medication correctly is the single best way to prevent rejection." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>"Rejection" sounds scary, but it's just your body's defense team (your immune system) trying to do its job by fighting something new. That's why you take special medicine, to keep the defense team calm. Sometimes, they might still try to fight a little. Doctors can usually spot this early in your blood tests and give you stronger medicine to calm things down. The most important thing is to take your medicine every day to prevent this from happening.</p>
                }
                takeaways={[
                    { icon: CheckCircle, text: "Acute rejection is common in early weeks and often treatable if caught early." },
                    { icon: Clock, text: "Chronic rejection is a slow process that can occur over years and is harder to treat." },
                    { icon: Stethoscope, text: "Rejection is often detected by blood tests before you feel any symptoms." },
                    { icon: Pill, text: "Taking your medication correctly is the single best way to prevent rejection." }
                ]}
            />
        )
    },
    'understanding-graft-health': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Understanding the Health of Your New Kidney</h2>
                <p>Many factors can affect how well your new kidney (also called an "allograft" or "graft") works, both immediately after surgery and for years to come. Understanding these factors helps you play an active role in keeping it healthy.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Factors Affecting Short-Term Success (First Weeks & Months)</h3>
                <div className="space-y-4 mt-2">
                    <div className="flex items-start gap-4">
                        <Clock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Delayed Function</h4>
                            <p className="text-muted-foreground">Sometimes, a new kidney takes a little while to "wake up" and start working. This is common, especially with deceased donor kidneys, and it doesn't mean the transplant has failed.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <ShieldAlert className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Antibodies</h4>
                            <p className="text-muted-foreground">Having pre-existing antibodies against the donor's tissue type (HLA) can increase the risk of early rejection. This is why cross-matching before surgery is so important.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <HeartHandshake className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Donor Type</h4>
                            <p className="text-muted-foreground">Kidneys from living donors generally have a higher short-term success rate and often start working faster than those from deceased donors.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Factors Affecting Long-Term Success (Years)</h3>
                <p>Protecting your kidney for the long haul involves managing factors related to both your immune system and your overall health.</p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-primary"/> Immune System Factors</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p><span className="font-bold">HLA Mismatch:</span> A closer tissue match between you and the donor can lead to better long-term outcomes.</p>
                            <p><span className="font-bold">New Antibodies:</span> Your body can develop new antibodies against the kidney over time. This is a major cause of late rejection.</p>
                            <p><span className="font-bold">Medication Adherence:</span> This is the most important factor you can control. Not taking your immunosuppressants correctly is a primary cause of late kidney loss.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HeartPulse className="text-primary"/> Overall Health Factors</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p><span className="font-bold">Blood Pressure & Cholesterol:</span> Keeping hypertension and high cholesterol under control is vital to protect the new kidney's blood vessels.</p>
                            <p><span className="font-bold">Medication Side Effects:</span> The long-term use of some immunosuppressants can be toxic to the kidney, which your team will monitor closely.</p>
                            <p><span className="font-bold">Recurrent Disease:</span> In some cases, the original kidney disease that caused failure can return and damage the new kidney.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Pill, text: "Medication non-adherence is a primary cause of late kidney loss." },
                    { icon: HeartPulse, text: "Controlling blood pressure and cholesterol is vital for the kidney's blood vessels." },
                    { icon: ShieldAlert, text: "Your body can develop new antibodies against the kidney over time, causing late rejection." },
                    { icon: HeartHandshake, text: "Living donor kidneys generally have higher long-term success rates." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Think of your new kidney as a special new plant in your garden. To help it grow strong for many years, you need to do two things. First, you need to stop the "weeds" (your immune system) from attacking it by taking your medicine. Second, you need to give it good "soil and water" by keeping the rest of your body healthy—like controlling your blood pressure and eating well. Both jobs are super important!</p>
                }
                takeaways={[
                    { icon: Pill, text: "Medication non-adherence is a primary cause of late kidney loss." },
                    { icon: HeartPulse, text: "Controlling blood pressure and cholesterol is vital for the kidney's blood vessels." },
                    { icon: ShieldAlert, text: "Your body can develop new antibodies against the kidney over time, causing late rejection." },
                    { icon: HeartHandshake, text: "Living donor kidneys generally have higher long-term success rates." }
                ]}
            />
        )
    },
    'long-term-care': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Your New Kidney: A Lifelong Partnership</h2>
                <p>You are on complex immunosuppressive regimens that render them susceptible to infection, malignancy, and cardiovascular disease (CVD). In addition, patients often have multiple comorbidities due to, or as a cause of, their underlying end-stage kidney disease.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Infectious issues</h3>
                <p>Infections such as upper respiratory or urinary tract infection are common in kidney transplant recipients. Decongestants and nonsteroidal antiinflammatory agents should be avoided. Patients are also at risk for opportunistic infections including cytomegalovirus (CMV), Pneumocystis jirovecii (formerly carinii) pneumonia (PCP), and polyomavirus (BK and John Cunningham [JC] virus).</p>
                
                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Cancer Surveillance: Tests and Frequency</h3>
                <p>After a kidney transplant, you are at a higher risk of developing certain types of cancer. Early detection leads to better treatment outcomes, so it's essential to follow a regular screening protocol. Please review the table below and discuss it with your transplant team if you have any questions.</p>
                
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-primary"/> Recommended Cancer Screening</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-bold">Cancer Type</TableHead>
                                        <TableHead className="font-bold">Screening Modality and Frequency</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-semibold">Breast</TableCell>
                                        <TableCell>Annual or biennial mammography for all women older than 50 years. For women between 40 and 49, screening is decided on an individual basis.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">Colorectal</TableCell>
                                        <TableCell>For individuals over 50 years: Annual fecal occult blood testing and/or flexible sigmoidoscopy or colonoscopy every 5 years.</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-semibold">Cervical</TableCell>
                                        <TableCell>Annual Pap smear and pelvic examination once sexually active.</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-semibold">Prostate</TableCell>
                                        <TableCell>Annual digital rectal examination and PSA blood test for all males after age 50.</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-semibold">Liver</TableCell>
                                        <TableCell>For high-risk individuals (e.g., with HBV or HCV infection), an alpha-fetoprotein (AFP) blood test and liver ultrasound every 6 months may be recommended.</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-semibold">Skin</TableCell>
                                        <TableCell>Monthly self-examination and a total body skin examination by an expert skin physician every 6-12 months.</TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell className="font-semibold">Kidney</TableCell>
                                        <TableCell>No firm recommendation, but an annual ultrasound of your original (native) kidneys is often suggested.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: ShieldAlert, text: "You have a higher risk of infections and specific cancers (especially skin cancer)." },
                    { icon: CalendarClock, text: "Follow the recommended cancer screening schedule for breast, colon, skin, etc." },
                    { icon: Ban, text: "Avoid nonsteroidal anti-inflammatory drugs (NSAIDs) as they can harm your kidney." },
                    { icon: Stethoscope, text: "Annual check-ups with your nephrologist are mandatory for life." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Taking care of your new kidney is a lifelong job. Because the medicine you take calms down your body's defense team, you need to be extra careful about getting sick. It also means you need to get regular check-ups for other health problems, like cancer, because finding things early is the best way to stay healthy. Your doctor will tell you exactly which check-ups you need and when.</p>
                }
                takeaways={[
                    { icon: ShieldAlert, text: "You have a higher risk of infections and specific cancers (especially skin cancer)." },
                    { icon: CalendarClock, text: "Follow the recommended cancer screening schedule for breast, colon, skin, etc." },
                    { icon: Ban, text: "Avoid nonsteroidal anti-inflammatory drugs (NSAIDs) as they can harm your kidney." },
                    { icon: Stethoscope, text: "Annual check-ups with your nephrologist are mandatory for life." }
                ]}
            />
        )
    },
    'diet-and-nutrition': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Eating Well After Your Transplant</h2>
                <p>Good nutrition is essential for a speedy recovery and for keeping your new kidney healthy for the long term. The goal is to eat a well-balanced diet.</p>

                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Your Post-Transplant Diet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>Focus on including these food groups in your daily meals:</p>
                        <ul className="list-none space-y-3">
                            <li className="flex items-start gap-3"><Beef className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Lean Proteins:</span> Choose from lean meats, poultry, fish, eggs, and legumes (like beans and peas).</div></li>
                            <li className="flex items-start gap-3"><Milk className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Low-Fat Dairy:</span> Opt for low-fat or non-fat milk, cheese, and yogurt.</div></li>
                            <li className="flex items-start gap-3"><Carrot className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Fruits & Vegetables:</span> Aim for at least 5-6 servings every day.</div></li>
                            <li className="flex items-start gap-3"><Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Whole Grains:</span> Include whole-grain breads, cereals, and brown rice.</div></li>
                        </ul>
                        <p className="pt-2">Staying hydrated is also key. Be sure to drink plenty of water and other fluids throughout the day.</p>
                    </CardContent>
                </Card>

                <h3 className="text-xl font-bold font-headline pt-4">Foods to Limit or Avoid</h3>
                <div className="space-y-4">
                    <Alert variant="destructive">
                        <Ban className="h-4 w-4" />
                        <AlertTitle>Avoid Grapefruit</AlertTitle>
                        <AlertDescription>
                            Absolutely avoid grapefruit and grapefruit juice. They can interfere with the levels of your anti-rejection medications like Tacrolimus and Cyclosporine.
                        </AlertDescription>
                    </Alert>
                    
                    <Alert>
                        <UtensilsCrossed className="h-4 w-4" />
                        <AlertTitle>Reduce Your Salt Intake</AlertTitle>
                        <AlertDescription>
                            Too much salt (sodium) can cause swelling and raise your blood pressure. Try to avoid high-sodium foods such as:
                            <ul className="list-disc list-inside mt-2">
                                <li>Processed foods (canned goods, bottled sauces, frozen meals)</li>
                                <li>Most fast food and restaurant meals</li>
                                <li>Salty snacks like chips</li>
                                <li>Pickles and papad</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>

                <h3 className="text-xl font-bold font-headline pt-4">Choosing the Right Fats</h3>
                <p>Limiting saturated "bad" fats is important for your heart health. Focus on incorporating more "good" fats into your diet.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card className="border-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-700 font-headline text-lg"><Leaf /> Good Fats (Mono-unsaturated)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>Olives and Olive Oil</li>
                                <li>Nuts and Nut Oils</li>
                                <li>Fish Oil</li>
                                <li>Legumes (Beans, Lentils)</li>
                                <li>Avocado</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-red-500">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700 font-headline text-lg"><Ban /> Bad Fats (Saturated & Trans Fats)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>Coconut Oil & Palm Oil</li>
                                <li>Animal Fats (Butter, Ghee)</li>
                                <li>High-fat dairy products</li>
                                <li>High-fat meats (like bacon)</li>
                                <li>Fried and processed foods</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                
                <h3 className="text-xl font-bold font-headline pt-4">Fill Up on Fiber</h3>
                <p>Fiber helps reduce cholesterol and control blood sugar. You can find plenty of fiber in whole-grain bread, oatmeal, brown rice, raw fruits, and raw vegetables.</p>
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "WARNING: Absolutely no grapefruit or grapefruit juice. It interferes with your medication." },
                    { icon: UtensilsCrossed, text: "Strictly limit salt (sodium) to control blood pressure and fluid retention." },
                    { icon: Carrot, text: "Wash all fruits and vegetables thoroughly to avoid foodborne illness." },
                    { icon: Leaf, text: "Prioritize 'good' fats (olive oil, avocado) over 'bad' fats (butter, ghee)." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Eating healthy is like putting the best fuel in a new car to make it run well for a long time. You should eat lots of colorful fruits and veggies, lean meats like chicken, and whole grains like brown rice. There are a few very important rules: no grapefruit, and not too much salt (found in chips and fast food). This helps keep your new kidney and your whole body happy!</p>
                }
                takeaways={[
                    { icon: Ban, text: "WARNING: Absolutely no grapefruit or grapefruit juice. It interferes with your medication." },
                    { icon: UtensilsCrossed, text: "Strictly limit salt (sodium) to control blood pressure and fluid retention." },
                    { icon: Carrot, text: "Wash all fruits and vegetables thoroughly to avoid foodborne illness." },
                    { icon: Leaf, text: "Prioritize 'good' fats (olive oil, avocado) over 'bad' fats (butter, ghee)." }
                ]}
            />
        )
    },
    'physical-activity-and-exercise': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Physical Activity & Your New Kidney</h2>
                <p>Staying active is one of the best things you can do for your overall health and for the long-term success of your new kidney. Because cardiovascular disease (heart disease) is a major concern for transplant patients, being physically active is a key way to lower your risk.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Before Your Transplant: "Prehabilitation"</h3>
                <p>Even before your surgery, your transplant team will ask about your current activity level. If you've been inactive for a while, they might recommend a "prehabilitation" program. This is a tailored physical therapy plan designed to help you get stronger *before* your transplant, which can lead to a smoother, faster recovery afterward.</p>

                <h3 className="text-xl font-bold font-headline pt-4">After Your Transplant: Getting Back on Your Feet</h3>
                <p>Your journey back to activity will be gradual, but it starts almost immediately.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Clock className="text-primary"/> The Early Days</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p>You will be encouraged to start walking as soon as possible after surgery. This helps prevent complications like blood clots and chest infections.</p>
                            <p>Your team will re-evaluate your physical condition and help you create a plan to safely return to your normal activities.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bike className="text-primary"/> The First 3 Months</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p>As your wound heals, you'll be encouraged to increase your aerobic activity (like walking).</p>
                            <p><span className="font-bold">Crucial Restriction:</span> Avoid any heavy lifting or bending that could strain your abdominal muscles. This helps prevent a hernia.</p>
                            <p>A good goal is to work towards <span className="font-bold">7,500 to 10,000 steps</span> daily.</p>
                        </CardContent>
                    </Card>
                </div>

                <Alert className="mt-6">
                    <HeartPulse className="h-4 w-4" />
                    <AlertTitle>Long-Term Fitness Goals</AlertTitle>
                    <AlertDescription>
                        In addition to daily walking, aim to include some resistance or strength training exercises about three times a week. Always discuss your exercise plans with your transplant team to ensure they are safe for you.
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "AVOID heavy lifting for the first three months to prevent a hernia." },
                    { icon: User, text: "Start with walking as soon as possible after surgery to prevent blood clots." },
                    { icon: Target, text: "Aim for 7,500 to 10,000 steps daily as a long-term fitness goal." },
                    { icon: ShieldQuestion, text: "Always consult your transplant team before starting any new exercise regimen." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Moving your body is super important for your new kidney! After surgery, you'll start with short walks. Walking helps you heal faster and keeps your heart strong. As you get better, you can walk more. The most important rule at the beginning is NO heavy lifting. You don't want to hurt your tummy muscles while they are healing. Just think: walk, walk, walk, but don't lift!</p>
                }
                takeaways={[
                    { icon: Ban, text: "AVOID heavy lifting for the first three months to prevent a hernia." },
                    { icon: User, text: "Start with walking as soon as possible after surgery to prevent blood clots." },
                    { icon: Target, text: "Aim for 7,500 to 10,000 steps daily as a long-term fitness goal." },
                    { icon: ShieldQuestion, text: "Always consult your transplant team before starting any new exercise regimen." }
                ]}
            />
        )
    },
    'post-transplant-diabetes': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Diabetes After Your Transplant (PTDM)</h2>
                <p>Post-Transplant Diabetes Mellitus (PTDM) is a type of diabetes that develops after your transplant surgery. It's a common complication, but it can be managed effectively with help from your transplant team.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Who is at Risk?</h3>
                <p>Certain factors can increase your risk of developing PTDM:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Being overweight or obese</li>
                    <li>Being older (over 40-45 years)</li>
                    <li>Having a family history of type 2 diabetes</li>
                    <li>A personal history of diabetes during a pregnancy (gestational diabetes)</li>
                    <li><span className="font-bold">Your immunosuppressive medication regimen is the most significant post-transplant risk factor.</span></li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">Screening and Diagnosis</h3>
                <p>Your team will watch you closely for signs of diabetes.</p>
                <div className="space-y-4 mt-2">
                     <div className="flex items-start gap-4">
                        <CalendarClock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Regular Monitoring</h4>
                            <p className="text-muted-foreground">You will have regular blood tests to check your blood sugar levels, especially in the first year after transplant. An A1C test (which shows your average blood sugar over 3 months) will likely be done starting at 3 months post-transplant.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <ClipboardList className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">When is it Diagnosed?</h4>
                            <p className="text-muted-foreground">A formal diagnosis of PTDM is only made once you are on a stable dose of your medications, your new kidney is functioning well, and you don't have any acute infections.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Managing Post-Transplant Diabetes</h3>
                <p>The goal of management is to keep your blood sugar in a healthy range to protect both your new kidney and your overall health. Treatment involves a combination of lifestyle changes and medication.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Scale className="text-primary"/> Lifestyle is Key</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Lifestyle interventions are the first and most important step for everyone with PTDM. This includes:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Following a healthy diet</li>
                                <li>Losing weight if you are overweight</li>
                                <li>Regular physical activity</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Pill className="text-primary"/> Medication</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Right after surgery, high blood sugar is often managed with <span className="font-bold">insulin</span>. Later, depending on your needs, your doctor may prescribe oral pills or other injectable medications. The choice of drug depends on how well your new kidney is working.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Pill, text: "Immunosuppressive medication is the most significant risk factor for developing diabetes after transplant." },
                    { icon: Scale, text: "PTDM is managed first with diet and exercise, then medication if needed." },
                    { icon: Stethoscope, text: "Your blood sugar will be monitored closely with regular blood tests, especially in the first year." },
                    { icon: Target, text: "A1C goal for most patients with PTDM is less than 7%." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Sometimes, the medicine you take for your new kidney can make your blood sugar go too high, which is like having diabetes. This is common, but it's important to manage it. Your doctors will check your blood sugar with tests. To help, you'll need to eat healthy food, exercise, and maybe take some medicine for the sugar. Keeping your blood sugar in a good range protects your new kidney.</p>
                }
                takeaways={[
                    { icon: Pill, text: "Immunosuppressive medication is the most significant risk factor for developing diabetes after transplant." },
                    { icon: Scale, text: "PTDM is managed first with diet and exercise, then medication if needed." },
                    { icon: Stethoscope, text: "Your blood sugar will be monitored closely with regular blood tests, especially in the first year." },
                    { icon: Target, text: "A1C goal for most patients with PTDM is less than 7%." }
                ]}
            />
        )
    },
    'mental-health-support': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Looking After Your Emotional Well-being</h2>
                <p>A kidney transplant is a major, life-changing event that can bring a lot of positive changes. However, it's also completely normal to experience a wide range of emotions as you adjust. You might have mood swings or feel stressed or down as you get used to your new reality and new medications. These feelings are common. It's important to remember that talking to someone early on is the best way to get the support you need.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Common Emotional Experiences</h3>
                <p>It's common to navigate complex feelings after a transplant. You might find yourself thinking about:</p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                    <li><strong>Adjusting to the New Organ:</strong> It can feel strange to have an organ from another person inside you. While some people worry about taking on the donor's personality, rest assured this is not possible.</li>
                    <li><strong>Feelings About the Donor:</strong> If you received a kidney from a deceased donor, it's normal to feel a mix of gratitude for your second chance at health and sadness for the donor's family. These complex emotions are a natural part of the process.</li>
                    <li><strong>A New Sense of Normal:</strong> After a long illness, feeling "normal" again can be overwhelming in itself. It’s a big adjustment.</li>
                    <li><strong>Changing Relationships:</strong> As you regain your health and independence, your relationships with family and friends may shift. Everyone needs time to adapt to the new dynamic.</li>
                    <li><strong>Anxiety About Rejection:</strong> Worrying about rejection is a common fear. It can make you anxious before check-ups, followed by relief when you get good news. This emotional roller-coaster is something many patients experience.</li>
                    <li><strong>Managing Medications:</strong> The number of new medications and their potential side effects can feel daunting. Don't hesitate to discuss these concerns with your care team.</li>
                    <li><strong>Survivor's Guilt:</strong> You might feel guilty that you received a transplant while others are still on dialysis. This is a recognized feeling, and talking about it can help.</li>
                </ul>
                <p className="pt-2">Remember, you are not alone in these feelings. Your transplant team, including social workers and psychologists, are there to support you through every step of this journey.</p>
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "Anxiety about rejection is a common and normal fear. Talk about it." },
                    { icon: Smile, text: "It's normal to have complex feelings of gratitude and sadness, especially with a deceased donor." },
                    { icon: Users, text: "Survivor's guilt is a recognized feeling; you are not alone in this." },
                    { icon: MessageSquare, text: "Your transplant team includes social workers and psychologists who are there to help you." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Getting a new kidney is a very big deal! It's normal to have all sorts of feelings afterward - happy, worried, sad, and excited all at once. Your body and mind are getting used to a new normal. It's like moving to a new house; it's great, but it takes time to feel at home. If you ever feel down or worried, talking about it with your family or your doctor is the best thing you can do. You are not alone!</p>
                }
                takeaways={[
                    { icon: Heart, text: "Anxiety about rejection is a common and normal fear. Talk about it." },
                    { icon: Smile, text: "It's normal to have complex feelings of gratitude and sadness, especially with a deceased donor." },
                    { icon: Users, text: "Survivor's guilt is a recognized feeling; you are not alone in this." },
                    { icon: MessageSquare, text: "Your transplant team includes social workers and psychologists who are there to help you." }
                ]}
            />
        )
    },
    'patient-responsibilities': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Your Responsibilities as a Patient</h2>
                <p>A successful transplant journey is a partnership. Here’s how you can contribute to your own care.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Be Informed</h4>
                            <ul className="mt-1 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                <li>Learn as much as you can about your condition and treatment.</li>
                                <li>Talk to your healthcare team about any concerns.</li>
                                <li>Speak up and ask questions if you don't understand something.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <ClipboardList className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Follow Your Treatment Program</h4>
                            <ul className="mt-1 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                <li>Provide complete and accurate information about your health.</li>
                                <li>Follow through with recommended services and referrals.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Be On Time</h4>
                            <ul className="mt-1 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                <li>Make every effort to be on time for all scheduled appointments.</li>
                                <li>Ensure your lab investigation reports are available for your visit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Follow Facility Policies</h4>
                            <ul className="mt-1 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                <li>Adhere to all hospital policies and procedures for safety.</li>
                                <li>Help maintain a healing environment by not using tobacco products.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Be Considerate</h4>
                            <ul className="mt-1 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                <li>Treat other patients and staff with respect and dignity.</li>
                                <li>Never threaten others or act in a violent manner.</li>
                                <li>Keep noise to a minimum and use phones and TVs courteously.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: ClipboardList, text: "You must provide complete and accurate information about your health at all times." },
                    { icon: Clock, text: "Keep all appointments and ensure lab reports are available for your visit." },
                    { icon: Target, text: "Follow your prescribed treatment program without deviation." },
                    { icon: HelpCircle, text: "Ask questions if you don't understand something; being informed is your responsibility." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Having a new kidney is a team sport, and you are the team captain! Your job is to work with the doctors and nurses. This means asking questions when you're confused, telling them the truth about how you feel, and following the rules they give you to stay healthy. Being on time for your check-ups and being nice to everyone at the hospital are also part of being a great team captain.</p>
                }
                takeaways={[
                    { icon: ClipboardList, text: "You must provide complete and accurate information about your health at all times." },
                    { icon: Clock, text: "Keep all appointments and ensure lab reports are available for your visit." },
                    { icon: Target, text: "Follow your prescribed treatment program without deviation." },
                    { icon: HelpCircle, text: "Ask questions if you don't understand something; being informed is your responsibility." }
                ]}
            />
        )
    },
    'donor-evaluation': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Evaluation Process for Living Donors</h2>
                <div>
                    <h3 className="text-xl font-bold font-headline mb-2">How to Start the Process</h3>
                    <p>To begin your journey as a living donor, the first step is to contact a transplant center. For a "directed donation" to a specific person, you must contact the center where the recipient is waitlisted. If you wish to be a "non-directed" donor to anyone in need, you can contact any transplant center.</p>
                    <p className="mt-2">It's highly recommended to talk openly about your decision with family and trusted friends. Many potential donors also find it helpful to connect with someone who has already gone through the donation experience to learn from their journey.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">What does a “full evaluation” involve?</h3>
                    <p>The evaluation is a comprehensive process, often taking place over two days. It's designed to give you a complete picture of what's involved and to ensure donation is safe for you. You will meet with the living donor team, have more blood work done, and complete imaging scans.</p>
                    <p className="font-semibold mt-4">You can expect to meet with the following team members:</p>
                    <ul className="list-disc list-inside space-y-3 pl-4 mt-2">
                        <li><strong>Nurse Coordinator:</strong> Your main point of contact throughout the entire process.</li>
                        <li><strong>Nephrologist (Kidney Doctor):</strong> They will discuss your kidney health and confirm you are healthy enough to donate.</li>
                        <li><strong>Surgeon:</strong> The surgeon will explain the surgical procedure, pain management, and answer questions about recovery.</li>
                        <li><strong>Dietitian:</strong> They will review your eating habits and discuss a healthy, well-balanced diet.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">Medical Tests During Evaluation</h3>
                    <p>You will have lab work and imaging tests to check on your health. Blood and urine samples will check your overall health and confirm if you are a good match for the recipient. Imaging tests like a chest X-ray and CT scan help the team see the size and structure of your kidneys and their blood supply, which helps them decide which kidney is better to donate, allowing you to keep the healthier of the two.</p>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "The evaluation is to ensure donation is safe FOR YOU; your health is the top priority." },
                    { icon: Users, text: "You will meet a full team: nephrologist, surgeon, nurse, and dietitian." },
                    { icon: Stethoscope, text: "Imaging tests (CT scan) are done to see the kidney's structure and decide which is better to donate." },
                    { icon: Clock, text: "The entire evaluation process can take several months to complete." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>If you want to give one of your two kidneys, doctors need to make sure you are super healthy first. It's like a superhero needing a check-up before a mission! You will meet with a whole team of doctors and nurses who will ask you questions and do some tests, like taking pictures of your kidneys. They do all this to make sure the surgery is safe for you and that you'll stay healthy with one kidney.</p>
                }
                takeaways={[
                    { icon: Heart, text: "The evaluation is to ensure donation is safe FOR YOU; your health is the top priority." },
                    { icon: Users, text: "You will meet a full team: nephrologist, surgeon, nurse, and dietitian." },
                    { icon: Stethoscope, text: "Imaging tests (CT scan) are done to see the kidney's structure and decide which is better to donate." },
                    { icon: Clock, text: "The entire evaluation process can take several months to complete." }
                ]}
            />
        )
    },
    'donor-eligibility': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Who Can Be a Living Donor?</h2>
                <p>Not everyone is able to be a living kidney donor. The evaluation process is designed to protect your health first and foremost. Certain health conditions may prevent someone from being able to donate safely.</p>
                <h3 className="text-xl font-bold font-headline pt-4">Conditions That May Prevent Donation</h3>
                <p>Some of the common reasons a person may not be eligible to donate include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 columns-1 md:columns-2">
                    <li>Having cancer, a history of cancer, hepatitis or AIDS.</li>
                    <li>Having diabetes or a high risk of developing it.</li>
                    <li>Significant heart or lung problems, including uncontrolled high blood pressure.</li>
                    <li>Being significantly overweight.</li>
                    <li>Being an active smoker.</li>
                    <li>Certain psychological concerns that might make the process too difficult.</li>
                </ul>
                <p className="pt-2">The transplant team is dedicated to helping potential donors fully understand the risks and benefits. Their primary responsibility is to ensure your well-being throughout the entire process.</p>
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "You cannot donate if you have conditions like diabetes, cancer, or significant heart disease." },
                    { icon: Heart, text: "These rules are in place to protect your long-term health." },
                    { icon: ShieldAlert, text: "Active smoking or being significantly overweight can make you ineligible." },
                    { icon: ShieldCheck, text: "The team's primary responsibility is to ensure your well-being, not just the recipient's." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Giving a kidney is a very kind gift, but it's only for people who are very healthy. The doctors have rules to keep everyone safe. If someone has certain health problems, like diabetes or heart trouble, they can't be a donor. This isn't to be mean; it's to protect the person who wants to donate. The doctors' main job is to make sure the donor stays safe and healthy for their whole life.</p>
                }
                takeaways={[
                    { icon: Ban, text: "You cannot donate if you have conditions like diabetes, cancer, or significant heart disease." },
                    { icon: Heart, text: "These rules are in place to protect your long-term health." },
                    { icon: ShieldAlert, text: "Active smoking or being significantly overweight can make you ineligible." },
                    { icon: ShieldCheck, text: "The team's primary responsibility is to ensure your well-being, not just the recipient's." }
                ]}
            />
        )
    },
    'psychological-assessment': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Psychological Assessment</h2>
                <p>A psychological assessment is a key part of the living donation process. It's a supportive conversation designed to ensure that you, the potential donor, are making a fully informed and voluntary decision. It's a chance to talk through your motivations, feelings, and any concerns you might have.</p>
                <h3 className="text-xl font-bold font-headline pt-4">Goals of the Assessment</h3>
                <p>The assessment helps confirm that the donor:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Is comfortable with the idea of donation and understands the entire process.</li>
                    <li>Is not being pressured or paid to donate. This must be a free and willing choice.</li>
                    <li>Has a clear understanding of both the physical and emotional outcomes of kidney donation.</li>
                    <li>Has considered the potential risks and benefits to their own health. This is called "informed consent."</li>
                </ul>
                <h3 className="text-xl font-bold font-headline pt-4">Your Decision is Respected</h3>
                <p>It is crucial to know that you can change your mind about donating at any point, for any reason, right up until the surgery. Your decision will be respected, and the transplant team will support you no matter what you choose.</p>
                <KeyTakeaways takeaways={[
                    { icon: CheckCircle, text: "You can change your mind about donating at any point, for any reason, with no questions asked." },
                    { icon: HandCoins, text: "The assessment ensures you are not being forced or paid to donate." },
                    { icon: BrainCircuit, text: "You must demonstrate you understand all risks and benefits ('informed consent')." },
                    { icon: MessageSquare, text: "Your motivations and support system will be discussed to ensure you're prepared." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Before you can donate, you'll have a friendly chat with an expert to talk about your feelings. They want to make sure you are donating because YOU want to, not because someone is making you or paying you. It's a time to ask questions and talk about any worries you might have. It's super important to know that you can change your mind at any time, even on the day of the surgery. It's your choice, and everyone will respect it.</p>
                }
                takeaways={[
                    { icon: CheckCircle, text: "You can change your mind about donating at any point, for any reason, with no questions asked." },
                    { icon: HandCoins, text: "The assessment ensures you are not being forced or paid to donate." },
                    { icon: BrainCircuit, text: "You must demonstrate you understand all risks and benefits ('informed consent')." },
                    { icon: MessageSquare, text: "Your motivations and support system will be discussed to ensure you're prepared." }
                ]}
            />
        )
    },
    'donor-surgery': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Donor's Surgical Procedure</h2>
                <p>As a living donor, you will be put to sleep with general anesthesia. Most transplant centers also use "pain blocks," which numb the abdominal area for 12-24 hours to lessen pain after the surgery.</p>
                <p>The surgery to remove the kidney typically takes about <strong>two to three hours</strong>. Most procedures are done laparoscopically (keyhole surgery), using tiny incisions and a camera to remove the kidney.</p>

                <h3 className="text-xl font-bold font-headline pt-4">What are the risks of surgery?</h3>
                <p>Like any major surgery, there are some risks to be aware of. The most common include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Bleeding or infection in the surgical area.</li>
                    <li>Developing a hernia if you lift anything too heavy too soon after surgery.</li>
                    <li>Getting a Urinary Tract Infection (UTI) from the catheter used during surgery.</li>
                    <li>The risk of death from this surgery is extremely low, at just <strong>0.03%</strong> (or 3 in every 10,000 donors).</li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: Target, text: "The risk of death from donor surgery is extremely low (0.03% or 3 in 10,000)." },
                    { icon: CheckCircle, text: "Most surgeries are laparoscopic ('keyhole'), leading to a faster recovery." },
                    { icon: ShieldAlert, text: "A common post-op risk is a hernia if you lift heavy items too soon." },
                    { icon: Bed, text: "You will be under general anesthesia and will not feel the 2-3 hour procedure." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>If you donate a kidney, the surgery is very safe. Doctors will give you medicine to make you sleep through the whole thing. It usually takes 2-3 hours. They make a few tiny cuts instead of one big one, which helps you heal faster. Like any surgery, there are some small risks, but the doctors and nurses are experts and will take great care of you.</p>
                }
                takeaways={[
                    { icon: Target, text: "The risk of death from donor surgery is extremely low (0.03% or 3 in 10,000)." },
                    { icon: CheckCircle, text: "Most surgeries are laparoscopic ('keyhole'), leading to a faster recovery." },
                    { icon: ShieldAlert, text: "A common post-op risk is a hernia if you lift heavy items too soon." },
                    { icon: Bed, text: "You will be under general anesthesia and will not feel the 2-3 hour procedure." }
                ]}
            />
        )
    },
    'donor-recovery': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Donor's Recovery Journey</h2>
                <p>You can expect to be up and walking on the same day as your surgery. Most donors stay in the hospital for just <strong>one to two nights</strong>, and pain medication is usually only needed for a short time.</p>
                <p>A full recovery generally takes about <strong>four to six weeks</strong>. However, many donors can return to work much sooner. If you have a desk job, you might be able to return after just two weeks. If your job is more physically demanding, your employer may offer a temporary desk-based role during your recovery.</p>
                <p>It's very important to talk to your transplant team about when it's safe for you to return to work, sports, and other physical activities. Following their guidance will ensure you heal properly and avoid complications.</p>
                <KeyTakeaways takeaways={[
                    { icon: Building, text: "Most donors stay in the hospital for only 1-2 nights." },
                    { icon: Bike, text: "You will be up and walking on the same day as your surgery." },
                    { icon: Clock, text: "A full recovery takes 4-6 weeks, but a return to a desk job can be as soon as 2 weeks." },
                    { icon: Ban, text: "You MUST avoid heavy lifting for several weeks to allow your muscles to heal." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>After your surgery, you will heal surprisingly fast! Most people are walking around on the same day and only stay in the hospital for a night or two. You'll feel a bit sore, but you'll get stronger every day. You'll need to take it easy for about a month, with no heavy lifting. Soon enough, you'll be back to your normal life, work, and activities, all while knowing you did something amazing for someone else.</p>
                }
                takeaways={[
                    { icon: Building, text: "Most donors stay in the hospital for only 1-2 nights." },
                    { icon: Bike, text: "You will be up and walking on the same day as your surgery." },
                    { icon: Clock, text: "A full recovery takes 4-6 weeks, but a return to a desk job can be as soon as 2 weeks." },
                    { icon: Ban, text: "You MUST avoid heavy lifting for several weeks to allow your muscles to heal." }
                ]}
            />
        )
    },
    'risks-and-benefits': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Long-Term Health After Donation</h2>
                <p>Research has shown that living donors can live a normal, healthy life with one kidney. When one kidney is removed, the other grows to take over the work of the donated one. This is called “compensatory growth.” Studies show that after donation, a donor’s total kidney function returns to roughly 70-80% of what it was with two kidneys, which is more than enough to stay healthy.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Long-Term Health Considerations</h3>
                <p>While the outlook is excellent, there are a few things to be aware of for the long term:</p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                    <li><strong>Blood Pressure:</strong> Donors have a slightly higher than average risk of developing high blood pressure. Maintaining a healthy diet and getting regular physical activity are key to staying healthy.</li>
                    <li><strong>Kidney Failure:</strong> The risk of a donor's remaining kidney failing is very low—less than 1% of donors ever need a dialysis or a transplant themselves. In the rare event a former donor does need a kidney, they are given high priority on the transplant waitlist.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">What to Expect Emotionally</h3>
                <p>Most living donors (80–90%) report feeling very positive about their decision to donate. However, it's also normal to feel anxious or depressed for a short time after the donation as you process the experience. These feelings are not uncommon, even when both you and the recipient are doing well.</p>
                <p>It is vital to talk to the transplant team about how you're feeling, both physically and emotionally, during your follow-up visits. Your emotional health is just as important as your physical recovery, and support is always available.</p>
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "You can live a normal, healthy life with one kidney." },
                    { icon: Stethoscope, text: "Your remaining kidney grows and functions at about 70-80% of your original capacity." },
                    { icon: ShieldAlert, text: "Your risk of needing a transplant yourself is very low (<1%), but you get high priority if needed." },
                    { icon: Smile, text: "Most donors (80-90%) feel very positive about their decision to donate." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>After you donate, your remaining kidney gets a little bigger and stronger to do the work of two. You can live a perfectly normal, long, and healthy life with just one kidney! You'll just need to get a check-up once a year to make sure everything is good. The best part is knowing you gave someone the amazing gift of health. Most donors feel very happy and proud of their decision for the rest of their lives.</p>
                }
                takeaways={[
                    { icon: Heart, text: "You can live a normal, healthy life with one kidney." },
                    { icon: Stethoscope, text: "Your remaining kidney grows and functions at about 70-80% of your original capacity." },
                    { icon: ShieldAlert, text: "Your risk of needing a transplant yourself is very low (<1%), but you get high priority if needed." },
                    { icon: Smile, text: "Most donors (80-90%) feel very positive about their decision to donate." }
                ]}
            />
        )
    },
    'donor-long-term-health': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Staying Healthy After Kidney Donation</h2>
                <p>Donating a kidney is a generous, life-saving act. After your donation, taking care of your long-term health is very important. Here's a simple guide to help you stay well.</p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <HeartPulse className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Check Your Blood Pressure Regularly</h4>
                            <p className="text-muted-foreground">High blood pressure can affect your remaining kidney. Check it regularly at home or with a doctor to keep it in a healthy range.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FlaskConical className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Get Annual Kidney Check-ups</h4>
                            <p className="text-muted-foreground">Once a year, get a blood test to check your kidney function and a urine test to check for protein. This ensures your kidney is working well.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Scale className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Maintain a Healthy Weight and Stay Active</h4>
                            <p className="text-muted-foreground">A healthy weight and regular physical activity (like walking or stretching) reduce pressure on your kidney and keep your heart healthy.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Heart className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Live a Healthy Lifestyle</h4>
                            <p className="text-muted-foreground">Avoid smoking and excessive alcohol. Getting enough sleep and managing stress are small habits that go a long way in protecting your kidney.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <UserCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">See a Kidney Specialist Yearly</h4>
                            <p className="text-muted-foreground">Visit a nephrologist every year to monitor your kidney health and get expert guidance on any changes.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Ban className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Avoid Harmful Medications</h4>
                            <p className="text-muted-foreground">Do not take certain painkillers (like ibuprofen) or other medicines that can harm your kidney. Always ask your doctor before taking any new medication.</p>
                        </div>
                    </div>
                </div>

                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>A Lifetime of Health</AlertTitle>
                    <AlertDescription>
                        Remember: even with one kidney, you can live a long and healthy life. Staying on top of your yearly checks and taking good care of your body is the key.
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: CalendarClock, text: "You must have an annual kidney check-up for life (blood and urine tests)." },
                    { icon: Scale, text: "Maintain a healthy weight and control your blood pressure to protect your remaining kidney." },
                    { icon: Ban, text: "Avoid certain painkillers (NSAIDs like ibuprofen) that can harm your kidney." },
                    { icon: Heart, text: "Living a healthy lifestyle (no smoking, moderate alcohol) is crucial." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>After you give the amazing gift of a kidney, you have one hardworking kidney left. To keep it happy, you need to be its best friend! This means eating healthy food, playing and exercising, and avoiding things that are bad for it, like smoking. You also need to visit a kidney doctor once a year for a check-up, just to make sure everything is working perfectly. It's easy to stay healthy with one kidney!</p>
                }
                takeaways={[
                    { icon: CalendarClock, text: "You must have an annual kidney check-up for life (blood and urine tests)." },
                    { icon: Scale, text: "Maintain a healthy weight and control your blood pressure to protect your remaining kidney." },
                    { icon: Ban, text: "Avoid certain painkillers (NSAIDs like ibuprofen) that can harm your kidney." },
                    { icon: Heart, text: "Living a healthy lifestyle (no smoking, moderate alcohol) is crucial." }
                ]}
            />
        )
    },
    'understanding-your-role': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Indispensable Role of a Caregiver</h2>
                <p>As a family member or caregiver who is not the donor or recipient, your role is that of a vital "support system manager" and emotional anchor. Your involvement profoundly impacts the well-being and recovery of both individuals.</p>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><BookOpen className="text-primary"/> Understanding the Journey</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p>To be effective, you need to understand the basics of the transplant process:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Kidney Failure:</strong> Know why the transplant is needed and what life on dialysis is like.</li>
                            <li><strong>Living Donation:</strong> Understand the benefits, but also be aware that the donor is undergoing major surgery for someone else and will have their own recovery journey.</li>
                            <li><strong>The Medical Team:</strong> Get to know the roles of the transplant team members (nephrologists, surgeons, coordinators, etc.).</li>
                            <li><strong>Immunosuppressants:</strong> Learn that the recipient will take these lifelong medications to prevent rejection and understand their importance.</li>
                        </ul>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: HeartHandshake, text: "Your role is to be the 'support system manager' and emotional anchor." },
                    { icon: BookOpen, text: "To be effective, learn the basics of the transplant process and medications." },
                    { icon: Users, text: "Remember the donor is also having major surgery and needs separate support." },
                    { icon: Smile, text: "Your support directly and profoundly impacts the recovery of both individuals." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>As a caregiver, you are the SUPER sidekick for both the patient and the donor! You are the cheerleader, the helper, and the organizer. You don't have to be a doctor, but it helps to learn a little bit about the transplant so you know what's happening. Your job is to be the loving support that helps them both through this big adventure, making sure they feel safe and cared for.</p>
                }
                takeaways={[
                    { icon: HeartHandshake, text: "Your role is to be the 'support system manager' and emotional anchor." },
                    { icon: BookOpen, text: "To be effective, learn the basics of the transplant process and medications." },
                    { icon: Users, text: "Remember the donor is also having major surgery and needs separate support." },
                    { icon: Smile, text: "Your support directly and profoundly impacts the recovery of both individuals." }
                ]}
            />
        )
    },
    'supporting-pre-transplant': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Supporting Before the Transplant</h2>
                <p>This is where a caregiver often plays a huge hands-on role. Your practical support can make a massive difference during this stressful time.</p>

                <ul className="list-none space-y-4">
                    <li className="flex items-start gap-4">
                        <CalendarClock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Manage Appointments & Travel</h4>
                            <p className="text-muted-foreground">Help both the donor and recipient with transportation to their many pre-transplant evaluations. This can be very time-consuming.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <MessageSquare className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Be a Second Set of Ears</h4>
                            <p className="text-muted-foreground">Go with them to appointments to listen, take notes, and ask questions. It's easy to miss information when you're feeling overwhelmed.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <Home className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Help Around the House</h4>
                            <p className="text-muted-foreground">Assist with chores, errands, and meal preparation, as the recipient may be experiencing significant fatigue.</p>
                        </div>
                    </li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: MessageSquare, text: "Be a 'second set of ears' at appointments to help absorb complex information." },
                    { icon: CalendarClock, text: "Help with the logistics of transportation to the many pre-transplant evaluations." },
                    { icon: Home, text: "Assist with household chores and errands, as the recipient may have significant fatigue." },
                    { icon: Heart, text: "Your practical help is crucial for reducing the patient's and donor's stress." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Before the big surgery day, your job is to be an awesome helper. This can mean driving them to doctor's appointments, which there will be a lot of! You can also be a 'second pair of ears' at the doctor's office to help remember what was said. Helping with things at home, like making food or running errands, is also a super helpful way to support them when they are feeling tired.</p>
                }
                takeaways={[
                    { icon: MessageSquare, text: "Be a 'second set of ears' at appointments to help absorb complex information." },
                    { icon: CalendarClock, text: "Help with the logistics of transportation to the many pre-transplant evaluations." },
                    { icon: Home, text: "Assist with household chores and errands, as the recipient may have significant fatigue." },
                    { icon: Heart, text: "Your practical help is crucial for reducing the patient's and donor's stress." }
                ]}
            />
        )
    },
    'hospital-stay-support': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Support During the Hospital Stay</h2>
                <p>The surgery and immediate post-operative period is a vulnerable time. Your presence and practical help are invaluable.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Be the Communication Hub</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Act as a central point of contact for updating other family and friends. This manages visitors and shields the patient and donor from feeling overwhelmed by calls and messages.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bed className="text-primary"/> Offer Comfort & Presence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Just being a familiar face in the hospital room can provide immense emotional support and comfort to both the recipient and the donor.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HeartHandshake className="text-primary"/> Advocate for Their Needs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Be prepared to advocate for your loved ones if necessary. Ensure their questions are answered, their concerns are addressed, and they are comfortable.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Info className="text-primary"/> Acknowledge the Donor</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Remember that the donor has also had major surgery. Validate their feelings and offer them specific support, not just the recipient.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Users, text: "Act as the single point of contact for updating friends and family to allow the patient to rest." },
                    { icon: User, text: "Remember to support the donor, who has also had major surgery, not just the recipient." },
                    { icon: Smile, text: "Your familiar presence in the hospital room is a huge source of comfort." },
                    { icon: ShieldCheck, text: "Be prepared to advocate for their needs if they are unable to speak for themselves." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>When they are in the hospital, you can be the information captain! You can tell other family and friends how things are going so the patient and donor can rest. Just being there and offering a familiar, smiling face can make them feel so much better and less scared. And don't forget, the donor also had a big surgery, so make sure they get lots of love and attention too!</p>
                }
                takeaways={[
                    { icon: Users, text: "Act as the single point of contact for updating friends and family to allow the patient to rest." },
                    { icon: User, text: "Remember to support the donor, who has also had major surgery, not just the recipient." },
                    { icon: Smile, text: "Your familiar presence in the hospital room is a huge source of comfort." },
                    { icon: ShieldCheck, text: "Be prepared to advocate for their needs if they are unable to speak for themselves." }
                ]}
            />
        )
    },
     'home-recovery-care': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Caregiving During Home Recovery</h2>
                <p>The first 3 to 6 months after discharge are a crucial phase, especially for the recipient. Your role is key to a smooth and safe recovery.</p>

                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Transportation:</strong> The recipient will have frequent follow-up appointments. You will likely need to provide transportation.</li>
                    <li><strong>Monitoring Vitals:</strong> You may need to help check and record blood pressure, temperature, blood sugar, and fluid intake/output.</li>
                    <li><strong>Infection Control:</strong> Help maintain strict hygiene practices to protect the immunosuppressed recipient. This includes frequent handwashing, avoiding sick contacts, and safe food handling.</li>
                    <li><strong>Household Help:</strong> Continue to assist with daily living activities like cooking (often following specific dietary guidelines), cleaning, and errands.</li>
                    <li><strong>Enforcing Restrictions:</strong> Gently help enforce post-operative activity restrictions for both the donor and recipient, such as no heavy lifting.</li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: ShieldCheck, text: "Strict infection control (handwashing, avoiding sick people) is your top priority for the recipient." },
                    { icon: Ban, text: "Gently but firmly enforce activity restrictions (e.g., no heavy lifting)." },
                    { icon: Stethoscope, text: "You may need to help monitor and record vital signs like blood pressure and temperature." },
                    { icon: CalendarClock, text: "Transportation to frequent follow-up appointments is a key caregiving task." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Once they are back home, your helper duties continue! You might need to drive them to more check-ups. A big part of your job is being a "germ buster" - making sure everything is super clean to keep the patient safe from getting sick. You can also help by cooking healthy meals, reminding them not to lift heavy things, and maybe even helping to check their temperature and blood pressure. You are the recovery supervisor!</p>
                }
                takeaways={[
                    { icon: ShieldCheck, text: "Strict infection control (handwashing, avoiding sick people) is your top priority for the recipient." },
                    { icon: Ban, text: "Gently but firmly enforce activity restrictions (e.g., no heavy lifting)." },
                    { icon: Stethoscope, text: "You may need to help monitor and record vital signs like blood pressure and temperature." },
                    { icon: CalendarClock, text: "Transportation to frequent follow-up appointments is a key caregiving task." }
                ]}
            />
        )
    },
    'medication-management': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Supporting Medication Management</h2>
                <p>The recipient's medication regimen will be complex and is absolutely critical to their long-term health. Your support can be the key to preventing missed doses, which can lead to organ rejection.</p>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Pill className="text-primary"/> How You Can Help</CardTitle>
                        <CardDescription>Simple organizational support can make a huge difference.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-start gap-3">
                            <ClipboardList className="w-6 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Help Organize:</span> Use pillboxes sorted by day and time. This visual aid is one of the most effective ways to manage multiple medications.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <BellRing className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Set Reminders:</span> Help set daily alarms on a phone or clock for each medication time. Consistency is crucial.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <UserCheck className="w-6 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Double-Check:</span> Gently remind and check in to ensure doses have been taken, especially at the beginning.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <CalendarClock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Track Refills:</span> Keep an eye on prescription quantities and help ensure refills are ordered well before they run out.</div>
                        </div>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: ClipboardList, text: "Help organize pills into a weekly, timed pillbox. This is one of the most effective support tasks." },
                    { icon: BellRing, text: "Help set daily alarms as reminders for each medication time." },
                    { icon: FileText, text: "Help track when prescriptions are running low to ensure refills are ordered in time." },
                    { icon: ShieldQuestion, text: "Your role is to support and remind, not to administer medication unless directed." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>The patient has to take a LOT of important pills, and it's easy to get confused. You can be the 'Pill Co-Pilot'! You can help by putting the pills into a special box with days of the week on it. You can also help set alarms on a phone to remind them when it's time to take their medicine. Just helping them stay organized is one of the most important jobs you can do.</p>
                }
                takeaways={[
                    { icon: ClipboardList, text: "Help organize pills into a weekly, timed pillbox. This is one of the most effective support tasks." },
                    { icon: BellRing, text: "Help set daily alarms as reminders for each medication time." },
                    { icon: FileText, text: "Help track when prescriptions are running low to ensure refills are ordered in time." },
                    { icon: ShieldQuestion, text: "Your role is to support and remind, not to administer medication unless directed." }
                ]}
            />
        )
    },
    'recognizing-warning-signs': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Recognizing Warning Signs</h2>
                <p>As a caregiver, you are often the first person to notice subtle changes in the recipient's health. Being vigilant and knowing when to call the transplant team is a critical responsibility.</p>
                
                <Alert variant="destructive">
                    <Siren className="h-4 w-4" />
                    <AlertTitle>Contact the Transplant Team Immediately If You Notice:</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Fever:</strong> Any temperature above 100.4°F (38°C).</li>
                            <li><strong>Pain:</strong> New or worsening pain or tenderness over the area of the new kidney.</li>
                            <li><strong>Flu-like Symptoms:</strong> Chills, aches, headache, dizziness, nausea, or vomiting.</li>
                            <li><strong>Fluid Changes:</strong> A big decrease in urine output or sudden weight gain/swelling (which indicates fluid retention).</li>
                            <li><strong>Wound Issues:</strong> Redness, swelling, pus, or foul-smelling drainage from the surgical incision.</li>
                            <li><strong>General Malaise:</strong> The patient just "doesn't feel right" or seems unusually tired.</li>
                        </ul>
                        <p className="mt-3 font-semibold">Do not wait for the next scheduled appointment. Early intervention is key to treating potential problems like infection or rejection.</p>
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: Thermometer, text: "WARNING: A fever above 100.4°F (38°C) is a major warning sign. Call the team immediately." },
                    { icon: Frown, text: "Trust your gut. If the patient just 'doesn't seem right', it is always worth a phone call." },
                    { icon: Stethoscope, text: "New pain over the transplant area or a big drop in urine output are urgent signs." },
                    { icon: Phone, text: "Do not wait for the next appointment if you see a warning sign. Early intervention is key." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>You are like a detective looking for clues that something might be wrong. If the patient gets a fever, has pain near their new kidney, or just seems really sick and 'not right', it's a sign to call the doctor right away. You see them every day, so you are the best person to notice if something is different. Don't wait—calling the doctor early is the best way to solve a problem quickly.</p>
                }
                takeaways={[
                    { icon: Thermometer, text: "WARNING: A fever above 100.4°F (38°C) is a major warning sign. Call the team immediately." },
                    { icon: Frown, text: "Trust your gut. If the patient just 'doesn't seem right', it is always worth a phone call." },
                    { icon: Stethoscope, text: "New pain over the transplant area or a big drop in urine output are urgent signs." },
                    { icon: Phone, text: "Do not wait for the next appointment if you see a warning sign. Early intervention is key." }
                ]}
            />
        )
    },
    'self-care-for-caregivers': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Self-Care: A Crucial Task for Caregivers</h2>
                <p>This is often the most overlooked aspect of caregiving. You cannot provide good care if you are exhausted or overwhelmed. Taking care of yourself is not selfish; it's essential for sustainable support.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader><CardTitle>Recognize Your Limits</CardTitle></CardHeader>
                        <CardContent>
                            <p>You are not expected to be perfect or to do everything alone. Understand that caregiving is demanding, and it's okay to need help.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Seek Your Own Support</CardTitle></CardHeader>
                        <CardContent>
                            <p>Talk to trusted friends, find a caregiver support group, or seek professional counseling if you feel overwhelmed. You are not alone.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Prioritize Rest & Nutrition</CardTitle></CardHeader>
                        <CardContent>
                            <p>Caregiver burnout is a real risk. Make sure you are getting enough sleep and eating healthy meals to maintain your own strength.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Take Breaks</CardTitle></CardHeader>
                        <CardContent>
                            <p>Schedule regular breaks, even short ones, to recharge. Arrange for others to help so you can step away without worry.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: User, text: "You cannot pour from an empty cup. Prioritize your own rest and nutrition." },
                    { icon: Smile, text: "It is not selfish to take breaks. Arrange for others to help so you can recharge." },
                    { icon: MessageSquare, text: "Recognize your limits. It's okay to ask for help and seek your own support (friends, counseling)." },
                    { icon: ShieldAlert, text: "Caregiver burnout is a real risk. Taking care of yourself is essential for providing good care." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Even superheroes need to rest and recharge their powers! Taking care of someone else is a big job, and you need to take care of yourself too. This means getting enough sleep, eating good food, and taking breaks to do things you enjoy. If you get too tired, you can't be a good helper. Taking care of yourself isn't selfish; it's how you stay strong enough to be an amazing sidekick.</p>
                }
                takeaways={[
                    { icon: User, text: "You cannot pour from an empty cup. Prioritize your own rest and nutrition." },
                    { icon: Smile, text: "It is not selfish to take breaks. Arrange for others to help so you can recharge." },
                    { icon: MessageSquare, text: "Recognize your limits. It's okay to ask for help and seek your own support (friends, counseling)." },
                    { icon: ShieldAlert, text: "Caregiver burnout is a real risk. Taking care of yourself is essential for providing good care." }
                ]}
            />
        )
    },
    'communication-with-medical-team': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Communicating with the Medical Team</h2>
                <p>Effective communication with the transplant team is essential. As a caregiver, you are a key part of these conversations. Don't be afraid to ask questions.</p>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><HelpCircle className="text-primary"/> Key Questions to Ask</CardTitle>
                        <CardDescription>Being prepared with questions can help you get the most out of every interaction with the team.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-3">
                            <li>"What are the most critical things I need to monitor for the recipient and donor in the next few weeks?"</li>
                            <li>"Who is the primary contact person for urgent questions, especially after hours?"</li>
                            <li>"Are there any specific educational materials or classes for caregivers that you recommend?"</li>
                            <li>"What resources are available for caregiver support, like social workers or support groups?"</li>
                            <li>"Can you clarify the specific dietary and activity restrictions for both the recipient and the donor?"</li>
                            <li>"What are the financial implications we should be aware of, and is a financial counselor available?"</li>
                        </ul>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: Phone, text: "Ask: 'Who is the primary contact for urgent questions, especially after hours?'" },
                    { icon: FileText, text: "Write down questions before appointments so you don't forget." },
                    { icon: Users, text: "It's okay to ask about support resources for yourself as a caregiver." },
                    { icon: HelpCircle, text: "Clarify any instructions you don't understand. There are no silly questions." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Talking to the doctors and nurses is super important. Don't ever be afraid to ask questions! There are no silly questions. It's a good idea to write your questions down before an appointment so you don't forget. You can ask about who to call if you have a question at night, or what you should be watching for at home. Being a good communicator makes you a valuable part of the team.</p>
                }
                takeaways={[
                    { icon: Phone, text: "Ask: 'Who is the primary contact for urgent questions, especially after hours?'" },
                    { icon: FileText, text: "Write down questions before appointments so you don't forget." },
                    { icon: Users, text: "It's okay to ask about support resources for yourself as a caregiver." },
                    { icon: HelpCircle, text: "Clarify any instructions you don't understand. There are no silly questions." }
                ]}
            />
        )
    },
};

export default contentData;
