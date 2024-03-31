import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TASK_PRIORITIES } from "@/lib/constants";
import { TaskPriority } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isTaskPriority(x: any): x is TaskPriority {
  return TASK_PRIORITIES.map((taskPriority) => taskPriority.id).includes(x);
}
