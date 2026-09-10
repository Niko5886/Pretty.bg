import { ShopProvider } from "./context/ShopContext";
import { useI18n } from "./i18n/I18nContext";
import { AnnouncementBar } from "./components/sections/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StickyNav } from "./components/StickyNav";
import { Benefits } from "./components/sections/Benefits";
import { Categories } from "./components/sections/Categories";
import { BestSellers } from "./components/sections/BestSellers";
import { BrandStory } from "./components/sections/BrandStory";
import { WhyPretty } from "./components/sections/WhyPretty";
import { Testimonials } from "./components/sections/Testimonials";
import { Newsletter } from "./components/sections/Newsletter";
import { Footer } from "./components/sections/Footer";
import { BackToTop } from "./components/ui/BackToTop";
import { SearchOverlay } from "./components/SearchOverlay";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";

export default function App() {
  const { t } = useI18n();
  return (
    <ShopProvider>
      <div id="top" className="min-h-screen bg-background">
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green-dark focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {t.a11y.skipToContent}
        </a>

        {/* Scroll-activated condensed navigation */}
        <StickyNav />

        {/* First screen: announcement + header + hero fill the viewport */}
        <div className="flex min-h-[100svh] flex-col overflow-hidden">
          <AnnouncementBar />
          <Header />
          <Hero />
        </div>

        {/* Scrollable home page content */}
        <main id="main">
          <Benefits />
          <Categories />
          <BestSellers />
          <BrandStory />
          <WhyPretty />
          <Testimonials />
          <Newsletter />
        </main>

        <Footer />
        <BackToTop />

        {/* Shop overlays (top-level so they stack above everything) */}
        <SearchOverlay />
        <CartDrawer />
        <WishlistDrawer />
      </div>
    </ShopProvider>
  );
}
