"use client";

import { Reveal } from "@/components/Reveal";
import Separator from "@/components/Separator";
import { Guitar, MountainSnow, Fuel, LucideIcon } from "lucide-react";

type Language = {
  name: string;
  level: string;
};

type Interest = {
  label: string;
  icon: LucideIcon;
};

const languages: Language[] = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Courant" },
  { name: "Allemand", level: "Notions" },
];

const interests: Interest[] = [
  { label: "Guitare électrique (autodidacte)", icon: Guitar },
  { label: "Simracing", icon: Fuel },
  { label: "Randonnée", icon: MountainSnow },
];

export default function MyStory() {
  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-5 mt-4 px-4 gap-y-10 md:gap-x-12">
      <div className="flex flex-col gap-8 text-foreground/70 md:col-span-3 col-span-1 text-justify">
        <div>
          <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl">
            Biographie
          </h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Aenean euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
      </div>

      <div className="md:col-span-2 col-span-1 flex flex-col justify-center">
        <div className="flex flex-col gap-6 rounded-2xl border border-foreground/10 p-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Langues
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
              Centres d&apos;intérêt
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