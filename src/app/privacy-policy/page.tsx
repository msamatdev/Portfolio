import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from 'next/link';
import Separator from "@/components/Separator";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
    const t = useTranslations('PrivacyPolicyPage');

    return (
        <MaxWidthWrapper>
            <div className="max-w-5xl mx-auto mt-24 md:mt-36 lg:mt-44 px-6 flex flex-col items-start justify-center mb-12">
                <h1 className="text-center self-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16 lg:mb-20">
                    {t('title')}
                </h1>
                <div id="thirdParty">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        { t('thirdParty') }
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        { t('thirdPartyContentP1') }  {" "}
                        <Link
                            href="https://vercel.com/docs/concepts/analytics/privacy"
                            className="underline decoration-dashed underline-offset-4 decoration-1"
                        >
                            Vercel Analytics
                        </Link>
                        . { t('thirdPartyContentP2') }
                    </p>
                </div>
                <div id="cookies" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        { t('cookies') }
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        { t('cookiesContent') }
                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}