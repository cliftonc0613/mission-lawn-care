import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
    </>
  );
}
