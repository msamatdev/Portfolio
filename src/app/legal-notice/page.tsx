import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from 'next/link';
import Separator from "@/components/Separator";
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('LegalNoticePage');

  return (
    <MaxWidthWrapper>
      <div className="max-w-5xl mx-auto mt-24 md:mt-36 lg:mt-44 px-6 flex flex-col items-start justify-center mb-12">
        <h1 className="text-center self-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
          { t('title') }
        </h1>
        <div id="copyright" className="mt-16">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            1. { t('copyrightNotice.title') }
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('copyrightNotice.description') }
          </p>
        </div>
        <div id="owner" className="mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            2. { t('websiteOwner.title') }
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('websiteOwner.description') } {" "}
            <Link
                href="mailto:mathis.samat@gmail.com"
                className="underline decoration-dashed underline-offset-4 decoration-1"
            >
                mathis.samat@gmail.com
            </Link>
            .
          </p>
        </div>
        <div id="hosting" className="mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            3. { t('websiteHosting.title') }
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('websiteHosting.description') }
          </p>
        </div>
        <div id="links" className="mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            4. { t('links.title') }
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('links.description') }
          </p>
        </div>
        <div id="laws" className="mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            5. {t('lawsAndDataCollection.title')}
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('lawsAndDataCollection.descriptionP1') } {" "}
            <Link
                href="/privacy-policy"
                className="underline decoration-dashed underline-offset-4 decoration-1"
            >
                { t('lawsAndDataCollection.privacyPolicy') }
            </Link>
            . { t('lawsAndDataCollection.descriptionP2') }
          </p>
        </div>
        <div id="noticeChanges" className="mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
            6. { t('changes.title') }
            <Separator />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            { t('changes.description') }
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}