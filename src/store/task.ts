import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { DEFAULT_TASK_CHECKED, DEFAULT_TASK_PRIORITY } from "@/lib/constants";
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

const taskStore = create<TaskState & TaskActions>()(
  persist(
    (set) => ({
      ...initialState,
      actions: {
        addTask: ({ name, description, priority = DEFAULT_TASK_PRIORITY }) =>
          set((state) => ({
            tasks: [
              ...state.tasks,
              {
                id: crypto.randomUUID(),
                name,
                description,
                checked: DEFAULT_TASK_CHECKED,
                priority,
              },
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
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        tasks: state.tasks,
      }),
    },
  ),
);

export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
