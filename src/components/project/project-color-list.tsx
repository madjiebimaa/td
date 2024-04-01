import { UseFormReturn } from "react-hook-form";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { PROJECT_COLORS } from "@/lib/constants";
import { ProjectColor } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectColorListProps {
  form: UseFormReturn<{
    name: string;
    color: ProjectColor;
  }>;
}

export default function ProjectColorList({ form }: ProjectColorListProps) {
  return (
    <ScrollArea>
      <section className="mb-4 flex items-center gap-2 overflow-x-auto">
        {PROJECT_COLORS.map((projectColor, index) => {
          const handleSelectColor = () => {
            form.setValue("color", projectColor);
          };

          const isLastIndex = index === PROJECT_COLORS.length - 1;

          return (
            <figure
              key={projectColor.id}
              className={cn(
                "group/project-color flex size-fit cursor-pointer flex-col items-start gap-1 p-0 hover:bg-transparent",
                isLastIndex && "mr-4",
              )}
              onClick={handleSelectColor}
            >
              <div
                className={cn(
                  "size-24 shrink-0 rounded-xl group-hover/project-color:opacity-70",
                  projectColor.code,
                )}
              />
              <figcaption className="text-sm font-semibold">
                {projectColor.label}
              </figcaption>
            </figure>
          );
        })}
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
