import { LucideIcon } from "lucide-react";

export type TaskPriorityId = 1 | 2 | 3 | 4;

export type Task = {
  id: string;
  name: string;
  description?: string;
  checked: boolean;
  priorityId: TaskPriorityId;
  projectId: Project["id"];
};

export type ProjectColor = {
  id: string;
  label: string;
  code: string;
};

export type Project = {
  id: string;
  name: string;
  colorId: ProjectColor["id"];
};

export type MobileNavLink = {
  id: string;
  href: string;
  label: string;
  Icon: LucideIcon;
};

export type TaskPriorityColor = {
  text: string;
  border: string;
  background: string;
  ring: string;
  fill: string;
  hover: string;
};

export type TaskPriority = {
  id: TaskPriorityId;
  label: string;
  color: TaskPriorityColor;
};

export type AddTaskArgs = Pick<Task, "name" | "description"> & {
  priorityId?: Task["priorityId"];
  projectId?: Task["projectId"];
};

export type AddProjectArgs = Pick<Project, "name"> & {
  colorId?: ProjectColor["id"];
};
