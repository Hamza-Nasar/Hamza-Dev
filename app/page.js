'use client'

import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

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
  useEffect(() => {
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    
    window.scrollTo({ top: 0, behavior: 'auto' });

    
    toast.custom(
      (t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <p className="text-white font-semibold text-lg">👋 Welcome to my portfolio!</p>
            <p className="mt-1 text-white/90 text-sm">Explore my projects and skills below.</p>
          </div>
        </div>
      ),
      { duration: 2000 }
    );

    
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      toast.custom(
        (t) => (
          <div className={`max-w-md w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <p className="text-white font-semibold text-lg">👋 Thanks for visiting!</p>
              <p className="mt-1 text-white/90 text-sm">See you soon!</p>
            </div>
          </div>
        ),
        { duration: 3000 }
      );
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <main className="bg-black text-white relative">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

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
