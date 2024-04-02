"use client";

import React from "react";

import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

interface AutoGrowInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const AutoGrowInput = React.forwardRef<HTMLTextAreaElement, AutoGrowInputProps>(
  ({ className, ...props }, ref) => {
    const handleInputGrow = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const input = event.target as HTMLTextAreaElement;

      input.style.height = "auto";
      input.style.height = `${input.scrollHeight}px`;
    };

    return (
      <Textarea
        ref={ref}
        rows={1}
        className={cn(
          "h-fit min-h-min resize-none overflow-hidden rounded-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-transparent",
          className,
        )}
        onInput={handleInputGrow}
        {...props}
      />
    );
  },
);
AutoGrowInput.displayName = "AutoGrowInput";

export default AutoGrowInput;
