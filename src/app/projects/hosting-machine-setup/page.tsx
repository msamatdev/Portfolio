import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from "@/components/projects/Breadcrumb";
import Banner from "@/components/projects/Banner";
import SubTitle from "@/components/projects/Subtitle";
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import ProjectImage from "@/components/projects/ProjectImage";
import Container from "@/components/projects/Container";
import TableOfContents from "@/components/projects/TableOfContents";
import { useTranslations } from "next-intl";

const getTableOfContentsItems = (t: Function) => [
  {
    title: t("TableOfContents.context"),
    href: "context",
  },
  {
    title: t("TableOfContents.usb"),
    href: "usb",
  },
  {
    title: t("TableOfContents.settingup"),
    href: "settingup",
  },
  {
    title: t("TableOfContents.hosting"),
    href: "hosting",
  },
  {
    title: t("TableOfContents.conclusion"),
    href: "conclusion",
  },
];

export default function Hosting() {
  const t = useTranslations("Projects.HostingProject");

  return (
    <MaxWidthWrapper>
      <Container>
        <Repertory PageName={t('title')} />
        <Banner alt="Photo of a server" fileName="server.jpg" />
        <Title text={t('title')} />
        <Content>
          <TableOfContents items={getTableOfContentsItems(t)} />
          <SubTitle title={ t("TableOfContents.context") } id="context" />
          <SubContent>
            <p>
              { t('Text.p1') }
            </p>
          </SubContent>
          <SubTitle title={ t("TableOfContents.usb") } id="usb" />
          <SubContent>
            <p>
              { t('Text.p2') }
            </p>
            <p className="mt-4">
              { t('Text.p3') }
            </p>
            <p className="mt-4">
              { t('Text.p4') }
            </p>
            <ProjectImage alt="Rufus screenshot" fileName="rufus.jpg" />
          </SubContent>
          <SubTitle title={ t("TableOfContents.settingup") } id="settingup" />
          <SubContent>
            <p>
              { t('Text.p5') }
            </p>
          </SubContent>
          <SubTitle title={ t("TableOfContents.hosting") } id="hosting" />
          <SubContent>
            <p>
              { t('Text.p6') }
            </p>
            <p className="mt-4">
              { t('Text.p7') }
            </p>
          </SubContent>
          <SubTitle title={ t("TableOfContents.conclusion") } id="conclusion" />
          <SubContent>
            <p>
              { t('Text.p8') }
            </p>
          </SubContent>
        </Content>
      </Container>
    </MaxWidthWrapper>
  );
}
