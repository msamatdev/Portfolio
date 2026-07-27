"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  subtitle: string
  startDate: string
  endDate: string // pass "Present" for an ongoing entry
  description?: string
  points?: string[] // optional bullet list, e.g. key achievements
}

interface TimelineProps {
  title: string
  icon: LucideIcon
  items: TimelineItem[]
  className?: string
}

export function Timeline({ title, icon: Icon, items, className }: TimelineProps) {
  return (
    <section className={cn("w-full max-w-2xl", className)}>
      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-muted bg-primary/10">
          <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>

      {/* Timeline */}
      <ol className="relative ml-[21px] border-l-[3px] border-white/10">
        {items.map((item, index) => {
          return (
            <motion.li
              key={`${item.title}-${item.subtitle}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={cn(
                "relative pl-8",
                index !== items.length - 1 && "pb-10"
              )}
            >
              {/* Dot */}
              <span className="absolute -left-[7.5px] top-2 flex h-[13px] w-[13px] items-center justify-center p-1">
                <span
                  className={cn(
                    "relative h-[13px] w-[13px] rounded-[4px] ring-4 ring-[#0a0a0b] bg-primary"
                  )}
                />
              </span>

              {/* Title + subtitle */}
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-0.5 text-white/60">
                {item.subtitle}
              </p>

              {/* Dates */}
              <p className="mt-2 font-medium text-primary">
                {item.startDate}{" "}
                <span className="text-primary/50">-</span>{" "}
                {item.endDate}
              </p>

              {/* Description */}
              {item.description && (
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {item.description}
                </p>
              )}

              {/* Points */}
              {item.points && item.points.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/70"
                    >
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-[2px] bg-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          )
        })}
      </ol>
    </section>
  )
}