import { Plus } from "lucide-react";
import React from "react";

import { Button, ButtonProps } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const AddTaskButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        className={cn("size-14 shrink-0 rounded-xl shadow-xl", className)}
        {...props}
      >
        <Plus className="size-6 shrink-0" />
      </Button>
    );
  },
);
AddTaskButton.displayName = "AddTaskButton";

export default AddTaskButton;
