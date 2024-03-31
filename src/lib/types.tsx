import { LucideIcon } from "lucide-react";

export type MobileNavLink = {
  id: string;
  href: string;
  label: string;
  Icon: LucideIcon;
};

export type TaskPriority = 1 | 2 | 3 | 4;

export type Task = {
  id: string;
  name: string;
  description?: string;
  checked: boolean;
  priority: TaskPriority;
};

export type AddTaskArgs = Pick<Task, "name" | "description" | "priority">;
