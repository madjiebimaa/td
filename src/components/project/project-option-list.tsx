"use client";

import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { useProjects } from "@/store/project";

interface ProjectOptionListProps {
  form: UseFormReturn<{
    name: string;
    priority: number;
    description?: string | undefined;
    projectId: string | null;
  }>;
}

export default function ProjectOptionList({ form }: ProjectOptionListProps) {
  const projects = useProjects();

  const selectedProjectId = form.getValues("projectId");

  return (
    <ScrollArea>
      <section className="flex items-center gap-2 overflow-x-auto pb-4">
        {projects.map((project, index) => {
          const handleSelectProject = () => {
            form.setValue("projectId", project.id);
          };

          const isActive = selectedProjectId
            ? selectedProjectId === project.id
            : false;
          const isLastIndex = index === projects.length - 1;

          return (
            <Button
              type="button"
              key={project.id}
              className={cn(
                "rounded-full font-semibold transition-colors duration-300 hover:opacity-90",
                project.color.code,
                isActive &&
                  "bg-gradient-to-r from-primary via-primary to-primary",
                isLastIndex && "mr-4",
              )}
              onClick={handleSelectProject}
            >
              {project.name}
            </Button>
          );
        })}
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
