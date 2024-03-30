import { create } from "zustand";

import { AddTaskArgs, Task } from "@/lib/types";

type TaskState = {
  tasks: Task[];
};

type TaskActions = {
  actions: {
    addTask: (args: AddTaskArgs) => void;
  };
};

const initialState: TaskState = {
  tasks: [],
};

const taskStore = create<TaskState & TaskActions>()((set) => ({
  ...initialState,
  actions: {
    addTask: ({ name, description }) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          { id: crypto.randomUUID(), name, description, checked: false },
        ],
      })),
  },
}));

export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
