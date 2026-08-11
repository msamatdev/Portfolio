import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SelectedProjects from './../components/home/SelectedProjects';
import { Metadata } from "next";
import HomeCover from "@/components/home/Cover";
import Resume from "@/components/home/Resume";
import MyStory from "@/components/home/MyStory";
import WorkApproach from "@/components/home/WorkApproach";
import ContactMe from "@/components/home/ContactMe";


export const metadata: Metadata = {
  title: 'Home • Mathis SAMAT',
};

export default function Home() {
  return (
    <>
      <HomeCover />
      <MaxWidthWrapper className="max-w-[1360px]">
        <Resume />
        <SelectedProjects />
        <MyStory />
        <WorkApproach />
        <ContactMe />
      </MaxWidthWrapper>
    </>
  );
}
