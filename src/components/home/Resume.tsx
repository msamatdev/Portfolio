"use client";

import { Timeline } from "@/components/Timeline";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";


export default function Resume() {
  const t = useTranslations("HomePage.Resume");

  const experience = [
    {
      title: t('WorkExp.First.title'),
      subtitle: t('WorkExp.First.subtitle'),
      startDate: t('WorkExp.First.startDate'),
      endDate: t('WorkExp.First.endDate'),
      description: t('WorkExp.First.description'),
      points: [t('WorkExp.First.points.first'), t('WorkExp.First.points.second'), t('WorkExp.First.points.third'), t('WorkExp.First.points.fourth'), t('WorkExp.First.points.fifth')]
    },
    {
      title: t('WorkExp.Second.title'),
      subtitle: t('WorkExp.Second.subtitle'),
      startDate: t('WorkExp.Second.startDate'),
      endDate: t('WorkExp.Second.endDate'),
      description: t('WorkExp.Second.description'),
      points: [t('WorkExp.Second.points.first'), t('WorkExp.Second.points.second'), t('WorkExp.Second.points.third'), t('WorkExp.Second.points.fourth'), t('WorkExp.Second.points.fifth'), t('WorkExp.Second.points.sixth')]
    }
  ]

  const education = [
    {
      title: t('Education.First.title'),
      subtitle: t('Education.First.subtitle'),
      startDate: t('Education.First.startDate'),
      endDate: t('Education.First.endDate'),
      description: t('Education.First.description'),
      points: [t('Education.First.points.first'), t('Education.First.points.second'), t('Education.First.points.third')]
    },
    {
      title: t('Education.Second.title'),
      subtitle: t('Education.Second.subtitle'),
      startDate: t('Education.Second.startDate'),
      endDate: t('Education.Second.endDate'),
      description: t('Education.Second.description'),
      points: [t('Education.Second.points.first'), t('Education.Second.points.second'), t('Education.Second.points.third'), t('Education.Second.points.fourth')]
    },
    {
      title: t('Education.Third.title'),
      subtitle: t('Education.Third.subtitle'),
      startDate: t('Education.Third.startDate'),
      endDate: t('Education.Third.endDate'),
      description: t('Education.Third.description'),
      points: [t('Education.Third.points.first'), t('Education.Third.points.second')]
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-16 px-2">
      <Timeline
        title="Education"
        icon={GraduationCap}
        items={education}
      />
      <Timeline
        title="Work experience"
        icon={Briefcase}
        items={experience}
      />
    </div>
  )
}