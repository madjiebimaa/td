import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  project: Project;
}

export default function ProjectCard({
  project,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "flex aspect-square size-40 cursor-pointer items-center gap-2 rounded-xl border-0 p-4 shadow-lg hover:opacity-90",
        project.color.code,
        className,
      )}
      {...props}
    >
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-bold text-white">
          {project.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
