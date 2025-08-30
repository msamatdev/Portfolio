import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Separator from "@/components/Separator";
import Pictures from "@/components/about/Pictures";
import { Images } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  const t = useTranslations("AboutPage");

  const Skills = [
    {
      name: "Python",
      icon: "python",
      level: `${t('tools.good')} • ${t('tools.selfTaught')}`,
      id: 1,
    },
    {
      name: "Java",
      icon: "java",
      level: `${t('tools.average')} • ${t('tools.learnAtUniv')}`,
      id: 2,
    },
    {
      name: "Next.js",
      icon: "nextjs",
      level: `${t('tools.good')} • ${t('tools.selfTaught')}`,
      id: 3,
    },
    {
      name: "JavaScript, Typescript",
      icon: "javascript",
      level: `${t('tools.average')} • ${t('tools.selfTaught')}`,
      id: 4,
    },
    {
      name: "HTML 5",
      icon: "html",
      level: `${t('tools.good')} • ${t('tools.mostlySelfTaught')}`,
      id: 5,
    },
    {
      name: "CSS, Tailwind",
      icon: "tailwind",
      level: `${t('tools.good')} • ${t('tools.selfTaught')}`,
      id: 6,
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      level: `${t('tools.average')} • ${t('tools.learnAtUniv')}`,
      id: 7,
    },
    {
      name: "C",
      icon: "c",
      level: `${t('tools.beginner')} • ${t('tools.learnAtUniv')}`,
      id: 8,
    },
    {
      name: "Git",
      icon: "git",
      level: `${t('tools.average')} • ${t('tools.mostlySelfTaught')}`,
      id: 9,
    },
    {
      name: "Docker",
      icon: "docker",
      level: `${t('tools.average')} • ${t('tools.selfTaught')}`,
      id: 10,
    },
    {
      name: "Bash",
      icon: "bash",
      level: `${t('tools.average')} • ${t('tools.learnAtUniv')}`,
      id: 11,
    },
    {
      name: "Linux",
      icon: "linux",
      level: `${t('tools.average')} • ${t('tools.mostlySelfTaught')}`,
      id: 12,
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="md:mt-48 mt-28 px-12">
        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("aboutMeSection.title")}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mt-12 lg:mt-24 lg:px-40 gap-12">
          <div className="w-full h-full p-6">
            <div className="shadow-primary shadow-sm border-primary border-2 rounded-[32px] w-full h-full items-center justify-center flex">
              <Image 
                alt="Picture of me"
                src="/images/photos/aboutPhoto.jpg"
                width={400}
                height={400}
                className="object-cover rounded-[30px] h-full w-full"
              />
            </div>
          </div>
          <div className="text-lg">
            <p>{t("aboutMeSection.description.firstPart")}</p>
            <p className="mt-4">{t("aboutMeSection.description.secondPart")}</p>
            <p className="mt-4">{t("aboutMeSection.description.thirdPart")}</p>
          </div>
        </div>
      </div>
      <div className="mx-6 md:mx-0 mt-32">
        <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl dark:text-highlight selected-projects">
          {t("tools.title")}
        </h3>
        <Separator />
        <div className="grid place-items-center mt-16 mx-6 gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {Skills.map((skill) => (
            <div
              className="dark:bg-muted/15 border-2 border-muted shadow-md rounded-md w-full h-full px-2 py-8 flex flex-col items-center justify-center"
              key={skill.id}
            >
              <Image
                alt={`Logo of ${skill.name}`}
                src={`/images/toolsIcons/${skill.icon}.svg`}
                width={42}
                height={42}
              />
              <p className="mt-3 text-lg font-bold tracking-wide text-foreground">
                {skill.name}
              </p>
              <p className="mt-3 text-muted-foreground">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-44 px-12 mb-12">
        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("outsideUniversity.title")}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mt-12 lg:mt-24 lg:px-30 gap-12 lg:gap-16">
          <div className="text-lg">
            <p>{t("outsideUniversity.p1")}</p>
            <p className="mt-4">
              {t("outsideUniversity.p2.p1")}
              <Link
                href="https://youtu.be/MTAOKLT-zNA?t=10"
                className="decoration-dashed underline underline-offset-4 decoration-1"
                target="_blank"
              >
                {t("outsideUniversity.p2.link")}
              </Link>
              {t("outsideUniversity.p2.p2")}
            </p>
            <p className="mt-4">{t("outsideUniversity.p3")}</p>
          </div>
          <Pictures />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
