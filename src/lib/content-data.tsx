
import React from 'react';
import Image from 'next/image';
import { modulesByRole } from './modules-data';

type ModuleContent = {
    [key: string]: React.ReactNode;
};

const understandingKidneyDiseaseContent = (
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
    </div>
);

const understandingLivingDonationContent = (
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
    </div>
);

const transplantEvaluationProcessContent = (
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
    </div>
);

const transplantMatchingContent = (
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
    </div>
);

const surgeryDayExperienceContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">What to Expect on Surgery Day</h2>
        <p>Being prepared for your kidney transplant surgery can help ease some of the anxiety. Here’s a general overview of what happens before, during, and after the procedure.</p>

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
                <p>You will have blood tests every day to check the function of your transplanted kidney, to measure medication levels, and to detect any problems early so they can be treated quickly.</p>
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
                <p>In this procedure, the surgeon makes a few small incisions in the donor's abdomen. A tiny camera and specialized tools are used to carefully detach the kidney, which is then removed through one slightly larger incision. This method typically results in less pain and a faster recovery for the donor.</p>
            </div>
            <div className="space-y-2">
                <Image 
                    src="https://placehold.co/400x300.png" 
                    alt="Diagram showing the small incisions for a laparoscopic nephrectomy."
                    width={400}
                    height={300}
                    className="rounded-lg mx-auto border"
                    data-ai-hint="laparoscopic surgery incisions"
                />
                <p className="text-xs text-center text-muted-foreground">Laparoscopic surgery involves several small incisions, leading to a quicker recovery.</p>
            </div>
        </div>
    </div>
);

const postTransplantRecoveryContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">Going Home After Your Transplant</h2>
        <p>Caring for yourself after your kidney transplant is crucial, especially during the first few months, which is a critical period of adjustment. It's essential to follow your doctor's instructions closely and immediately report any changes in your health to your care team.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Regular Check-ups</h3>
        <p>You will have frequent check-ups to monitor your new kidney's function. Initially, these appointments may be very frequent, gradually becoming less so as you recover—moving to weekly, and then monthly.</p>
        <p>During these visits, your medical team will assess your surgical wound to ensure it's healing properly and check for any signs of organ rejection. Factors like certain medications, diabetes, or obesity can slow down wound healing. If you have any of these risk factors, you may be monitored more closely.</p>

        <h3 className="text-xl font-bold font-headline pt-4">Planning for Your Discharge</h3>
        <p>It's important to plan where you will stay after being discharged from the hospital. If you live far from the transplant center, you may need to arrange for temporary accommodation nearby for the first few weeks to be close to your medical team for follow-up appointments.</p>
        <p>Start thinking about these arrangements early. Discuss potential travel and accommodation assistance programs with your hospital's social worker or transplant coordinator, as many centers offer resources to help with these logistics.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Returning to Daily Life</h3>
        <p>You can generally expect to return to normal activities and work within three to six months of your transplant. This period allows time for your surgical wound to heal and your stomach muscles to regain strength.</p>
        <p>Regular exercise is a vital part of staying healthy. It's recommended to begin an exercise routine under the guidance of your healthcare team.</p>
        <p>For your safety, you should not drive for at least six weeks after your transplant. It's also important to avoid any heavy lifting during this initial recovery period.</p>
        <p>Pay close attention to the color of your urine. If it appears too dark, increase your water intake. If you notice any unusual colors, redness, or if your urine is frothy, contact your healthcare team.</p>
        <p>Managing your medications is one of your most important responsibilities. You must take your medications exactly as prescribed. With a large number of medications required at specific times, using a pill organizer and getting support from your pharmacist can be extremely helpful.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">More Tips on Staying Healthy</h3>
        <p>Living a healthy lifestyle is key to protecting your new kidney. Here are some important tips to follow:</p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 pt-2">
            <div className="space-y-3">
                <h4 className="font-bold">Avoid Infections</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Wash your hands frequently and thoroughly.</li>
                    <li>Keep all your vaccinations up to date.</li>
                    <li>Limit contact with people who have colds or viruses.</li>
                    <li>Clean and treat any cuts or scratches immediately.</li>
                </ul>
            </div>
            <div className="space-y-3">
                <h4 className="font-bold">Reduce Cancer Risk</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Protect your skin from the sun with clothing, sunscreen, and a hat.</li>
                    <li>Get regular screenings for common cancers as advised by your doctor.</li>
                </ul>
            </div>
            <div className="space-y-3">
                 <h4 className="font-bold">Be a Non-Smoker</h4>
                 <p>Smoking increases your risk of serious health issues and can reduce the long-term success of your transplant.</p>
            </div>
             <div className="space-y-3">
                 <h4 className="font-bold">Report Illness Promptly</h4>
                 <p>If you get sick, contact your healthcare team right away. Quick treatment can prevent damage to your new kidney.</p>
            </div>
            <div className="space-y-3">
                 <h4 className="font-bold">Maintain a Healthy Weight</h4>
                 <p>Your anti-rejection medications might increase your appetite. Talk to your doctor or dietitian about strategies to manage your weight effectively.</p>
            </div>
            <div className="space-y-3">
                <h4 className="font-bold">Practice Good Food Safety</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Wash hands before preparing food and eating.</li>
                    <li>Use separate cutting boards for raw and cooked meats.</li>
                    <li>Cook foods thoroughly, ensuring no pink is left in meat.</li>
                    <li>Avoid high-risk foods like soft cheeses (brie, camembert), pâté, and raw seafood to prevent food poisoning.</li>
                </ul>
            </div>
        </div>
    </div>
);

const mentalHealthSupportContent = (
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
    </div>
);

const understandingRejectionContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">Understanding the Risk of Rejection</h2>
        <p>Anti-rejection medications (immunosuppressants) are a lifelong requirement for as long as your new kidney is functioning. They work by partially suppressing your immune system to prevent it from identifying the transplanted kidney as a foreign object and attacking it.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Know Your Medications</h3>
        <p>It's vital to understand your medications fully. For each one, make sure you know:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li>When and how to take them</li>
            <li>What you should do if you miss a dose</li>
            <li>Any potential dietary restrictions</li>
            <li>How they might interact with other medications</li>
            <li>Common side effects to watch for</li>
            <li>How to store them correctly</li>
        </ul>
        <p className="pt-2">Your pharmacist is an excellent resource for this information, and using a pill organizer can help you stay on track with your schedule.</p>

        <h3 className="text-xl font-bold font-headline pt-4">What Are Rejection Episodes?</h3>
        <p>It's not uncommon to experience rejection episodes, especially in the early period after your transplant. Often, these are so subtle that they are only detected through your routine blood tests. In most cases, these episodes can be successfully treated by simply adjusting your medications.</p>
        <p>More significant rejection episodes might require additional treatments, like plasma exchange (a process to remove harmful antibodies from your blood) or other specialized infusions. The good news is that most rejection can be managed effectively.</p>
        <p>However, it's crucial to remember that rejection can happen at any time. This is why strictly following your medication schedule, attending all check-ups, and reporting any new symptoms to your team is so important for the long-term health of your new kidney.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Types of Rejection</h3>
        <p>There are different types of rejection, each occurring on a different timeline:</p>
        <ul className="list-none space-y-4 pl-0">
            <li className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-bold">Hyperacute Rejection</h4>
                <p>This is a very rare type that can happen within minutes or hours of surgery. It is caused by a severe, immediate immune response. This type cannot be treated, and the new kidney must be removed right away.</p>
            </li>
            <li className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-bold">Acute Rejection</h4>
                <p>This is a more common type, often happening within the first few weeks or months. It involves a sudden inflammation of the new kidney. Acute rejection might cause pain or fever, but often there are no symptoms, which is why your routine blood tests are so important. If your lab results show a problem, a kidney biopsy might be needed to confirm it. Fortunately, most cases of acute rejection can be successfully treated with changes to your medication.</p>
            </li>
            <li className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-bold">Chronic Rejection</h4>
                <p>This is a slow, long-term process where the new kidney gradually becomes damaged and scarred over several years. It can be caused by antibodies that your body develops over time against the new kidney. This type of rejection is harder to treat and can eventually lead to kidney failure, requiring a return to dialysis or another transplant.</p>
            </li>
        </ul>
    </div>
);

const immunosuppressiveMedicationsContent = (
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
            <li>Higher risk of developing high blood pressure, diabetes, or some cancers (especially skin cancer)</li>
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
    </div>
);

const donorEvaluationContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">The Medical Evaluation for Living Donors</h2>
        <p>Becoming a living kidney donor is a generous act. To ensure it's safe for you, the potential donor must have normal kidney function, be in good overall health, and be emotionally prepared for the donation process. The evaluation involves a series of medical tests and a psychological assessment.</p>

        <h3 className="text-xl font-bold font-headline pt-4">The Medical Assessment</h3>
        <p>If you are considering being a living donor, you'll undergo a thorough medical check-up. The primary goal is to ensure that donating a kidney is safe for you, both immediately and in the long run. The transplant team will also confirm that you are fit for surgery and that your kidney is suitable for donation.</p>

        <h3 className="text-xl font-bold font-headline pt-4">What Tests Are Involved?</h3>
        <p>A number of tests are required to ensure a living donor is a suitable match. These may include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Tissue and blood type matching with the recipient.</li>
            <li>Testing the recipient for any antibodies that might react to the donor's kidney.</li>
            <li>Blood tests and scans to check that your own kidneys are working well and show no signs of damage.</li>
            <li>Screening for viruses that could cause infection.</li>
            <li>General health checks for heart disease, lung problems, diabetes, and cancer.</li>
        </ul>

        <h3 className="text-xl font-bold font-headline pt-4">What if a Health Issue is Found?</h3>
        <p>During these tests, it's possible to discover a health problem you weren't aware of. If this happens, the medical team will provide full support and refer you to a specialist for care.</p>
    </div>
);

const donorEligibilityContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">Who Can Be a Living Donor?</h2>
        <p>Not everyone is able to be a living kidney donor. The evaluation process is designed to protect your health first and foremost. Certain health conditions may prevent someone from being able to donate safely.</p>
        <h3 className="text-xl font-bold font-headline pt-4">Conditions That May Prevent Donation</h3>
        <p>Some of the common reasons a person may not be eligible to donate include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 columns-1 md:columns-2">
            <li>Having cancer, a history of cancer, hepatitis, or AIDS.</li>
            <li>Having diabetes or a high risk of developing it.</li>
            <li>Significant heart or lung problems, including uncontrolled high blood pressure.</li>
            <li>Being significantly overweight.</li>
            <li>Being an active smoker.</li>
            <li>Certain psychological concerns that might make the process too difficult.</li>
        </ul>
        <p className="pt-2">The transplant team is dedicated to helping potential donors fully understand the risks and benefits. Their primary responsibility is to ensure your well-being throughout the entire process.</p>
    </div>
);

const psychologicalAssessmentContent = (
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
    </div>
);

const donorSurgeryOverviewContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">The Donor's Surgical Procedure</h2>
        <p>The transplant team will discuss the surgical options in detail with the living donor. Most kidney removal procedures today are done using a minimally invasive technique, but traditional open surgery is also an option.</p>

        <h3 className="text-xl font-bold font-headline pt-4">Laparoscopic Nephrectomy (Keyhole Surgery)</h3>
         <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
                <p>This is the most common method. The surgeon makes several small incisions in the donor's abdomen. A laparoscope—a thin tube with a video camera—is inserted, allowing the surgeon to see inside the body on a monitor.</p>
                <p>Using special instruments, the surgeon carefully detaches the kidney. It is then removed through a slightly larger incision, often placed below the belly button. This is done either by hand or using a special surgical bag.</p>
                <p>This minimally invasive approach typically results in less pain, a shorter hospital stay, and a faster overall recovery for the donor.</p>
            </div>
            <div className="space-y-2">
                <Image
                    src="https://placehold.co/400x300.png"
                    alt="Diagram showing the small incisions for a laparoscopic nephrectomy."
                    width={400}
                    height={300}
                    className="rounded-lg mx-auto border"
                    data-ai-hint="laparoscopic surgery incisions"
                />
                <p className="text-xs text-center text-muted-foreground">Laparoscopic surgery involves several small incisions, leading to a quicker recovery.</p>
            </div>
        </div>

        <h3 className="text-xl font-bold font-headline pt-8 border-t mt-8">Open Nephrectomy</h3>
        <p>In a traditional open surgery, the surgeon makes one larger incision, about 15–25 cm (6–10 inches) long, on the front or side of the abdomen. This allows direct access to the kidney.</p>
        <p>The surgeon will then clamp and cut the blood vessels and the ureter connected to the kidney before removing it. This method may be used if the donor's anatomy is not suitable for keyhole surgery or for other medical reasons.</p>
    </div>
);

const donorRecoveryTimelineContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">The Donor's Recovery Journey</h2>
        <p>Recovering from kidney donation surgery is a process that requires time and care. Understanding what to expect can help donors prepare for the weeks following the procedure.</p>

        <h3 className="text-xl font-bold font-headline pt-4">In the Hospital</h3>
        <p>After the surgery, it is completely normal for the donor to feel some pain and discomfort around the incision area. This will be managed with pain medication provided by the hospital staff.</p>
        <p>The typical hospital stay for a living kidney donor is between <strong>four and ten days</strong>. This can vary depending on the type of surgery (laparoscopic vs. open) and the individual's recovery progress.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Recovery at Home</h3>
        <p>Full recovery at home can take up to <strong>six weeks</strong>. During this important healing period, there are some key restrictions to follow:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>No Driving:</strong> Donors should not drive a car for a minimum of six weeks.</li>
            <li><strong>No Heavy Lifting:</strong> It is crucial to avoid any heavy lifting for at least six weeks to allow the abdominal muscles to heal properly.</li>
        </ul>
        <p>It is essential to follow all recovery instructions provided by the medical team. This helps reduce the risk of complications, such as infection, and supports a smooth healing process.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Recovery Time Comparison</h3>
        <p>Donors who undergo a laparoscopic (keyhole) surgery often experience a quicker recovery compared to those who have a traditional open nephrectomy. However, every person's experience is different. It is important to discuss the recovery process openly with the healthcare team, as well as with family and friends who can provide support.</p>
    </div>
);

const risksAndBenefitsContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">Long-Term Health After Donation</h2>
        <p>Deciding to be a living kidney donor is a generous act, and it's natural to have questions about your own health in the future. The great news is that extensive research shows that living donors can live a normal, healthy life with one kidney.</p>

        <h3 className="text-xl font-bold font-headline pt-4">How Your Body Adapts</h3>
        <p>The human body is remarkable. When one kidney is removed, the remaining kidney gets bigger and works harder to take over the job of the donated one. This process is called <strong>"compensatory growth."</strong></p>
        <p>Studies show that after donation, a donor's total kidney function (how well the kidneys filter waste) returns to about <strong>70-80%</strong> of what it was with two kidneys. This is more than enough to stay healthy and live a full life. Donating a kidney does not impact your life expectancy.</p>
        
        <h3 className="text-xl font-bold font-headline pt-4">Long-Term Health Considerations</h3>
        <p>While the outlook is excellent, there are a few things to be aware of for the long term:</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>Blood Pressure:</strong> Donors have a slightly higher-than-average risk of developing high blood pressure later in life. Maintaining a healthy diet and getting regular physical activity are key to staying healthy. This is especially important for donors who may want to become pregnant after donation.</li>
            <li><strong>Kidney Failure:</strong> The risk of a donor's remaining kidney failing later in life is very low—less than 1% of people who donate ever need dialysis or a transplant themselves. This risk is only slightly higher than that of the general population.</li>
            <li><strong>Priority on the Waitlist:</strong> In the rare event that a former living donor does need a kidney transplant in the future, they are given a high-priority position on the national transplant waiting list.</li>
        </ul>

        <h3 className="text-xl font-bold font-headline pt-4">Your Emotional Well-being</h3>
        <p>The vast majority of living donors (80–90%) report feeling very positive and satisfied with their decision to donate, even long after the surgery. It is a profoundly rewarding experience for many.</p>
        <p>However, it's also normal to feel anxious or depressed for a short time after the donation. This can be a natural response to a major life event. These feelings are not uncommon, even when both you and the recipient are doing well.</p>
        <p>It is vital to talk to the transplant team about how you're feeling, both physically and emotionally, during your follow-up visits. Your emotional health is just as important as your physical recovery, and support is always available.</p>
    </div>
);

export const contentData: ModuleContent = {
    'understanding-kidney-disease': understandingKidneyDiseaseContent,
    'understanding-living-donation': understandingLivingDonationContent,
    'evaluation-process': transplantEvaluationProcessContent,
    'transplant-matching': transplantMatchingContent,
    'surgery-day': surgeryDayExperienceContent,
    'post-transplant-recovery': postTransplantRecoveryContent,
    'mental-health-support': mentalHealthSupportContent,
    'understanding-rejection': understandingRejectionContent,
    'immunosuppressants': immunosuppressiveMedicationsContent,
    'donor-evaluation': donorEvaluationContent,
    'donor-eligibility': donorEligibilityContent,
    'psychological-assessment': psychologicalAssessmentContent,
    'donor-surgery': donorSurgeryOverviewContent,
    'donor-recovery': donorRecoveryTimelineContent,
    'risks-and-benefits': risksAndBenefitsContent,
};

// Placeholder for other modules
const defaultContent = (
    <div className="space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold font-headline">Content Coming Soon</h2>
        <p>This module's educational content is currently being prepared. Please check back later for detailed information.</p>
    </div>
);


Object.values(modulesByRole).forEach(roleData => {
    roleData.modules.forEach(module => {
        if (!contentData[module.slug]) {
            contentData[module.slug] = defaultContent;
        }
    });
});
