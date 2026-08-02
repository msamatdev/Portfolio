"use client";

import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";

export default function WorkPhilosophy() {
  return (
    <Reveal className="mt-12 px-4">
      <div className="h-px w-full bg-foreground/10" />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-8 md:gap-12 md:items-center">
        <div className="md:col-span-1 flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Mon approche
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Philosophie professionnelle
          </h3>
        </div>

        <div className="md:col-span-3 flex flex-col">
          <Quote className="size-8 text-foreground/20" strokeWidth={1.5} />
          <p className="text-foreground/70 text-xl md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl, aenean euismod nisl eget ultricies aliquam.
          </p>
        </div>
      </div>
    </Reveal>
  )
}