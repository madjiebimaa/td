"use client";

import { EllipsisVertical } from "lucide-react";

import ProjectProgress from "@/components/project/project-progress";
import TaskCardList from "@/components/task/task-card-list";
import { Button } from "@/components/ui/button";

import { DEFAULT_TASK_PROJECT_ID } from "@/lib/constants";
import { useTasks } from "@/store/task";

export default function InboxPage() {
  const tasks = useTasks();
  const inboxTasks = tasks.filter(
    (task) => task.projectId === DEFAULT_TASK_PROJECT_ID,
  );

  return (
    <main className="mx-auto flex h-full w-full max-w-md flex-col">
      <section className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Inbox</h2>
        <Button variant="ghost" size="icon" className="shrink-0 rounded-full">
          <EllipsisVertical className="size-6 shrink-0" />
        </Button>
      </section>
      <ProjectProgress tasks={inboxTasks} className="p-4" />
      <TaskCardList tasks={inboxTasks} className="mb-[100px]" />
    </main>
  );
}
