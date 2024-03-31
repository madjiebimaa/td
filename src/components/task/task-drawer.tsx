import AddTaskButton from "@/components/task/add-task-button";
import AddTaskForm from "@/components/task/add-task-form";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function TaskDrawer() {
  return (
    <Drawer>
      <div className="relative mx-auto w-full max-w-md">
        <DrawerTrigger asChild>
          <AddTaskButton className="absolute bottom-24 right-4 z-10" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="mx-auto max-w-md">
        <AddTaskForm />
      </DrawerContent>
    </Drawer>
  );
}
