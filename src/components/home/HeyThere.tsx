import { useTranslations } from 'next-intl';
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
    <div className="lg:px-12 py-10 grid md:grid-cols-10 grid-cols-1">
      <div className="md:col-span-6 m-auto text-center flex flex-col col-span-1 items-center max-w-max">
        <h1 className="text-4xl font-bold tracking-tight dark:text-foreground sm:text-5xl text-black z-[50]">
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
          className="block md:hidden border-box rounded-full border-primary border-[4px] mb-16 mt-16 z-[50]"
          width={310}
          height={310}
        />
        <p className="md:px-2 md:py-1 md:text-left md:mt-6 text-lg max-w-prose text-muted-foreground tracking-[0.01em] py-4 px-8 text-justify z-[50]">
          {t('intro')} {" "}
          <HoverCard>
            <HoverCardTrigger className="underline underline-offset-4 cursor-default">BUT Informatique</HoverCardTrigger>
            <HoverCardContent className="text-sm">
              {t('butInformatique')}
            </HoverCardContent>
          </HoverCard>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 z-[50]">
          <Link className={buttonVariants()} href="/projects">
            {t('browseProjects')}
          </Link>
          <Link className={buttonVariants({ variant: 'ghost' })} href="/contact">
            {t('contactMe')} &rarr;
          </Link>
        </div>
      </div>
      <div className="relative md:col-span-4 col-span-1 mx-auto rotate-2 z-50">
        <div className="relative min-h-[260px] min-w-[260px] sm:min-h-[280px] sm:min-w-[280px] hidden md:flex rotate-2 p-3 border-2 border-dashed rounded-[40px] border-primary/60">
          <Image
            src="/images/photos/homePhoto.png"
            alt="Picture of me"
            width={290}
            height={290}
            className="border-box rounded-[40px] border-primary border-[4px] z-[50] rotate-1"
          />
        </div>
      </div>
    </div>
  );
}

export default HeyThere;