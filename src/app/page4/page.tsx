// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero-page4";
import OnlineCourse from "./thirdcomp";
import WhyChooseUs from "./fourthcomp";
import CarouselFeatures from "../contact";
import AboutSection from "./secondcomp";


export default function Campaign() {
  return (
    <>
      <Navbar />

      {/* Quem somos */}
        <Hero />
      {/* Extra intro section */}
       <section id="quem-somos">
      <AboutSection />
      </section>

      {/* Soluções */}
      <section id="solucoes">
        <OnlineCourse />
      </section>

      {/* Cases de Sucesso */}
      <section id="cases">
        <WhyChooseUs />
      </section>

      {/* Trabalhe Conosco + Blog in same background */}
      <div
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/backgrounds/BG_AZIZ.webp')",
        }}
      >
        <section id="trabalhe">
          <CarouselFeatures />
        </section>

        {/* Blog (end of CarouselFeatures) */}
        <section id="blog">
          <Footer />
        </section>
      </div>
    </>
  );
}
