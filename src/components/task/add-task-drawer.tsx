"use client";

import { motion } from "framer-motion";

import AddTaskButton from "@/components/task/add-task-button";
import AddTaskForm from "@/components/task/add-task-form";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function AddTaskDrawer() {
  const AnimatedAddTaskButton = motion(AddTaskButton);

  return (
    <Drawer shouldScaleBackground>
      <div className="relative mx-auto w-full max-w-md">
        <DrawerTrigger asChild>
          <AnimatedAddTaskButton
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, rotate: 360 }}
            transition={{ duration: 1 }}
            className="absolute bottom-24 right-4 z-10"
          />
        </DrawerTrigger>
      </div>
      <DrawerContent className="mx-auto max-w-md">
        <AddTaskForm />
      </DrawerContent>
    </Drawer>
  );
}
