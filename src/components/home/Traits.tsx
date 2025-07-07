import { Zap, FileHeart, Lightbulb } from "lucide-react";
import Separator from "@/components/Separator";
import { useTranslations } from "next-intl";

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
            <div
              key={trait.name}
              className="w-full h-full p-6 mb-1 rounded-xl dark:bg-muted/10 border-muted border-2 shadow-md"
            >
              {<trait.icon className="text-primary size-10" />}
              <h5 className="my-6 text-foreground text-3xl font-bold tracking-tight">
                {trait.name}
              </h5>
              <p className="text-muted-foreground tracking-wide">
                {trait.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Traits;
