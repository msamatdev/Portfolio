import {useTranslations} from 'next-intl';
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import TypeAnim from "@/components/home/TypeAnim";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const HeyThere = () => {
  const t = useTranslations('HomePage.Welcome');

  return (
    <div className="lg:px-12 md:mt-40 mt-16 py-10 grid md:grid-cols-10 grid-cols-1">
      <div className="md:col-span-6 m-auto text-center flex flex-col col-span-1 items-center max-w-max ">
        <h1 className="text-4xl font-bold tracking-tight dark:text-foreground sm:text-5xl text-black">
          👋 {t('hello')} <br /> {t('iAm')} Mathis SAMAT, <br /> {t('a')} {" "}
          <span className="text-primary">
            <TypeAnim 
              key={t('frenchStudent')}
              frenchStudent={t('frenchStudent')}
              frenchDeveloper={t('frenchDeveloper')}
              techSavvy={t('techSavvy')}
              simRacer={t('simRacer')}
              carEnthusiast={t('carEnthusiast')}
            />
          </span>
        </h1>
        <Image 
          src="/images/photos/homePhoto.png"
          alt="Picture of me"
          className="block md:hidden border-box rounded-full border-primary border-[4px] mb-16 mt-16"
          width={310}
          height={310}
        />
        <p className="md:px-2 md:py-1 md:text-left md:mt-6 text-lg max-w-prose text-muted-foreground tracking-[0.01em] py-4 px-8 text-justify">
          {t('intro')} {" "}
          <HoverCard>
            <HoverCardTrigger className="underline underline-offset-4 cursor-default">BUT Informatique</HoverCardTrigger>
            <HoverCardContent className="text-sm">
              {t('butInformatique')}
            </HoverCardContent>
          </HoverCard>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className={buttonVariants()} href="/projects">
            {t('browseProjects')}
          </Link>
          <Link className={buttonVariants({ variant: 'ghost' })} href="/contact">
            {t('contactMe')} &rarr;
          </Link>
        </div>
      </div>
      <div className="md:col-span-4 col-span-1  flex-col items-center justify-center hidden md:flex">
      <Image 
          src="/images/photos/homePhoto.png"
          alt="Picture of me"
          width={352}
          height={352}
          className="border-box customRound border-primary border-[3px] "
      />
      </div>
    </div>
  );
}

export default HeyThere;