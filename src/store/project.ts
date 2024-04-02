import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { AddProjectArgs, Project } from "@/lib/types";

type ProjectState = {
  projects: Project[];
  selectedProject: Project | null;
};

type ProjectActions = {
  actions: {
    addProject: (args: AddProjectArgs) => void;
    selectProject: (id: Project["id"]) => void;
  };
};

const initialState: ProjectState = {
  projects: [],
  selectedProject: null,
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
        selectProject: (id) =>
          set((state) => ({
            selectedProject: state.projects.find(
              (project) => project.id === id,
            ),
          })),
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        projects: state.projects,
        selectedProject: state.selectedProject,
      }),
    },
  ),
);

export const useProjects = () => projectStore((state) => state.projects);
export const useSelectedProject = () =>
  projectStore((state) => state.selectedProject);
export const useProjectActions = () => projectStore((state) => state.actions);
