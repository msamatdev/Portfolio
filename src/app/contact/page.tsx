import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LetsConnect from "@/components/contact/Connect";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: 'Contact',
};

export default function ContactMe() {
    const t = useTranslations('ContactPage');

    return (
        <MaxWidthWrapper>
            <div className="md:mt-48 mt-28 mb-8 md:px-24 px-8">
                <p className="font-bold tracking-tight text-foreground text-4xl">{ t('title') }</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 lg:px-12 gap-16 lg:gap-8">
                    <LetsConnect />
                    <ContactForm />
                </div>
            </div>
        </MaxWidthWrapper>
    )
}