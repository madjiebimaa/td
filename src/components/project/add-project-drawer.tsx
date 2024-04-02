import AddProjectForm from "@/components/project/add-project-form";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function AddProjectDrawer({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Drawer>) {
  return (
    <Drawer {...props}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="mx-auto max-w-md">
        <AddProjectForm />
      </DrawerContent>
    </Drawer>
  );
}
