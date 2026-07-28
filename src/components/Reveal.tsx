interface Props {
  children: React.ReactNode;
  className?: string;
}

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Reveal = ({ children, className }: Props) => {
  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, x: -5 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.6, 0.01, -0.05, 0.95] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
