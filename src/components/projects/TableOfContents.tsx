import { useTranslations } from "next-intl";

interface Part {
  title: string;
  href: string;
}

export default function TableOfContents({
  items
}: {  
  items: Part[]
}) {
  const t = useTranslations("Projects.TableOfContents");

  return (
    <div className="rounded-lg border-2 border-primary p-6 flex flex-col items-start justify-center gap-4 self-start mb-10">
      <p className="text-xl font-bold">{ t('title') }</p>
      <div className="flex flex-col items-start justify-center gap-2">
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.href}`}
            className="group"
          >
            <span className="text-lg text-primary">{index + 1}. </span>
            <span className="text-md group-hover:underline">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}