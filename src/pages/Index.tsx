import LogoBanner from "@/components/LogoBanner";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import CredentialsSection from "@/components/CredentialsSection";
import Footer from "@/components/Footer";
const Index = () => (
  <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[10000] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg font-body text-sm">
      דלג לתוכן הראשי
    </a>
    <LogoBanner />
    <main id="main-content">
      <HeroSection />
      <ProgramSection />
      <TestimonialsSection />
      <ProductsSection />
      <CredentialsSection />
    </main>
    <Footer />
  </>
);

export default Index;
