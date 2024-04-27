import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import TypeAnim from "@/components/home/TypeAnim";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const HeyThere = () => {
    return (
      <div className="lg:px-12 md:mt-40 mt-16 py-10 grid md:grid-cols-10 gap-0 grid-cols-1">
        <div className="md:col-span-6 m-auto text-center flex flex-col col-span-1 items-center max-w-max ">
          <h1 className="text-4xl font-bold tracking-tight dark:text-foreground sm:text-5xl text-black">
            👋 Hey there! <br />I am Mathis SAMAT, <br />a{" "}
            <span className="text-primary">
              <TypeAnim />
            </span>
          </h1>
          <Image 
            src="/images/me.png"
            alt="Picture of me"
            className="block md:hidden border-box rounded-full border-primary border-[4px] mb-16 mt-16"
            width={310}
            height={310}
          />
          <p className="md:px-2 md:py-1 md:text-left md:mt-6 text-lg max-w-prose text-muted-foreground tracking-wide py-4 px-12 text-justify">
            As I am curious and very interested in computers, I have decided to study
            development at Villetaneuse since September 2023. I am now looking for an
            apprenticeship program in cybersecurity, or web development, near
            Paris for my second and third year of{" "}
            <HoverCard>
              <HoverCardTrigger className="underline underline-offset-4 cursor-default">BUT Informatique</HoverCardTrigger>
              <HoverCardContent className="text-sm">
                A three-year academic program in France. It covers
                topics such as algorithms, databases, 
                and software development.
              </HoverCardContent>
            </HoverCard>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/projects">
              Browse projects
            </Link>
            <Button variant="ghost">Contact me &rarr;</Button>
          </div>
        </div>
        <div className="md:col-span-4 col-span-1  flex-col items-center justify-center hidden md:flex">
        <Image 
            src="/images/me.png"
            alt="Picture of me"
            width={352}
            height={352}
            className="border-box customRound border-primary border-[3px] "
        />
        </div>
      </div>
    );
}

export default HeyThere;