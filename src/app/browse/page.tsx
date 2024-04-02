"use client";

import { Plus } from "lucide-react";

import AddProjectDrawer from "@/components/project/add-project-drawer";
import ProjectCardList from "@/components/project/project-card-list";
import ProjectProgress from "@/components/project/project-progress";
import TaskCardList from "@/components/task/task-card-list";
import { Button } from "@/components/ui/button";

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
    <main className="mx-auto flex h-full w-full max-w-md flex-col">
      <section className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">My Projects</h2>
        <AddProjectDrawer>
          <Button variant="ghost" size="icon" className="shrink-0 rounded-full">
            <Plus className="size-6 shrink-0" />
          </Button>
        </AddProjectDrawer>
      </section>
      <ProjectCardList className="pl-4" />
      <ProjectProgress tasks={selectedTasks} className="p-4" />
      <TaskCardList tasks={selectedTasks} className="mb-[100px] pl-4" />
    </main>
  );
}
