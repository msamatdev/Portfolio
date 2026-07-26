"use client";
import { Zap, FileHeart, Lightbulb } from "lucide-react";
import Separator from "@/components/Separator";
import { useTranslations } from "next-intl";
import BorderGlow from "@/components/BorderGlow";

const Traits = () => {
  const t = useTranslations("HomePage.Traits");

  const TraitsArray = [
    {
      icon: Zap,
      name: t("eager"),
      description: t("eagerDescription"),
    },
    {
      icon: FileHeart,
      name: t("driven"),
      description: t("drivenDescription"),
    },
    {
      icon: Lightbulb,
      name: t("curious"),
      description: t("curiousDescription"),
    },
  ];

  return (
    <div className="md:px-24 px-8 mt-32">
      <h3 className="inline relative font-bold tracking-tight text-accent-foreground text-4xl dark:text-highlight traits">
        {t("myTraits")}
      </h3>
      <Separator />
      <div
        className="
            grid place-items-center mt-12 
            xl:grid-cols-3 xl:grid-rows-1 lg:gap-14
            lg:grid-cols-2 lg:grid-rows-2
            grid-cols-1 grid-rows-3 gap-8
        
        "
      >
        {TraitsArray.map((trait) => {
          return (
            <BorderGlow
              key={trait.name}
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={12}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={100}
              animated={false}
              colors={['#7C3AED', '#7C3AED', '#5538f8']}
              className="w-full h-full p-6 mb-1 rounded-xl dark:bg-muted/10 border-muted border-2 shadow-md"
            >
              {<trait.icon className="text-primary size-10" />}
              <h5 className="my-6 text-foreground text-3xl font-bold tracking-tight">
                {trait.name}
              </h5>
              <p className="text-muted-foreground tracking-wide">
                {trait.description}
              </p>
            </BorderGlow>
          );
        })}
      </div>
    </div>
  );
};

export default Traits;
