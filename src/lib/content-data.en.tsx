
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
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Transplant Evaluation Process</h2>
            <p>The goal of the evaluation is to ensure that you are healthy enough for surgery and that a transplant is the right treatment for you. This is a comprehensive process involving several tests and consultations.</p>
            <h3 class="text-xl font-bold font-headline">Key Steps in Evaluation:</h3>
            <ul>
                <li><strong>Blood Tests:</strong> To check your blood type, kidney function, liver function, and to screen for infections like HIV and hepatitis. A key test is tissue typing (HLA) to see how well you might match with a potential donor.</li>
                <li><strong>Urine Tests:</strong> To check for protein levels and signs of infection.</li>
                <li><strong>Imaging Studies:</strong> An ultrasound of your kidneys and bladder, a chest X-ray, and an electrocardiogram (ECG) are standard. Other tests like a CT scan may be needed.</li>
                <li><strong>Consultations:</strong> You will meet with several members of the transplant team, including the Nephrologist (kidney doctor), Transplant Surgeon, Nurse Coordinator, Social Worker, and Dietitian.</li>
                <li><strong>Psychosocial Evaluation:</strong> This is a conversation with a social worker or psychologist to ensure you have a good support system and understand the emotional aspects of a transplant.</li>
            </ul>
            <p>This process can take several weeks or months. It's important to attend all appointments and complete all required tests in a timely manner.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Health Checkup Adventure</h3>
            <p>Before you can get your new kidney, the doctors need to make sure your body is ready for this big adventure. Think of it like a very thorough health checkup. They want to be sure you're strong enough for the surgery.</p>
            <p>You'll meet a whole team of experts! A kidney doctor will check on your health, a surgeon will plan the operation, and a nurse will be your guide through it all. They'll take some pictures (like X-rays) of your insides and do some blood tests to learn more about you. It's all to make sure the transplant will be safe and successful for you.</p>
        `
    },
    'transplant-matching': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">How Transplant Matching Works</h2>
            <p>Finding a compatible kidney is crucial for a successful transplant. The matching process involves two main components: blood group compatibility and tissue typing (HLA).</p>
            <h3 class="text-xl font-bold font-headline">Blood Group Compatibility</h3>
            <p>This is the first and most important factor. Just like with blood transfusions, the donor and recipient must have compatible blood types.</p>
            <ul>
                <li>Blood type O is the universal donor.</li>
                <li>Blood type AB is the universal recipient.</li>
                <li>Blood type A can donate to A and AB.</li>
                <li>Blood type B can donate to B and AB.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Tissue Typing (HLA)</h3>
            <p>HLA stands for Human Leukocyte Antigen. These are proteins found on the surface of your cells. Your immune system uses them to tell the difference between "self" and "foreign." Everyone has a unique set of HLA markers inherited from their parents.</p>
            <p>A closer HLA match between donor and recipient reduces the risk of the recipient's body rejecting the new kidney. While a perfect "6 out of 6" match is ideal (often found in siblings), successful transplants are very common with partial matches.</p>
            <h3 class="text-xl font-bold font-headline">Crossmatch Test</h3>
            <p>This is the final blood test done before surgery. It involves mixing a small sample of the recipient's blood with the donor's blood to see if there is a reaction. A "negative" crossmatch means there is no reaction, and the transplant can proceed. A "positive" crossmatch means the recipient has pre-existing antibodies that would attack the donor kidney, and the transplant cannot happen unless special treatment is given.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Finding the Perfect Puzzle Piece</h3>
            <p>Imagine your body is a giant puzzle, and you need a new kidney puzzle piece. For the new piece to fit perfectly, it needs to match you in two special ways.</p>
            <p><strong>1. Blood Type:</strong> This is like matching the color of the puzzle piece. Your blood has a type (like A, B, O), and the new kidney needs to have a friendly, matching type.</p>
            <p><strong>2. Tissue Type (HLA):</strong> This is like matching the shape of the puzzle piece. Your body has a secret code (called HLA) that tells it, "This belongs here!" The closer the new kidney's code is to yours, the better it will fit and the less likely your body will think it's a mistake.</p>
            <p>Doctors do special tests to find a kidney that is the best possible match for your body's puzzle.</p>
        `
    },
    'surgery-day': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Day of Your Transplant Surgery</h2>
            <p>The day of your surgery is a significant milestone. Knowing what to expect can help reduce anxiety.</p>
            <h3 class="text-xl font-bold font-headline">Before the Surgery</h3>
            <ul>
                <li>You will be asked not to eat or drink anything for several hours before the operation.</li>
                <li>You will have blood tests and meet with the anesthesiologist.</li>
                <li>The transplant team will confirm your consent and answer any last-minute questions.</li>
                <li>You will be given medications, including the first dose of your anti-rejection drugs.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">During the Surgery</h3>
            <ul>
                <li>The surgery is performed under general anesthesia, so you will be asleep and feel no pain.</li>
                <li>The operation typically lasts 2 to 4 hours.</li>
                <li>The surgeon will place the new kidney in your lower abdomen (pelvis). Your own kidneys are usually left in place unless they are causing problems like infection or high blood pressure.</li>
                <li>The surgeon connects the new kidney's artery and vein to your blood vessels and connects the ureter (the tube that carries urine) to your bladder.</li>
            </ul>
             <h3 class="text-xl font-bold font-headline">After the Surgery</h3>
            <ul>
                <li>You will wake up in the recovery room, where a team of nurses will monitor you closely.</li>
                <li>You will have several tubes and lines, including an IV for fluids and medication, a catheter to drain urine from your bladder, and possibly a drain near your incision.</li>
                <li>Pain will be managed with medication.</li>
                <li>Once stable, you will be moved to a dedicated transplant unit in the hospital.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Big Day!</h3>
            <p>On the big day, you'll go to a special room in the hospital. The doctors will give you "magic sleep" medicine so you won't feel, see, or hear anything during the operation. It's just like taking a long, deep nap.</p>
            <p>While you're asleep, the expert surgeon will carefully place the new, healthy kidney inside your tummy. They'll connect it to your body's plumbing so it can start its important job of cleaning your blood right away. When you wake up, nurses will be right there to make sure you're comfortable. The new kidney will be inside, ready to help you feel much better!</p>
        `
    },
    'post-transplant-recovery': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Your Recovery After Transplant</h2>
            <p>Recovery is a gradual process that requires patience and careful adherence to your medical team's instructions. The initial recovery happens in the hospital, followed by continued healing at home.</p>
            <h3 class="text-xl font-bold font-headline">In the Hospital (Typically 1-2 weeks)</h3>
            <ul>
                <li><strong>Monitoring:</strong> Your team will monitor you very closely. This includes frequent checks of your vital signs, fluid intake and output, and daily blood tests to check your new kidney's function.</li>
                <li><strong>Activity:</strong> You will be encouraged to get out of bed and walk as early as the day after surgery to help prevent complications like blood clots and pneumonia.</li>
                <li><strong>Medication:</strong> You will learn about your new, lifelong medications. This is a critical part of your recovery.</li>
                <li><strong>Diet:</strong> You will start with clear liquids and gradually move to solid foods as your body recovers from surgery.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">At Home (First 3 Months)</h3>
            <ul>
                <li><strong>Follow-up:</strong> You will have frequent follow-up appointments and blood tests, sometimes several times a week initially.</li>
                <li><strong>Activity Restrictions:</strong> You must avoid heavy lifting (more than 5 kg) and strenuous activity for at least 6-8 weeks to allow your incision to heal. Do not drive until your team says it's okay.</li>
                <li><strong>Infection Prevention:</strong> Your immune system is suppressed, so you are at high risk for infections. Practice excellent hand hygiene, avoid crowds and sick people, and wear a mask in public.</li>
                <li><strong>Diet:</strong> Follow the dietary guidelines provided by your team, which usually includes a low-salt, heart-healthy diet. Food safety is very important.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Healing Up!</h3>
            <p>After your surgery, your body needs time to heal. At first, you'll be in the hospital where doctors and nurses will be your personal superheroes, checking on you all the time to make sure your new kidney is happy.</p>
            <p>Soon, you'll go home, but you still need to take it easy. Think of yourself as a superhero in training! Your main job is to rest and let your body get strong. This means no heavy lifting (like carrying your school backpack) for a while. You'll also need to be extra careful about germs, so lots of hand washing! Your body is busy making friends with the new kidney, and you need to help it by taking your special medicine every single day.</p>
        `
    },
    'immunosuppressants': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Understanding Your Medications</h2>
            <p>Immunosuppressants, also known as anti-rejection medications, are the cornerstone of a successful transplant. They work by lowering your immune system's activity to prevent it from attacking and damaging your new kidney.</p>
            <h3 class="text-xl font-bold font-headline">Key Principles:</h3>
            <ul>
                <li><strong>Lifelong Commitment:</strong> You must take these medications for the entire life of your transplanted kidney.</li>
                <li><strong>Consistency is Crucial:</strong> Take your medications at the same times every day to maintain a stable level in your blood. Missing doses can lead to rejection.</li>
                <li><strong>Never Adjust Doses Yourself:</strong> Your transplant team will adjust your doses based on regular blood tests. Never change the amount you take without their specific instruction.</li>
                <li><strong>Side Effects:</strong> All medications have potential side effects. Common ones include increased risk of infection, high blood pressure, and high blood sugar. It's important to discuss any side effects with your team, as they can often be managed.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Common Medications:</h3>
            <p>Your medication regimen will typically include a combination of drugs. Common examples include Tacrolimus, Mycophenolate Mofetil (MMF), and Prednisolone. It's vital to know the names and purposes of your specific medications.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Friendship Medicine</h3>
            <p>Your body has a defense team called the immune system. Its job is to fight off bad guys like germs. But because your new kidney is new, the defense team might not recognize it and think it's a bad guy.</p>
            <p>To prevent this, you take special "friendship medicine." This medicine tells your defense team, "Hey, be cool! This new kidney is a friend, not a foe." You have to take this friendship medicine every day, forever, to remind the defense team to be nice. If you forget, the defense team might get confused and start a fight with your new kidney, which is called "rejection." That's why taking your medicine on time, every time, is the most important job you have!</p>
        `
    },
    'medication-adherence': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Importance of Medication Adherence</h2>
            <p>Medication adherence means taking your medications exactly as prescribed—the right dose, at the right time, in the right way. After a transplant, this is the single most important factor under your control for long-term success.</p>
            <h3 class="text-xl font-bold font-headline">Why It's Critical</h3>
            <ul>
                <li><strong>Prevents Rejection:</strong> Even a few missed doses can trigger a rejection episode, which can cause permanent damage to your new kidney.</li>
                <li><strong>Maintains Stable Drug Levels:</strong> Consistent timing keeps the level of immunosuppressant medication in your blood stable, providing constant protection for your kidney.</li>
                <li><strong>Enables Accurate Monitoring:</strong> Your blood tests are timed with your medication doses. If you don't take your medication correctly, the results of your blood tests will be inaccurate, and your team won't be able to manage your care properly.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Tips for Success</h3>
            <ul>
                <li><strong>Use Pill Organizers:</strong> A weekly pillbox with compartments for each day and time is one of the most effective tools.</li>
                <li><strong>Set Alarms:</strong> Use your phone, watch, or a dedicated alarm clock to remind you when it's time for your medication.</li>
                <li><strong>Build a Routine:</strong> Link taking your medication to a daily activity, like brushing your teeth.</li>
                <li><strong>Plan Ahead:</strong> Refill your prescriptions well before you run out. Keep track of your supply, especially before weekends or holidays.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Following the Recipe</h3>
            <p>Think of your health like baking a cake. Your doctor gives you a recipe (your prescription) with exact instructions: how much medicine to use and exactly when to add it. To bake the perfect cake (to stay healthy), you have to follow the recipe perfectly.</p>
            <p>If you forget an ingredient or add it at the wrong time, the cake might not turn out right. It's the same with your medicine! Taking it on time, every time, is the secret ingredient to keeping your new kidney happy and healthy for a long, long time. Using a pillbox and setting phone alarms are like being a super-organized baker!</p>
        `
    },
    'understanding-rejection': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Understanding Transplant Rejection</h2>
            <p>Rejection is a normal and expected risk after a transplant. It happens when your body's immune system identifies the new kidney as "foreign" and tries to attack it. Fortunately, with modern medicine, most rejection episodes can be treated successfully, especially when caught early.</p>
            <h3 class="text-xl font-bold font-headline">Types of Rejection</h3>
            <ul>
                <li><strong>Acute Rejection:</strong> This is the most common type, usually occurring within the first three to six months after transplant. It often does not have symptoms and is usually detected through routine blood tests. It is typically treatable with changes in medication.</li>
                <li><strong>Chronic Rejection:</strong> This is a slower, long-term process where the kidney may gradually lose function over months or years. Consistent medication adherence and a healthy lifestyle are key to preventing it.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Signs and Symptoms</h3>
            <p>Often, there are no symptoms, which is why regular blood tests are so important. When symptoms do occur, they can include:</p>
            <ul>
                <li>Fever</li>
                <li>Pain or tenderness over the kidney</li>
                <li>A decrease in urine output</li>
                <li>Fluid retention (swelling)</li>
                <li>A sudden increase in weight</li>
                <li>Feeling unwell, like you have the flu</li>
            </ul>
            <p><strong>If you experience any of these symptoms, contact your transplant team immediately.</strong></p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Body's Defense Team</h3>
            <p>Your body has a defense team (the immune system) that is a pro at fighting off bad germs. When your new kidney arrives, the defense team might get confused and think, "I don't know you! Are you a bad guy?" and start a fight. This fight is called "rejection."</p>
            <p>Your anti-rejection medicine is like a coach that tells the defense team, "Calm down, this kidney is a friend!" Most of the time, the medicine works perfectly. Sometimes, the defense team gets a little rowdy anyway. Doctors can see this happening in your blood tests, often before you even feel sick. They can then adjust the medicine to calm the team down again. That's why going to your check-ups is super important!</p>
        `
    },
    'understanding-graft-health': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Understanding Your New Kidney's Health</h2>
            <p>'Graft' is the medical term for your transplanted kidney. Maintaining graft health is your primary goal after transplant surgery. This involves a partnership between you and your medical team.</p>
            <h3 class="text-xl font-bold font-headline">Monitoring Graft Function</h3>
            <p>Your transplant team monitors your kidney's health through several methods:</p>
            <ul>
                <li><strong>Blood Tests:</strong> The most common test is for serum creatinine. A stable, low creatinine level indicates the kidney is filtering waste well. A rising creatinine is often the first sign of a problem.</li>
                <li><strong>Urine Tests:</strong> These check for protein in the urine (proteinuria), which can be a sign of kidney damage.</li>
                <li><strong>Blood Pressure:</strong> High blood pressure can damage the new kidney over time, so keeping it well-controlled is essential.</li>
                <li><strong>Biopsy:</strong> If there are signs of trouble, your doctor may perform a biopsy, where a tiny piece of the kidney is removed with a needle to be examined under a microscope. This is the most accurate way to diagnose rejection or other problems.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Your Role in Graft Health</h3>
            <ul>
                <li><strong>Medication Adherence:</strong> Taking your anti-rejection medications exactly as prescribed is the most important thing you can do.</li>
                <li><strong>Healthy Lifestyle:</strong> Control your blood pressure, manage your weight, eat a healthy diet, and avoid smoking.</li>
                <li><strong>Know Your Numbers:</strong> Pay attention to your lab results and blood pressure readings. Ask your team what your goal numbers are.</li>
                <li><strong>Communicate:</strong> Report any new symptoms to your team immediately.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Your Kidney's Report Card</h3>
            <p>Think of your new kidney (doctors call it a "graft") like a new student in school. You want it to get a great report card! The doctors check its report card all the time with blood tests.</p>
            <p>The most important grade on the report card is called "creatinine." A low creatinine number is like getting an A+! It means your kidney is doing a fantastic job cleaning your blood. If the number starts to go up, it's like a C or D, and the doctors know they need to check what's wrong.</p>
            <p>Your job is to help your new kidney get good grades by taking your medicine every day and living a healthy life. This helps your new kidney stay at the top of the class!</p>
        `
    },
    'long-term-care': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Long-Term Care and Health Maintenance</h2>
            <p>Life after a transplant involves a lifelong commitment to your health. While your new kidney gives you freedom from dialysis, it requires careful, ongoing management to ensure it lasts for many years.</p>
            <h3 class="text-xl font-bold font-headline">Regular Follow-Up</h3>
            <p>Attending all your scheduled appointments is critical, even when you feel perfectly healthy. These visits allow your team to:</p>
            <ul>
                <li>Monitor your kidney function through blood and urine tests.</li>
                <li>Adjust your medication dosages.</li>
                <li>Screen for long-term complications.</li>
                <li>Answer your questions and provide ongoing education.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Screening for Other Health Issues</h3>
            <p>Immunosuppressant medications can increase the risk of other health problems over time. Regular screening is key to catching these issues early.</p>
            <ul>
                <li><strong>Cancer Screening:</strong> You have a higher risk of certain cancers, especially skin cancer and lymphoma. Regular skin checks are vital. You should also follow standard cancer screening guidelines (e.g., mammograms, colonoscopies) as recommended for your age.</li>
                <li><strong>Cardiovascular Health:</strong> Heart disease is a major concern for transplant patients. Managing blood pressure, cholesterol, and blood sugar is essential.</li>
                <li><strong>Bone Health:</strong> Some medications can weaken your bones. Your doctor may recommend a bone density scan.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Keeping Your Car Running Smoothly</h3>
            <p>Getting a new kidney is like getting a brand new, amazing car. It runs great, but to keep it that way for a long, long time, you need to take it for regular check-ups. You can't just drive it and forget about it!</p>
            <p>Your appointments with the transplant doctor are like taking your car to the best mechanic in the world. They check the engine (your kidney), check the oil (your blood tests), and make sure everything is tuned up perfectly. They also check the other parts of the car, like the tires (your heart) and the paint (your skin), to make sure everything stays in great shape. Regular check-ups keep your amazing new car running smoothly for years and years!</p>
        `
    },
    'diet-and-nutrition': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Diet and Nutrition After Transplant</h2>
            <p>After your transplant, your diet is much less restrictive than when you were on dialysis. The focus shifts to a heart-healthy eating plan to protect your new kidney and your overall health. Many of the medications you take can affect your weight, blood pressure, and blood sugar, so a good diet is crucial.</p>
            <h3 class="text-xl font-bold font-headline">Key Dietary Guidelines</h3>
            <ul>
                <li><strong>Sodium (Salt):</strong> A low-sodium diet is very important to help control blood pressure. Avoid processed foods, canned soups, fast food, and adding salt to your meals.</li>
                <li><strong>Fat:</strong> Focus on healthy fats (like olive oil, avocados, nuts) and limit saturated and trans fats (found in fried foods, butter, fatty meats).</li>
                <li><strong>Protein:</strong> You will need adequate protein to help your body heal after surgery, but excessive amounts should be avoided. Good sources include lean meats, poultry, fish, and beans.</li>
                <li><strong>Fluids:</strong> Staying well-hydrated is important. Drink plenty of water throughout the day unless your team tells you otherwise.</li>
                <li><strong>Food Safety:</strong> Your suppressed immune system makes you vulnerable to foodborne illness. Avoid raw or undercooked meats, fish (like sushi), and eggs. Wash all fruits and vegetables thoroughly. Avoid unpasteurized dairy products.</li>
                <li><strong>The Grapefruit Rule:</strong> NEVER eat grapefruit or drink grapefruit juice. It interferes with the metabolism of your anti-rejection medications and can cause dangerously high levels in your blood.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Fuel for Your New Engine</h3>
            <p>Your new kidney is like a brand new, high-performance engine! To keep it running great, you need to give it the best fuel. You don't have as many rules as before, but some are super important.</p>
            <p>Think of salty foods like french fries and chips as "dirty fuel" that can clog up your engine and make your blood pressure go too high. You want to use "clean fuel" like fresh fruits, vegetables, and lean chicken. Drinking lots of water helps keep the engine clean and running smoothly.</p>
            <p>There's one rule that's a super-mega-important secret: **NO GRAPEFRUIT!** Grapefruit does something weird to your special friendship medicine and can cause big problems. So, no grapefruit, ever!</p>
        `
    },
    'physical-activity-and-exercise': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Physical Activity and Exercise</h2>
            <p>Regular physical activity is a critical part of staying healthy after your transplant. It helps control weight, lower blood pressure, improve mood, and reduce the risk of cardiovascular disease.</p>
            <h3 class="text-xl font-bold font-headline">Getting Started Safely</h3>
            <ul>
                <li><strong>Consult Your Team:</strong> Always talk to your transplant team before starting any new exercise program.</li>
                <li><strong>Start Slow:</strong> Your body is recovering from major surgery. Begin with light activities like short, slow walks.</li>
                <li><strong>Listen to Your Body:</strong> If you feel pain, dizziness, or shortness of breath, stop and rest. Don't push yourself too hard, especially in the beginning.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Recommended Activities</h3>
            <ul>
                <li><strong>Walking:</strong> This is the perfect post-transplant exercise. It's low-impact and you can easily control the intensity. Aim to walk a little further each day.</li>
                <li><strong>Cycling:</strong> A stationary bike is a great, safe option. Outdoor cycling can be introduced later on safe paths.</li>
                <li><strong>Swimming:</strong> Once your surgical wound is completely healed and your team gives you the okay, swimming is an excellent full-body exercise.</li>
            </ul>
             <h3 class="text-xl font-bold font-headline">Activities to Avoid</h3>
            <ul>
                <li><strong>Heavy Lifting:</strong> Avoid lifting anything over 5 kg for the first 2-3 months to prevent a hernia.</li>
                <li><strong>Contact Sports:</strong> Sports where you could get hit in the abdomen (like football, hockey, martial arts) should be avoided for life to protect your new kidney.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Moving Your Body</h3>
            <p>After your surgery, you need to get your body moving to help it get strong again. But you have to start slow! At first, just taking a short walk is perfect. It's like taking your new engine out for a gentle drive around the block.</p>
            <p>As you get stronger, you can walk a little longer, or maybe ride a stationary bike. The most important rule is to protect your new kidney! That means no rough-and-tumble games like football or wrestling. Think of it this way: you wouldn't want someone to bump into your new, shiny engine. Walking, swimming, and cycling are great ways to stay active and keep your engine—and your whole body—in fantastic shape!</p>
        `
    },
    'post-transplant-diabetes': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Post-Transplant Diabetes Mellitus (PTDM)</h2>
            <p>Some patients develop high blood sugar and diabetes after their transplant, even if they never had it before. This is called Post-Transplant Diabetes Mellitus, or PTDM. It is a common complication, and it is manageable.</p>
            <h3 class="text-xl font-bold font-headline">Causes and Risk Factors</h3>
            <p>The primary cause of PTDM is the immunosuppressive medication, especially steroids (like Prednisolone) and tacrolimus. Other risk factors include:</p>
            <ul>
                <li>Older age</li>
                <li>Family history of diabetes</li>
                <li>Being overweight or obese</li>
                <li>Hepatitis C infection</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Diagnosis and Management</h3>
            <p>Your transplant team will monitor your blood sugar levels closely after your transplant. If your levels are consistently high, you may be diagnosed with PTDM.</p>
            <p>Management of PTDM is crucial for both your long-term graft health and your overall cardiovascular health. The management strategy includes:</p>
            <ul>
                <li><strong>Lifestyle Changes:</strong> This is the first and most important step. It involves following a diabetic-friendly diet (limiting sugar and carbohydrates), losing weight if necessary, and regular physical activity.</li>
                <li><strong>Medication Adjustment:</strong> In some cases, your transplant team may be able to adjust your immunosuppressant regimen to one that is less likely to cause high blood sugar.</li>
                <li><strong>Oral Diabetes Medications or Insulin:</strong> If lifestyle changes are not enough, you may need to take pills or insulin injections to control your blood sugar.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Sugar Glitch</h3>
            <p>Sometimes, the special "friendship medicine" you take for your new kidney can have a side effect. It can make the sugar in your body act a little glitchy and go too high. When this happens, it's called "post-transplant diabetes."</p>
            <p>It's a common glitch, and the doctors know exactly how to fix it! The first step is to eat healthier foods (less candy and sweets!) and to get your body moving with exercise. This often fixes the glitch completely. If not, the doctors have other medicines that can help get your sugar levels back to normal. It's very important to fix the glitch to keep you and your new kidney healthy.</p>
        `
    },
    'mental-health-support': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Mental and Emotional Health After Transplant</h2>
            <p>A kidney transplant is a life-changing event that affects you physically and emotionally. It's normal to experience a wide range of feelings throughout your journey. Paying attention to your mental health is just as important as caring for your physical health.</p>
            <h3 class="text-xl font-bold font-headline">The Emotional Rollercoaster</h3>
            <p>It's common to feel:</p>
            <ul>
                <li><strong>Joy and Gratitude:</strong> Feeling incredibly thankful for your new lease on life and for your donor.</li>
                <li><strong>Anxiety and Fear:</strong> Worrying about rejection, infection, or the future. This is often heightened around the time of clinic visits or biopsies.</li>
                <li><strong>Guilt:</strong> Some patients, especially those who received an organ from a deceased donor, may feel a sense of guilt. These feelings are complex and normal.</li>
                <li><strong>Depression or "The Blues":</strong> Feeling down, sad, or losing interest in activities you once enjoyed can happen. Some of the medications can also contribute to mood changes.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Strategies for Coping</h3>
            <ul>
                <li><strong>Talk About It:</strong> Don't keep your feelings to yourself. Talk to your family, friends, or a member of your transplant team.</li>
                <li><strong>Connect with Peers:</strong> Joining a support group with other transplant patients can be incredibly helpful. They understand what you're going through.</li>
                <li><strong>Stay Active:</strong> Gentle physical activity is a powerful mood booster.</li>
                <li><strong>Seek Professional Help:</strong> Your transplant team includes social workers and psychologists who are there to support you. Therapy and counseling are effective tools for managing stress and depression.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: All the Feels</h3>
            <p>Getting a new kidney is a huge deal, and it can bring up a lot of different feelings, like a rollercoaster! One minute you might feel super happy and excited. The next, you might feel a little worried or scared about your new kidney. All of these feelings are totally normal.</p>
            <p>Think of it like this: your body just went through a big change, and your brain needs some time to catch up! The best thing you can do is talk about your feelings. Talking to your parents, a friendly doctor or nurse, or even other kids who have had a transplant can make you feel so much better. It's like letting some air out of a balloon that's too full. Taking care of your feelings is just as important as taking care of your new kidney.</p>
        `
    },
    'understanding-living-donation': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Understanding Living Donation</h2>
            <p>Living donation is when a living person donates an organ—in this case, a kidney—to someone in need. It is a remarkable gift that offers the recipient the best possible chance for a long and healthy life. Kidneys from living donors generally last longer and start working faster than those from deceased donors.</p>
            <h3 class="text-xl font-bold font-headline">Who Can Be a Living Donor?</h3>
            <p>A living donor can be a family member (like a parent, sibling, or child), a friend, a spouse, or even an altruistic stranger who wishes to help someone. The donor must be:</p>
            <ul>
                <li>In excellent physical and mental health.</li>
                <li>Free from conditions like uncontrolled high blood pressure, diabetes, cancer, or major heart disease.</li>
                <li>Making a voluntary and well-informed decision, free from any pressure or payment.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">The Process</h3>
            <p>The journey to becoming a living donor involves a thorough and independent evaluation process. The donor has their own team of advocates (doctors, nurses, social workers) whose sole responsibility is to protect the donor's health and interests. This process ensures that it is safe for the donor to give a kidney and that they are doing so for the right reasons.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Giving an Amazing Gift</h3>
            <p>Imagine your friend needs a really special LEGO piece to finish their amazing creation, but they don't have it. You have two of that exact piece! You can live perfectly fine with just one, so you decide to give one of yours to your friend. That's what living kidney donation is like!</p>
            <p>A super healthy and kind person who has two kidneys decides to give one to someone whose kidneys have stopped working. It's one of the most generous gifts anyone can give. Doctors do a lot of check-ups to make sure the person giving the kidney (the donor) is super healthy and will stay healthy with just one. This gift helps the other person get well and live a normal life again.</p>
        `
    },
    'donor-eligibility': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Living Donor Eligibility Criteria</h2>
            <p>The top priority in living donation is the safety of the donor. The eligibility criteria are strict to ensure that a potential donor is not put at undue risk, both during the surgery and in the long term.</p>
            <h3 class="text-xl font-bold font-headline">General Requirements</h3>
            <ul>
                <li>Generally between the ages of 18 and 70.</li>
                <li>In good overall physical and mental health.</li>
                <li>Have a compatible or manageable blood type with the recipient.</li>
                <li>Have a normal kidney function.</li>
                <li>Making a voluntary decision, free of pressure or financial incentive.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Medical Conditions that Usually Prevent Donation</h3>
            <p>Certain health conditions make it unsafe to donate a kidney. These often include:</p>
            <ul>
                <li>Diabetes (Type 1 or Type 2)</li>
                <li>Uncontrolled high blood pressure</li>
                <li>Active or recently treated cancer</li>
                <li>Significant heart or lung disease</li>
                <li>HIV infection</li>
                <li>A history of recurrent kidney stones</li>
                <li>Being significantly overweight (high BMI)</li>
                <li>Active substance abuse</li>
            </ul>
            <p>Each potential donor is evaluated on an individual basis by the transplant team. The final decision is always based on what is safest for the potential donor.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Donor Health Checklist</h3>
            <p>Before someone can give the amazing gift of a kidney, doctors have a very important health checklist. They want to make sure the person giving the kidney (the donor) is like a superhero - super healthy!</p>
            <p>The checklist makes sure the donor doesn't have any problems like diabetes or heart trouble. They also check that the donor has two perfectly working kidneys, so they'll be perfectly fine with just one. It's all about safety! The doctors' number one rule is to make sure the donor stays healthy and strong for their whole life. Only the healthiest superheroes get to be donors!</p>
        `
    },
    'donor-evaluation': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Donor Evaluation Process</h2>
            <p>The evaluation for a living donor is a comprehensive and confidential process designed to protect the donor. The donor has their own independent team, separate from the recipient's team, to ensure their interests are the top priority.</p>
            <h3 class="text-xl font-bold font-headline">Key Steps:</h3>
            <ul>
                <li><strong>Initial Screening:</strong> This often starts with a health questionnaire and basic blood tests to check blood type and kidney function.</li>
                <li><strong>Full Day Evaluation:</strong> If the initial screening is passed, the potential donor will come to the hospital for a full day of tests and consultations.</li>
                <li><strong>Medical Tests:</strong> This includes extensive blood and urine tests, an ECG to check the heart, a chest X-ray, and a CT scan of the abdomen. The CT scan gives the surgeons a detailed "roadmap" of the kidneys' anatomy and blood vessels.</li>
                <li><strong>Consultations:</strong> The potential donor meets with:
                    <ul>
                        <li>A <strong>Nephrologist</strong> to discuss their kidney health.</li>
                        <li>A <strong>Surgeon</strong> to explain the surgical procedure and recovery.</li>
                        <li>A <strong>Nurse Coordinator</strong> who guides them through the process.</li>
                        <li>A <strong>Social Worker/Psychologist</strong> to ensure the decision is voluntary and the donor has good social support.</li>
                        <li>A <strong>Dietitian</strong> to discuss healthy eating habits.</li>
                    </ul>
                </li>
                <li><strong>Team Review:</strong> After all tests are complete, the entire transplant team meets to review the results and decide if it is safe for the potential donor to proceed.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Donor's VIP Check-Up</h3>
            <p>When someone wants to be a kidney donor, they get a VIP (Very Important Person) check-up at the hospital. This isn't just any check-up; it's to make sure they are healthy enough to share one of their two kidneys.</p>
            <p>They get their own team of doctors and nurses who are like personal bodyguards, focused only on the donor's safety. They do blood tests, take special pictures of the kidneys inside, and have lots of conversations to answer all the donor's questions. They talk about the surgery, and make sure the donor is happy and sure about their choice. It's a careful process to make sure this amazing gift is safe for everyone.</p>
        `
    },
    'psychological-assessment': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Psychological Assessment for Donors</h2>
            <p>The psychological assessment is a crucial and confidential part of the donor evaluation. It's not a test to pass or fail, but rather a supportive conversation to ensure a potential donor is making a decision that is right for them.</p>
            <h3 class="text-xl font-bold font-headline">Goals of the Assessment:</h3>
            <ul>
                <li><strong>Voluntary Decision:</strong> To confirm that the decision to donate is entirely the donor's own, without any pressure, coercion, or promise of payment from anyone.</li>
                <li><strong>Informed Consent:</strong> To ensure the donor fully understands the surgical procedure, the recovery process, and the potential short-term and long-term risks.</li>
                <li><strong>Mental Health:</strong> To assess for any mental health conditions, like severe depression or anxiety, that could make the stress of donation difficult to handle.</li>
                <li><strong>Support System:</strong> To discuss the donor's support system—the family and friends who will help them during their recovery.</li>
                <li><strong>Motivations:</strong> To understand the donor's reasons for wanting to donate.</li>
            </ul>
            <p>This conversation is a safe space for the potential donor to express any concerns or fears they may have. The donor's well-being is always the primary concern.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: A Friendly Chat</h3>
            <p>Part of being a donor is having a friendly chat with a special kind of expert, like a school counselor. This chat is to make sure the donor feels happy, confident, and not pushed into their decision.</p>
            <p>The expert will ask things like, "Why do you want to give this amazing gift?" and "Do you have friends and family who will help take care of you after your surgery?" They want to make sure the donor's choice is 100% their own idea. It's a secret, private talk just to make sure the donor is feeling good about everything. It's another way the hospital protects these real-life superheroes!</p>
        `
    },
    'donor-surgery': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Donor Surgical Procedure</h2>
            <p>The surgery to remove a kidney for donation is called a nephrectomy. The vast majority of these are performed laparoscopically, which is a minimally invasive technique.</p>
            <h3 class="text-xl font-bold font-headline">Laparoscopic Nephrectomy</h3>
            <ul>
                <li>The surgeon makes several small incisions (about 1-2 cm each) in the abdomen.</li>
                <li>A laparoscope (a thin tube with a camera on the end) and small surgical tools are inserted through these incisions.</li>
                <li>The abdomen is inflated with carbon dioxide gas to give the surgeon a clear view and room to work.</li>
                <li>The surgeon carefully detaches the kidney from its blood vessels and the ureter.</li>
                <li>The kidney is then placed in a special bag and removed through a slightly larger incision (usually about 5-7 cm) in the lower belly, often hidden below the bikini line.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Advantages of Laparoscopy</h3>
            <p>Compared to traditional open surgery, this method results in:</p>
            <ul>
                <li>Less pain after surgery</li>
                <li>A shorter hospital stay</li>
                <li>A faster recovery and return to normal activities</li>
                <li>Smaller, less noticeable scars</li>
            </ul>
            <p>The surgery is performed under general anesthesia and typically takes about 2 to 3 hours.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Tummy Button Surgery</h3>
            <p>Instead of one big cut, the surgeon makes a few tiny ones, like keyholes. They use a special tiny camera and tiny tools to do the surgery inside the tummy. It's like playing a very careful video game!</p>
            <p>They carefully wrap up the kidney and bring it out through one slightly bigger (but still small!) cut, usually hidden down low. Because the cuts are so small, it doesn't hurt as much afterward, and the donor gets to go home from the hospital and get back to playing much faster!</p>
        `
    },
    'donor-recovery': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Recovery After Donor Surgery</h2>
            <p>Recovery for the living donor is generally quick and straightforward. The medical team's goal is to manage pain and get the donor moving safely to speed up healing.</p>
            <h3 class="text-xl font-bold font-headline">In the Hospital (1-2 nights)</h3>
            <ul>
                <li>You will be encouraged to get out of bed and walk on the same day as your surgery. This is very important to prevent complications like blood clots.</li>
                <li>Your pain will be well-controlled with medication.</li>
                <li>You will be able to drink liquids soon after surgery and eat regular food by the next day.</li>
                <li>The urinary catheter is usually removed the morning after surgery.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">At Home</h3>
            <ul>
                <li><strong>Activity:</strong> You will feel more tired than usual for a few weeks. Rest is important, but so is gentle activity like walking.</li>
                <li><strong>Restrictions:</strong> Do not lift anything heavier than 5 kg for 4-6 weeks. Do not drive for 1-2 weeks, or while taking prescription pain medication.</li>
                <li><strong>Returning to Work:</strong> Most people with desk jobs can return to work in 2-3 weeks. Those with more physically demanding jobs may need 4-6 weeks.</li>
                <li><strong>Follow-up:</strong> You will have a follow-up appointment with the transplant team about 1-2 weeks after you go home. Annual check-ups are recommended for life.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Getting Back to Action!</h3>
            <p>After the surgery, the donor gets to rest in a comfy hospital bed. But soon, the nurses will help them get up and take a short walk. Moving around helps the body heal faster!</p>
            <p>They only stay in the hospital for a day or two. When they go home, their main job is to take it easy. They can walk and do normal things, but no heavy lifting or rough play for a few weeks. They might feel a little tired, which is normal. Soon, they'll be back to feeling 100% and can do everything they could do before!</p>
        `
    },
    'risks-and-benefits': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Risks and Benefits of Living Donation</h2>
            <p>The decision to become a living donor is a significant one. It's important to have a clear understanding of both the potential risks and the profound benefits.</p>
            <h3 class="text-xl font-bold font-headline">Benefits</h3>
            <ul>
                <li>The primary benefit is emotional and psychological: the immense satisfaction of saving or dramatically improving someone's life.</li>
                <li>It allows the recipient to receive a transplant sooner, often avoiding years of dialysis.</li>
                <li>It provides the recipient with a kidney that is likely to last longer and work better than one from a deceased donor.</li>
                <li>The surgery can be scheduled at a convenient time for both the donor and recipient.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Risks</h3>
            <p>The overall risks to the donor's health are very low, but they exist and must be understood.</p>
            <ul>
                <li><strong>Short-Term Surgical Risks:</strong> Like any major surgery, there are risks related to anesthesia, bleeding, infection, and blood clots. The risk of death from the surgery is extremely low (about 3 in 10,000).</li>
                <li><strong>Long-Term Risks:</strong> Life with one kidney is very safe. The remaining kidney compensates and does the work of two. There is a small increase in the long-term risk of developing high blood pressure or a slight reduction in kidney function. The risk of eventually needing a transplant yourself is less than 1%.</li>
                <li><strong>Emotional Risks:</strong> While most donors feel positive, some may experience feelings of anxiety or even regret if the transplant is not successful. This is why the psychological assessment is so important.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Good and the Cautions</h3>
            <p><strong>The Good Part (Benefits):</strong> The best part of being a donor is the amazing feeling you get from giving someone the gift of health. You're a real-life hero! You help someone get off a machine (dialysis) and get back to living a normal, fun life. It's a powerful and happy feeling.</p>
            <p><strong>The Cautions (Risks):</strong> Being a donor is very, very safe. The doctors are like super-careful scientists who make sure of it. There's a tiny, tiny risk with the surgery, just like any time you go to the hospital. And for the rest of their life, the donor has to take good care of their one remaining kidney, just like everyone should! The doctors will check on them once a year to make sure they stay super healthy.</p>
        `
    },
    'donor-long-term-health': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Long-Term Health for Living Donors</h2>
            <p>Living a long, healthy life with one kidney is the norm for living donors. The key is a commitment to a healthy lifestyle and regular medical follow-up.</p>
            <h3 class="text-xl font-bold font-headline">Annual Check-ups</h3>
            <p>It is recommended that you have a check-up with your primary care physician or a nephrologist every year. This check-up should include:</p>
            <ul>
                <li><strong>Blood Pressure Check:</strong> To ensure it remains in a healthy range.</li>
                <li><strong>Blood Test:</strong> To measure your creatinine level and check your kidney function (eGFR).</li>
                <li><strong>Urine Test:</strong> To check for protein in the urine (albuminuria), which can be an early sign of kidney stress.</li>
            </ul>
            <h3 class="text-xl font-bold font-headline">Lifestyle Recommendations</h3>
            <ul>
                <li><strong>Maintain a Healthy Weight:</strong> Staying at a healthy weight reduces the strain on your remaining kidney.</li>
                <li><strong>Eat a Balanced Diet:</strong> Focus on a diet low in salt and processed foods.</li>
                <li><strong>Stay Active:</strong> Regular physical activity helps control blood pressure and weight.</li>
                <li><strong>Avoid NSAIDs:</strong> Be cautious with Nonsteroidal Anti-Inflammatory Drugs (like ibuprofen and naproxen), as they can be harmful to kidneys. Always ask your doctor before taking any new medication.</li>
                <li><strong>Pregnancy:</strong> Women who have donated a kidney can have healthy pregnancies, but they are at a slightly higher risk for complications like preeclampsia. It's important to be monitored by a doctor who is aware of your donation history.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Taking Care of Your Super Kidney!</h3>
            <p>After someone donates a kidney, their one remaining kidney gets a promotion! It becomes a "super kidney" and does the work of two. To keep this super kidney happy and healthy forever, the donor just needs to do a few simple things.</p>
            <p>Once a year, they go to the doctor for a quick check-up, just to make sure the super kidney is still doing a great job. They also try to eat healthy foods and play and exercise to stay strong. It's the same healthy stuff everyone should be doing! Living with one kidney is easy and normal, and the donor can do everything they did before.</p>
        `
    },
    'understanding-your-role': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Understanding Your Role as a Caregiver</h2>
            <p>As a caregiver, you are one of the most important people in the transplant journey. Your support, encouragement, and practical help are essential for both the patient and the living donor. Your role is multifaceted, acting as a cheerleader, organizer, and an extra set of eyes and ears.</p>
            <h3 class="text-xl font-bold font-headline">Key Responsibilities</h3>
            <ul>
                <li><strong>Emotional Support:</strong> The transplant process is an emotional rollercoaster. Being a calm, positive, and listening presence is invaluable.</li>
                <li><strong>Logistical Manager:</strong> You can help by organizing appointments, managing transportation, picking up prescriptions, and coordinating communication with other family and friends.</li>
                <li><strong>Advocate:</strong> Attending medical appointments allows you to help listen, take notes, and ask clarifying questions. You can help ensure the patient's concerns are heard.</li>
                <li><strong>Post-Surgery Support:</strong> Your role is most intense in the weeks following surgery. You will help with medication reminders, monitoring for warning signs, preparing appropriate meals, and providing transportation to frequent follow-up visits.</li>
            </ul>
            <p>Remember, this is a marathon, not a sprint. It's vital that you also take care of your own well-being so you can provide sustainable support.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: You're the Team Manager!</h3>
            <p>Imagine the person you're caring for is the star player on a team, and the doctors are the coaches. Your job is the Team Manager! You're the one who makes sure everything runs smoothly behind the scenes.</p>
            <p>You help the player get to practice (doctor's appointments). You make sure they take their power-up drinks (medicines) on time. You're also the head cheerleader, keeping their spirits up when they're tired. You're a super-important part of the team, and without a great manager, it's much harder for the star player to win!</p>
        `
    },
    'supporting-pre-transplant': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Supporting Your Loved One Before Transplant</h2>
            <p>The time leading up to a transplant can be filled with anxiety and a flurry of activity. Your support during this phase is crucial for keeping your loved one organized and emotionally grounded.</p>
            <h3 class="text-xl font-bold font-headline">How You Can Help</h3>
            <ul>
                <li><strong>Attend Appointments:</strong> Go with your loved one to key appointments. Four ears are better than two for absorbing complex information. Take notes and help formulate questions beforehand.</li>
                <li><strong>Organize Medical Information:</strong> Help keep track of test results, appointment schedules, and medication lists. A simple binder or folder can be a huge help.</li>
                <li><strong>Provide Transportation:</strong> The evaluation process involves many trips to the hospital. Offering to drive can relieve a significant burden.</li>
                <li><strong>Be a Good Listener:</strong> Create a safe space for your loved one to share their fears and hopes without judgment. Sometimes, just listening is the most helpful thing you can do.</li>
                <li><strong>Encourage a Healthy Lifestyle:</strong> Support them in making healthy food choices and engaging in light physical activity (as approved by their doctor) to get them in the best possible shape for surgery.</li>
                <li><strong>Help Prepare the Home:</strong> Help plan for their return after surgery. This might include preparing some meals to freeze, ensuring the home is clean, and setting up a comfortable recovery space.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Getting Ready for the Big Game</h3>
            <p>Before the "big game" (the surgery), the player needs to train and prepare. As the team manager, you can help them get ready!</p>
            <p>You can be their personal assistant, helping them keep track of all their training sessions (appointments). You can be their chauffeur, driving them where they need to go. You can also be their personal chef, helping them eat healthy "training food." Most importantly, you can be their number one fan, listening when they're nervous and cheering them on. Helping them prepare makes them feel ready and confident for the big day.</p>
        `
    },
    'hospital-stay-support': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Providing Support During the Hospital Stay</h2>
            <p>Your presence and support in the hospital can be a great source of comfort. However, it's important to balance being present with allowing your loved one (both patient and donor) adequate time to rest and recover.</p>
            <h3 class="text-xl font-bold font-headline">How to Be an Effective Hospital Support Person</h3>
            <ul>
                <li><strong>Be the Communication Hub:</strong> Act as the point person for updates to the wider circle of family and friends. This allows the patient to rest instead of repeating the same information multiple times.</li>
                <li><strong>Bring Comforts from Home:</strong> Simple things like a favorite pillow, a book, or a tablet with headphones can make the sterile hospital environment feel more comfortable.</li>
                <li><strong>Advocate and Observe:</strong> Pay attention during nurse shift changes and doctor rounds. You can gently remind staff of questions you or the patient have. Notice changes in your loved one's condition and report them.</li>
                <li><strong>Support the Donor Too:</strong> If there is a living donor, remember they have also undergone major surgery. Split your time, or coordinate with other family members to ensure the donor feels just as supported as the recipient.</li>
                <li><strong>Respect Rest Time:</strong> Don't feel you need to be there every single minute. Recovery requires a lot of sleep. Encourage your loved one to rest when they are tired, even if it means you step out of the room for a while.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Hospital Helper</h3>
            <p>When the player is in the hospital after the game, you're their special helper. You can bring them things from home, like their favorite blanket, to make them feel cozy.</p>
            <p>You can also be their secretary, giving updates to family and friends so the player can focus on resting. It's also important to remember the donor, if there is one. They are a hero who also needs support and cheering. Your biggest job is to be a calm and happy presence, which helps everyone feel better and heal faster.</p>
        `
    },
    'home-recovery-care': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Caregiving During Home Recovery</h2>
            <p>The first few months at home are a critical period for healing and establishing new routines. Your role as a caregiver is most intensive during this time.</p>
            <h3 class="text-xl font-bold font-headline">Key Areas of Support</h3>
            <ul>
                <li><strong>Medication Management:</strong> This is the top priority. Help create a system with pillboxes and alarms to ensure no dose is ever missed.</li>
                <li><strong>Monitoring and Reporting:</strong> Help track vital signs like temperature, blood pressure, and weight. Keep a log of these numbers and any new symptoms to report to the transplant team.</li>
                <li><strong>Infection Control:</strong> Be vigilant about hygiene. Enforce handwashing for all visitors, keep the home clean, and help the patient avoid crowds and anyone who is sick.</li>
                <li><strong>Diet and Nutrition:</strong> Help with grocery shopping and preparing meals that follow the transplant diet (low-salt, good food safety).</li>
                <li><strong>Transportation:</strong> The patient cannot drive for several weeks. You will be their primary means of getting to frequent follow-up appointments.</li>
                <li><strong>Enforcing Restrictions:</strong> Gently remind your loved one of their activity restrictions, especially about not lifting heavy items.</li>
                <li><strong>Emotional Support:</strong> Be patient and understanding. Recovery has its ups and downs. Celebrate small victories and offer encouragement on tough days.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Home Coach</h3>
            <p>When the player comes home, you become their home coach. Your most important job is making sure they take their medicine at the exact right times. You can use a pillbox and phone alarms to help, like a coach's playbook!</p>
            <p>You'll also be like a detective, watching for any signs of trouble, like a fever, and calling the head coaches (the doctors) right away. You'll help make sure their food is healthy and their house is super clean to keep germs away. Being a home coach is a big job, but it's what helps the player heal and get back to being a superstar.</p>
        `
    },
    'medication-management': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Assisting with Medication Management</h2>
            <p>Ensuring the transplant recipient takes their immunosuppressant medications perfectly is the most critical task for a successful outcome. As a caregiver, you can be an invaluable partner in this process.</p>
            <h3 class="text-xl font-bold font-headline">Practical Ways to Help</h3>
            <ul>
                <li><strong>Set up a System:</strong> A pill organizer box with compartments for each day of the week and times of day (e.g., AM/PM) is essential. Help the patient fill this box accurately each week.</li>
                <li><strong>Use Technology:</strong> Set recurring alarms on the patient's phone, your phone, or a smart home device. There are also specialized medication reminder apps available.</li>
                <li><strong>Create a Chart:</strong> A simple chart on the refrigerator where the patient can check off each dose after they take it can provide a visual confirmation and prevent double-dosing.</li>
                <li><strong>Manage Refills:</strong> Be aware of how much medication is left. Help remind the patient when it's time to call the pharmacy for a refill, ensuring there's always at least a week's supply in reserve.</li>
                <li><strong>Observe and Report:</strong> Pay attention to any new side effects the patient might be experiencing from their medications and encourage them to report these to the transplant team.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Pill Captain</h3>
            <p>Taking all the medicines can be confusing. You can be the "Pill Captain"! Your job is to help the player sort their pills for the whole week into a special box with little compartments for each day. It's like sorting LEGOs by color!</p>
            <p>You can also be the "Alarm Chief," setting up phone alarms that ring and say, "Time for your medicine!" This makes it almost impossible to forget. By being the Pill Captain and Alarm Chief, you help the player with their most important job, which is protecting their new kidney.</p>
        `
    },
    'recognizing-warning-signs': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Recognizing Warning Signs in a Transplant Recipient</h2>
            <p>As a caregiver, you are often the first person to notice subtle changes in your loved one's health. Knowing the key warning signs of potential problems like rejection or infection is crucial. Your quick action can make a huge difference.</p>
            <h3 class="text-xl font-bold font-headline">Key Warning Signs to Watch For:</h3>
            <p><strong>Contact the transplant team IMMEDIATELY if the patient has:</strong></p>
            <ul>
                <li>A fever with a temperature of 100.4°F (38°C) or higher.</li>
                <li>New pain or tenderness over the area of the transplanted kidney.</li>
                <li>Flu-like symptoms, such as chills, body aches, headache, or dizziness.</li>
                <li>A significant decrease in urine output.</li>
                <li>Sudden, unexplained weight gain or increased swelling in the hands, feet, or face.</li>
                <li>Nausea, vomiting, or diarrhea.</li>
                <li>A new cough, sore throat, or shortness of breath.</li>
            </ul>
            <p><strong>Trust your instincts.</strong> If something just doesn't seem right with your loved one, it's always better to be safe and call the transplant team. Do not wait for the next appointment to report a new or worrying symptom.</p>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: The Lookout</h3>
            <p>As the Team Manager, you're also the official Lookout. You're always watching to make sure the player is feeling good. There are a few important "warning flags" you need to watch for.</p>
            <p>The biggest warning flag is a **fever**. If the player feels hot or their thermometer reads a high number, you need to call the doctors right away. Other warning flags are a new "ouchie" near their new kidney, or if they feel sick like they have the flu.</p>
            <p>You have a special phone number for the transplant team. If you see any of these warning flags, your job is to call them immediately. Being a good Lookout helps catch problems when they are small and easy to fix.</p>
        `
    },
    'self-care-for-caregivers': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">The Importance of Self-Care for Caregivers</h2>
            <p>Caring for a transplant recipient is a demanding and often stressful role. It is not selfish to take care of yourself; it is essential. You cannot pour from an empty cup. To be an effective and sustainable source of support for your loved one, you must also attend to your own physical and emotional needs.</p>
            <h3 class="text-xl font-bold font-headline">What is Caregiver Burnout?</h3>
            <p>Burnout is a state of physical, emotional, and mental exhaustion. Signs include feeling tired all the time, losing interest in activities you once enjoyed, feeling irritable or hopeless, and changes in your sleep or eating patterns.</p>
            <h3 class="text-xl font-bold font-headline">Strategies for Self-Care</h3>
            <ul>
                <li><strong>Accept Help:</strong> When friends and family offer to help with meals, errands, or sitting with the patient, say YES. Create a list of specific tasks people can help with.</li>
                <li><strong>Take Breaks:</strong> You must schedule time for yourself, even if it's just 30 minutes to go for a walk, read a book, or listen to music. Regular, short breaks are more effective than waiting until you are exhausted.</li>
                <li><strong>Protect Your Health:</strong> Try to eat healthy meals, get enough sleep, and stay physically active. You are no good to your loved one if you become sick yourself.</li>
                <li><strong>Find Your Own Support:</strong> Talk to a trusted friend about your feelings. Consider joining a caregiver support group, either in-person or online, to connect with others who understand your situation.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Charging Your Own Batteries</h3>
            <p>Think of yourself like a phone. To help the player, your battery needs to be charged! If your battery runs out, you can't help anyone. Being a caregiver uses up a lot of your battery power.</p>
            <p>"Self-care" is how you charge your batteries. This means taking time to do things that make you happy, like talking to a friend, going for a walk, or just resting. It also means getting enough sleep and eating good food. When friends offer to help, let them! It's like letting someone plug you into a charger for a little while. By keeping your own battery full, you'll have all the energy you need to be an amazing Team Manager.</p>
        `
    },
    'communication-with-medical-team': {
        standard: `
            <h2 class="text-2xl font-bold font-headline">Communicating Effectively with the Medical Team</h2>
            <p>Clear and open communication is key to a successful transplant journey. As a caregiver, you play an important role in the communication loop between the patient and the healthcare providers.</p>
            <h3 class="text-xl font-bold font-headline">Tips for Effective Communication</h3>
            <ul>
                <li><strong>Be Prepared for Appointments:</strong> Before each visit, sit down with your loved one and write down a list of questions and concerns. This ensures you don't forget anything important.</li>
                <li><strong>Take Notes:</strong> During the appointment, write down the answers and instructions from the doctor or nurse. It can be hard to remember everything later. Ask for permission to record the conversation on your phone if that's easier.</li>
                <li><strong>Ask for Clarification:</strong> If you or the patient don't understand a medical term or an instruction, don't be afraid to say, "Could you explain that in a simpler way?"</li>
                <li><strong>Know Who to Call:</strong> Make sure you have a clear understanding of who your primary contact on the transplant team is (usually the Nurse Coordinator) and how to reach them during business hours and after hours for emergencies.</li>
                <li><strong>Be Clear and Concise:</strong> When you do need to call the team, state the reason for your call clearly. For example, "I am calling because my husband has a temperature of 101°F." Have relevant information ready, such as a list of current medications and recent vital signs.</li>
            </ul>
        `,
        eli10: `
            <h3 class="text-xl font-bold font-headline text-primary">Explain Like I'm 10: Talking to the Coaches</h3>
            <p>As the Team Manager, you need to talk to the coaches (the doctors and nurses) a lot. To be a great communicator, it helps to be prepared!</p>
            <p>Before you go to an appointment, make a list of questions, like a reporter. During the meeting, write down the answers in a notebook so you don't forget. If a coach uses a big, confusing word, it's totally okay to say, "Can you explain that in a simpler way?" It's like asking them to draw out the play on a whiteboard. Good, clear talking helps the whole team work together to help the player win!</p>
        `
    }
};

