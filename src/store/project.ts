import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { AddProjectArgs, Project } from "@/lib/types";

type ProjectState = {
  projects: Project[];
};

type ProjectActions = {
  actions: {
    addProject: (args: AddProjectArgs) => void;
  };
};

const initialState: ProjectState = {
  projects: [],
};

const projectStore = create<ProjectState & ProjectActions>()(
  persist(
    (set) => ({
      ...initialState,
      actions: {
        addProject: ({ name, color }) =>
          set((state) => ({
            projects: [
              ...state.projects,
              { id: crypto.randomUUID(), name, color },
            ],
          })),
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        projects: state.projects,
      }),
    },
  ),
);

export const useProjects = () => projectStore((state) => state.projects);
export const useProjectActions = () => projectStore((state) => state.actions);
