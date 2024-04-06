"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AutoGrowInput from "@/components/global/auto-grow-input";
import TaskPrioritySelect from "@/components/task/task-priority-select";
import TaskProjectSelect from "@/components/task/task-project-select";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import {
  DEFAULT_TASK_PRIORITY_ID,
  DEFAULT_TASK_PROJECT_ID,
} from "@/lib/constants";
import { TaskPriorityId } from "@/lib/types";
import { useProjects } from "@/store/project";
import { useTaskActions } from "@/store/task";

const FormSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  priorityId: z.number({ coerce: true }),
  projectId: z.string(),
});

export default function AddTaskForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      priorityId: 0,
      projectId: "",
    },
  });

  const autoFocusRef = useRef<HTMLTextAreaElement | null>(null);
  const shrinkInputRef = useRef<HTMLTextAreaElement | null>(null);
  const projects = useProjects();
  const taskActions = useTaskActions();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { name, description, priorityId, projectId } = values;

    taskActions.addTask({
      name,
      description,
      priorityId: (priorityId as TaskPriorityId) || DEFAULT_TASK_PRIORITY_ID,
      projectId: projectId || DEFAULT_TASK_PROJECT_ID,
    });
    taskActions.putCheckedTaskToTheLast();
    form.reset();

    if (autoFocusRef.current && shrinkInputRef.current) {
      autoFocusRef.current.style.height = "auto";
      shrinkInputRef.current.style.height = "auto";

      autoFocusRef.current.focus();
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="flex flex-col p-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Task Name</FormLabel>
                <FormControl>
                  <AutoGrowInput
                    {...field}
                    ref={autoFocusRef}
                    autoFocus
                    autoComplete="off"
                    placeholder="Task name"
                    className="text-xl font-bold"
                    onKeyDown={handleKeydown}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Description</FormLabel>
                <FormControl>
                  <AutoGrowInput
                    {...field}
                    ref={shrinkInputRef}
                    autoComplete="off"
                    placeholder="Description"
                    className="text-base font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <section className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="priorityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Priority</FormLabel>
                  <TaskPrioritySelect form={form} field={field} />
                </FormItem>
              )}
            />
            {projects.length !== 0 && (
              <FormField
                control={form.control}
                name="projectId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Project</FormLabel>
                    <TaskProjectSelect form={form} field={field} />
                  </FormItem>
                )}
              />
            )}
          </section>
        </section>
        <Separator />
        <DrawerFooter className="flex-row justify-end">
          <Button
            type="submit"
            size="icon"
            className="size-10 shrink-0 disabled:bg-muted-foreground"
            disabled={!form.formState.isValid}
          >
            <SendHorizonal className="size-6 shrink-0" />
          </Button>
        </DrawerFooter>
      </form>
    </Form>
  );
}
