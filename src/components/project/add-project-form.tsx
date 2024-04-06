"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ProjectColorSelect from "@/components/project/project-color-select";
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
import { useProjectActions } from "@/store/project";

const FormSchema = z.object({
  name: z.string().min(1),
  colorId: z.string(),
});

export default function AddProjectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      colorId: "",
    },
  });

  const autoFocusRef = useRef<HTMLInputElement | null>(null);
  const projectActions = useProjectActions();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { name, colorId } = values;

    projectActions.addProject({
      name,
      colorId: colorId || DEFAULT_PROJECT_COLOR.id,
    });
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
        <section className="flex flex-col p-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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
            name="colorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Color</FormLabel>
                <ProjectColorSelect form={form} field={field} />
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
