import { cn } from "@/lib/utils"

export default function Separator(
  {className}: {className?: string}
) {
  return (
    <div
      className={cn("mt-4 w-[85px] h-[4px] rounded-full bg-primary", className)}
    >
    </div>
  )
}