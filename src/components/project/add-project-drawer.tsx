import { Plus } from "lucide-react";

import AddProjectForm from "@/components/project/add-project-form";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function AddProjectDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 rounded-full">
          <Plus className="size-6 shrink-0" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-md">
        <AddProjectForm />
      </DrawerContent>
    </Drawer>
  );
}
