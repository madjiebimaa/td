import { EllipsisVertical } from "lucide-react";

import TaskCardList from "@/components/task/task-card-list";
import { Button } from "@/components/ui/button";

export default function InboxPage() {
  return (
    <main className="mx-auto flex h-full w-full max-w-md flex-1 flex-col overflow-hidden">
      <section className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Inbox</h2>
        <Button variant="ghost" size="icon" className="shrink-0">
          <EllipsisVertical className="size-6 shrink-0" />
        </Button>
      </section>
      <TaskCardList className="pb-[150px] pl-4" />
    </main>
  );
}
