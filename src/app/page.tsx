// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Solutions from "./solutions";
import WhyChooseUs from "./reviews";
import CarouselFeatures from "./contact";
import Introduction from "./introduction";
import Partners from "./partners";
import Posts from "./posts";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* introductions + solutions */}
      <div className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat">
        <section id="quem-somos">
          <Introduction />
        </section>

        {/* Soluções */}
        <section id="solucoes">
          <Solutions />
        </section>
      </div>

      <Partners />

      {/* Cases de Sucesso */}
      <section
        id="cases"
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/backgrounds/reviews-bg2.svg')",
        }}
      >
        <WhyChooseUs />
      </section>

      {/* Blog / Instagram Posts (WHITE BACKGROUND) */}
      <section id="blog">
        <Posts />
      </section>

      {/* Trabalhe Conosco */}
      <div
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/backgrounds/bgcontact.webp')",
        }}
      >
        <section id="trabalhe">
          <CarouselFeatures />
        </section>

        <Footer />
      </div>
    </>
  );
}
