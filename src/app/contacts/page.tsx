'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { Phone, MapPin, CalendarDays, Hospital } from "lucide-react";

export default function ContactsPage() {
    const { t } = useAppContext();

    const contactDetails = [
        {
            icon: Phone,
            titleKey: "contactsClinicPhoneTitle",
            value: "+91-XXX-XXX-XXXX",
            descriptionKey: "contactsClinicPhoneDesc"
        },
        {
            icon: MapPin,
            titleKey: "contactsClinicAddressTitle",
            value: "Department of Nephrology, Command Hospital (SC), Pune",
            descriptionKey: "contactsClinicAddressDesc"
        },
        {
            icon: CalendarDays,
            titleKey: "contactsOpdTitle",
            value: "Monday & Thursday",
            descriptionKey: "contactsOpdDesc"
        },
        {
            icon: Hospital,
            titleKey: "contactsEmergencyTitle",
            value: "Dial 102 or Hospital Emergency",
            descriptionKey: "contactsEmergencyDesc"
        }
    ]

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('contactsTitle')}</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{t('contactsCardTitle')}</CardTitle>
                    <CardDescription>{t('contactsCardDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactDetails.map((detail, index) => (
                         <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <detail.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">{t(detail.titleKey)}</h4>
                                <p className="text-lg font-bold text-foreground mt-1">{detail.value}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{t(detail.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
