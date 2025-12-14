import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import AudioSamples from "@/components/AudioSamples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <UseCases />
        <AudioSamples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
