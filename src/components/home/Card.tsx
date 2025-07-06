import { useTranslations } from "next-intl";

const Card = () => {
  const t = useTranslations("HomePage.StatsCard");

  const perks = [
    {
      number: "4+",
      text: t("yearsOnLinux"),
      more: "(Ubuntu, Mint, Xubuntu, Arch)",
    },
    {
      number: "02",
      text: t("professionalExperience"),
      more: "",
    },
    {
      number: "1000+",
      text: t("hoursOfCoding"),
      more: "",
    },
  ];

  return (
    <div className="mt-16 lg:mx-36 grid md:gap-0 md:grid-cols-3 md:grid-rows-1 dark:bg-muted/10 border-muted border-2 p-6 rounded-lg grid-cols-1 grid-rows-3 gap-12 mx-6 dark:shadow-none shadow-md">
      {perks.map((perk) => (
        <div className="flex flex-col items-center" key={perk.text}>
          <p className="text-primary text-5xl font-bold text-center">
            {perk.number}
          </p>
          <p className="text-foreground text-lg text-center">{perk.text}</p>
          <p className="text-sm text-muted-foreground text-center">
            {perk.more}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
