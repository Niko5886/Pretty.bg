import { AnnouncementBar } from "./components/sections/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/sections/Benefits";
import { Categories } from "./components/sections/Categories";
import { BestSellers } from "./components/sections/BestSellers";
import { BrandStory } from "./components/sections/BrandStory";
import { WhyCozyPaws } from "./components/sections/WhyCozyPaws";
import { Testimonials } from "./components/sections/Testimonials";

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
        <BestSellers />
        <BrandStory />
        <WhyCozyPaws />
        <Testimonials />
        {/* more sections added in later phases */}
      </main>
    </div>
  );
}
