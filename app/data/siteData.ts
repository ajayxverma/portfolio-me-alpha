import DropDownIcon from '../../public/assets/icons/drop-down.svg';
import x from '../../public/assets/Projects/analytics-dashboard-react.png';
import { MdDarkMode } from 'react-icons/md';
import { ExperienceType, SocialLinkType } from '../types/componentsTypes';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiTwitterXFill } from 'react-icons/ri';
import { RxLinkedinLogo } from 'react-icons/rx';
import { ImGithub } from 'react-icons/im';
import analyticsDashBoardImage1 from '../../public/assets/Projects/analytics-dashboard-react.png';

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
    heading: 'Analytics Dashboard',
    description:
      'This comprehensive React-based dashboard app offers a powerful suite of functionalities and tools to manage various aspects of business and productivity. It provides an intuitive interface with a focus on data visualization, task management, editing capabilities, and color selection.',
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image5.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image3.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['react', 'tailwind', 'Nodejs', 'mongoDb', 'syncfusion'],
    demoLink: 'https://ajayxverma.github.io/analytic-dashboard-react-01',
    gitHubLink: 'https://github.com/ajayxverma/analytic-dashboard-react-01',
    imageOnRight: true,
  },
  {
    startDate: '',
    endDate: 'Jul 27 2023',
    heading: 'VME',
    description:
      'VME" (Virtual Media Experience) project is a Node.js and Express.js-powered backend combined with a React.js frontend, creating a vibrant social media platform. Users can register and securely log in via JWT authentication, allowing them to post, like, comment, add friends, and remove friends. With a focus on user engagement and social interaction, VME delivers a dynamic virtual community experience.',
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image5.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image3.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['Nodejs', 'ReactJs', 'tailwind', 'MongoDb', 'JavaScript'],
    demoLink: 'abc',
    gitHubLink: 'https://github.com/ajayxverma/VME',
    imageOnRight: false,
  },
  {
    startDate: '',
    endDate: 'Sep 10 2023',
    heading: 'Provident de illo eveniet commodi fuga fugiat laboriosam expedita.',
    description:
      'Introducing our innovative blogging app, meticulously crafted with React at its core. Seamlessly blending functionality with elegance, our platform offers writers a dynamic space to express themselves and connect with readers worldwide. With a sleek and intuitive interface, writing and publishing blog posts has never been easier. customizable themes and performance of React. ',
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image5.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image3.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['react', 'tailwind', 'Nodejs'],
    demoLink: 'abc',
    gitHubLink: 'https://github.com/ajayxverma/React_Blogging_App',
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
