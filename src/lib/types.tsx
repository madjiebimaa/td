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

export type ProjectColor = {
  id: string;
  label: string;
  code: string;
};

export type Project = {
  id: string;
  name: string;
  color: ProjectColor;
};

export type AddTaskArgs = Pick<Task, "name" | "description" | "priority">;
export type AddProjectArgs = Pick<Project, "name" | "color">;
