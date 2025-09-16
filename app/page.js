import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* Sticky navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Skills */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Timeline */}
      <Timeline />

      {/* Testimonials */}
      <Testimonials />

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <About />
      </section>

      {/* Contact */}
      <section id="contact" className="pb-20">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
