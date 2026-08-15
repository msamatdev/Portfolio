"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import Lightfall from "@/components/Lightfall";
import { Linkedin, Github, Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";

const EMAIL = "mathis.samat@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/mathis-samat";
const GITHUB_URL = "https://github.com/msamatdev";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = useTranslations("HomePage.Contact");

  return (
    <section className="relative w-full h-[45vh] min-h-[420px] mt-24 px-4 mb-8 overflow-hidden rounded-2xl" id="contact">
      <div className="absolute inset-0">
        <Lightfall
          className="h-full w-full"
          dpr={2}
          mixBlendMode="normal"
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>
      <div className="absolute inset-0 bg-background/50" />

      <Reveal className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h2>
          <p className="text-foreground/70 text-sm md:text-base max-w-md mx-auto text-center">
            {t('subtitle')}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-center gap-3 rounded-full border border-foreground/10 bg-background/40 px-5 py-2.5 text-sm text-foreground/70 backdrop-blur-sm transition-colors hover:border-foreground/20 hover:text-foreground"
        >
          <span className="font-medium">{EMAIL}</span>
          {copied ? (
            <Check className="size-4 shrink-0 text-foreground/50" strokeWidth={1.75} />
          ) : (
            <Copy className="size-4 shrink-0 text-foreground/50 transition-colors group-hover:text-foreground/70" strokeWidth={1.75} />
          )}
        </button>

        <div className="flex items-center gap-4">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background/40 text-foreground/70 backdrop-blur-sm transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <Linkedin className="size-4" strokeWidth={1.75} />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background/40 text-foreground/70 backdrop-blur-sm transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <Github className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}