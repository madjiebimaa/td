import TaskCard from "@/components/task/task-card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Task } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TaskCardListProps
  extends React.ComponentPropsWithoutRef<typeof ScrollArea> {
  tasks: Task[];
}

export default function TaskCardList({
  tasks,
  className,
  ...props
}: TaskCardListProps) {
  return (
    <ScrollArea className={cn("flex-1", className)} {...props}>
      <section className="flex flex-col pl-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </ScrollArea>
  );
}
