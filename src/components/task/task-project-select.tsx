"use client";

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

import { PROJECT_COLOR_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useProjects } from "@/store/project";

interface TaskProjectSelectProps {
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
    "projectId"
  >;
}

export default function TaskProjectSelect({
  form,
  field,
}: TaskProjectSelectProps) {
  const [hasSelected, setHasSelected] = useState(false);
  const projects = useProjects();

  const projectId = form.getValues("projectId");
  const selectedProject = projects.find((project) => project.id === projectId);
  const selectedProjectColor = PROJECT_COLOR_MAP.get(
    selectedProject ? selectedProject.colorId : "",
  );

  const isSelected = hasSelected && !!selectedProject && !!selectedProjectColor;

  return (
    <Select
      onValueChange={(value) => {
        field.onChange(value);
        if (!hasSelected) {
          setHasSelected(true);
        }
      }}
      defaultValue={field.value}
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
              <span
                className={cn(
                  "size-4 shrink-0 rounded-full bg-gradient-to-r from-muted-foreground via-muted-foreground to-muted-foreground",
                  isSelected && selectedProjectColor.code,
                )}
              />
              <span
                className={cn(
                  "font-semibold text-muted-foreground",
                  isSelected && `${selectedProjectColor.code} bg-clip-text`,
                )}
              >
                {isSelected ? selectedProject.name : "Project"}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
      </FormControl>
      <SelectContent className="max-h-[245px] w-[200px]">
        {projects.map((project) => {
          const projectColor = PROJECT_COLOR_MAP.get(project.colorId)!;

          return (
            <SelectItem
              key={project.id}
              value={project.id}
              withIcon={false}
              className="p-2"
            >
              <div className="flex items-center justify-center gap-2">
                <span
                  className={cn(
                    "size-4 shrink-0 rounded-full text-muted-foreground",
                    projectColor.code,
                  )}
                />
                <span
                  className={cn(
                    "font-semibold text-muted-foreground",
                    `${projectColor.code} bg-clip-text`,
                  )}
                >
                  {project.name}
                </span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
