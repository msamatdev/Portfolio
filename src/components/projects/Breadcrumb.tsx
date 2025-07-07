import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";

interface PageNameProp {
  PageName: String;
}

export default function Repertory(prop: PageNameProp) {
  const t = useTranslations("Projects.Components.Breadcrumb");

  return (
    <Breadcrumb className="mb-8 md:ms-2 ms-4 self-start">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{ t('home') }</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">{ t('projects') }</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{prop.PageName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
