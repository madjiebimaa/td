import AddProjectDrawer from "@/components/project/add-project-drawer";
import ProjectCardList from "@/components/project/project-card-list";

export default function BrowsePage() {
  return (
    <main className="mx-auto flex h-full w-full max-w-md flex-1 flex-col overflow-hidden">
      <section className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">My Projects</h2>
        <AddProjectDrawer />
      </section>
      <ProjectCardList />
    </main>
  );
}
