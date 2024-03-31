import { Flag } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { TASK_PRIORITIES, TASK_PRIORITY_COLOR_MAP } from "@/lib/constants";
import { TaskPriority } from "@/lib/types";
import { cn, isTaskPriority } from "@/lib/utils";

interface TaskPriorityPopoverProps {
  form: UseFormReturn<{
    name: string;
    priority: number;
    description?: string | undefined;
  }>;
}

export default function TaskPriorityPopover({
  form,
}: TaskPriorityPopoverProps) {
  const [open, setOpen] = useState(false);

  const currentTaskPriority = form.getValues("priority");
  const selectedTaskColor = TASK_PRIORITY_COLOR_MAP.get(
    currentTaskPriority as TaskPriority,
  );
  const isPriorityHasSelected =
    isTaskPriority(currentTaskPriority) && selectedTaskColor;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="">
          <Flag
            className={cn(
              "mr-2 size-4 shrink-0 text-muted-foreground",
              isPriorityHasSelected &&
                `${selectedTaskColor.textColor} ${selectedTaskColor.fillColor}`,
            )}
          />
          <span
            className={cn(
              "font-semibold text-muted-foreground",
              selectedTaskColor && selectedTaskColor.textColor,
            )}
          >
            {isPriorityHasSelected
              ? TASK_PRIORITIES.find(
                  (taskPriority) => taskPriority.id === currentTaskPriority,
                )!.label
              : "Priority"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-[200px] flex-col p-0">
        {TASK_PRIORITIES.map((taskPriority) => {
          const taskColor = TASK_PRIORITY_COLOR_MAP.get(taskPriority.id)!;

          const handleTaskPriorityClick = () => {
            form.setValue("priority", taskPriority.id);
            setOpen(false);
          };

          return (
            <Button
              key={taskPriority.id}
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={handleTaskPriorityClick}
            >
              <Flag
                className={cn(
                  "mr-2 size-4 shrink-0 text-muted-foreground",
                  taskColor.textColor,
                  taskColor.fillColor,
                )}
              />
              <span className="font-semibold text-muted-foreground">
                Priority {taskPriority.id}
              </span>
            </Button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
