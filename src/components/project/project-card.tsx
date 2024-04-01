"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useProjectActions, useSelectedProject } from "@/store/project";

interface ProjectCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  project: Project;
}

export default function ProjectCard({
  project,
  className,
  ...props
}: ProjectCardProps) {
  const selectedProject = useSelectedProject();
  const projectActions = useProjectActions();

  const isActive = selectedProject ? selectedProject.id === project.id : false;

  return (
    <Card
      className={cn(
        "flex aspect-square size-40 cursor-pointer flex-col items-center justify-between gap-2 rounded-xl border-0 p-4 shadow-lg transition-colors duration-300 hover:opacity-90",
        project.color.code,
        isActive && "bg-gradient-to-r from-primary via-primary to-primary",
        className,
      )}
      onClick={() => projectActions.selectProject(project.id)}
      {...props}
    >
      <CardHeader className="flex flex-1 flex-col justify-between p-0">
        <CardTitle className="text-2xl font-bold text-white">
          {project.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
