
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video, Info, Ban, UtensilsCrossed, Leaf, Beef, Milk, Carrot, ShieldCheck, HeartHandshake, BrainCircuit, UserCheck, MessageSquare, CalendarClock, School, BellRing, Users, BookOpen, ClipboardList, Clock, Heart, Bed, Home, Pill, Siren, HelpCircle, Bike, HeartPulse, ShieldAlert, Scale, FlaskConical, Target, Stethoscope, Lightbulb, User, CheckCircle, HandCoins, Building, FileText, Smile, ShieldQuestion, Thermometer, Frown, Phone, Droplet, Lung, AlertTriangle } from 'lucide-react';
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
                    { icon: Target, text: "Fact: 95% of transplants are working one year later." },
                    { icon: Heart, text: "Living donor kidneys have a higher 5-year success rate (90%) than deceased donor kidneys (83%)." },
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
                    { icon: Target, text: "Fact: 95% of transplants are working one year later." },
                    { icon: Heart, text: "Living donor kidneys have a higher 5-year success rate (90%) than deceased donor kidneys (83%)." },
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
                    { icon: Clock, text: "Fact: A living donor can shorten the wait time from years on the deceased list to just a few months." },
                    { icon: CalendarClock, text: "A living donor transplant can be scheduled 'pre-emptively' before you even need to start dialysis." },
                    { icon: Heart, text: "By minimizing 'cold ischemia time', living donor kidneys have a better long-term success rate." },
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
                    { icon: Clock, text: "Fact: A living donor can shorten the wait time from years on the deceased list to just a few months." },
                    { icon: CalendarClock, text: "A living donor transplant can be scheduled 'pre-emptively' before you even need to start dialysis." },
                    { icon: Heart, text: "By minimizing 'cold ischemia time', living donor kidneys have a better long-term success rate." },
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
                    { icon: Stethoscope, text: "Remember: The mandatory 'transplant work-up' is to ensure you are strong enough for surgery." },
                    { icon: ShieldCheck, text: "Key tests include heart, lung, and dental exams to eliminate hidden infection risks." },
                    { icon: Users, text: "Fact: Any potential living donor must also undergo a complete and separate health evaluation." },
                    { icon: Target, text: "Critical: Adherence to your dialysis schedule and diet while waiting is essential for success." }
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
                    { icon: Stethoscope, text: "Remember: The mandatory 'transplant work-up' is to ensure you are strong enough for surgery." },
                    { icon: ShieldCheck, text: "Key tests include heart, lung, and dental exams to eliminate hidden infection risks." },
                    { icon: Users, text: "Fact: Any potential living donor must also undergo a complete and separate health evaluation." },
                    { icon: Target, text: "Critical: Adherence to your dialysis schedule and diet while waiting is essential for success." }
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
                    { icon: CheckCircle, text: "Rule #1: Blood group (A, B, AB, O) must be compatible for a deceased donor transplant." },
                    { icon: User, text: "Rule #2: Tissue type (HLA) matching is crucial; a closer match reduces rejection risk." },
                    { icon: Lightbulb, text: "Fact: ABO-incompatible transplants are now possible from living donors with special pre-treatment." },
                    { icon: Pill, text: "Remember: You MUST take lifelong anti-rejection medication, regardless of the match quality." }
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
                    { icon: CheckCircle, text: "Rule #1: Blood group (A, B, AB, O) must be compatible for a deceased donor transplant." },
                    { icon: User, text: "Rule #2: Tissue type (HLA) matching is crucial; a closer match reduces rejection risk." },
                    { icon: Lightbulb, text: "Fact: ABO-incompatible transplants are now possible from living donors with special pre-treatment." },
                    { icon: Pill, text: "Remember: You MUST take lifelong anti-rejection medication, regardless of the match quality." }
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
                    { icon: Clock, text: "Expect the surgery to last 2-3 hours under general anesthesia." },
                    { icon: Home, text: "Fact: Your old, failed kidneys are usually left inside your body." },
                    { icon: CalendarClock, text: "A catheter will be in your bladder for around 5 days post-surgery to monitor urine." },
                    { icon: Info, text: "Remember: Some new kidneys have 'delayed function' and may require temporary dialysis. This is not a sign of failure." }
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
                    { icon: Clock, text: "Expect the surgery to last 2-3 hours under general anesthesia." },
                    { icon: Home, text: "Fact: Your old, failed kidneys are usually left inside your body." },
                    { icon: CalendarClock, text: "A catheter will be in your bladder for around 5 days post-surgery to monitor urine." },
                    { icon: Info, text: "Remember: Some new kidneys have 'delayed function' and may require temporary dialysis. This is not a sign of failure." }
                ]}
            />
        )
    },
    'post-transplant-recovery': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Living With Your New Kidney: The First Few Months</h2>
                <p>You should be able to return to normal activities and work within three to six months of your transplant. You will need to allow time for your wound to heal and for your stomach muscles to get strong again.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Your Care at Home: Daily Monitoring and Lifestyle</h3>
                <p>Diligent self-care at home is critical for a smooth recovery.</p>
                <ul className="list-disc list-inside space-y-3 mt-4">
                    <li><strong>Daily Checks:</strong> Measure and record your blood pressure, urine volume, weight, and blood sugar (if advised) every day. This log is vital for your doctor.</li>
                    <li><strong>Hydration:</strong> Drink more than 3 liters of water every day to help your new kidney function well.</li>
                    <li><strong>Lifestyle:</strong> Avoid smoking and do not consume alcohol. These can harm your new kidney and overall health.</li>
                    <li><strong>Sexual Activity:</strong> Safe sexual activities can usually be resumed after about two months, once you get clearance from your doctor.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4 border-t mt-6">Precautions to Prevent Infections</h3>
                <p>Your immune system is suppressed, so you must be extra vigilant to avoid infections, especially in the first three months.</p>
                <ul className="list-disc list-inside space-y-3 mt-4">
                    <li><strong>Avoid Crowds:</strong> Stay away from crowded places like cinemas, shopping malls, and public transportation. Avoid contact with people who have infections.</li>
                    <li><strong>Wear a Mask:</strong> Always wear a sterile mask in public places for the first three months.</li>
                    <li><strong>Hand Hygiene:</strong> Wash your hands with soap and water frequently, especially before eating, preparing medication, and after using the bathroom.</li>
                    <li><strong>Food &amp; Water Safety:</strong> Drink only filtered, boiled water. Eat fresh, home-cooked food. Avoid outside food, uncooked food, and raw fruits/vegetables for the first three months.</li>
                    <li><strong>Oral Hygiene:</strong> Brush your teeth twice a day with a soft brush to keep your gums healthy.</li>
                    <li><strong>Wound Care:</strong> Do not neglect any cuts or scrapes. Clean them promptly with soap and water and apply a clean dressing.</li>
                </ul>

                <Alert variant="destructive" className="mt-6">
                    <Siren className="h-4 w-4" />
                    <AlertTitle>When to Call Your Doctor Immediately</AlertTitle>
                    <AlertDescription>
                        Do not wait for your next appointment if you experience any of the following:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Fever over 100°F (38°C) or flu-like symptoms (chills, body aches).</li>
                            <li>Pain or redness over your transplanted kidney.</li>
                            <li>Significant decrease in urine output or rapid weight gain (more than 1 kg in a day).</li>
                            <li>Blood in your urine or burning during urination.</li>
                            <li>Persistent cough, breathlessness, vomiting, or diarrhea.</li>
                            <li>Any other new or unusual symptoms.</li>
                        </ul>
                    </AlertDescription>
                </Alert>

                <KeyTakeaways takeaways={[
                    { icon: Thermometer, text: "Warning: Call your doctor immediately for a fever over 100°F (38°C)." },
                    { icon: Droplet, text: "Track your daily urine output and weight. A big drop in urine or a rapid weight gain requires an urgent call." },
                    { icon: Users, text: "Precaution: Avoid crowded places and wear a mask in public for the first 3 months to prevent infection." },
                    { icon: Ban, text: "Rule: For the first 3 months, eat only fresh, home-cooked food. Avoid all raw or outside food." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>When you go home, you become the kidney's new best friend and bodyguard! Your job is to drink lots of water and check your weight and pee every day. You also have to be a super germ-fighter: wash your hands a lot, wear a mask in crowds, and only eat clean, home-cooked food. If you get a fever or feel sick, you must call the doctor right away. Don't wait! Your careful work at home helps keep your new kidney safe and happy.</p>
                }
                takeaways={[
                    { icon: Thermometer, text: "Warning: Call your doctor immediately for a fever over 100°F (38°C)." },
                    { icon: Droplet, text: "Track your daily urine output and weight. A big drop in urine or a rapid weight gain requires an urgent call." },
                    { icon: Users, text: "Precaution: Avoid crowded places and wear a mask in public for the first 3 months to prevent infection." },
                    { icon: Ban, text: "Rule: For the first 3 months, eat only fresh, home-cooked food. Avoid all raw or outside food." }
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
                    { icon: ShieldAlert, text: "Warning: Never stop taking your medication unless explicitly told to by your transplant team. This is a primary cause of rejection." },
                    { icon: ShieldQuestion, text: "Rule: You must check with your transplant doctor before taking ANY new medicine, even over-the-counter or herbal drugs." },
                    { icon: Users, text: "Fact: Increased risk of infection is a major side effect. You must be vigilant about hygiene." },
                    { icon: Ban, text: "Remember: Grapefruit and its juice are strictly forbidden as they interfere with some of these medications." }
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
                    { icon: ShieldAlert, text: "Warning: Never stop taking your medication unless explicitly told to by your transplant team. This is a primary cause of rejection." },
                    { icon: ShieldQuestion, text: "Rule: You must check with your transplant doctor before taking ANY new medicine, even over-the-counter or herbal drugs." },
                    { icon: Users, text: "Fact: Increased risk of infection is a major side effect. You must be vigilant about hygiene." },
                    { icon: Ban, text: "Remember: Grapefruit and its juice are strictly forbidden as they interfere with some of these medications." }
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
                            <li><strong>Never Stop or Modify:</strong> Never stop taking your medication or modify its dosage on your own. Irregularity or stopping your medication is one of the most common reasons for transplant failure.</li>
                            <li><strong>Manage Your Stock:</strong> Always keep an updated list of your medications and maintain at least one week's stock. Plan ahead for refills.</li>
                            <li><strong>No Other Drugs Without Approval:</strong> Do not take any over-the-counter drugs or herbal remedies without checking with your nephrologist first.</li>
                            <li><strong>Consistency is Key:</strong> Take your medications at the same time every day to maintain stable drug levels in your blood.</li>
                        </ul>
                    </AlertDescription>
                </Alert>
        
                <p>Even if your kidney is functioning perfectly, you must continue taking your medication. Chronic rejection can be subtle and hard to detect in its early stages. Once it's established, it's often irreversible. Your medication is your shield against it.</p>
                
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><School className="text-primary"/>Educational &amp; Medical Strategies</CardTitle>
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
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><HeartHandshake className="text-primary"/>Behavioral &amp; Psychosocial Support</CardTitle>
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
                    { icon: Target, text: "Warning: Never miss, stop, or change your medication dose on your own. This is a top cause of transplant failure." },
                    { icon: ClipboardList, text: "Rule: Always keep an updated list of your medications and ensure you have at least one week's stock." },
                    { icon: Ban, text: "Precaution: Do not take any over-the-counter drugs or herbal remedies without your doctor's approval." },
                    { icon: Clock, text: "Remember: Take your pills at the exact same time every day to maintain stable drug levels." }
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
                    { icon: Target, text: "Warning: Never miss, stop, or change your medication dose on your own. This is a top cause of transplant failure." },
                    { icon: ClipboardList, text: "Rule: Always keep an updated list of your medications and ensure you have at least one week's stock." },
                    { icon: Ban, text: "Precaution: Do not take any over-the-counter drugs or herbal remedies without your doctor's approval." },
                    { icon: Clock, text: "Remember: Take your pills at the exact same time every day to maintain stable drug levels." }
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
                    { icon: CheckCircle, text: "Fact: Acute rejection is common in the first few weeks and is often treatable if caught early." },
                    { icon: Clock, text: "Warning: Chronic rejection is a slow process that can occur over years and is harder to treat." },
                    { icon: Stethoscope, text: "Remember: Rejection is often detected by blood tests before you feel any symptoms." },
                    { icon: Pill, text: "Rule: Taking your medication correctly is the single best way to prevent rejection." }
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
                    { icon: CheckCircle, text: "Fact: Acute rejection is common in the first few weeks and is often treatable if caught early." },
                    { icon: Clock, text: "Warning: Chronic rejection is a slow process that can occur over years and is harder to treat." },
                    { icon: Stethoscope, text: "Remember: Rejection is often detected by blood tests before you feel any symptoms." },
                    { icon: Pill, text: "Rule: Taking your medication correctly is the single best way to prevent rejection." }
                ]}
            />
        )
    },
    'understanding-graft-health': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Understanding the Health of Your New Kidney</h2>
                <p>Many factors can affect how well your new kidney (also called an "allograft" or "graft") works, both immediately after surgery and for years to come. Understanding these factors helps you play an active role in keeping it healthy.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Factors Affecting Short-Term Success (First Weeks &amp; Months)</h3>
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
                            <p><span className="font-bold">Blood Pressure &amp; Cholesterol:</span> Keeping hypertension and high cholesterol under control is vital to protect the new kidney's blood vessels.</p>
                            <p><span className="font-bold">Medication Side Effects:</span> The long-term use of some immunosuppressants can be toxic to the kidney, which your team will monitor closely.</p>
                            <p><span className="font-bold">Recurrent Disease:</span> In some cases, the original kidney disease that caused failure can return and damage the new kidney.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Pill, text: "Warning: Medication non-adherence is a primary cause of late kidney loss." },
                    { icon: HeartPulse, text: "Rule: You must control your blood pressure and cholesterol to protect the kidney's blood vessels." },
                    { icon: ShieldAlert, text: "Fact: Your body can develop new antibodies against the kidney over time, causing late rejection." },
                    { icon: HeartHandshake, text: "Fact: Living donor kidneys generally have higher long-term success rates." }
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
                    { icon: Pill, text: "Warning: Medication non-adherence is a primary cause of late kidney loss." },
                    { icon: HeartPulse, text: "Rule: You must control your blood pressure and cholesterol to protect the kidney's blood vessels." },
                    { icon: ShieldAlert, text: "Fact: Your body can develop new antibodies against the kidney over time, causing late rejection." },
                    { icon: HeartHandshake, text: "Fact: Living donor kidneys generally have higher long-term success rates." }
                ]}
            />
        )
    },
    'long-term-care': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Your New Kidney: A Lifelong Partnership</h2>
                <p>As a transplant recipient, you are on complex immunosuppressive regimens that make you more susceptible to infection, malignancy, and cardiovascular disease (CVD). In addition, patients often have multiple comorbidities due to, or as a cause of, their underlying end-stage kidney disease. Proactive, lifelong care is essential.</p>

                <h3 className="text-xl font-bold font-headline pt-4">Your Lifelong Health Partnership</h3>
                <p>Regular follow-ups and tests are mandatory to ensure your long-term health. This is a partnership between you and your medical team.</p>
                 <ul className="list-disc list-inside space-y-3 mt-4">
                    <li><strong>Mandatory Follow-Ups:</strong> Regular follow-up appointments with your nephrologist and laboratory tests as advised are not optional; they are essential for monitoring your health.</li>
                    <li><strong>Reputable Labs:</strong> Get your blood tested only in reputable laboratories. If a report is not satisfactory, it is better to consult your doctor immediately rather than simply changing the laboratory.</li>
                </ul>

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
                                        <TableCell className="font-semibold">Skin</TableCell>
                                        <TableCell>Monthly self-examination and a total body skin examination by an expert skin physician every 6-12 months. This is one of the most important screenings.</TableCell>
                                    </TableRow>
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
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: ShieldAlert, text: "Fact: You have a higher risk of infections and specific cancers (especially skin cancer)." },
                    { icon: CalendarClock, text: "Rule: Lifelong, regular follow-ups with your nephrologist and lab tests are mandatory." },
                    { icon: Ban, text: "Warning: Avoid nonsteroidal anti-inflammatory drugs (NSAIDs) like Ibuprofen as they can harm your kidney." },
                    { icon: Stethoscope, text: "Remember to follow the recommended schedule for all cancer screenings (skin, colon, etc.)." }
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
                    { icon: ShieldAlert, text: "Fact: You have a higher risk of infections and specific cancers (especially skin cancer)." },
                    { icon: CalendarClock, text: "Rule: Lifelong, regular follow-ups with your nephrologist and lab tests are mandatory." },
                    { icon: Ban, text: "Warning: Avoid nonsteroidal anti-inflammatory drugs (NSAIDs) like Ibuprofen as they can harm your kidney." },
                    { icon: Stethoscope, text: "Remember to follow the recommended schedule for all cancer screenings (skin, colon, etc.)." }
                ]}
            />
        )
    },
    'diet-and-nutrition': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Eating Well After Your Transplant</h2>
                <p>Good nutrition is essential for a speedy recovery and for keeping your new kidney healthy for the long term. While dietary restrictions are much less than before, the goal now is to eat a well-balanced diet to avoid weight gain and other complications.</p>

                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Your Post-Transplant Diet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>Focus on including these food groups in your daily meals:</p>
                        <ul className="list-none space-y-3">
                            <li className="flex items-start gap-3"><Beef className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Lean Proteins:</span> Choose from lean meats, poultry, fish, eggs, and legumes (like beans and peas).</div></li>
                            <li className="flex items-start gap-3"><Milk className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Low-Fat Dairy:</span> Opt for low-fat or non-fat milk, cheese, and yogurt.</div></li>
                            <li className="flex items-start gap-3"><Carrot className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Fruits &amp; Vegetables:</span> Aim for at least 5-6 servings every day.</div></li>
                            <li className="flex items-start gap-3"><Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><div><span className="font-semibold">Whole Grains &amp; Fiber:</span> Include whole-grain breads, cereals, and brown rice to help control cholesterol and blood sugar.</div></li>
                        </ul>
                        <p className="pt-2">Staying hydrated is also key. Be sure to drink more than 3 liters of water and other fluids throughout the day.</p>
                    </CardContent>
                </Card>

                <h3 className="text-xl font-bold font-headline pt-4">Foods to Limit or Avoid</h3>
                <div className="space-y-4">
                    <Alert variant="destructive">
                        <Ban className="h-4 w-4" />
                        <AlertTitle>Absolutely Avoid Grapefruit</AlertTitle>
                        <AlertDescription>
                            Grapefruit and grapefruit juice are strictly forbidden. They can dangerously interfere with the levels of your anti-rejection medications.
                        </AlertDescription>
                    </Alert>
                    
                    <Alert>
                        <UtensilsCrossed className="h-4 w-4" />
                        <AlertTitle>Reduce Salt, Sugar, and Fat</AlertTitle>
                        <AlertDescription>
                            Eat foods low in salt, sugar, and fat to control blood pressure and avoid weight gain. Limit processed foods, fast food, and salty snacks like chips, pickles, and papad.
                        </AlertDescription>
                    </Alert>
                </div>
                
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "Warning: Absolutely no grapefruit or grapefruit juice. It interferes with your medication." },
                    { icon: UtensilsCrossed, text: "Rule: Strictly limit salt, sugar, and fat to control blood pressure and prevent weight gain." },
                    { icon: Target, text: "Goal: Drink more than 3 liters of water every day to keep your new kidney well-flushed." },
                    { icon: Leaf, text: "Remember: A balanced diet high in fiber and lean protein is your new foundation." }
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
                    { icon: Ban, text: "Warning: Absolutely no grapefruit or grapefruit juice. It interferes with your medication." },
                    { icon: UtensilsCrossed, text: "Rule: Strictly limit salt, sugar, and fat to control blood pressure and prevent weight gain." },
                    { icon: Target, text: "Goal: Drink more than 3 liters of water every day to keep your new kidney well-flushed." },
                    { icon: Leaf, text: "Remember: A balanced diet high in fiber and lean protein is your new foundation." }
                ]}
            />
        )
    },
    'physical-activity-and-exercise': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Physical Activity &amp; Your New Kidney</h2>
                <p>Staying active is one of the best things you can do for your overall health and for the long-term success of your new kidney. Regular exercise helps keep your weight under control and lowers your risk for cardiovascular disease.</p>

                <h3 className="text-xl font-bold font-headline pt-4">After Your Transplant: Getting Back on Your Feet</h3>
                <p>Your journey back to activity will be gradual, but it starts almost immediately.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Clock className="text-primary"/> The First 3 Months</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p>You will be encouraged to start walking as soon as possible after surgery. This helps prevent complications like blood clots and chest infections.</p>
                            <p><span className="font-bold">Crucial Restriction:</span> Avoid any heavy lifting or strenuous physical activity that could strain your abdominal muscles. This helps prevent a hernia.</p>
                            
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bike className="text-primary"/> Long-Term Fitness</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                           <p>As your wound heals, you'll be encouraged to increase your aerobic activity (like walking, cycling, or swimming).</p>
                           <p><span className="font-bold">Avoid Contact Sports:</span> To protect your new kidney, you must permanently avoid contact sports like boxing, football, and hockey.</p>
                           <p>A good goal is to work towards <span className="font-bold">7,500 to 10,000 steps</span> daily.</p>
                        </CardContent>
                    </Card>
                </div>

                <Alert className="mt-6">
                    <HeartPulse className="h-4 w-4" />
                    <AlertTitle>Discuss Before You Start</AlertTitle>
                    <AlertDescription>
                        Always discuss your exercise plans with your transplant team to ensure they are safe for you. They can help you create a plan that fits your abilities and goals.
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "Warning: You must avoid heavy lifting for the first 3 months and all contact sports (boxing, football) for life." },
                    { icon: User, text: "Rule: Start walking as soon as possible after surgery to prevent blood clots and other complications." },
                    { icon: Target, text: "Goal: Aim for 7,500 to 10,000 steps daily as a long-term fitness goal." },
                    { icon: ShieldQuestion, text: "Remember: Always consult your transplant team before starting any new exercise regimen." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10"
                explanation={
                    <p>Moving your body is super important for your new kidney! After surgery, you'll start with short walks. Walking helps you heal faster and keeps your heart strong. As you get better, you can walk more. The most important rule at the beginning is NO heavy lifting. You don't want to hurt your tummy muscles while they are healing. Also, you should never play rough sports like football that could bump your new kidney.</p>
                }
                takeaways={[
                    { icon: Ban, text: "Warning: You must avoid heavy lifting for the first 3 months and all contact sports (boxing, football) for life." },
                    { icon: User, text: "Rule: Start walking as soon as possible after surgery to prevent blood clots and other complications." },
                    { icon: Target, text: "Goal: Aim for 7,500 to 10,000 steps daily as a long-term fitness goal." },
                    { icon: ShieldQuestion, text: "Remember: Always consult your transplant team before starting any new exercise regimen." }
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
                    { icon: Pill, text: "Fact: Immunosuppressive medication is the most significant risk factor for developing diabetes after transplant." },
                    { icon: Scale, text: "Remember: PTDM is managed first with diet and exercise, then medication if needed." },
                    { icon: Stethoscope, text: "Rule: Your blood sugar will be monitored closely with regular blood tests, especially in the first year." },
                    { icon: Target, text: "Goal: The A1C target for most patients with PTDM is less than 7%." }
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
                    { icon: Pill, text: "Fact: Immunosuppressive medication is the most significant risk factor for developing diabetes after transplant." },
                    { icon: Scale, text: "Remember: PTDM is managed first with diet and exercise, then medication if needed." },
                    { icon: Stethoscope, text: "Rule: Your blood sugar will be monitored closely with regular blood tests, especially in the first year." },
                    { icon: Target, text: "Goal: The A1C target for most patients with PTDM is less than 7%." }
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
                </ul>
            </div>
        )
    }
}

export default contentData;

    