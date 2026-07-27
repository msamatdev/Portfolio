import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Traits from './../components/home/Traits';
import SelectedProjects from './../components/home/SelectedProjects';
import { Metadata } from "next";
import HomeCover from "@/components/home/Cover";
import Resume from "@/components/home/Resume";


export const metadata: Metadata = {
  title: 'Home • Mathis SAMAT',
};

export default function Home() {
  return (
    <>
      <HomeCover />
      <MaxWidthWrapper className="max-w-[1360px]">
        <Resume />
        <Traits />
        <SelectedProjects />
      </MaxWidthWrapper>
    </>
  );
}
