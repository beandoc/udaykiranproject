import React from 'react';
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
        <p>How long your transplanted kidney will work can depend on many factors. In Australia, around four in every ten kidney transplants are still working 15 years later. Some people have had kidney transplants that have lasted more than 30 years.</p>
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

export const contentData: ModuleContent = {
    'understanding-kidney-disease': understandingKidneyDiseaseContent,
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
