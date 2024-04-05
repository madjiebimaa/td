"use client";

import { Flag } from "lucide-react";
import { useState } from "react";
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

import { TASK_PRIORITIES, TASK_PRIORITY_MAP } from "@/lib/constants";
import { TaskPriorityId } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TaskPrioritySelectProps {
  form: UseFormReturn<{
    name: string;
    priorityId: number;
    projectId: string;
    description?: string | undefined;
  }>;
  field: ControllerRenderProps<
    {
      name: string;
      priorityId: number;
      projectId: string;
      description?: string | undefined;
    },
    "priorityId"
  >;
}

export default function TaskPrioritySelect({
  form,
  field,
}: TaskPrioritySelectProps) {
  const [hasSelected, setHasSelected] = useState(false);

  const priorityId = Number(form.getValues("priorityId"));
  const selectedPriority = TASK_PRIORITY_MAP.get(priorityId as TaskPriorityId);

  const isSelected = hasSelected && !!selectedPriority;

  return (
    <Select
      onValueChange={(value) => {
        field.onChange(value);
        if (!hasSelected) {
          setHasSelected(true);
        }
      }}
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
            <div className="flex items-center justify-center gap-2">
              <Flag
                className={cn(
                  "size-4 shrink-0 text-muted-foreground",
                  isSelected &&
                    `${selectedPriority.color.text} ${selectedPriority.color.fill}`,
                )}
              />
              <span
                className={cn(
                  "font-semibold text-muted-foreground",
                  isSelected && selectedPriority.color.text,
                )}
              >
                {isSelected ? selectedPriority.label : "Priority"}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent className="w-[200px]">
        {TASK_PRIORITIES.map((taskPriority) => (
          <SelectItem
            key={taskPriority.id}
            value={taskPriority.id.toString()}
            withIcon={false}
            className="p-2"
          >
            <div className="flex items-center justify-center gap-2">
              <Flag
                className={cn(
                  "size-4 shrink-0 text-muted-foreground",
                  taskPriority.color.text,
                  taskPriority.color.fill,
                )}
              />
              <span className="font-semibold text-muted-foreground">
                Priority {taskPriority.id}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
