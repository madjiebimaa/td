import { CircleCheck, Target } from "lucide-react";

import { Progress } from "@/components/ui/progress";

import { Task } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectProgressProps
  extends React.ComponentPropsWithoutRef<"section"> {
  tasks: Task[];
}

export default function ProjectProgress({
  tasks,
  className,
  ...props
}: ProjectProgressProps) {
  const totalCheckedTasks = tasks.filter((task) => task.checked).length;
  const totalTasks = tasks.length;

  const isTasksEmpty = tasks.length === 0;

  return (
    !isTasksEmpty && (
      <section className={cn("flex flex-col gap-1", className)} {...props}>
        <Progress
          value={(totalCheckedTasks / totalTasks) * 100}
          className="h-2"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CircleCheck className="size-6 shrink-0 text-muted-foreground" />
            <span className="font-semibold text-muted-foreground">
              {totalCheckedTasks}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-muted-foreground">
              {totalTasks}
            </span>
            <Target className="size-6 shrink-0 text-muted-foreground" />
          </div>
        </div>
      </section>
    )
  );
}
