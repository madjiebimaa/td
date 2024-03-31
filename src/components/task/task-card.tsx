"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useTaskActions } from "@/store/task";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const taskActions = useTaskActions();

  const handleCheckedClick = () => {
    taskActions.toggleCheckedTask(task.id);
    taskActions.putCheckedTaskToTheLast();
  };

  return (
    <Card className="flex gap-2 rounded-none border-0 border-b py-3 shadow-none">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "mt-0.5 size-6 shrink-0 rounded-full",
          task.checked && "bg-muted-foreground hover:bg-muted-foreground/70",
        )}
        onClick={handleCheckedClick}
      >
        {task.checked && (
          <Check
            className={cn("size-4 shrink-0", task.checked && "text-white")}
          />
        )}
      </Button>
      <CardHeader className="space-y-0 p-0">
        <CardTitle className="text-lg font-normal">{task.name}</CardTitle>
        {task.description && (
          <CardDescription className="font-light">
            {task.description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}
