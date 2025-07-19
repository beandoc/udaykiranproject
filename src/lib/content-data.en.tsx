
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video, Info, Ban, UtensilsCrossed, Leaf, Beef, Milk, Carrot, ShieldCheck, HeartHandshake, BrainCircuit, UserCheck, MessageSquare, CalendarClock, School, BellRing, Users, BookOpen, ClipboardList, Clock, Heart, Bed, Home, Pill, Siren, HelpCircle, Bike, HeartPulse, ShieldAlert, Scale, FlaskConical, Target, Stethoscope, Lightbulb, User, CheckCircle, HandCoins, Building, FileText, Smile, Phone, Thermometer, Frown, ShieldQuestion, Droplet, Lung, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { ModuleContentData } from './content-data';

// Helper component to parse markdown-like bolding
const Bold = ({ children }: { children: React.ReactNode }) => <span className="font-semibold">{children}</span>;

// --- Content Data Definitions ---

const contentData: ModuleContentData = {
    'understanding-kidney-disease': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Why is kidney transplant necessary in end-stage kidney disease?</h2>
                <p>Successful kidney transplantation is the most effective and the only curative treatment modality of end-stage kidney disease.</p>
                <h3 className="text-xl font-bold font-headline">What are the advantages of kidney transplantation?</h3>
                <p>Major benefits of kidney transplantation are:</p>
                <p>• Freedom from dialysis. Freedom from the pain, time consumption and complications of dialysis.</p>
                <p>• Lesser dietary and fluid restrictions.</p>
                <p>• Fewer complications with a transplant. Risk of complications is higher in dialysis therapy.</p>
                <p>• Improvement in daily lifestyle and higher chance of pregnancy in female.</p>
                <h3 className="text-xl font-bold font-headline">What are the disadvantages of kidney transplantation?</h3>
                <p>Kidney transplantation offers many benefits, but has a few disadvantages, too. These are:</p>
                <p>• Risk of major surgery. Kidney transplantation needs major surgical procedure under general anesthesia that has potential risks both during and after the surgery.</p>
                <p>• Risk of rejection. There is no 100% guarantee that the body will accept transplanted kidney. But with availability of newer and better immunosuppressant drugs, rejections are less likely than they were in the past.</p>
                <p>• Need to take medications to prevent rejection regularly and meticulously every day as long as the kidney works.</p>
                <p>• High risk of infections, side effects of drugs and malignancy.</p>
                <h3 className="text-xl font-bold font-headline">What are the contraindications for a kidney transplant?</h3>
                <p>A kidney transplant is not suitable for everyone. Contraindications include serious active infection, active or untreated malignancy, severe psychosocial problems, unstable coronary artery disease, refractory congestive heart failure, severe peripheral vascular disease, and other severe medical problems.</p>
            </div>
        ),
        eli10: (
            <div className="space-y-4 text-base leading-relaxed">
                <h3 className="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Your Body's Filters</h3>
                <p>Imagine your two kidneys are like super-advanced water filters for your body. Their job is to clean your blood all day, every day, removing waste and extra water to keep you healthy. When someone has end-stage kidney disease, it means these filters have gotten very tired and can't clean properly anymore. This makes the person feel very sick.</p>
                <p>A kidney transplant is like getting a brand new, powerful filter from a very kind person. It's the best possible fix! This means no more long hours hooked up to a dialysis machine, which is an artificial filter. You get more freedom to eat the foods you love and to live a more active, normal life.</p>
                <p>However, it's also a big deal. The surgery is a major operation. And, your body's defense team (your immune system) is trained to attack anything that's new or foreign. It might see the new kidney and think, "Hey, I don't recognize this!" To prevent this, you have to take special "friendship medicine" (immunosuppressants) every single day, for life. This medicine tells your defense team to be calm and accept the new kidney as a friend.</p>
            </div>
        )
    },
    'anesthesia-risks': {
        standard: (
            <div className="space-y-4 text-base leading-relaxed">
                <h2 className="text-2xl font-bold font-headline">Know Possible Risks of Anesthesia</h2>
                <p>General Anesthesia (GA) is very safe, but like any medical procedure, it has potential risks. Understanding these helps you make an informed decision.</p>
                <h3 className="text-xl font-bold font-headline">General Anesthesia (GA) Risks</h3>
                <h4><Bold>Common:</Bold></h4>
                <p>• Nausea and vomiting after surgery</p>
                <p>• Headache/Giddiness</p>
                <p>• Sore throat</p>
                <p>• Urinary retention</p>
                <h4><Bold>Uncommon:</Bold></h4>
                <p>• Dental trauma</p>
                <p>• Allergic reactions to drugs</p>
                <p>• Pressure injuries due to positioning</p>
                <p>• Decompensation of existing diseases (e.g., heart or kidney disease)</p>
                <h4><Bold>Rare:</Bold></h4>
                <p>• Severe allergy / anaphylaxis</p>
                <p>• Stroke</p>
                <p>• Major cardiac event (MI, CHF)</p>
                <p>• Aspiration pneumonia</p>
                <p>• Blood clots (Thromboembolism)</p>
                <p>• Cardiac arrest/death</p>
                <h3 className="text-xl font-bold font-headline">Risks from Specific Procedures</h3>
                <h4><Bold>Radial Artery Catheterization (Arterial Line):</Bold></h4>
                <p>• Arterial thrombosis (clot)</p>
                <p>• Hematoma (bruising)</p>
                <p>• Digit gangrene (Rare)</p>
                <h4><Bold>Central Venous Cannulation (Central Line/HD Catheter):</Bold></h4>
                <p>• Infections and sepsis</p>
                <p>• Hematoma (bruising)</p>
                <p>• Accidental arterial puncture</p>
                <p>• Arrhythmias (irregular heartbeat)</p>
                <p>• Thrombosis (clot in the vein)</p>
                <p>• Pneumothorax/Hemothorax (Rare)</p>
                <p>• Air embolism (Rare)</p>
            </div>
        ),
        eli10: (
            <div className="space-y-4 text-base leading-relaxed">
                 <h3 className="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Magic Sleep</h3>
                 <p>For your surgery, the doctors will give you a special kind of medicine to make you fall into a very deep, magic sleep called anesthesia. This is so you are completely comfortable and don't feel anything at all during the procedure. It's very, very safe.</p>
                 <p>When you wake up from this magic sleep, it's common to feel a little bit off. You might have a sore throat from the breathing tube they use to keep you safe, or you might feel a little bit sick to your stomach. These feelings are normal and usually go away very quickly. The nurses have medicine to help you feel better.</p>
                 <p>While extremely rare, more serious problems can happen, just like with any powerful magic. But your anesthesia doctor is a highly trained expert—like a wizard—who stays with you the entire time, watching you closely and keeping you safe from beginning to end. Their only job is your well-being.</p>
            </div>
        )
    }
};

export default contentData;
