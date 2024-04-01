"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

import { MobileNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  link: MobileNavLink;
}

export default function NavLink({ link }: NavLinkProps) {
  const pathname = usePathname();

  const NavIcon = link.Icon;
  const isLinkActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
          className:
            "group/link-button size-fit shrink-0 flex-col gap-1 rounded-xl focus-visible:ring-muted-foreground",
        }),
      )}
    >
      <div
        className={cn(
          "grid place-content-center rounded-full bg-transparent px-5 py-1 transition-colors duration-300 ease-in group-hover/link-button:bg-muted-foreground/10 group-hover/link-button:transition-colors group-hover/link-button:duration-100 group-hover/link-button:ease-out",
          isLinkActive && "bg-primary/10",
        )}
      >
        <NavIcon
          className={cn(
            "size-6 shrink-0 text-muted-foreground",
            isLinkActive && "text-primary",
          )}
        />
      </div>
      <span
        className={cn(
          "font-semibold text-muted-foreground",
          isLinkActive && "text-primary",
        )}
      >
        {link.label}
      </span>
    </Link>
  );
}
