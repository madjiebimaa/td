import { LucideIcon } from "lucide-react";

export type MobileNavLink = {
  id: string;
  href: string;
  label: string;
  Icon: LucideIcon;
};

export type Task = {
  id: string;
  name: string;
  description?: string;
  checked: boolean;
};

export type AddTaskArgs = Pick<Task, "name" | "description">;
