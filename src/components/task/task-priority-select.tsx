"use client";

import { Flag } from "lucide-react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

import { buttonVariants } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TASK_PRIORITIES, TASK_PRIORITY_COLOR_MAP } from "@/lib/constants";
import { TaskPriority } from "@/lib/types";
import { cn, isTaskPriority } from "@/lib/utils";

interface TaskPrioritySelectProps {
  form: UseFormReturn<{
    name: string;
    priority: number;
    description?: string | undefined;
  }>;
  field: ControllerRenderProps<
    {
      priority: number;
      name: string;
      description?: string | undefined;
    },
    "priority"
  >;
}

export default function TaskPrioritySelect({
  form,
  field,
}: TaskPrioritySelectProps) {
  const currentTaskPriority = Number(form.getValues("priority"));
  const selectedTaskColor = TASK_PRIORITY_COLOR_MAP.get(
    currentTaskPriority as TaskPriority,
  );
  const isPriorityHasSelected =
    isTaskPriority(currentTaskPriority) && selectedTaskColor;

  const selectedTaskPriority = TASK_PRIORITIES.find(
    (taskPriority) => taskPriority.id === currentTaskPriority,
  );

  return (
    <Select
      onValueChange={field.onChange}
      defaultValue={field.value.toString()}
    >
      <FormControl>
        <SelectTrigger
          withIcon={false}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "w-fit",
          })}
        >
          <SelectValue role="button">
            <div className="flex items-center">
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
                  isPriorityHasSelected && selectedTaskColor.textColor,
                )}
              >
                {isPriorityHasSelected
                  ? selectedTaskPriority!.label
                  : "Priority"}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent className="w-[200px]">
        {TASK_PRIORITIES.map((taskPriority) => {
          const taskColor = TASK_PRIORITY_COLOR_MAP.get(taskPriority.id)!;

          return (
            <SelectItem
              key={taskPriority.id}
              value={taskPriority.id.toString()}
              withIcon={false}
              className="p-2"
            >
              <div className="flex items-center">
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
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
