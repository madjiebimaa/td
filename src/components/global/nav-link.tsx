"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { MobileNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  link: MobileNavLink;
  isActive: boolean;
}

export default function NavLink({ link, isActive }: NavLinkProps) {
  const NavIcon = link.Icon;

  const contentHoverStyles =
    "transition-colors duration-300 ease-in group-hover/link-button:text-muted-foreground/70 group-hover/link-button:transition-colors group-hover/link-button:duration-100 group-hover/link-button:ease-out";

  const activeStyles = "text-primary group-hover/link-button:text-primary/70";

  return (
    <Link
      href={link.href}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "group/link-button relative size-fit shrink-0 flex-col gap-1 rounded-xl focus-visible:ring-muted-foreground",
      )}
    >
      <div
        className={cn(
          "grid place-content-center rounded-full bg-transparent px-5 py-1",
        )}
      >
        <NavIcon
          className={cn(
            "relative z-20 size-6 shrink-0 text-muted-foreground",
            contentHoverStyles,
            isActive && activeStyles,
          )}
        />
        {isActive && (
          <motion.div
            layoutId="active-pil"
            style={{ borderRadius: 9999 }}
            className="absolute inset-0 h-8 w-16 shrink-0 bg-primary/10 px-5 py-1"
          />
        )}
      </div>

      <span
        className={cn(
          "font-semibold text-muted-foreground",
          contentHoverStyles,
          isActive && activeStyles,
        )}
      >
        {link.label}
      </span>
    </Link>
  );
}
