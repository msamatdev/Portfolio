"use client";

import { Box, Code, Cpu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ArrowDownUp } from "lucide-react";

import { useTranslations } from "next-intl";

const sortList = [
  {
    text: "HTML CSS JavaScript",
    action: "html",
  },
  {
    text: "3D Modeling",
    action: "3d",
  },
  {
    text: "PostgreSQL",
    action: "psql",
  },
  {
    text: "Python",
    action: "py",
  },
  {
    text: "Hosting",
    action: "host",
  },
  {
    text: "Next.js",
    action: "next",
  },
  {
    text: "Java",
    action: "java",
  },
  {
    text: "C",
    action: "c",
  },
];

const getProjectsList = (t: Function) => [
  {
    id: 1,
    link: "hosting-machine-setup",
    category: "host",
    icon: Cpu,
    title: t('Projects.1.title'),
    text: t('Projects.1.text'),
    tags: [
      {
        id: "1.1",
        text: t('Tags.linux'),
      },
      {
        id: "1.2",
        text: t('Tags.hosting'),
      },
      {
        id: "1.3",
        text: t('Tags.networking'),
      },
    ],
  },
  {
    id: 2,
    link: "portfolio",
    category: "next",
    icon: Code,
    title: t('Projects.2.title'),
    text: t('Projects.2.text'),
    tags: [
      {
        id: "2.1",
        text: "Next.js",
      },
      {
        id: "2.2",
        text: "React",
      },
      {
        id: "2.3",
        text: "Frameworks",
      },
    ],
  },
  {
    id: 3,
    link: "bike-rental-app",
    category: "py",
    icon: Code,
    title: t('Projects.3.title'),
    text: t('Projects.3.text'),
    tags: [
      {
        id: "3.1",
        text: t('Tags.fullstack'),
      },
      {
        id: "3.2",
        text: t('Tags.python'),
      },
      {
        id: "3.3",
        text: t('Tags.university'),
      },
    ],
  },
];

export default function ProjectsList() {
  const t = useTranslations("ProjectsPage");

  const [selectedProj, setSelectedProj] = useState("default");
  const selectProject = (projectType: string) => {
    setSelectedProj(projectType);
  };

  return (
    <>
      <div className="md:mt-48 mt-28 mb-8 md:px-24 px-8">
        <div className="flex justify-between items-center">
          <p className="font-bold tracking-tight text-foreground text-4xl">
            {t("title")}
          </p>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <span className="text-[22px]">{ t('sort') }</span>
                <ArrowDownUp className="ms-2 size-[20px]" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem
                  key="default"
                  onClick={() => selectProject("default")}
                >
                  { t('showEverything') }
                </MenubarItem>
                <MenubarSeparator />
                {sortList.map((category) => (
                  <MenubarItem
                    key={category.text}
                    onClick={() => selectProject(category.action)}
                  >
                    {category.text}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <p className="mt-6 text-muted-foreground">{t("description")}</p>

        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {getProjectsList(t).map((project: any) => (
            <Link
              href={`/projects/${project.link}`}
              key={project.id}
              className={clsx({
                flex:
                  selectedProj === project.category ||
                  selectedProj === "default",
                hidden:
                  selectedProj !== project.category &&
                  selectedProj !== "default",
              })}
            >
              <div className="group relative overflow-hidden border rounded-md border-primary/40 hover:border-primary/60 shadow-md">
                <div className="bg-background/40 backdrop-blur-[96px] flex flex-col items-start justify-between p-4 h-52 group-hover:bg-transparent">
                  <div className="flex items-center gap-[12px]">
                    {<project.icon />}
                    <h5 className="text-foreground font-bold text-xl">
                      {project.title}
                    </h5>
                  </div>
                  <p className="text-muted-foreground mb-[16px] mt-2">
                    {project.text}
                  </p>
                  <div className="w-full pt-2 border-t-[1px] dark:border-muted border-border flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                    {project.tags.map((tag: any) => (
                      <p key={tag.id}>{tag.text}</p>
                    ))}
                  </div>
                </div>
                <div className="absolute blur-xl bg-primary/70 group-hover:bg-primary top-0 right-6 rounded-full h-28 w-28 -z-20"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
