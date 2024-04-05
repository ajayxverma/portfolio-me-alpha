import HeroSectionThree from './components/HeroSectionThree';
import ProjectsCards from './components/projects-cards';
import ContactForm from './components/ContactForm';
import ExperienceCard from './components/ExperienceCard';
import SimpleAboutMe from './components/SimpleAboutMe';
import ProjectContainer from './components/ProjectContainer';
import ServicesCards from './components/ServicesCards';
const images = [
  'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <HeroSectionThree />
      <SimpleAboutMe />
      <ServicesCards />
      <ExperienceCard />
      <ProjectsCards />
      <ProjectContainer />
      <ContactForm />
    </main>
  );
}
