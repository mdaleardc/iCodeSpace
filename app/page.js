import Hero from "@/components/Hero"
import Grid from "@/components/ui/grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
    <div className="max-w-7xl w-full">
    <Hero />
    <Grid />
    <RecentProjects />
    <Clients />
    <Experience />
    <Approach />
    </div>
    </main>
  );
}