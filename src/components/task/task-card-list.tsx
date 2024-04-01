import TaskCard from "@/components/task/task-card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Task } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TaskCardListProps extends React.ComponentPropsWithoutRef<"section"> {
  tasks: Task[];
}

export default function TaskCardList({
  tasks,
  className,
  ...props
}: TaskCardListProps) {
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
