"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Braces, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();

  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }
  // TODO : grid 3x / 2x sur mobile avec le logo, navbar au milieu, contacter à droite + menu (utiliser shadcn ?)
  // Changer la police d'écriture, peut-être du box shadow sur la navbar ?
  // Refaire avec un .map la navbar ?
  return (
    <header className="fixed w-full md:top-8 md:bg-transparent bg-background top-0 z-50 flex items-center justify-center h-auto md:border-0 md:rounded-none border-b-2 rounded-xl">
      <MaxWidthWrapper>
        <div className="px-6 md:py-0 py-4 rounded-lg xl:mx-14 grid grid-cols-4 grid-rows-1 gap-4 md:grid-cols-3 bg-background md:border-2">
          <Link
            className="text-2xl font-semibold flex place-self-start items-center self-center md:col-span-1 col-span-3"
            href="/"
          >
            <Braces className="text-primary" />
            <span className="dark:text-primary-foreground text-secondary-foreground ms-2">Mathis SAMAT</span>
          </Link>

          <nav className="place-self-center py-2 px-4 border-primary border-2 rounded-xl hidden md:block">
            <Link
              href="/"
              className={clsx("text-lg col-span-1 text-muted-foreground", {
                "dark:text-primary-foreground text-secondary-foreground": pathName == "/",
              })}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={clsx("text-lg col-span-1 ms-6 me-6 text-muted-foreground", {
                "dark:text-primary-foreground text-secondary-foreground": pathName == "/projects",
              })}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={clsx("text-lg col-span-1 text-muted-foreground", {
                "dark:text-primary-foreground text-secondary-foreground": pathName == "/about",
              })}
            >
              About
            </Link>
          </nav>
          
          <Link
            href="/contact"
            className="text-md text-primary-foreground col-span-1 place-self-end my-4 bg-primary p-2 px-3 rounded-md self-center hidden md:block"
          >
            Contact me
          </Link>

          <button 
          className="md:hidden place-self-end col-span-1 self-center"
          onClick={toggleNavbar}
          >
            {isClick ? (
              <X className="size-7"/>
            ) : (
              <AlignJustify className="size-7"/>
            )}
          </button>
        </div>

        <div className={clsx("md:hidden px-6 overflow-hidden transition-all transition-linear text-xl flex flex-col ", {
          "w-auto h-auto": isClick,
          "w-0 h-0": !isClick
        })}>
            <Link
              href="/"
              className={clsx("text-muted-foreground", {
                "text-primary-foreground": pathName == "/",
              })}
              onClick={() => setIsClick(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={clsx("mt-4 text-muted-foreground", {
                "text-primary-foreground": pathName == "/projects",
              })}
              onClick={() => setIsClick(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={clsx("mt-4 text-muted-foreground mb-6", {
                "text-primary-foreground": pathName == "/about",
              })}
              onClick={() => setIsClick(false)}
            >
              About
            </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
