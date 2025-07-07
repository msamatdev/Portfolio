import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Repertory from "@/components/projects/Breadcrumb";
import Container from "@/components/projects/Container";
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import SubTitle from "@/components/projects/Subtitle";
import TableOfContents from "@/components/projects/TableOfContents";
import Title from "@/components/projects/Title";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BikeRentalApp() {
  const t = useTranslations("Projects.BikeRentalAppProject");

  return (
    <MaxWidthWrapper>
      <Container>
        <Repertory PageName={t("title")} />
        <Title text={t("title")} />
        <Content>
          <TableOfContents
            items={[
              { title: t("TableOfContents.context"), href: "context" },
              { title: t("TableOfContents.stack"), href: "stack" },
              { title: t("TableOfContents.projectManagement"), href: "projectManagement" },
              { title: t("TableOfContents.creatingTheAPI"), href: "creatingTheAPI" },
              { title: t("TableOfContents.creatingTheFrontend"), href: "creatingTheFrontend" },
              { title: t("TableOfContents.auth"), href: "auth" },
              { title: t("TableOfContents.conclusion"), href: "conclusion" },
            ]}
          />
          <SubTitle title={t("TableOfContents.context")} id="context" />
          <SubContent>
            <p>{t("Text.p1")}</p>
            <p className="my-4">{t("Text.p2")}</p>
            <p>{t("Text.p3")}</p>
          </SubContent>
          <SubTitle title={t("TableOfContents.stack")} id="stack" />
          <SubContent>
            <p>{t("Text.p4")}</p>
            <p className="my-4">{t("Text.p5")}</p>
          </SubContent>
          <SubTitle title={t("TableOfContents.projectManagement")} id="projectManagement" />
          <SubContent>
            <p>
              {t("Text.p6")}
            </p>
          </SubContent>
          <SubTitle title={t("TableOfContents.creatingTheAPI")} id="creatingTheAPI" />
          <SubContent>
            <p>{t("Text.p7")}</p>
            <p className="my-4">{t("Text.p8")}</p>
            <p>{t("Text.p9")}</p>
          </SubContent>
          <SubTitle title={t("TableOfContents.creatingTheFrontend")} id="creatingTheFrontend" />
          <SubContent>
            <p>{t("Text.p10")}</p>
            <p className="mt-4">{t("Text.p11")}</p>
          </SubContent>
          <SubTitle title={t("TableOfContents.auth")} id="auth" />
          <SubContent>
            <p>{t("Text.p12")}</p>
            <p className="mt-4">{t("Text.p13")}</p>
          </SubContent>
          <SubTitle title={t("TableOfContents.conclusion")} id="conclusion" />
          <SubContent>
            <p>{t("Text.p14")}</p>
            <p className="w-full text-start mt-2">
              {t("Text.sourceCode")}{" "}
              <Link
                href="https://github.com/NoWauu/V-lib"
                className="underline decoration-dashed underline-offset-4 decoration-1"
              >
                {t("Text.here")}
              </Link>
              .
            </p>
          </SubContent>
        </Content>
      </Container>
    </MaxWidthWrapper>
  );
}
