"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AutoGrowInput from "@/components/global/auto-grow-input";
import TaskPrioritySelect from "@/components/task/task-priority-select";
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

import { DEFAULT_TASK_PRIORITY } from "@/lib/constants";
import { TaskPriority } from "@/lib/types";
import { useTaskActions } from "@/store/task";

const FormSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  priority: z.number({ coerce: true }),
});

export default function AddTaskForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      priority: 0,
    },
  });

  const autoFocusRef = useRef<HTMLTextAreaElement | null>(null);
  const taskActions = useTaskActions();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { name, description, priority } = values;

    taskActions.addTask({
      name,
      description,
      priority: (priority as TaskPriority) || DEFAULT_TASK_PRIORITY,
    });
    taskActions.putCheckedTaskToTheLast();
    form.reset();

    if (autoFocusRef.current) {
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
        <section className="flex flex-col gap-2 p-4">
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
                    placeholder="Description"
                    className="text-base font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Priority</FormLabel>
                <TaskPrioritySelect form={form} field={field} />
              </FormItem>
            )}
          />
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
