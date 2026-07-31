import About from '@/components/About';
import Contact from '@/components/Contact';
import Courses from '@/components/Courses';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Videos from '@/components/Videos';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Videos />
      <Experience />
      <Testimonials />
      <Courses />
      <Contact />
    </>
  );
}
