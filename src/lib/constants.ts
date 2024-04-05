import { ProjectColor, TaskPriority, TaskPriorityId } from "@/lib/types";

export const DEFAULT_TASK_PROJECT_ID = "INBOX";

export const DEFAULT_TASK_PRIORITY_ID: TaskPriorityId = 4;
export const DEFAULT_TASK_CHECKED: boolean = false;

export const TASK_PRIORITIES: TaskPriority[] = [
  {
    id: 1,
    label: "P1",
    color: {
      text: "text-red-400",
      border: "border-red-400",
      background: "bg-red-400",
      ring: "focus-visible:ring-red-400",
      fill: "fill-red-400",
      hover: "hover:bg-red-400/70",
    },
  },
  {
    id: 2,
    label: "P2",
    color: {
      text: "text-yellow-400",
      border: "border-yellow-400",
      background: "bg-yellow-400",
      ring: "focus-visible:ring-yellow-400",
      fill: "fill-yellow-400",
      hover: "hover:bg-yellow-400/70",
    },
  },
  {
    id: 3,
    label: "P3",
    color: {
      text: "text-blue-400",
      border: "border-blue-400",
      background: "bg-blue-400",
      ring: "focus-visible:ring-blue-400",
      fill: "fill-blue-400",
      hover: "hover:bg-blue-400/70",
    },
  },
  {
    id: 4,
    label: "P4",
    color: {
      text: "text-gray-400",
      border: "border-gray-400",
      background: "bg-gray-400",
      ring: "focus-visible:ring-gray-400",
      fill: "fill-gray-400",
      hover: "hover:bg-gray-400/70",
    },
  },
];

export const TASK_PRIORITY_MAP: Map<
  TaskPriority["id"],
  Omit<TaskPriority, "id">
> = new Map(
  TASK_PRIORITIES.map(({ id, label, color }) => [id, { label, color }]),
);

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
    code: "bg-gradient-to-r from-red-200 via-red-400 to-red-600",
  },
];

export const PROJECT_COLOR_MAP: Map<
  ProjectColor["id"],
  Omit<ProjectColor, "id">
> = new Map(PROJECT_COLORS.map(({ id, label, code }) => [id, { label, code }]));

export const DEFAULT_PROJECT_COLOR: ProjectColor = PROJECT_COLORS[0];
export const UNKNOW_ID = "UNKNOW_ID";
