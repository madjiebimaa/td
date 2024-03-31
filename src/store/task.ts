import { create } from "zustand";

import { AddTaskArgs, Task } from "@/lib/types";

type TaskState = {
  tasks: Task[];
};

type TaskActions = {
  actions: {
    addTask: (args: AddTaskArgs) => void;
    toggleCheckedTask: (id: Task["id"]) => void;
    putCheckedTaskToTheLast: () => void;
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
    toggleCheckedTask: (id) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              checked: !task.checked,
            };
          }

          return task;
        }),
      })),
    putCheckedTaskToTheLast: () =>
      set((state) => {
        const checkedTasks = state.tasks.filter((task) => task.checked);
        const unCheckedTasks = state.tasks.filter((task) => !task.checked);

        return {
          tasks: [...unCheckedTasks, ...checkedTasks],
        };
      }),
  },
}));

export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
