import type { Metadata } from "next";

import MobileNavbar from "@/components/global/mobile-navbar";
import AddTaskDrawer from "@/components/task/add-task-drawer";

import { nunito } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Td",
  description:
    "TD is your go-to productivity companion, streamlining your tasks and boosting efficiency. With intuitive features and seamless integration, TD empowers you to effortlessly organize your to-dos, prioritize tasks, and stay on top of your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex max-h-screen min-h-screen flex-col",
          nunito.className,
        )}
        suppressHydrationWarning
      >
        {children}
        <AddTaskDrawer />
        <MobileNavbar className="fixed inset-x-0 bottom-0" />
      </body>
    </html>
  );
}
