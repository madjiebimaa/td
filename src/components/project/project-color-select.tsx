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

import { PROJECT_COLORS, PROJECT_COLOR_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProjectColorSelectProps {
  form: UseFormReturn<{
    name: string;
    colorId: string;
  }>;
  field: ControllerRenderProps<
    {
      name: string;
      colorId: string;
    },
    "colorId"
  >;
}

export default function ProjectColorSelect({
  form,
  field,
}: ProjectColorSelectProps) {
  const [hasSelected, setHasSelected] = useState(false);

  const colorId = form.getValues("colorId");
  const selectedProjectColor = PROJECT_COLOR_MAP.get(colorId);

  const isSelected = hasSelected && !!selectedProjectColor;

  return (
    <Select
      onValueChange={(value) => {
        field.onChange(value);
        if (!hasSelected) {
          setHasSelected(true);
        }
      }}
      value={field.value}
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
          {isSelected ? (
            <SelectValue role="button">
              <div className="flex items-center justify-center gap-2">
                <span
                  className={cn(
                    "size-4 shrink-0 rounded-full bg-gradient-to-r from-muted-foreground via-muted-foreground to-muted-foreground",
                    selectedProjectColor.code,
                  )}
                />
                <span
                  className={cn(
                    "font-semibold text-muted-foreground",
                    `${selectedProjectColor.code} bg-clip-text`,
                  )}
                >
                  {selectedProjectColor.label}
                </span>
              </div>
            </SelectValue>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span className="size-4 shrink-0 rounded-full bg-gradient-to-r from-muted-foreground via-muted-foreground to-muted-foreground" />
              <span className="font-semibold text-muted-foreground">Color</span>
            </div>
          )}
        </SelectTrigger>
      </FormControl>
      <SelectContent className="max-h-[245px] max-w-max">
        {PROJECT_COLORS.map((projectColor) => (
          <SelectItem
            key={projectColor.id}
            value={projectColor.id}
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
                {projectColor.label}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
