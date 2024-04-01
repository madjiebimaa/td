import { ProjectColor, TaskPriority } from "@/lib/types";

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
    ringColor: string;
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
      ringColor: "focus-visible:ring-red-400",
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
      ringColor: "focus-visible:ring-yellow-400",
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
      ringColor: "focus-visible:ring-blue-400",
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
      ringColor: "focus-visible:ring-gray-400",
      fillColor: "fill-gray-400",
      hover: "hover:bg-gray-400/70",
    },
  ],
]);

export const PROJECT_COLORS: ProjectColor[] = [
  {
    id: "hyper",
    label: "Hyper",
    code: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  },
  {
    id: "oceanic",
    label: "Oceanic",
    code: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
  },
  {
    id: "cotton-candy",
    label: "Cotton Candy",
    code: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
  },
  {
    id: "gotham",
    label: "Gotham",
    code: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
  },
  {
    id: "sunset",
    label: "Sunset",
    code: "bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
  },
  {
    id: "mojave",
    label: "Mojave",
    code: "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
  },
  {
    id: "beachside",
    label: "Beachside",
    code: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-500",
  },
  {
    id: "gunmetal",
    label: "Gunmetal",
    code: "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600",
  },
  {
    id: "peachy",
    label: "Peachy",
    code: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200",
  },
  {
    id: "seafoam",
    label: "Seafoam",
    code: "bg-gradient-to-r from-green-200 via-green-300 to-blue-500",
  },
  {
    id: "pumpkin",
    label: "Pumpkin",
    code: "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700",
  },
  {
    id: "pandora",
    label: "Pandora",
    code: "bg-gradient-to-r from-green-200 via-green-400 to-purple-700",
  },
  {
    id: "valentine",
    label: "Valentine",
    code: "bg-gradient-to-r from-red-200 to-red-600",
  },
];

export const DEFAULT_PROJECT_COLOR: ProjectColor = PROJECT_COLORS[0];
