import DropDownIcon from '../../public/assets/icons/drop-down.svg';
import { MdDarkMode } from 'react-icons/md';
import { ExperienceType, SocialLinkType } from '../types/componentsTypes';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiTwitterXFill } from 'react-icons/ri';
import { RxLinkedinLogo } from 'react-icons/rx';
import { ImGithub } from 'react-icons/im';

export const headerMenuList = [
  {
    title: 'Home',
    link: '#',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'About',
    link: '#',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'Experience',
    link: '#experience',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'Work',
    link: '#',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'Contact',
    link: '#',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
];

export const projectData = [
  {
    startDate: '',
    endDate: 'Jul 27 2022',
    heading: 'Provident de illo eveniet commodi fuga fugiat laboriosam expedita.',
    description:
      'Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...',
    image: '',
    techUsed: ['react', 'tailwind', 'Nodejs', 'mongoDb'],
    demoLink: 'abc',
    gitHubLink: 'abc',
    imageOnRight: true,
  },
  {
    startDate: '',
    endDate: 'Jul 27 2022',
    heading: 'Provident de illo eveniet commodi fuga fugiat laboriosam expedita.',
    description:
      'Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...',
    image: '',
    techUsed: ['react', 'tailwind', 'Nodejs', 'Next'],
    demoLink: 'abc',
    gitHubLink: 'abc',
    imageOnRight: false,
  },
  {
    startDate: '',
    endDate: 'Jul 27 2022',
    heading: 'Provident de illo eveniet commodi fuga fugiat laboriosam expedita.',
    description:
      'Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...',
    image: '',
    techUsed: ['react', 'tailwind', 'Nodejs'],
    demoLink: 'abc',
    gitHubLink: 'abc',
    imageOnRight: true,
  },
];

export const experienceData: ExperienceType[] = [
  {
    title: 'Xyz',
    sequence: 1,
    companyName: 'Capgemini',
    startDate: '8/06/2021',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced latency & improved application performance. Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
  {
    title: 'Xyz',
    sequence: 1,
    companyName: 'Capgemini',
    startDate: '8/06/2021',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced latency & improved application performance. Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
  {
    title: 'Xyz',
    sequence: 1,
    companyName: 'Capgemini',
    startDate: '8/06/2021',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced latency & improved application performance. Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
  {
    title: 'Xyz',
    sequence: 1,
    companyName: 'Capgemini',
    startDate: '8/06/2021',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced latency & improved application performance. Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
  {
    title: 'Xyz',
    sequence: 1,
    companyName: 'Capgemini',
    startDate: '8/06/2021',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced latency & improved application performance. Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    title: 'Github',
    link: '#',
    sequence: 1,
    icon: ImGithub,
  },
  {
    title: 'LinkedIn',
    link: '#',
    sequence: 2,
    icon: RxLinkedinLogo,
  },
  {
    title: 'Twitter',
    link: '#',
    sequence: 3,
    icon: RiTwitterXFill,
  },
  {
    title: 'Instagram',
    link: '#',
    sequence: 4,
    icon: RxInstagramLogo,
  },
];
