"use client";

import { Archive, Calendar, Menu, Search } from "lucide-react";
import React from "react";

import NavLink from "@/components/global/nav-link";

import { MobileNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

const links: MobileNavLink[] = [
  { id: "today", href: "/today", label: "Today", Icon: Calendar },
  { id: "inbox", href: "/inbox", label: "Inbox", Icon: Archive },
  { id: "search", href: "/search", label: "Search", Icon: Search },
  { id: "browse", href: "/browse", label: "Browse", Icon: Menu },
];

export default function MobileNavbar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      className={cn(
        "relative z-10 mx-auto flex w-full max-w-md items-center justify-between bg-secondary p-4",
        className,
      )}
      {...props}
    >
      {links.map((link) => (
        <NavLink key={link.id} link={link} />
      ))}
    </nav>
  );
}
