"use client";

import { motion } from "framer-motion";
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
import { TASK_PRIORITY_MAP } from "@/lib/constants";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const taskActions = useTaskActions();

  const handleCheckedClick = () => {
    taskActions.toggleCheckedTask(task.id);
    taskActions.putCheckedTaskToTheLast();
  };

  const AnimatedButton = motion(Button);

  const taskPriority = TASK_PRIORITY_MAP.get(task.priorityId)!;

  return (
    <Card className="flex gap-2 rounded-none border-0 border-b py-3 pr-2 shadow-none">
      <AnimatedButton
        variant="outline"
        size="icon"
        whileTap={{ scale: 1.5 }}
        className={cn(
          "mt-0.5 size-6 shrink-0 rounded-full border-2",
          taskPriority.color.border,
          taskPriority.color.hover,
          taskPriority.color.ring,
          task.checked && taskPriority.color.background,
        )}
        onClick={handleCheckedClick}
      >
        {task.checked && <Check className="size-4 shrink-0 text-white" />}
      </AnimatedButton>
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
