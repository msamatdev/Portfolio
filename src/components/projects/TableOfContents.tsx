import { useTranslations } from "next-intl";

interface Part {
  title: string;
  href: string;
}

export default function TableOfContents({ items }: { items: Part[] }) {
  const t = useTranslations("Projects.TableOfContents");

  return (
    <nav className="w-full rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
        {t("title")}
      </p>
      <ol className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.href}`}
              className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {index + 1}
              </span>
              <span className="underline-offset-4 group-hover:underline">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}