import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutHypnotherapy } from "@/components/AboutHypnotherapy";
import { Treatments } from "@/components/Treatments";
import { AboutMe } from "@/components/AboutMe";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutHypnotherapy />
        <Treatments />
        <AboutMe />
        <FAQ />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
