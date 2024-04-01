"use client";

import ProjectCard from "@/components/project/project-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { useProjects } from "@/store/project";

export default function ProjectCardList() {
  const projects = useProjects();

  return (
    <ScrollArea>
      <section className="flex h-fit items-center gap-2 pb-8 pl-4 pr-0 pt-4">
        {projects.map((project, index) => {
          const isLastIndex = index === projects.length - 1;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              style={{
                zIndex: 2 * (index + 1),
              }}
              className={cn("-mr-5 rotate-12", isLastIndex && "mr-4")}
            />
          );
        })}
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
