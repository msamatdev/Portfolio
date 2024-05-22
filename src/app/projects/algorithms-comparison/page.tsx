import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import Banner from '@/components/projects/Banner';
import SubTitle from '@/components/projects/Subtitle';
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import ProjectImage from '@/components/projects/ProjectImage';
import Container from "@/components/projects/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Algorithms comparison",
}

export default function Portfolio() {
    return (
        <MaxWidthWrapper>
            <Container>
                <Repertory PageName="Algorithms comparison"/>
                <Title text="Algorithms comparison"/>
                <Content>
                    <SubContent>
                        <p>
                            This page is a work in progress... Please check out my other projects.
                        </p>
                    </SubContent>
                </Content>
            </Container>
        </MaxWidthWrapper>
    )
}