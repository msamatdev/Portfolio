import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import SubTitle from '@/components/projects/Subtitle';
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import Container from "@/components/projects/Container";
import { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TableOfContents from "@/components/projects/TableOfContents";

export const metadata: Metadata = {
    title: "Creation of this portfolio",
}

export default function Portfolio() {
    const t = useTranslations("Projects.PortfolioProject");

    return (
        <MaxWidthWrapper>
            <Container>
                <Repertory PageName={ t('title') } />
                <Title text={ t('title') } />
                <Content>
                    <TableOfContents
                        items={[
                            { title: t('TableOfContents.context'), href: 'context' },
                            { title: t('TableOfContents.frameworks'), href: 'frameworks' },
                            { title: t('TableOfContents.starting'), href: 'starting' },
                            { title: t('TableOfContents.landing'), href: 'landing' },
                            { title: t('TableOfContents.progressing'), href: 'progressing' },
                            { title: t('TableOfContents.conclusion'), href: 'conclusion' }
                        ]}
                    />
                    <SubTitle title={t('TableOfContents.context')} id="context"/>
                    <SubContent>
                        <p>
                            { t('Text.p1') }
                        </p>
                        <p className="my-4">
                            { t('Text.p2') }  
                        </p>
                        <p>
                            { t('Text.p3') }
                        </p>     
                    </SubContent>
                    <SubTitle title={t('TableOfContents.frameworks')} id="frameworks" />
                    <SubContent>
                        <p>
                            { t('Text.p4') }
                        </p>
                        <p className="my-4">
                            { t('Text.p5') }
                        </p>
                        <p>
                            { t('Text.p6') }
                        </p>
                    </SubContent>
                    <SubTitle title={t('TableOfContents.starting')} id="starting"/>
                    <SubContent>
                        <p>
                            { t('Text.p7-1') } 
                            <code>npx create-next-app@latest</code>.
                            { t('Text.p7-2') }
                        </p>
                        <p className="mt-4">
                            { t('Text.p8') }
                        </p>
                    </SubContent>
                    <SubTitle title={t('TableOfContents.landing')} id="landing"/>
                    <SubContent>
                        <p>
                            { t('Text.p9') }
                        </p>
                        <p className="my-4">
                            { t('Text.p10') }
                        </p>
                        <p>
                            { t('Text.p11') }
                        </p>
                    </SubContent>
                    <SubTitle title={t('TableOfContents.progressing')} id="progressing"/>
                    <SubContent>
                        <p>
                            { t('Text.p12') }
                        </p>
                    </SubContent>
                    <SubTitle title={t('TableOfContents.conclusion')} id="conclusion" />
                    <SubContent>
                        <p>
                            { t('Text.p13') }
                        </p>
                        <p className="w-full text-start mt-2">
                            { t('Text.sourceCode') } {" "}
                            <Link
                            href="https://github.com/msamatdev/Portfolio/"
                            className="underline decoration-dashed underline-offset-4 decoration-1"
                            >
                                { t('Text.here') }
                            </Link>.
                        </p>
                    </SubContent>
                </Content>
            </Container>
        </MaxWidthWrapper>
    )
}