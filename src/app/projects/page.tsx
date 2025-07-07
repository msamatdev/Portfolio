import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <ProjectsList />
    </MaxWidthWrapper>
  );
}
