"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LinkCardProps extends Omit<HTMLMotionProps<"a">, "href"> {
  href: string;
  title: string;
  icon?: React.ReactNode;
}

export function LinkCard({
  href,
  title,
  icon,
  className,
  ...props
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-between w-full p-4 rounded-lg border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all",
        "hover:scale-105 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <span className="font-medium">{title}</span>
      {icon}
    </motion.a>
  );
}