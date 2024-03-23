import Image from 'next/image';
import Header from './components/Header';
import Hero1 from './components/hero1';
import Footer from './components/footer';
import Hero from './components/hero';
import Stats from './components/stats';
import Skills from './components/Skills';
import Subscribe from './components/Subscribe';
import HeroSectiontwo from './components/HeroSectiontwo';
import HeroSectionThree from './components/HeroSectionThree';
import Services from './components/Services';
import ProjectGrid from './components/ProjectGrid';
import SectionTwo from './components/SectionTwo';
import ExperienceSection from './components/ExperienceSection';
import ProjectsCards from './components/projects-cards';
import { ContactSection } from './components/contactSection';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import ExperienceCard from './components/ExperienceCard';
import SimpleAboutMe from './components/SimpleAboutMe';
import ProjectContainer from './components/ProjectContainer';
import ServicesCards from './components/ServicesCards';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      {/*       <h1> Hello Next.js</h1> */}
      <HeroSectionThree />
     
      {/*       <SectionTwo />
      <AboutMe /> */}
      <SimpleAboutMe />
      <ServicesCards />
      <ExperienceCard />

      {/* <Services /> */}
      <ProjectsCards />
      <ProjectContainer />

      {/*       <ContactSection /> */}
      <ContactForm />
    </main>
  );
}
