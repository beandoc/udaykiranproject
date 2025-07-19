
import type { ModuleContentData } from './content-data';

export const contentData: ModuleContentData = {
    'understanding-kidney-disease': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Why is kidney transplant necessary in end-stage kidney disease?</h2>
            <p>Successful kidney transplantation is the most effective and the only curative treatment modality of end-stage kidney disease.</p>
            <h3 class="text-xl font-bold font-headline">What are the advantages of kidney transplantation?</h3>
            <p>Major benefits of kidney transplantation are:</p>
            <ul>
                <li>Freedom from dialysis. Freedom from the pain, time consumption and complications of dialysis.</li>
                <li>Lesser dietary and fluid restrictions.</li>
                <li>Fewer complications with a transplant. Risk of complications is higher in dialysis therapy.</li>
                <li>Improvement in daily lifestyle and higher chance of pregnancy in female.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">What are the disadvantages of kidney transplantation?</h3>
            <p>Kidney transplantation offers many benefits, but has a few disadvantages, too. These are:</p>
            <ul>
                <li>Risk of major surgery. Kidney transplantation needs major surgical procedure under general anesthesia that has potential risks both during and after the surgery.</li>
                <li>Risk of rejection. There is no 100% guarantee that the body will accept transplanted kidney. But with availability of newer and better immunosuppressant drugs, rejections are less likely than they were in the past.</li>
                <li>Need to take medications to prevent rejection regularly and meticulously every day as long as the kidney works.</li>
                <li>High risk of infections, side effects of drugs and malignancy.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">What are the contraindications for a kidney transplant?</h3>
            <p>A kidney transplant is not suitable for everyone. Contraindications include serious active infection, active or untreated malignancy, severe psychosocial problems, unstable coronary artery disease, refractory congestive heart failure, severe peripheral vascular disease, and other severe medical problems.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Your Body's Filters</h3>
            <p>Imagine your two kidneys are like super-advanced water filters for your body. Their job is to clean your blood all day, every day, removing waste and extra water to keep you healthy. When someone has end-stage kidney disease, it means these filters have gotten very tired and can't clean properly anymore. This makes the person feel very sick.</p>
            <p>A kidney transplant is like getting a brand new, powerful filter from a very kind person. It's the best possible fix! This means no more long hours hooked up to a dialysis machine, which is an artificial filter. You get more freedom to eat the foods you love and to live a more active, normal life.</p>
            <p>However, it's also a big deal. The surgery is a major operation. And, your body's defense team (your immune system) is trained to attack anything that's new or foreign. It might see the new kidney and think, "Hey, I don't recognize this!" To prevent this, you have to take special "friendship medicine" (immunosuppressants) every single day, for life. This medicine tells your defense team to be calm and accept the new kidney as a friend.</p>
        `
    },
    'anesthesia-risks': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Know Possible Risks of Anesthesia</h2>
            <p>General Anesthesia (GA) is very safe, but like any medical procedure, it has potential risks. Understanding these helps you make an informed decision.</p>
            <h3 class="text-xl font-bold font-headline">General Anesthesia (GA) Risks</h3>
            <h4><strong>Common:</strong></h4>
            <ul>
                <li>Nausea and vomiting after surgery</li>
                <li>Headache/Giddiness</li>
                <li>Sore throat</li>
                <li>Urinary retention</li>
            </ul>
            <h4><strong>Uncommon:</strong></h4>
            <ul>
                <li>Dental trauma</li>
                <li>Allergic reactions to drugs</li>
                <li>Pressure injuries due to positioning</li>
                <li>Decompensation of existing diseases (e.g., heart or kidney disease)</li>
            </ul>
            <h4><strong>Rare:</strong></h4>
            <ul>
                <li>Severe allergy / anaphylaxis</li>
                <li>Stroke</li>
                <li>Major cardiac event (MI, CHF)</li>
                <li>Aspiration pneumonia</li>
                <li>Blood clots (Thromboembolism)</li>
                <li>Cardiac arrest/death</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Risks from Specific Procedures</h3>
            <h4><strong>Radial Artery Catheterization (Arterial Line):</strong></h4>
            <ul>
                <li>Arterial thrombosis (clot)</li>
                <li>Hematoma (bruising)</li>
                <li>Digit gangrene (Rare)</li>
            </ul>
            <h4><strong>Central Venous Cannulation (Central Line/HD Catheter):</strong></h4>
            <ul>
                <li>Infections and sepsis</li>
                <li>Hematoma (bruising)</li>
                <li>Accidental arterial puncture</li>
                <li>Arrhythmias (irregular heartbeat)</li>
                <li>Thrombosis (clot in the vein)</li>
                <li>Pneumothorax/Hemothorax (Rare)</li>
                <li>Air embolism (Rare)</li>
            </ul>
        `,
        eli10: `
             <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Magic Sleep</h3>
             <p>For your surgery, the doctors will give you a special kind of medicine to make you fall into a very deep, magic sleep called anesthesia. This is so you are completely comfortable and don't feel anything at all during the procedure. It's very, very safe.</p>
             <p>When you wake up from this magic sleep, it's common to feel a little bit off. You might have a sore throat from the breathing tube they use to keep you safe, or you might feel a little bit sick to your stomach. These feelings are normal and usually go away very quickly. The nurses have medicine to help you feel better.</p>
             <p>While extremely rare, more serious problems can happen, just like with any powerful magic. But your anesthesia doctor is a highly trained expert—like a wizard—who stays with you the entire time, watching you closely and keeping you safe from beginning to end. Their only job is your well-being.</p>
        `
    },
    'patient-responsibilities': {
        standard: `
            <div class="space-y-6">
                <div class="p-6 border-l-4 border-primary bg-primary/10 rounded-r-lg">
                    <h3 class="font-headline text-xl font-semibold text-primary-dark">A Partnership in Your Care</h3>
                    <p class="mt-2 text-foreground/80">A successful transplant journey is a partnership between you and your healthcare team. Your active participation is key to achieving the best possible outcome.</p>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold">Be Informed:</h4>
                    <ul class="list-disc list-inside space-y-2 pl-4">
                        <li>Learn as much as you can about your condition and treatment options.</li>
                        <li>Ask questions if you don't understand something your doctor or nurse says.</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold">Follow Your Treatment Plan:</h4>
                    <ul class="list-disc list-inside space-y-2 pl-4">
                        <li>Provide full and accurate health information to your care team.</li>
                        <li>Inform other doctors you see for any reason that you are a transplant recipient.</li>
                        <li>Always take your medications exactly as prescribed.</li>
                    </ul>
                </div>
                 <div class="space-y-4">
                    <h4 class="font-bold">Be on Time:</h4>
                    <ul class="list-disc list-inside space-y-2 pl-4">
                        <li>Be punctual for all appointments and laboratory tests.</li>
                        <li>Ensure your lab reports are available for your visit to avoid delays.</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold">Follow Facility Policies:</h4>
                     <ul class="list-disc list-inside space-y-2 pl-4">
                        <li>Adhere to all hospital safety policies, including rules about visitors.</li>
                        <li>Help maintain a healing environment by not using tobacco products on hospital grounds.</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold">Be Considerate:</h4>
                    <ul class="list-disc list-inside space-y-2 pl-4">
                        <li>Treat other patients and all hospital staff with respect and consideration.</li>
                        <li>Help keep noise to a minimum to ensure a restful environment for all.</li>
                    </ul>
                </div>
            </div>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Your Job on the Team</h3>
            <p>Think of your transplant like being on a sports team. The doctors and nurses are your coaches, but you are the star player! For the team to win (and for you to stay healthy), you have to do your part.</p>
            <p><strong>Your job includes:</strong></p>
            <ul class="list-disc list-inside space-y-2 pl-4">
                <li><strong>Listening to the coaches:</strong> Pay attention to what the doctors say and ask questions if you're confused.</li>
                <li><strong>Following the playbook:</strong> Take your medicine every single time, just like the coaches tell you to.</li>
                <li><strong>Showing up for practice:</strong> Be on time for all your check-ups.</li>
                <li><strong>Being a good teammate:</strong> Be nice to the hospital staff and other patients.</li>
            </ul>
            <p>When you do your job well, the whole team succeeds, and you get to enjoy your healthy new kidney!</p>
        `
    },
    'evaluation-process': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'transplant-matching': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'surgery-day': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'post-transplant-recovery': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'immunosuppressants': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'medication-adherence': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'understanding-rejection': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'understanding-graft-health': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'long-term-care': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'diet-and-nutrition': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'physical-activity-and-exercise': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'post-transplant-diabetes': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'mental-health-support': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'understanding-living-donation': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'donor-eligibility': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'donor-evaluation': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'psychological-assessment': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'donor-surgery': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'donor-recovery': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'risks-and-benefits': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'donor-long-term-health': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'understanding-your-role': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'supporting-pre-transplant': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'hospital-stay-support': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'home-recovery-care': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'medication-management': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'recognizing-warning-signs': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'self-care-for-caregivers': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    },
    'communication-with-medical-team': {
        standard: "<p>Content for this module is coming soon.</p>",
        eli10: "<p>We're working on making this simple to understand!</p>"
    }
};
