"use client";
import {useTranslations} from 'next-intl';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Braces, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();

  const t = useTranslations('Navbar');

  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  return (
    <header className="fixed w-full md:top-8 top-0 z-[100] flex items-center justify-center h-auto md:border-0 md:rounded-none border-b-2">
      <MaxWidthWrapper>
        <div className="rounded-lg xl:mx-14 md:border-2 backdrop-blur-xl bg-background/10 z-[100] overflow-hidden">
          <div className="px-6 py-2.5 grid grid-cols-4 grid-rows-1 gap-4 md:grid-cols-2">
            <Link
              className="text-2xl font-semibold flex place-self-start items-center self-center md:col-span-1 col-span-3"
              href="/"
            >
              <Braces className="text-primary" />
              <span className="dark:text-foreground text-secondary-foreground ms-2">Mathis SAMAT</span>
            </Link>

            <div className="hidden md:flex md:col-span-1 items-center justify-end gap-8 place-self-end">
              <Link
                href="/"
                className={clsx("text-lg text-muted-foreground", {
                  "dark:text-foreground text-secondary-foreground": pathName == "/",
                })}
              >
                { t('home') }
              </Link>
              <Link
                href="/projects"
                className={clsx("text-lg text-muted-foreground", {
                  "dark:text-foreground text-secondary-foreground": pathName == "/projects",
                })}
              >
                { t('projects') }
              </Link>
              <Link
                href="/about"
                className={clsx("text-lg text-muted-foreground", {
                  "dark:text-foreground text-secondary-foreground": pathName == "/about",
                })}
              >
                { t('about') }
              </Link>
              <Link
                href="/contact"
                className="text-md text-primary-foreground bg-primary p-2 px-3 rounded-md"
              >
                { t('contact') }
              </Link>
            </div>

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

          <div className={clsx("md:hidden px-6 overflow-hidden transition-all transition-linear text-xl flex flex-col animateHeight text-muted-foreground font-semibold", {
            "h-[184px]": isClick,
            "h-0": !isClick
          })}>
              <Link
                href="/"
                className={clsx({
                  "text-foreground": pathName == "/",
                })}
                onClick={() => setIsClick(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={clsx("mt-4", {
                  "text-foreground": pathName == "/projects",
                })}
                onClick={() => setIsClick(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={clsx("mt-4", {
                  "text-foreground": pathName == "/about",
                })}
                onClick={() => setIsClick(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={clsx("mt-4 mb-6", {
                  "text-foreground": pathName == "/contact",
                })}
                onClick={() => setIsClick(false)}
              >
                Contact
              </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;