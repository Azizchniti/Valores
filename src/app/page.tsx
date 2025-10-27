// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./solutions";
import WhyChooseUs from "./reviews";
import CarouselFeatures from "./contact";
import BusinessCards from "./introduction";
import AboutUs from "./partners";

export default function Campaign() {
  return (
    <>
      <Navbar />
        <Hero />
      {/*introductions + solutions */}
      <div
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
       
      >
       <section id="quem-somos" >
      <BusinessCards />
      </section>

      {/* Soluções */}
      <section id="solucoes">
        <OnlineCourse />
      </section>
      </div>

      <AboutUs />

      {/* Cases de Sucesso */}
      <section id="cases"  className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/backgrounds/reviews-bg2.svg')",
        }}>
        <WhyChooseUs />
      </section>

      {/* Trabalhe Conosco + Blog in same background */}
      <div
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/backgrounds/bgcontact.webp')",
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
