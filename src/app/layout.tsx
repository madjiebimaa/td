import type { Metadata } from "next";

import { nunito } from "@/lib/fonts";

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
      <body className={nunito.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
