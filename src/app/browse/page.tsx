"use client";

import AddProjectDrawer from "@/components/project/add-project-drawer";
import ProjectCardList from "@/components/project/project-card-list";
import ProjectProgress from "@/components/project/project-progress";
import TaskCardList from "@/components/task/task-card-list";

import { Task } from "@/lib/types";
import { useSelectedProject } from "@/store/project";
import { useTasks } from "@/store/task";

export default function BrowsePage() {
  const selectedProject = useSelectedProject();
  const tasks = useTasks();

  const selectedTasks: Task[] = selectedProject
    ? tasks.filter((task) => task.projectId === selectedProject.id)
    : [];

  return (
    <main className="mx-auto flex h-full w-full max-w-md flex-1 flex-col overflow-hidden">
      <section className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">My Projects</h2>
        <AddProjectDrawer />
      </section>
      <ProjectCardList />
      <ProjectProgress tasks={selectedTasks} className="py-4" />
      <TaskCardList tasks={selectedTasks} className="pb-[150px] pl-4" />
    </main>
  );
}
