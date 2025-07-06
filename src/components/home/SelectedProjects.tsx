import Link from "next/link";
import { MousePointerClick, CalendarDays } from "lucide-react";
import Separator from "@/components/Separator";
import { useTranslations } from "next-intl";

const SelectedProjects = () => {
  const t = useTranslations('HomePage.SelectedProjects');

  const Projects = [
    {
      id: 1,
      name: t('First.name'),
      href: "/projects/hosting-machine-setup",
      description:
        t('First.description'),
      tags: [
        { id: "1.1", text: t('First.firstTag') },
        { id: "1.2", text: t('First.secondTag') },
        { id: "1.3", text: t('First.thirdTag') },
      ],
      date: t('First.date'),
    },
    {
      id: 2,
      name: t('Second.name'),
      href: "/projects/algorithms-comparison",
      description:
        t('Second.description'),
      tags: [
        { id: "2.1", text: t('Second.firstTag') },
        { id: "2.2", text: t('Second.secondTag') },
        { id: "3.3", text: t('Second.thirdTag') },
      ],
      date: t('Second.date'),
    },
  ];

  return (
    <div className="md:px-24 px-8 mt-32">
      <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl">
        {t('selectedProjects')}
      </h3>
      <Separator />
      <div
        className="
                my-12 grid grid-cols-1 lg:grid-cols-2 grid-flow-rows gap-10
            "
      >
        {Projects.map((project) => {
          return (
            <Link key={project.id} href={project.href}>
              <div className="p-6 rounded-md dark:bg-muted/10 border-2 border-muted shadow-md hover:scale-105 animateCardsSize">
                <p className="text-foreground text-3xl">{project.name}</p>
                <p className="flex items-center mt-4">
                  <CalendarDays className="size-5" />
                  <span className="ms-2">{project.date}</span>
                </p>
                <p className="text-md text-muted-foreground mt-4">
                  {project.description}
                </p>
                <div className="flex mt-4 flex-wrap">
                  {project.tags.map((tag) => {
                    return (
                      <p
                        key={tag.id}
                        className="me-4 bg-accent px-3 py-1 rounded-xl md:mb-0 mb-2"
                      >
                        {tag.text}
                      </p>
                    );
                  })}
                </div>
                <div className="mt-6 flex justify-end text-violet-600">
                  <p className=" flex items-center justify-center py-1 px-2 rounded-lg">
                    <MousePointerClick />
                    <span className="ms-2 font-semibold">{t('learnMore')}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedProjects;
