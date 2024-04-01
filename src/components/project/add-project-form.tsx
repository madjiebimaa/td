"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ProjectColorList from "@/components/project/project-color-list";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { DEFAULT_PROJECT_COLOR } from "@/lib/constants";
import { ProjectColor } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useProjectActions } from "@/store/project";

const FormSchema = z.object({
  name: z.string().min(1),
  color: z.object({
    id: z.string(),
    label: z.string(),
    code: z.string(),
  }),
});

export default function AddProjectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      color: DEFAULT_PROJECT_COLOR,
    },
  });

  const autoFocusRef = useRef<HTMLInputElement | null>(null);
  const projectActions = useProjectActions();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { name, color } = values;

    projectActions.addProject({ name, color: color as ProjectColor });
    form.reset();

    if (autoFocusRef.current) {
      autoFocusRef.current.focus();
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="px-4">
                <FormLabel className="sr-only">Project Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    ref={autoFocusRef}
                    autoFocus
                    autoComplete="off"
                    placeholder="Name"
                    className="text-xl font-bold"
                    onKeyDown={handleKeydown}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={() => (
              <FormItem className="pl-4">
                <div className="flex items-center gap-2">
                  <FormLabel className="text-xl font-bold">Color</FormLabel>
                  <div
                    className={cn(
                      "size-6 shrink-0 rounded-full",
                      form.getValues("color").code,
                    )}
                  />
                </div>
                <FormControl>
                  <ProjectColorList form={form} />
                </FormControl>
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
            <Check className="size-6 shrink-0" />
          </Button>
        </DrawerFooter>
      </form>
    </Form>
  );
}
