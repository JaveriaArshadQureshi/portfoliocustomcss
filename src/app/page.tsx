import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto py-4 px-12">
        
        <HeroSection />
        <AboutSection />
        <Contact />

      </div>

    </main>
    
  );
}
