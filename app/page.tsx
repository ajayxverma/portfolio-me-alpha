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

export default function Home() {
  return (
    <main>
      {/*       <h1> Hello Next.js</h1> */}
      <HeroSectionThree />
      <SectionTwo />
      <ExperienceSection />
      <Services />
    </main>
  );
}
