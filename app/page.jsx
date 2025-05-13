import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/cta";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Services />
      <CTA />
      <Contact />
    </>
  );
}
