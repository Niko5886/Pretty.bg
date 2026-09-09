import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* First screen: header + hero fill the viewport (no scroll within) */}
      <div className="flex min-h-[100svh] flex-col overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col">
          <Hero />
        </main>
      </div>

      {/* Home page sections are added below in later phases */}
    </div>
  );
}
