import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeyThere from "@/components/home/HeyThere";
import Card from "@/components/home/Card";
import Traits from './../components/home/Traits';
import SelectedProjects from './../components/home/SelectedProjects';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home • Mathis SAMAT',
};

export default function Home() {
  return (
    <MaxWidthWrapper>
      <HeyThere/>
      <Card />
      <Traits />
      <SelectedProjects />
    </MaxWidthWrapper>
  );
}
