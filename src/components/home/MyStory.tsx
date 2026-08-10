"use client";

import { Reveal } from "@/components/Reveal";
import Separator from "@/components/Separator";
import { Guitar, MountainSnow, Fuel, LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Language = {
  name: string;
  level: string;
};

type Interest = {
  label: string;
  icon: LucideIcon;
};

export default function MyStory() {
  const t = useTranslations("HomePage.Biography");

  const languages: Language[] = [
    { name: t('languages.french'), level: t('languages.frenchLevel') },
    { name: t('languages.english'), level: t('languages.englishLevel') },
    { name: t('languages.german'), level: t('languages.germanLevel') },
  ];

  const interests: Interest[] = [
    { label: t('interests.guitar'), icon: Guitar },
    { label: t('interests.simRacing'), icon: Fuel },
    { label: t('interests.hiking'), icon: MountainSnow },
  ];

  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-5 mt-4 px-4 gap-y-10 md:gap-x-12">
      <div className="flex flex-col gap-8 text-foreground/70 md:col-span-3 col-span-1 text-justify">
        <div>
          <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl">
            {t('title')}
          </h3>
        </div>

        <p>
          {t('paragraph1')}
        </p>
        <p>
          {t('paragraph2')}
        </p>
        <p>
          {t('paragraph3')}
        </p>
      </div>

      <div className="md:col-span-2 col-span-1 flex flex-col justify-center">
        <div className="flex flex-col gap-6 rounded-2xl border border-foreground/10 p-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              {t('languages.title')}
            </h4>

            <ul className="flex flex-col gap-4">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4 text-foreground/70">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-foreground/50">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="mt-0" />

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              {t('interests.title')}
            </h4>

            <ul className="flex flex-col gap-3">
              {interests.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 text-foreground/70">
                  <Icon className="size-4 shrink-0 text-foreground/50" strokeWidth={1.75} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}