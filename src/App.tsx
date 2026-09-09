import { AnnouncementBar } from "./components/sections/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/sections/Benefits";
import { Categories } from "./components/sections/Categories";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* First screen: announcement + header + hero fill the viewport */}
      <div className="flex min-h-[100svh] flex-col overflow-hidden">
        <AnnouncementBar />
        <Header />
        <Hero />
      </div>

      {/* Scrollable home page content */}
      <main>
        <Benefits />
        <Categories />
        {/* more sections added in later phases */}
      </main>
    </div>
  );
}
