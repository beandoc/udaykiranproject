
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video, Info, Ban, UtensilsCrossed, Leaf, Beef, Milk, Carrot, ShieldCheck, HeartHandshake, BrainCircuit, UserCheck, MessageSquare, CalendarClock, School, BellRing, Users, BookOpen, ClipboardList, Clock, Heart, Bed, Home, Pill, Siren, HelpCircle, Bike, HeartPulse, ShieldAlert, Scale, FlaskConical, Target, Stethoscope, Lightbulb, User, CheckCircle, HandCoins, Building, FileText, Smile, Phone, Thermometer, Frown, ShieldQuestion, Droplet, Lung, AlertTriangle } from 'lucide-react';
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
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Why is kidney transplant necessary in end-stage kidney disease?</h2>
                <p>Successful kidney transplantation is the most effective and the only curative treatment modality of end-stage kidney disease.</p>

                <h3 className="text-xl font-bold font-headline pt-4">What are the advantages of kidney transplantation?</h3>
                <p>Major benefits of kidney transplantation are:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Freedom from dialysis. Freedom from the pain, time consumption and complications of dialysis.</li>
                    <li>Lesser dietary and fluid restrictions.</li>
                    <li>Fewer complications with a transplant. Risk of complications is higher in dialysis therapy.</li>
                    <li>Improvement in daily lifestyle and higher chance of pregnancy in female.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">What are the disadvantages of kidney transplantation?</h3>
                <p>Kidney transplantation offers many benefits, but has a few disadvantages, too. These are:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Risk of major surgery. Kidney transplantation needs major surgical procedure under general anesthesia that has potential risks both during and after the surgery.</li>
                    <li>Risk of rejection. There is no 100% guarantee that the body will accept transplanted kidney. But with availability of newer and better immunosuppressant drugs, rejections are less likely than they were in the past.</li>
                    <li>Need to take medications to prevent rejection regularly and meticulously every day as long as the kidney works.</li>
                    <li>High risk of infections, side effects of drugs and malignancy.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">What are the contraindications for a kidney transplant?</h3>
                <p>A kidney transplant is not suitable for everyone. Contraindications include serious active infection, active or untreated malignancy, severe psychosocial problems, unstable coronary artery disease, refractory congestive heart failure, severe peripheral vascular disease, and other severe medical problems.</p>
                
                <KeyTakeaways takeaways={[
                    { icon: Target, text: "Fact: 95% of transplants are working one year later." },
                    { icon: Heart, text: "Living donor kidneys have a higher 5-year success rate (90%) than deceased donor kidneys (83%)." },
                    { icon: Pill, text: "A transplant is a treatment, not a cure. You will need lifelong anti-rejection medication." },
                    { icon: ShieldAlert, text: "Active infections or untreated cancer are major reasons why a transplant may not be possible." }
                ]} />
            </div>
        ),
        eli10: (
            <ELI10Layout
                title="Explain Like I'm 10: Your Body's Filters"
                explanation={
                    <div className="space-y-4">
                        <p>Imagine your two kidneys are like super-advanced water filters for your body. Their job is to clean your blood all day, every day, removing waste and extra water to keep you healthy. When someone has end-stage kidney disease, it means these filters have gotten very tired and can't clean properly anymore. This makes the person feel very sick.</p>
                        <p>A kidney transplant is like getting a brand new, powerful filter from a very kind person. It's the best possible fix! This means no more long hours hooked up to a dialysis machine, which is an artificial filter. You get more freedom to eat the foods you love and to live a more active, normal life.</p>
                        <p>However, it's also a big deal. The surgery is a major operation. And, your body's defense team (your immune system) is trained to attack anything that's new or foreign. It might see the new kidney and think, "Hey, I don't recognize this!" To prevent this, you have to take special "friendship medicine" (immunosuppressants) every single day, for life. This medicine tells your defense team to be calm and accept the new kidney as a friend.</p>
                    </div>
                }
                takeaways={[
                    { icon: Target, text: "A transplant is like getting a new, powerful filter for your body when your old ones are tired." },
                    { icon: Heart, text: "It gives you freedom from dialysis and a chance to feel much better and live more normally." },
                    { icon: Pill, text: "Your body's defense team might not recognize the new kidney, so you must take 'friendship medicine' every day for life to protect it." },
                    { icon: ShieldAlert, text: "A transplant is a big surgery, and not everyone is healthy enough for it right away." }
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
                title="Explain Like I'm 10: Two Paths to a New Kidney"
                explanation={
                    <div className="space-y-4">
                        <p>Imagine you need a very important spare part for your body—a new kidney. There are two main ways to get one. The first is to go on a waiting list for a kidney from a "deceased donor"—someone who has passed away and generously chose to give their organs to help others. This is a wonderful gift, but the list can be very long, and you might have to wait for years.</p>
                        <p>The second way is to receive a kidney from a "living donor." This is a true hero—often a family member or a close friend—who has two healthy kidneys and decides to share one with you. Our bodies are amazing; we only need one healthy kidney to live a full and normal life! This person goes through their own surgery to give you their extra one.</p>
                        <p>Getting a kidney from a living donor is often faster. You can plan the surgery in advance, which is less stressful. It's like getting a custom-made part delivered right when you need it, which often means the part works better and lasts longer. It can even happen before you get sick enough to need dialysis, which is a huge advantage.</p>
                    </div>
                }
                takeaways={[
                    { icon: Clock, text: "Waiting for a deceased donor can take years; a living donor makes the process much faster." },
                    { icon: CalendarClock, text: "A living donor transplant can be scheduled, which is less stressful and often leads to better results." },
                    { icon: Heart, text: "Living donor kidneys often start working faster and last longer." },
                    { icon: HeartHandshake, text: "A living donor can be family, a friend, or even a kind stranger who wants to help." }
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
                title="Explain Like I'm 10: The Pre-Flight Safety Check"
                explanation={
                     <div className="space-y-4">
                        <p>Before you can get your new kidney, the doctors need to make sure your body is ready for this amazing gift. Think of it like a space shuttle getting a full safety check before it can launch into space! This whole process is called the "transplant work-up."</p>
                        <p>The medical team will check everything to ensure the "launch" (your surgery) will be safe and successful. They'll look at your heart and lungs to make sure they're strong. They'll even have you visit the dentist to check for any tiny infections in your teeth that could cause problems later. It's all about making sure your body is the safest possible "new home" for the kidney.</p>
                        <p>While you're waiting and going through these tests, your main job is to be the best "astronaut" you can be. This means going to all your dialysis appointments, following your special diet, and staying as healthy as you can. If someone has offered to be your living donor, they'll be going through their own set of safety checks, too, because their health is just as important!</p>
                    </div>
                }
                takeaways={[
                    { icon: Stethoscope, text: "The 'work-up' is a series of tests to make sure your body is strong and ready for surgery." },
                    { icon: ShieldCheck, text: "Checks include your heart, lungs, and even your teeth to find and fix any hidden problems." },
                    { icon: Users, text: "If you have a living donor, they will go through a similar, separate health evaluation to ensure they are safe." },
                    { icon: Target, text: "Your job while waiting is to stay as healthy as possible by following your dialysis and diet plan." }
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
                title="Explain Like I'm 10: The Secret Passwords"
                explanation={
                    <div className="space-y-4">
                        <p>For your new kidney to be a happy new resident in your body, it needs to be a good "match." Think of it like joining a secret club; you need to know the password! Doctors check for two types of 'passwords'.</p>
                        <p><strong>Password #1: Blood Type.</strong> This is the simple one (A, B, O). Just like with a blood transfusion, the donor's blood type has to be friendly with yours. It's the first step to making sure they can be compatible.</p>
                        <p><strong>Password #2: Tissue Type (HLA).</strong> This one is more complex. Imagine every cell in your body has a unique, secret handshake called HLA. Your body's security team (your immune system) knows your secret handshake and attacks anything with a different one. The new kidney will have its own handshake. Doctors try to find a donor whose handshake is as similar to yours as possible. A closer match is like knowing most of the secret moves, which makes your body's security team less suspicious.</p>
                        <p>But even with a great match, the handshake is never 100% identical. That's why you take special "friendship medicine" for life. This medicine constantly tells your security team, "Hey, relax! This new kidney is a friend. We've invited it to the club. Don't attack!"</p>
                    </div>
                }
                takeaways={[
                    { icon: CheckCircle, text: "The first 'password' is your blood type, which needs to be compatible." },
                    { icon: User, text: "The second 'password' is your tissue type (HLA). A closer match is better." },
                    { icon: Lightbulb, text: "A closer tissue match makes it easier for your body to accept the new kidney." },
                    { icon: Pill, text: "Because the match is never perfect, you must take 'friendship medicine' for life to prevent your body from fighting the new kidney." }
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
                title="Explain Like I'm 10: The Big Day"
                explanation={
                    <div className="space-y-4">
                        <p>When the big day arrives, the hospital team will get you ready. It's like the final preparations before a rocket launch! You'll be given special medicine to make you fall into a deep, peaceful sleep, so you won't feel or remember a thing during the surgery.</p>
                        <p>The surgery itself takes a few hours. The surgeon makes a small opening, like a little door, in your lower belly. They gently place the new, healthy kidney inside. Then, they act like expert plumbers, connecting the kidney's 'pipes' for blood to flow in and urine to flow out into your bladder. It's a very precise job!</p>
                        <p>A funny fact: they usually leave your old, tired kidneys right where they are. It's safer than doing a bigger operation to take them out. When you wake up, you will be in your hospital room. You'll have some tubes and monitors to help the nurses check on you, but they come out after a few days. You will stay in the hospital for about a week to rest, heal, and let the doctors make sure your new 'engine' is running perfectly.</p>
                    </div>
                }
                takeaways={[
                    { icon: Clock, text: "The surgery takes a few hours, and you'll be completely asleep so you won't feel anything." },
                    { icon: Home, text: "Fun Fact: Your old kidneys are usually left inside your body to keep the surgery simpler." },
                    { icon: CalendarClock, text: "After surgery, you'll have some tubes to help you heal, but they are temporary and removed after a few days." },
                    { icon: Info, text: "Sometimes a new kidney needs time to 'wake up' and might need temporary dialysis. This is normal and not a sign of failure." }
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
                title="Explain Like I'm 10: Bodyguard Duty"
                explanation={
                    <div className="space-y-4">
                        <p>When you get home, your new kidney is like a VIP guest, and you are its personal bodyguard! Your first mission is to keep it safe and healthy. This means you have a few daily tasks: check your temperature, your weight, and how much you drink and pee. This information is like a daily security report for your doctors.</p>
                        <p>Your second mission is to be a super germ-fighter. The "friendship medicine" you take means your body's defense team is taking a nap, so you have to be extra careful. For the first few months, this means avoiding crowded places, wearing a mask when you go out, and washing your hands constantly. It also means only eating clean, fresh food cooked at home—no street food or salads from restaurants!</p>
                        <p>If you spot any trouble—like a fever, pain near your new kidney, or a big change in your weight or pee—your job is to call "headquarters" (your transplant team) right away. Don't wait! You are the first line of defense in keeping your VIP kidney safe.</p>
                    </div>
                }
                takeaways={[
                    { icon: Thermometer, text: "Warning Sign #1: A fever. If your temperature goes over 100°F, you must call your doctor immediately." },
                    { icon: Droplet, text: "Warning Sign #2: A sudden drop in how much you pee or a quick gain in weight. Call your doctor." },
                    { icon: Users, text: "Become a Germ-Fighter: For the first 3 months, you must avoid crowds and wear a mask in public." },
                    { icon: Ban, text: "Food Safety Rule: Only eat fresh, home-cooked food for the first 3 months. No outside food!" }
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
                title="Explain Like I'm 10: The Friendship Medicine"
                explanation={
                    <div className="space-y-4">
                        <p>The special medicine that protects your new kidney is amazing, but it's very powerful. We can call it "friendship medicine" because it teaches your body's defense team (your immune system) to be friends with the new kidney. To do this, it tells your defense team to be calmer than usual.</p>
                        <p>Because your defense team is calmer, it's easier for sneaky germs to cause an infection. That's why being extra clean is so important. The medicine can also have other effects, like making you feel a bit shaky, changing your mood, or making you extra hungry. This is all normal.</p>
                        <p>The most important thing is to tell your doctor about anything that feels different or bothers you. They are experts at managing these side effects, often just by making tiny adjustments. And always remember the golden rules: NEVER stop taking your medicine, and NEVER take any other pill (not even a simple painkiller) without asking your transplant doctor first. Some medicines just don't play nice together!</p>
                    </div>
                }
                takeaways={[
                    { icon: ShieldAlert, text: "The medicine calms your body's defense team, so you must be extra careful about getting sick." },
                    { icon: ShieldQuestion, text: "Rule: Always ask your transplant doctor before taking ANY new medicine, even for a headache." },
                    { icon: Users, text: "Tell your doctor about any side effects. They can often help without changing the important medicine." },
                    { icon: Ban, text: "A strict rule: Never eat grapefruit or drink its juice! It can cause dangerous problems with your medicine." }
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
                title="Explain Like I'm 10: The Most Important Job"
                explanation={
                    <div className="space-y-4">
                        <p>Imagine your new kidney is a very precious treasure, and your "friendship medicine" is the high-tech security system that protects it 24/7. Your most important job, above all else, is to make sure that security system is always turned on and working perfectly.</p>
                        <p>Missing even a single dose, or not taking it at the right time, is like accidentally turning off the security alarms. It leaves your precious treasure vulnerable, and your body's own defense team (which doesn't know better) might mistake the kidney for an intruder and start an attack. This is called rejection, and it's the biggest danger to your new kidney.</p>
                        <p>So, you must become the best Security Chief ever! Use a pillbox sorted by day and time—this is like your mission schedule. Set daily alarms on your phone—these are your mission briefings. Make taking your pills a non-negotiable part of your routine, just like brushing your teeth. Your lifelong commitment to this one job is the key to a long and healthy life with your new kidney.</p>
                    </div>
                }
                takeaways={[
                    { icon: Target, text: "Your #1 job is to take your medicine perfectly. Missing doses is the main reason transplants fail." },
                    { icon: ClipboardList, text: "Use tools! A weekly pillbox is one of the best ways to stay organized and not miss a dose." },
                    { icon: BellRing, text: "Set daily alarms on your phone for each medication time. Don't rely only on memory." },
                    { icon: Clock, text: "Consistency is key. Taking your medicine at the same time every day keeps the 'security system' strong and stable." }
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
                title="Explain Like I'm 10: The Body's Security Team"
                explanation={
                    <div className="space-y-4">
                        <p>The word "rejection" sounds very scary, but let's think of it in a simpler way. Your body has its own security team called the immune system. Its job is to patrol your body and attack anything it doesn't recognize, like a germ. Because your new kidney came from someone else, your security team might see it and think, "Hey, you're not from around here!" and try to fight it off. This "fight" is what doctors call rejection.</p>
                        <p>That's where your "friendship medicine" comes in. It's like a special memo you give to your security team every day that says, "Everyone calm down. This new kidney is a friend and a VIP. Do not attack."</p>
                        <p>Sometimes, especially in the beginning, the security team might still get a little suspicious and start to investigate the new kidney. This is called "acute rejection." Doctors can usually spot this very early with your regular blood tests, long before you even feel sick. When they see it, they can give you a little extra or different medicine to remind the security team to back off. Catching it early is the key, and most of the time, it's easily solved. This is why taking your medicine perfectly and going to all your check-ups is so vital!</p>
                    </div>
                }
                takeaways={[
                    { icon: CheckCircle, text: "Rejection is just your body's security team trying to protect you from something it thinks is foreign." },
                    { icon: Clock, text: "Most early rejection is treatable, especially when caught by your regular blood tests." },
                    { icon: Stethoscope, text: "Often, you won't feel any symptoms of rejection; your doctors find it in your lab work first." },
                    { icon: Pill, text: "Taking your medicine correctly every day is the best way to keep your security team calm and prevent rejection." }
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
                title="Explain Like I'm 10: Caring for a New Engine"
                explanation={
                    <div className="space-y-4">
                        <p>Think of your new kidney as a high-performance engine for your body. Keeping it running smoothly for many years requires two types of care: 'Engine Care' and 'Car Care'.</p>
                        <p><strong>Engine Care</strong> is all about the kidney itself and your immune system. The most important part of this is taking your "friendship medicine" perfectly. This prevents your body's security team from scratching the engine. A better tissue match from the start is like having an engine that's already a perfect fit, which helps too.</p>
                        <p><strong>Car Care</strong> is about keeping the rest of the car—your body—in great shape. This means controlling your blood pressure (the 'oil pressure') and cholesterol. If the pressure is too high, it can damage the engine's delicate pipes over time. Eating healthy and staying active is like using the best fuel and keeping the car clean.</p>
                        <p>By doing both of these jobs well, you give your new engine the best possible chance to run powerfully for a very long time.</p>
                    </div>
                }
                takeaways={[
                    { icon: Pill, text: "'Engine Care': Taking your medicine perfectly is the #1 thing you can do to protect your new kidney long-term." },
                    { icon: HeartPulse, text: "'Car Care': You must control your blood pressure and eat healthy to protect the rest of your body, which helps the kidney." },
                    { icon: ShieldAlert, text: "Over time, your body can sometimes develop new 'weapons' (antibodies) against the kidney. Your medicine helps prevent this." },
                    { icon: HeartHandshake, text: "Kidneys from living donors are like custom-fit engines and often have a head start on running well." }
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
                title="Explain Like I'm 10: Your Lifelong Health Partnership"
                explanation={
                    <div className="space-y-4">
                        <p>Getting a new kidney isn't the finish line; it's the start of a brand new race—the race to stay healthy for life! You and your medical team are now partners in this race. Your part of the partnership is to show up for all your check-ups and get your blood tests done on time. This is not optional; it's essential!</p>
                        <p>Because your "friendship medicine" calms down your body's security team, that team is also less effective at spotting other kinds of trouble, like cancer, early on. This means you have a new superpower and responsibility: proactive health screening. Your doctors will give you a schedule for important checks, like skin exams (very important!), mammograms, and colonoscopies. Think of these as regular security sweeps of your entire body to catch any trouble while it's small and easy to deal with.</p>
                        <p>Being a proactive partner in your own health is the key to living a long, happy life with your new kidney.</p>
                    </div>
                }
                takeaways={[
                    { icon: ShieldAlert, text: "Because your immune system is calmer, you have a higher risk of certain cancers, especially skin cancer." },
                    { icon: CalendarClock, text: "Rule: Regular, lifelong check-ups with your doctor and lab tests are not optional; they are mandatory for your health." },
                    { icon: Ban, text: "Warning: Some common painkillers (like Ibuprofen) can hurt your new kidney. Never take them." },
                    { icon: Stethoscope, text: "You must follow the recommended schedule for all your cancer screenings. Finding things early is key." }
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
                title="Explain Like I'm 10: The Best Fuel for Your New Engine"
                explanation={
                    <div className="space-y-4">
                        <p>Now that you have a new, high-performance 'engine' (your kidney), you need to give it the best 'fuel' to keep it running smoothly for a long, long time. The good news is that you have much more freedom than when you were on dialysis!</p>
                        <p>Your new meal plan is all about balance. Think of filling your plate with a rainbow of colorful fruits and vegetables, lean proteins like chicken and fish to build strength, and healthy whole grains like brown rice and oatmeal. This kind of diet helps protect your new kidney and your heart.</p>
                        <p>There are a few very important rules, though. The number one rule is: <strong>NO grapefruit or grapefruit juice, EVER!</strong> It can cause very dangerous problems with your special 'friendship medicine'. You also need to be a 'salt detective' and avoid very salty foods like chips and pickles, as too much salt is bad for blood pressure. By eating a healthy, balanced diet, you're giving your body and your new kidney the best possible gift.</p>
                    </div>
                }
                takeaways={[
                    { icon: Ban, text: "The #1 food rule: Absolutely no grapefruit or grapefruit juice. It's dangerous with your medicine." },
                    { icon: UtensilsCrossed, text: "Be a 'salt detective' and limit salty foods to help control your blood pressure." },
                    { icon: Target, text: "Goal: Drink lots of water (over 3 liters) every day to help your new kidney do its job." },
                    { icon: Leaf, text: "Your new diet is a balanced plate full of colorful veggies, lean proteins, and whole grains." }
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
                title="Explain Like I'm 10: Moving Your Body"
                explanation={
                    <div className="space-y-4">
                        <p>Moving your body is a wonderful way to say "thank you" to your new kidney! Staying active keeps your heart strong, your weight healthy, and your whole body happy. Your journey starts simply: you'll be encouraged to take short walks as soon as you can after surgery. Walking is a superpower that helps you heal faster and prevents problems.</p>
                        <p>For the first few months, you have one very important rule: NO heavy lifting. Your belly muscles need time to heal completely from the surgery, and lifting can cause an injury called a hernia. After you're healed, you can do more fun activities like swimming or cycling.</p>
                        <p>There is one other lifelong rule: you must avoid any rough sports where you could get hit in the stomach, like football or boxing. We need to protect the precious new kidney from any bumps or injuries. By following these simple rules, you can enjoy an active, fun, and healthy life!</p>
                    </div>
                }
                takeaways={[
                    { icon: Ban, text: "The #1 rule for the first 3 months is NO heavy lifting. This lets your tummy muscles heal." },
                    { icon: User, text: "Start walking as soon as you can after surgery. It's the best way to start your recovery." },
                    { icon: Target, text: "A great long-term goal is to aim for 7,500 to 10,000 steps every day." },
                    { icon: ShieldQuestion, text: "For life, you must avoid contact sports like football to protect your new kidney from injury." }
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
                title="Explain Like I'm 10: The Sugar Balance"
                explanation={
                    <div className="space-y-4">
                        <p>Sometimes, the powerful "friendship medicine" you take for your new kidney can have a side effect: it can mess with your body's ability to handle sugar. It can make the sugar level in your blood go a bit too high, which is a type of diabetes. This is common after a transplant, and it's called PTDM.</p>
                        <p>Don't worry, your doctors are like detectives looking for clues. They will check your blood sugar regularly with tests to see if this is happening. If it is, the first line of defense is you! By eating healthy foods, staying active, and keeping your weight in a good range, you can often fix the problem yourself.</p>
                        <p>If lifestyle changes aren't quite enough, your doctor can prescribe medicine to help get your blood sugar back in balance. Keeping your blood sugar at a healthy level is another important way you can protect your new kidney for many years to come.</p>
                    </div>
                }
                takeaways={[
                    { icon: Pill, text: "The powerful 'friendship medicine' is the main reason some people get diabetes after a transplant." },
                    { icon: Scale, text: "Your first and best tools to manage it are eating healthy and exercising." },
                    { icon: Stethoscope, text: "Your doctors will check your blood sugar regularly, so they can catch it early." },
                    { icon: Target, text: "Keeping your blood sugar in a healthy range is another key way to protect your new kidney." }
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
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "Remember: Worrying about rejection is a common and normal fear. Talk about it." },
                    { icon: Smile, text: "It's normal to feel complex emotions like gratitude and sadness, especially with a deceased donor." },
                    { icon: Users, text: "Fact: 'Survivor's guilt' is a recognized feeling; you are not alone in it." },
                    { icon: MessageSquare, text: "Action: Your transplant team includes social workers and psychologists to help you. Reach out to them." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Emotional Rollercoaster"
                explanation={
                    <div className="space-y-4">
                        <p>Getting a new kidney is an amazing, life-changing gift. It's a huge reason to be happy and hopeful! But it's also a very big change, and big changes often come with a rollercoaster of feelings. It is completely normal to feel excited and grateful one day, and then worried or even a little sad the next. Your body and mind are both adjusting to a whole new reality.</p>
                        <p>You might worry about the new kidney. You might have complicated feelings of gratitude toward your donor and their family. You might feel a little strange about having a part of someone else inside you. All of these feelings are normal, and so many other transplant patients have felt the exact same way.</p>
                        <p>The most important thing is to know you don't have to ride this rollercoaster alone. Talking about your feelings with your family, friends, or the special counselors on your transplant team is one of the best things you can do. Sharing what's on your mind helps you process everything and keeps you emotionally healthy, which is just as important as being physically healthy.</p>
                    </div>
                }
                takeaways={[
                    { icon: Heart, text: "It's completely normal to feel a mix of emotions: happy, grateful, worried, and even sad." },
                    { icon: Smile, text: "These feelings are a normal part of adjusting to a huge life event. You are not alone." },
                    { icon: Users, text: "Worrying about the new kidney or feeling complex emotions about your donor is very common." },
                    { icon: MessageSquare, text: "The best thing you can do is talk about your feelings with your family or transplant team. Support is always there for you." }
                ]}
            />
        )
    },
     'donor-evaluation': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Evaluation Process for Living Donors</h2>
                <div>
                    <h3 className="text-xl font-bold font-headline mb-2">How to start the process</h3>
                    <p>To begin your journey as a living donor, the first step is to contact a transplant center. For a "directed donation" to a specific person, you'll need to contact the center where the recipient is waitlisted. If you wish to be a "non-directed" donor to anyone in need, you may contact any transplant center.</p>
                    <p className="mt-2">It's highly recommended to openly discuss your decision with family and trusted friends. Many potential donors also find it helpful to connect with someone who has already gone through the donation experience to learn from their journey.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">What is involved in a “full evaluation?”</h3>
                    <p>The evaluation is a comprehensive process, often occurring over two days. It's designed to give you a full picture of everything involved and to ensure that donation is safe for you. You will meet the living donor team, have more blood work done, and complete imaging scans.</p>
                    <p className="font-semibold mt-4">You can expect to meet the following team members:</p>
                    <ul className="list-disc list-inside space-y-3 pl-4 mt-2">
                        <li><strong>Nurse Coordinator:</strong> Your main point of contact throughout the entire process.</li>
                        <li><strong>Nephrologist (kidney doctor):</strong> They will discuss your kidney health and confirm you are healthy enough to donate.</li>
                        <li><strong>Surgeon:</strong> The surgeon will explain the surgical procedure, pain management, and answer questions about recovery.</li>
                        <li><strong>Dietitian:</strong> They will review your eating habits and discuss a healthy, well-balanced diet.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">Medical Tests During the Evaluation</h3>
                    <p>You will have lab work and imaging tests to check your health. Blood and urine samples will check your overall health and confirm if you are a good match for the recipient. Imaging tests like a chest X-ray and CT scan help the team see the size and structure of your kidneys and their blood supply, which helps them decide which kidney is better to donate, letting you keep the healthier of the two.</p>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "Remember: The evaluation is to ensure donation is safe for YOU; your health is the top priority." },
                    { icon: Users, text: "Expect: You will meet a full team: a nephrologist, surgeon, nurse, and dietitian." },
                    { icon: Stethoscope, text: "Fact: Imaging tests (CT scan) are done to see the kidney's structure and decide which is better to donate." },
                    { icon: Clock, text: "Fact: The entire evaluation process can take several months to complete." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Health Check for Heroes"
                explanation={
                    <div className="space-y-4">
                        <p>Thinking about donating a kidney is an incredibly heroic thing to do! Before you can become a donor, the doctors need to make sure you are in excellent health. This whole process is like a thorough safety check for a superhero before they go on a life-saving mission. The team's number one priority is YOU and your safety.</p>
                        <p>You'll meet a team of experts—a kidney doctor, a surgeon, a special nurse—who will be your guides. They will do some blood tests and take special pictures (like a CT scan) of your kidneys. This helps them see that you have two healthy kidneys and which one would be better to donate, so you can keep the stronger one for yourself!</p>
                        <p>The whole point of this evaluation is to make 100% sure that you can live a long, perfectly healthy life with just one kidney after donation. It's all about protecting the hero of this story—you.</p>
                    </div>
                }
                takeaways={[
                    { icon: Heart, text: "The evaluation is a deep health check to make sure donating is completely safe for YOU." },
                    { icon: Users, text: "You'll meet a whole team of experts whose main job is to protect your health." },
                    { icon: Stethoscope, text: "They will take pictures of your kidneys to decide which one is better to donate, so you can keep the other." },
                    { icon: Clock, text: "This thorough safety check can take a few months to make sure everything is perfect." }
                ]}
            />
        )
    },
     'donor-eligibility': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Who Can Be a Living Donor?</h2>
                <p>Not everyone can be a living kidney donor. The evaluation process is designed to protect your health, first and foremost. Certain health conditions can prevent someone from being able to donate safely.</p>
                <h3 className="text-xl font-bold font-headline pt-4">Conditions That Can Prevent Donation</h3>
                <p>Some of the common reasons a person may not be eligible to donate include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 columns-1 md:columns-2">
                    <li>Having cancer, a history of cancer, hepatitis or AIDS.</li>
                    <li>Having diabetes or a high risk of developing it.</li>
                    <li>Significant heart or lung problems, including uncontrolled high blood pressure.</li>
                    <li>Being significantly overweight.</li>
                    <li>Being an active smoker.</li>
                    <li>Certain psychological concerns that could make the process too difficult.</li>
                </ul>
                <p className="pt-2">The transplant team is dedicated to helping potential donors fully understand the risks and benefits. Their primary responsibility is ensuring your well-being throughout the entire process.</p>
                <KeyTakeaways takeaways={[
                    { icon: Ban, text: "Rule: You cannot donate if you have conditions like diabetes, cancer, or significant heart disease." },
                    { icon: Heart, text: "Remember: These rules are in place to protect your long-term health." },
                    { icon: ShieldAlert, text: "Warning: Active smoking or being significantly overweight may make you ineligible." },
                    { icon: ShieldCheck, text: "Fact: The team's primary responsibility is to ensure YOUR well-being, not just the recipient's." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Safety Rules for Donors"
                explanation={
                     <div className="space-y-4">
                        <p>Giving a kidney is an amazing gift, but it's a gift that only very healthy people can give. Doctors have a list of safety rules to make sure that a donor will stay healthy for their whole life after donation.</p>
                        <p>This means that if someone has certain health problems, like diabetes, serious heart trouble, or cancer, they won't be able to donate. It's not because they aren't kind or generous; it's because the surgery could be risky for them, and their health must come first. Things like smoking or being very overweight can also make it unsafe to donate.</p>
                        <p>Think of it like being an astronaut. Only people who are in excellent health are allowed to go into space, to keep them safe on their mission. The transplant team's most important job is to protect the donor, ensuring they remain healthy and strong for many, many years.</p>
                    </div>
                }
                takeaways={[
                    { icon: Ban, text: "You can't donate if you have certain health issues like diabetes or cancer, to keep you safe." },
                    { icon: Heart, text: "These safety rules are all about protecting your health for the rest of your life." },
                    { icon: ShieldAlert, text: "Being a smoker or being very overweight can also make donation unsafe for you." },
                    { icon: ShieldCheck, text: "The transplant team's #1 job is to make sure you, the potential donor, are always protected and safe." }
                ]}
            />
        )
    },
    'psychological-assessment': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Psychological Assessment</h2>
                <p>A psychological assessment is a key part of the living donation process. It's a supportive conversation designed to ensure that you, the potential donor, are making a fully informed and voluntary decision. It's a chance to talk about your motivations, feelings, and any concerns you may have.</p>
                <h3 className="text-xl font-bold font-headline pt-4">Goals of the Assessment</h3>
                <p>The evaluation helps confirm that the donor:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Is comfortable with the idea of donation and understands the entire process.</li>
                    <li>Is not being pressured or paid to donate. It must be a free and voluntary choice.</li>
                    <li>Has a clear understanding of both the physical and emotional outcomes of kidney donation.</li>
                    <li>Has considered the potential risks and benefits to their own health. This is called "informed consent."</li>
                </ul>
                <h3 className="text-xl font-bold font-headline pt-4">Your Decision is Respected</h3>
                <p>It's important to know that you can change your mind about donating at any point up to the surgery, for any reason. Your decision will be respected, and the transplant team will support you, no matter what you choose.</p>
                <KeyTakeaways takeaways={[
                    { icon: CheckCircle, text: "Rule: You can change your mind about donating at any time for any reason, no questions asked." },
                    { icon: HandCoins, text: "Warning: The assessment ensures you are not being forced or paid to donate, which is illegal." },
                    { icon: BrainCircuit, text: "Goal: You must demonstrate you understand all the risks and benefits ('informed consent')." },
                    { icon: MessageSquare, text: "Remember: Your motivations and support system will be discussed to ensure you're ready for the emotional journey." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: A Heart-to-Heart Chat"
                explanation={
                    <div className="space-y-4">
                        <p>Part of the donation process involves a friendly, private chat with a specialist. This isn't a test! It's a supportive talk to make sure you're feeling good about your decision and that you're doing it for the right reasons. They want to confirm that this incredible gift is coming straight from your heart, and that no one is pressuring you or paying you to do it.</p>
                        <p>This is your time to talk about anything and everything. What motivates you? Are you worried about anything? Do you have a great support system of family and friends to cheer you on? It's also a chance for them to make sure you fully understand the whole process—the risks, the benefits, and what recovery will be like.</p>
                        <p>The most important thing to know is that you are in the driver's seat. You have the right to change your mind at any point, for any reason, right up until the surgery. Your decision will always be respected and kept private.</p>
                    </div>
                }
                takeaways={[
                    { icon: CheckCircle, text: "This is a supportive chat, not a test, to make sure you're comfortable with your decision." },
                    { icon: HandCoins, text: "The team confirms you're donating because you want to, not because of pressure or money." },
                    { icon: BrainCircuit, text: "The goal is to ensure you understand all aspects of the process so you can give 'informed consent'." },
                    { icon: MessageSquare, text: "Remember, you are in control and can change your mind at any time for any reason." }
                ]}
            />
        )
    },
    'donor-surgery': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Donor's Surgical Procedure</h2>
                <p>As a living donor, you will be put to sleep with general anesthesia. Most transplant centers also use a "pain block," which numbs the belly area for 12-24 hours to reduce pain after the surgery.</p>
                <p>The surgery to remove the kidney typically takes about <strong>two to three hours</strong>. Most procedures are done laparoscopically (keyhole surgery), which uses small incisions and a camera to remove the kidney.</p>

                <h3 className="text-xl font-bold font-headline pt-4">What are the risks of surgery?</h3>
                <p>Like any major surgery, there are some risks to be aware of. The most common include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Bleeding or infection at the surgical site.</li>
                    <li>Developing a hernia if you lift something heavy too soon after surgery.</li>
                    <li>Getting a urinary tract infection (UTI) from the catheter used during surgery.</li>
                    <li>The risk of death from this surgery is extremely low, at only <strong>0.03%</strong> (or 3 in every 10,000 donors).</li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: Target, text: "Fact: The risk of death from donor surgery is extremely low (0.03% or 3 in 10,000)." },
                    { icon: CheckCircle, text: "Info: Most surgeries are laparoscopic ('keyhole'), leading to a faster recovery of 4-6 weeks." },
                    { icon: ShieldAlert, text: "Warning: A common post-op risk is a hernia if you lift heavy things too soon." },
                    { icon: Bed, text: "Expect: You will be under general anesthesia and won't feel the 2-3 hour procedure." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: Your Surgery Day"
                explanation={
                    <div className="space-y-4">
                        <p>On your surgery day, a team of experts will take amazing care of you. They'll give you medicine that will help you fall into a deep, peaceful sleep. You won't feel, see, or remember anything about the procedure itself.</p>
                        <p>The surgery usually takes about two to three hours. Most of the time, surgeons use a method called "keyhole surgery." Instead of one big incision, they make a few tiny ones. They use a small camera and special tools to carefully remove the kidney. This advanced technique is gentler on your body and helps you heal much faster.</p>
                        <p>While all surgeries have some small risks, the risks for a donor surgery are extremely low. Your medical team is prepared for anything and will monitor you closely the entire time. Their main job is to keep you safe and comfortable throughout the whole process.</p>
                    </div>
                }
                takeaways={[
                    { icon: Target, text: "The risk of a serious problem during donor surgery is extremely low. You are in very safe hands." },
                    { icon: CheckCircle, text: "Most surgeries are done with 'keyhole' technique, which means smaller scars and a faster recovery for you." },
                    { icon: ShieldAlert, text: "One of the main things to watch for after is not lifting heavy things, which could cause a hernia." },
                    { icon: Bed, text: "You'll be completely asleep for the 2-3 hour surgery and won't feel a thing." }
                ]}
            />
        )
    },
     'donor-recovery': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Donor's Recovery Journey</h2>
                <p>You can expect to be up and walking on the same day as your surgery. Most donors stay in the hospital for only <strong>one to two nights</strong>, and the need for pain medication is usually only for a short time.</p>
                <p>A full recovery typically takes about <strong>four to six weeks</strong>. However, many donors can return to work much sooner. If you have a desk job, you may be able to return after only two weeks. If your job is more physically demanding, your employer may be able to offer a temporary desk-based role during your recovery.</p>
                <p>It's very important that you talk to your transplant team about when it's safe for you to return to work, sports, and other physical activities. Following their guidance will ensure you heal properly and avoid complications.</p>
                <KeyTakeaways takeaways={[
                    { icon: Building, text: "Expect: Most donors stay in the hospital for only 1-2 nights." },
                    { icon: Bike, text: "Goal: You will be encouraged to get up and walk on the same day as your surgery." },
                    { icon: Clock, text: "Timeline: Full recovery takes 4-6 weeks, but a return to a desk job can be as soon as 2 weeks." },
                    { icon: Ban, text: "Warning: You must avoid heavy lifting for several weeks to let your muscles heal properly and prevent a hernia." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: Getting Back on Your Feet"
                explanation={
                    <div className="space-y-4">
                        <p>You'll probably be surprised by how quickly you start to recover! The medical team will help you get up and take a short walk on the very same day as your surgery. This helps you get stronger faster and prevents problems like blood clots.</p>
                        <p>Most donor heroes only need to stay in the hospital for one or two nights. You will feel sore, but you'll get pain medicine to keep you comfortable. Once you're home, your main job is to rest and heal. This means taking it easy for about a month, with the most important rule being: NO heavy lifting! Your belly muscles need time to heal.</p>
                        <p>Many people with desk jobs feel ready to go back to work in just a couple of weeks. Soon enough, you'll be back to your normal activities, feeling proud of the amazing thing you've done.</p>
                    </div>
                }
                takeaways={[
                    { icon: Building, text: "You will likely only stay in the hospital for 1 or 2 nights after your surgery." },
                    { icon: Bike, text: "Getting up and walking on the same day as surgery is an important goal that helps you heal." },
                    { icon: Clock, text: "Full recovery takes a few weeks, but you will feel stronger every single day." },
                    { icon: Ban, text: "The most important recovery rule is to avoid any heavy lifting for several weeks to let your muscles heal." }
                ]}
            />
        )
    },
    'risks-and-benefits': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Long-Term Health After Donation</h2>
                <p>Research has shown that living donors can live a normal, healthy life with one kidney. When one kidney is removed, the other grows to take over the work of the donated kidney. This is called "compensatory growth." Studies show that after donation, a donor's total kidney function returns to about 70-80% of what it was with two kidneys, which is more than enough to stay healthy.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Long-Term Health Considerations</h3>
                <p>While the outlook is excellent, there are a few things to be aware of for the long run:</p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                    <li><strong>Blood Pressure:</strong> Donors have a slightly higher than average risk of developing high blood pressure. Maintaining a healthy diet and getting regular physical activity is key to staying healthy.</li>
                    <li><strong>Kidney Failure:</strong> The risk of a donor's remaining kidney failing is very low - less than 1% of donors ever need a dialysis or a transplant. In the rare event a former donor needs a kidney, they are given high priority on the transplant waitlist.</li>
                </ul>

                <h3 className="text-xl font-bold font-headline pt-4">What to Expect Emotionally</h3>
                <p>Most living donors (80–90%) report feeling very positive about their decision to donate. However, it is also normal to feel anxious or sad for a short time after donation as you process the experience. These feelings are not uncommon, even if both you and the recipient are doing well.</p>
                <p>It's important that you talk to your transplant team during your follow-up visits about how you are feeling, both physically and emotionally. Your emotional health is just as important as your physical recovery, and support is always available.</p>
                <KeyTakeaways takeaways={[
                    { icon: Heart, text: "Fact: You can live a normal, healthy life with one kidney." },
                    { icon: Stethoscope, text: "Fact: Your remaining kidney grows and functions at about 70-80% of your original capacity." },
                    { icon: ShieldAlert, text: "Risk: The risk of you needing a transplant later is very low (<1%), but you get high priority if needed." },
                    { icon: Smile, text: "Fact: The vast majority of donors (80-90%) feel very positive about their decision to donate." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: Life as a One-Kidney-Wonder"
                explanation={
                    <div className="space-y-4">
                        <p>After you donate, your body does something truly amazing. Your remaining kidney realizes it has a bigger job, so it grows a little larger and stronger to easily do the work that two kidneys used to do. You can live a completely normal, long, healthy, and active life with just one kidney!</p>
                        <p>To stay healthy, you just need to do the things everyone should do: eat well, stay active, and get a check-up once a year to make sure your super-kidney is working perfectly. The risk that you would ever have a problem with your kidney is very, very small.</p>
                        <p>The best part is the feeling you get from doing something so incredibly kind. Most donors say they feel very proud and happy about their decision for the rest of their lives. It's a powerful feeling to know you gave someone the gift of health.</p>
                    </div>
                }
                takeaways={[
                    { icon: Heart, text: "You can live a perfectly normal, long, and healthy life with one kidney." },
                    { icon: Stethoscope, text: "Your remaining kidney gets a little bigger and easily does the work of two." },
                    { icon: ShieldAlert, text: "The risk of you ever needing a kidney is extremely low, but if you did, you would get high priority on the waiting list." },
                    { icon: Smile, text: "The best benefit is emotional: most donors feel incredibly positive and proud of their decision." }
                ]}
            />
        )
    },
     'donor-long-term-health': {
        standard: (
             <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Staying Healthy After Donating a Kidney</h2>
                <p>Donating a kidney is a generous, life-saving act. After donating, it's very important to take care of your long-term health. Here’s a simple guide to help you stay healthy.</p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <HeartPulse className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Check your blood pressure regularly</h4>
                            <p className="text-muted-foreground">High blood pressure can affect your remaining kidney. Get it checked regularly at home or by a doctor to keep it in a healthy range.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FlaskConical className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Get an annual kidney check-up</h4>
                            <p className="text-muted-foreground">Once a year, have a blood test to check your kidney function and a urine test to check for protein. This makes sure your kidney is working well.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Scale className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Maintain a healthy weight and stay active</h4>
                            <p className="text-muted-foreground">A healthy weight and regular physical activity (like walking or stretching) reduces the strain on your kidney and keeps your heart healthy.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Heart className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Live a healthy lifestyle</h4>
                            <p className="text-muted-foreground">Avoid smoking and excessive alcohol. Getting enough sleep and managing stress are small habits that go a long way in protecting your kidney.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <UserCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Visit a kidney specialist annually</h4>
                            <p className="text-muted-foreground">See a nephrologist every year to monitor your kidney health and get expert guidance on any changes.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Ban className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Avoid harmful medications</h4>
                            <p className="text-muted-foreground">Do not take certain painkillers (like ibuprofen) or other drugs that can harm your kidney. Always ask your doctor before taking any new medication.</p>
                        </div>
                    </div>
                </div>

                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>A Lifetime of Health</AlertTitle>
                    <AlertDescription>
                        Remember: Even with one kidney, you can live a long and healthy life. Staying on top of your annual check-ups and taking good care of your body is the key.
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: CalendarClock, text: "Rule: You must have an annual kidney check-up (blood and urine tests) for life." },
                    { icon: Scale, text: "Action: Maintain a healthy weight and control your blood pressure to protect your remaining kidney." },
                    { icon: Ban, text: "Warning: Avoid certain painkillers (NSAIDs like ibuprofen) that can harm your kidney. Always ask first." },
                    { icon: Heart, text: "Remember: Living a healthy lifestyle (no smoking, moderate alcohol) is crucial." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: Your Super-Kidney's Care Plan"
                explanation={
                    <div className="space-y-4">
                        <p>After your heroic act of donating a kidney, you now have one extra-strong "super-kidney" doing the work of two. To keep it in top shape, you just need to follow a simple care plan for life. It's easy!</p>
                        <p>Think of it like owning a really nice car. You need to give it good fuel (eat healthy), keep the oil pressure right (check your blood pressure), and take it for an annual inspection (a yearly check-up with a doctor). The yearly check-up is the most important part. It's a quick blood and urine test to make sure your super-kidney is happy and working perfectly.</p>
                        <p>You also need to be careful not to use the wrong kind of fuel. For your kidney, this means avoiding certain strong painkillers. Always ask your doctor before taking any new medicine. By following this simple plan, you can enjoy a long, active, and healthy life with your amazing super-kidney.</p>
                    </div>
                }
                takeaways={[
                    { icon: CalendarClock, text: "Your most important new habit: A yearly check-up with a doctor to check on your kidney." },
                    { icon: Scale, text: "Living a healthy lifestyle by eating well and staying active is the best way to protect your kidney." },
                    { icon: Ban, text: "Warning: Always ask a doctor before taking strong painkillers like ibuprofen, as they can harm your kidney." },
                    { icon: Heart, text: "You can and should live a completely normal and active life with your one super-kidney!" }
                ]}
            />
        )
    },
    'understanding-your-role': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">The Essential Role of a Caregiver</h2>
                <p>As a family member or caregiver who is not the donor or recipient, your role is that of a crucial "support system manager" and emotional anchor. Your involvement profoundly impacts the well-being and recovery of both individuals.</p>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><BookOpen className="text-primary"/> Understanding the Journey</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p>To be effective, you need to understand the basics of the transplant process:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Kidney Failure:</strong> Learn why the transplant is needed and what life on dialysis is like.</li>
                            <li><strong>Living Donation:</strong> Understand the benefits, but also recognize the donor is undergoing major surgery for someone else and will have their own recovery journey.</li>
                            <li><strong>The Medical Team:</strong> Know the roles of the transplant team members (nephrologist, surgeon, coordinator, etc.).</li>
                            <li><strong>Immunosuppressants:</strong> Know that the recipient will be on these lifelong drugs to prevent rejection and understand their importance.</li>
                        </ul>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: HeartHandshake, text: "Your role is to be a 'support system manager' and an emotional anchor." },
                    { icon: BookOpen, text: "Action: To be effective, learn the basics of the transplant process and medications." },
                    { icon: Users, text: "Remember: The donor is also having major surgery and needs separate support." },
                    { icon: Smile, text: "Fact: Your support directly and profoundly impacts the recovery of both individuals." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Team Captain"
                explanation={
                    <div className="space-y-4">
                        <p>As a caregiver, you are the team captain, the coach, and the number one fan for two very important people: the patient and the donor. Your role is incredibly special. You provide the love, support, and organization that helps everything run smoothly.</p>
                        <p>You don't need to be a medical expert, but learning a little bit about the "game plan"—like why the transplant is needed and why the patient's medicines are so important—will make you an even better captain. It's also key to remember that you're coaching two players. The patient is receiving an amazing gift, but the donor is also a hero who is going through their own surgery and recovery.</p>
                        <p>Your calm presence, your willingness to help, and your encouragement are the secret ingredients that can make this challenging journey a successful and positive experience for everyone involved.</p>
                    </div>
                }
                takeaways={[
                    { icon: HeartHandshake, text: "Think of yourself as the 'Team Captain'—providing support, organization, and encouragement." },
                    { icon: BookOpen, text: "Learning the basics of the transplant process helps you be a more effective and confident supporter." },
                    { icon: Users, text: "Remember, you are supporting two people: the patient AND the donor, who is also recovering from surgery." },
                    { icon: Smile, text: "Your positive support is one of the most important factors in a smooth recovery for both of them." }
                ]}
            />
        )
    },
    'supporting-pre-transplant': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Supporting Before the Transplant</h2>
                <p>This is where a caregiver often plays a huge practical role. Your hands-on support can make a huge difference during this stressful time.</p>

                <ul className="list-none space-y-4">
                    <li className="flex items-start gap-4">
                        <CalendarClock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Manage Appointments and Travel</h4>
                            <p className="text-muted-foreground">Help with transportation for both the donor and recipient to their many pre-transplant evaluations. This can be very time-consuming.</p>
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
                    { icon: MessageSquare, text: "Action: Be a 'second pair of ears' in appointments to help absorb complex information." },
                    { icon: CalendarClock, text: "Task: Help with the logistics of transportation to the many pre-transplant evaluations." },
                    { icon: Home, text: "Task: Assist with household chores and errands, as the recipient may have significant fatigue." },
                    { icon: Heart, text: "Remember: Your practical help is crucial for reducing the stress on the patient and donor." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Mission Coordinator"
                explanation={
                    <div className="space-y-4">
                        <p>Before the big day of the surgery, you become the official Mission Coordinator. This is a time with lots of planning and appointments, and your help is invaluable.</p>
                        <p>One of your biggest missions will be helping with transportation. Both the patient and the donor will have many visits to the hospital for tests, and just getting them there and back can be a huge help. Another key mission is to be the "Official Note-Taker" during doctor visits. It's easy for patients to feel overwhelmed and forget what was said, so having you there to listen, take notes, and ask questions is incredibly supportive.</p>
                        <p>At home, the patient might be very tired from dialysis. Helping out with simple things like cooking a meal or running to the grocery store can feel like a superpower to them. Your practical help during this phase calms everyone's nerves and lets them focus on getting ready.</p>
                    </div>
                }
                takeaways={[
                    { icon: MessageSquare, text: "Be the 'second pair of ears' in appointments. It's easy to miss information when you're stressed." },
                    { icon: CalendarClock, text: "Helping with rides to the many hospital appointments is a huge and practical way to support." },
                    { icon: Home, text: "Assisting with simple household chores can be a great relief for a patient who is often very tired." },
                    { icon: Heart, text: "Your practical support before surgery is one of the best ways to reduce stress for everyone." }
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
                            <p>Act as a central contact point for updating other family and friends. This manages visitors and keeps the patient and donor from feeling overwhelmed with calls and messages.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bed className="text-primary"/> Provide Comfort and Presence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Simply being a familiar face in the hospital room can provide immense emotional support and comfort to both the recipient and the donor.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HeartHandshake className="text-primary"/> Advocate for Their Needs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Be prepared to advocate for your loved ones if needed. Make sure their questions are answered, their concerns are addressed, and that they are comfortable.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Info className="text-primary"/> Acknowledge the Donor</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Remember that the donor has also had major surgery. Acknowledge their feelings and give them specific support, not just the recipient.</p>
                        </CardContent>
                    </Card>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Users, text: "Task: Be the single point of contact for updating friends and family to let the patients rest." },
                    { icon: User, text: "Remember: The donor has had major surgery too, not just the recipient." },
                    { icon: Smile, text: "Fact: Your familiar presence in the hospital room is a huge source of comfort." },
                    { icon: ShieldCheck, text: "Action: Be prepared to advocate for their needs if they cannot speak for themselves." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Communications Chief"
                explanation={
                    <div className="space-y-4">
                        <p>While they are in the hospital, you become the "Communications Chief." Your job is to be the one person who gives updates to all the other worried friends and family. This is super helpful because it means the patient and donor aren't getting dozens of phone calls and can focus on their most important job: resting.</p>
                        <p>Never underestimate the power of just being there. A hospital can be a scary place, and seeing your familiar, smiling face is one of the most comforting things for them. It makes the strange room feel a little more like home.</p>
                        <p>And remember, there are two heroes in the hospital. The donor has also been through a big operation and needs love and support too. Make sure to spend time with both of them, acknowledging their courage and helping them feel cared for. You are their rock during this time.</p>
                    </div>
                }
                takeaways={[
                    { icon: Users, text: "Be the one person who updates family and friends. This lets the patient and donor rest." },
                    { icon: User, text: "Important: Remember the donor also had a major surgery and needs your support and attention too." },
                    { icon: Smile, text: "Just being a calm, familiar face in the hospital room is an incredibly powerful form of support." },
                    { icon: ShieldCheck, text: "Help them speak up if they need something, like more pain medicine or an extra pillow." }
                ]}
            />
        )
    },
     'home-recovery-care': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Care During Home Recovery</h2>
                <p>The first 3 to 6 months after discharge are a critical phase, especially for the recipient. Your role is key to a smooth and safe recovery.</p>

                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Transportation:</strong> The recipient will have frequent follow-up appointments. You will likely need to provide transportation.</li>
                    <li><strong>Monitoring Vital Signs:</strong> You may need to help check and record blood pressure, temperature, blood sugar, and fluid intake/output.</li>
                    <li><strong>Infection Control:</strong> Help maintain strict hygiene practices to protect the immunosuppressed recipient. This includes frequent handwashing, avoiding sick contacts, and safe food handling.</li>
                    <li><strong>Household Help:</strong> Continue to assist with activities of daily living like cooking (often following specific dietary guidelines), cleaning, and errands.</li>
                    <li><strong>Enforcing Restrictions:</strong> Gently help enforce post-operative activity restrictions for both the donor and recipient, such as no heavy lifting.</li>
                </ul>
                <KeyTakeaways takeaways={[
                    { icon: ShieldCheck, text: "Top Priority: Strict infection control (handwashing, avoiding sick people) is your most important job." },
                    { icon: Ban, text: "Rule: Gently but firmly enforce activity restrictions (e.g., no heavy lifting)." },
                    { icon: Stethoscope, text: "Task: You may need to help monitor and record vital signs like blood pressure and temperature." },
                    { icon: CalendarClock, text: "Task: Transportation to frequent follow-up appointments is a key caregiving duty." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Recovery Supervisor"
                explanation={
                    <div className="space-y-4">
                        <p>Once everyone is home, you graduate to "Recovery Supervisor"! This is a very important job for the first few months. Your main mission is to create a super safe and clean "healing zone."</p>
                        <p>Your most critical task is being the "Germ Police." Because the patient's immune system is weak from their medicine, you must be vigilant. This means everyone washes their hands often, sick friends don't visit, and all food is handled and cooked safely. You'll also be the "Transport Captain," driving to many follow-up appointments, and the "Head Chef," preparing healthy meals.</p>
                        <p>Finally, you are the gentle but firm "Referee." You'll need to help remind both the patient and the donor about their activity rules, especially the big one: no lifting heavy things! Your support in all these areas helps prevent complications and ensures the smoothest possible recovery.</p>
                    </div>
                }
                takeaways={[
                    { icon: ShieldCheck, text: "Your #1 job is being the 'Germ Police'—strict handwashing and keeping sick people away." },
                    { icon: Ban, text: "Be the 'Referee' by gently reminding them of their activity rules, especially no heavy lifting." },
                    { icon: Stethoscope, text: "You might be asked to help with the 'Daily Report'—checking temperature, blood pressure, etc." },
                    { icon: CalendarClock, text: "Being the 'Transport Captain' for the many follow-up appointments is a crucial role." }
                ]}
            />
        )
    },
    'medication-management': {
        standard: (
             <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Supporting with Medication Management</h2>
                <p>The recipient's medication regimen will be complex and is absolutely critical to their long-term health. Your support can be the key to preventing missed doses, which can lead to organ rejection.</p>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Pill className="text-primary"/> How You Can Help</CardTitle>
                        <CardDescription>Simple organizational support can make a huge difference.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-start gap-3">
                            <ClipboardList className="w-6 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Help Organize:</span> Use a pillbox sorted by day and time. This visual aid is one of the most effective ways to manage many medications.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <BellRing className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Set Reminders:</span> Help set daily alarms on a phone or watch for each medication time. Consistency is crucial.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <UserCheck className="w-6 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Double-Check:</span> Gently remind and check to ensure doses have been taken, especially in the beginning.</div>
                        </div>
                         <div className="flex items-start gap-3">
                            <CalendarClock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div><span className="font-semibold">Track Refills:</span> Keep an eye on prescription quantities and help ensure refills are ordered well before they run out.</div>
                        </div>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: ClipboardList, text: "Action: Help organize pills into a weekly, timed pillbox. This is one of the most effective support tasks." },
                    { icon: BellRing, text: "Action: Help set daily alarms as reminders for each medication time." },
                    { icon: FileText, text: "Task: Help track when prescriptions are running low so refills can be ordered on time." },
                    { icon: ShieldQuestion, text: "Remember: Your role is to support and remind, not to administer medication unless directed." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Pill Co-Pilot"
                explanation={
                    <div className="space-y-4">
                        <p>The patient has to take a lot of very important pills every day, and keeping them all straight can be tricky. You can be their "Pill Co-Pilot"! This is one of the most helpful jobs a caregiver can have.</p>
                        <p>Your main mission is to help with organization. Getting a weekly pillbox (with sections for each day and time) is the single most effective tool. You can help the patient fill it up once a week. This makes it super easy to see if a dose has been taken or missed.</p>
                        <p>You can also be the "Alarm Manager," helping set reminders on a phone for each medication time. Your role isn't to force them to take their medicine, but to be a supportive partner who helps them build a solid routine. By helping them stay organized, you are playing a direct role in protecting their new kidney.</p>
                    </div>
                }
                takeaways={[
                    { icon: ClipboardList, text: "Your most helpful task: Help set up a weekly pillbox. It makes everything easier." },
                    { icon: BellRing, text: "Be the 'Alarm Manager' by helping set daily reminders on a phone or watch." },
                    { icon: FileText, text: "Be the 'Supply Officer' by helping to check when medicines are running low and need a refill." },
                    { icon: ShieldQuestion, text: "Your role is to support and remind, not to control. You are a co-pilot, not the pilot." }
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
                    <AlertTitle>Contact the transplant team immediately if you notice:</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Fever:</strong> Any temperature over 100.4°F (38°C).</li>
                            <li><strong>Pain:</strong> New or worsening pain or tenderness over the area of the new kidney.</li>
                            <li><strong>Flu-like symptoms:</strong> Chills, aches, headache, dizziness, nausea, or vomiting.</li>
                            <li><strong>Fluid changes:</strong> A big decrease in urine output or sudden weight gain/swelling (which indicates fluid retention).</li>
                            <li><strong>Wound issues:</strong> Redness, swelling, pus, or foul-smelling drainage from the surgical incision.</li>
                            <li><strong>General malaise:</strong> The patient just "doesn't feel right" or seems unusually tired.</li>
                        </ul>
                        <p className="mt-3 font-semibold">Do not wait for the next scheduled appointment. Early intervention is key to treating potential problems like infection or rejection.</p>
                    </AlertDescription>
                </Alert>
                <KeyTakeaways takeaways={[
                    { icon: Thermometer, text: "Warning: A fever over 100.4°F (38°C) is a major red flag. Call the team immediately." },
                    { icon: Frown, text: "Rule: Trust your gut. If the patient just doesn't seem 'right', it's always worth a phone call." },
                    { icon: Siren, text: "Warning: New pain over the transplant area or a big drop in urine output are urgent signs." },
                    { icon: Phone, text: "Remember: Do not wait for the next appointment if you see a warning sign. Early intervention is critical." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Lead Detective"
                explanation={
                    <div className="space-y-4">
                        <p>Because you see your loved one every day, you have a special superpower: you are the best person to notice when something is a little bit off. Think of yourself as the lead detective on their health case.</p>
                        <p>You need to know the important clues to look for. The biggest clue is a fever. Any temperature over 100.4°F (38°C) is a signal to call the transplant team right away. Other important clues include new pain near their new kidney, a big drop in how much they are peeing, or if they just seem really sick and "not themselves."</p>
                        <p>Your most important job as a detective is to report any of these clues to "headquarters" (the medical team) immediately. Never think "Oh, I'll just wait until our next appointment." Catching a problem early is the best way to solve it quickly and easily. Always trust your gut—if something feels wrong, it's always better to make the call.</p>
                    </div>
                }
                takeaways={[
                    { icon: Thermometer, text: "The #1 clue: A fever over 100.4°F (38°C). This always requires an immediate phone call." },
                    { icon: Frown, text: "Trust your gut! You know them best. If they just don't seem 'right', it's worth calling." },
                    { icon: Siren, text: "Other urgent clues include new pain over the kidney or a big change in their urine output." },
                    { icon: Phone, text: "Rule: Never wait. Report any warning signs to the transplant team immediately." }
                ]}
            />
        )
    },
    'self-care-for-caregivers': {
        standard: (
             <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Self-Care: A Critical Task for Caregivers</h2>
                <p>This is often the most overlooked aspect of caregiving. You cannot provide good care if you are exhausted or overwhelmed. Taking care of yourself is not selfish; it is essential for sustainable support.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader><CardTitle>Recognize Your Limits</CardTitle></CardHeader>
                        <CardContent>
                            <p>You are not expected to be perfect or to do everything alone. Understand that caregiving is demanding, and it is okay to need help.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Get Your Own Support</CardTitle></CardHeader>
                        <CardContent>
                            <p>Talk to trusted friends, find a caregiver support group, or seek professional counseling if you feel overwhelmed. You are not alone.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Prioritize Rest and Nutrition</CardTitle></CardHeader>
                        <CardContent>
                            <p>Caregiver burnout is a real risk. Ensure you are getting enough sleep and eating healthy meals to maintain your own strength.</p>
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
                    { icon: User, text: "Rule: You can't pour from an empty cup. Prioritize your own rest and nutrition." },
                    { icon: Smile, text: "Action: Taking a break isn't selfish. Arrange for others to help so you can recharge." },
                    { icon: MessageSquare, text: "Remember: Recognize your limits. It's okay to ask for help and get your own support (friends, counseling)." },
                    { icon: ShieldAlert, text: "Warning: Caregiver burnout is a real risk. Caring for yourself is essential to provide good care." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: Put On Your Own Oxygen Mask First"
                explanation={
                    <div className="space-y-4">
                        <p>Remember what they tell you on an airplane? "In case of an emergency, put on your own oxygen mask before helping others." This is the most important rule for caregivers. You are the hero of this story, but even heroes need to recharge their superpowers.</p>
                        <p>Being a caregiver is a marathon, not a sprint. If you get too tired, stressed, or sick, you can't be an effective supporter for your loved one. This is called "burnout," and it's a real risk. Taking care of yourself isn't selfish; it's smart. It's how you stay strong for the long haul.</p>
                        <p>Make sure you are getting enough sleep, eating healthy food, and taking breaks. Ask other family members or friends to step in for an hour or two so you can go for a walk, see a friend, or just do something you enjoy. You have to recharge your own batteries to be the amazing caregiver your loved one needs.</p>
                    </div>
                }
                takeaways={[
                    { icon: User, text: "Remember the airplane rule: You must take care of yourself first to be able to care for someone else." },
                    { icon: Smile, text: "Taking a break to recharge is not selfish; it's a necessary part of being a good caregiver." },
                    { icon: MessageSquare, text: "Don't be afraid to ask for help! Let other friends and family take a shift so you can rest." },
                    { icon: ShieldAlert, text: "Caregiver burnout is real. Protecting your own health with sleep and good food is essential." }
                ]}
            />
        )
    },
     'communication-with-medical-team': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Communication with the Medical Team</h2>
                <p>Effective communication with the transplant team is essential. As a caregiver, you are a key part of these conversations. Don't be afraid to ask questions.</p>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><HelpCircle className="text-primary"/> Key Questions to Ask</CardTitle>
                        <CardDescription>Being prepared with questions can help you make the most of every interaction with the team.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-3">
                            <li>"What are the most important things I need to monitor for the recipient and the donor over the next few weeks?"</li>
                            <li>"Who is the primary contact person for urgent questions after hours?"</li>
                            <li>"Are there any specific educational materials or classes for caregivers that you recommend?"</li>
                            <li>"What resources are available for caregiver support, such as social workers or support groups?"</li>
                            <li>"Can you clarify the specific dietary and activity restrictions for both the recipient and the donor?"</li>
                            <li>"What financial implications should we be aware of, and is there a financial counselor available?"</li>
                        </ul>
                    </CardContent>
                </Card>
                <KeyTakeaways takeaways={[
                    { icon: Phone, text: "Question to Ask: 'Who is the primary contact person for urgent questions after hours?'" },
                    { icon: FileText, text: "Tip: Write down questions before an appointment so you don't forget." },
                    { icon: Users, text: "Action: It's okay to ask about support resources for yourself as a caregiver." },
                    { icon: HelpCircle, text: "Remember: Clarify any instructions you don't understand. No question is a silly question." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Chief Question Officer"
                explanation={
                    <div className="space-y-4">
                        <p>You are a vital member of the medical team, and your role is the "Chief Question Officer." Good, clear communication is like building a strong bridge between your family and the doctors. It ensures everyone is on the same page and feels confident.</p>
                        <p>Never, ever be afraid to ask a question. There is no such thing as a silly question when it comes to health! A great tip is to write down questions in a notebook as you think of them, and bring that notebook to every appointment. It's easy to forget your questions when you're in the doctor's office.</p>
                        <p>You can ask things like, "Could you explain that in a simpler way?" or "What are the most important things for me to watch for at home?" It's also okay to ask about support for yourself, like caregiver groups. By being an active communicator, you help make the entire process safer and less stressful for everyone.</p>
                    </div>
                }
                takeaways={[
                    { icon: Phone, text: "A great question to ask is, 'Who is the right person to call if we have an urgent question after hours?'" },
                    { icon: FileText, text: "Tip: Keep a notebook and write down your questions before appointments so you don't forget." },
                    { icon: Users, text: "It is perfectly okay to ask about support resources for yourself, not just the patient." },
                    { icon: HelpCircle, text: "Remember: If you don't understand something, ask them to explain it again. Your understanding is key." }
                ]}
            />
        )
    },
    'anesthesia-risks': {
        standard: (
            <div className="space-y-6 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Know Possible Risks of Anesthesia</h2>
                <p>General Anesthesia (GA) is very safe, but like any medical procedure, it has potential risks. Understanding these helps you make an informed decision.</p>

                <h3 className="text-xl font-bold font-headline pt-4">General Anesthesia (GA) Risks</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader><CardTitle>Common</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Nausea and vomiting after surgery</li>
                                <li>Headache/Giddiness</li>
                                <li>Sore throat</li>
                                <li>Urinary retention</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Uncommon</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Dental trauma</li>
                                <li>Allergic reactions to drugs</li>
                                <li>Pressure injuries due to positioning</li>
                                <li>Decompensation of existing diseases (e.g., heart or kidney disease)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Rare</CardTitle></CardHeader>
                        <CardContent>
                             <ul className="list-disc list-inside space-y-1">
                                <li>Severe allergy / anaphylaxis</li>
                                <li>Stroke</li>
                                <li>Major cardiac event (MI, CHF)</li>
                                <li>Aspiration pneumonia</li>
                                <li>Blood clots (Thromboembolism)</li>
                                <li>Cardiac arrest/death</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                
                <h3 className="text-xl font-bold font-headline pt-4">Risks from Specific Procedures</h3>
                 <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold">Radial Artery Catheterization (Arterial Line)</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                           <li>Arterial thrombosis (clot)</li>
                           <li>Hematoma (bruising)</li>
                           <li>Digit gangrene (Rare)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Central Venous Cannulation (Central Line/HD Catheter)</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                           <li>Infections and sepsis</li>
                           <li>Hematoma (bruising)</li>
                           <li>Accidental arterial puncture</li>
                           <li>Arrhythmias (irregular heartbeat)</li>
                           <li>Thrombosis (clot in the vein)</li>
                           <li>Pneumothorax/Hemothorax (Rare)</li>
                           <li>Air embolism (Rare)</li>
                        </ul>
                    </div>
                </div>
                <KeyTakeaways takeaways={[
                    { icon: Info, text: "Fact: A sore throat and nausea are common, temporary side effects of general anesthesia." },
                    { icon: ShieldCheck, text: "Remember: Serious complications from anesthesia are very rare, but your team is prepared for them." },
                    { icon: AlertTriangle, text: "Warning: Inform your anesthetist about all existing health conditions, like heart or lung disease." },
                    { icon: Stethoscope, text: "Info: Specific lines, like arterial or central lines, have their own set of potential but uncommon complications." }
                ]} />
            </div>
        ),
        eli10: (
             <ELI10Layout
                title="Explain Like I'm 10: The Magic Sleep"
                explanation={
                     <div className="space-y-4">
                        <p>For your surgery, the doctors will give you a special kind of medicine to make you fall into a very deep, magic sleep called anesthesia. This is so you are completely comfortable and don't feel anything at all during the procedure. It's very, very safe.</p>
                        <p>When you wake up from this magic sleep, it's common to feel a little bit off. You might have a sore throat from the breathing tube they use to keep you safe, or you might feel a little bit sick to your stomach. These feelings are normal and usually go away very quickly. The nurses have medicine to help you feel better.</p>
                        <p>While extremely rare, more serious problems can happen, just like with any powerful magic. But your anesthesia doctor is a highly trained expert—like a wizard—who stays with you the entire time, watching you closely and keeping you safe from beginning to end. Their only job is your well-being.</p>
                    </div>
                }
                takeaways={[
                    { icon: Info, text: "It's common and normal to wake up with a temporary sore throat or an upset stomach." },
                    { icon: ShieldCheck, text: "Serious problems are very rare. Your anesthesia doctor is an expert focused only on keeping you safe." },
                    { icon: AlertTriangle, text: "It's very important to tell the doctor about all your health issues before surgery." },
                    { icon: Stethoscope, text: "The special IV lines they use also have their own small risks, but the team is prepared for them." }
                ]}
            />
        )
    },
};

export default contentData;
