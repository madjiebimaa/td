"use client";

import { motion } from "framer-motion";

import ProjectCard from "@/components/project/project-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { useProjects } from "@/store/project";

export default function ProjectCardList(
  props: React.ComponentPropsWithoutRef<typeof ScrollArea>,
) {
  const projects = useProjects();

  return (
    <ScrollArea {...props}>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-2 px-4 py-10"
      >
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
      </motion.section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
