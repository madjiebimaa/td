import { TaskPriority } from "@/lib/types";

export const DEFAULT_TASK_PRIORITY: TaskPriority = 4;
export const DEFAULT_TASK_CHECKED: boolean = false;

export const TASK_PRIORITIES: { id: TaskPriority; label: string }[] = [
  { id: 1, label: "P1" },
  { id: 2, label: "P2" },
  { id: 3, label: "P3" },
  { id: 4, label: "P4" },
];

export const TASK_PRIORITY_COLOR_MAP = new Map<
  TaskPriority,
  {
    textColor: string;
    borderColor: string;
    backgroundColor: string;
    fillColor: string;
    hover: string;
  }
>([
  [
    1,
    {
      textColor: "text-red-400",
      borderColor: "border-red-400",
      backgroundColor: "bg-red-400",
      fillColor: "fill-red-400",
      hover: "hover:bg-red-400/70",
    },
  ],
  [
    2,
    {
      textColor: "text-yellow-400",
      borderColor: "border-yellow-400",
      backgroundColor: "bg-yellow-400",
      fillColor: "fill-yellow-400",
      hover: "hover:bg-yellow-400/70",
    },
  ],
  [
    3,
    {
      textColor: "text-blue-400",
      borderColor: "border-blue-400",
      backgroundColor: "bg-blue-400",
      fillColor: "fill-blue-400",
      hover: "hover:bg-blue-400/70",
    },
  ],
  [
    4,
    {
      textColor: "text-gray-400",
      borderColor: "border-gray-400",
      backgroundColor: "bg-gray-400",
      fillColor: "fill-gray-400",
      hover: "hover:bg-gray-400/70",
    },
  ],
]);
