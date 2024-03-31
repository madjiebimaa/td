"use client";

import TaskCard from "@/components/task/task-card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { useTasks } from "@/store/task";

export default function TaskCardList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  const tasks = useTasks();

  return (
    <ScrollArea className="h-screen max-h-screen">
      <section className={cn("flex flex-col", className)} {...props}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </ScrollArea>
  );
}
