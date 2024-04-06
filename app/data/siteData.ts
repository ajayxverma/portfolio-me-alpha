import { ExperienceType, OtherProData, SocialLinkType } from '../types/componentsTypes';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiTwitterXFill } from 'react-icons/ri';
import { RxLinkedinLogo } from 'react-icons/rx';
import { ImGithub } from 'react-icons/im';
import analyticDashboard from '../../public/assets/project-image/react-dashboard-1.png';

export const headerMenuList = [
  {
    title: 'Home',
    link: '#hero',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'About',
    link: '#about',
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
    title: 'Projects',
    link: '#works',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
  {
    title: 'Contact',
    link: '#contact',
    submenu: [
      { title: 'Service 1', link: '/service-1' },
      { title: 'Service 2', link: '/service-2' },
    ],
  },
];

export const featuredProjectData = [
  {
    startDate: '',
    endDate: 'Nov 2023',
    heading: 'Analytics Dashboard',
    description:
      'This comprehensive React-based dashboard app offers a powerful suite of functionalities and tools to manage various aspects of business and productivity. It provides an intuitive interface with a focus on data visualization, task management, editing capabilities, and color selection.',
    images: [
      { src: '/assets/project-image/react-dashboard-1.png', alt: 'axy' },
      { src: '/assets/anime-image/image2.jpg', alt: 'axy' },
      { src: '/assets/anime-image/anime.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['React', 'Tailwind', 'Nodejs', 'mongoDb', 'syncfusion', 'Redux'],
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
    techUsed: ['Nodejs', 'ReactJs', 'Tailwind', 'MongoDb', 'JavaScript', 'Redux'],
    demoLink: 'https://github.com/ajayxverma/VME',
    gitHubLink: 'https://github.com/ajayxverma/VME',
    imageOnRight: false,
  },
  {
    startDate: '',
    endDate: 'April 2024',
    heading: 'Custom Portfolio',
    description:
      "My portfolio project addresses the need for a visually appealing and functional platform to showcase my skills, projects, and achievements as a developer. By leveraging Next.js and other technologies, I've created a professional and engaging portfolio that effectively communicates my capabilities to potential employers, clients, and collaborators.",
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image5.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image3.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['Nextjs', 'Tailwind', 'Nodejs', 'Redux'],
    demoLink: 'https://ajayxverma.github.io/portfolio-me-alpha/',
    gitHubLink: 'https://github.com/ajayxverma/portfolio-me-alpha',
    imageOnRight: true,
  },
];

export const featuredProjectDataAnime = [
  {
    startDate: '',
    endDate: 'Nov 2023',
    heading: 'Analytics Dashboard',
    description:
      'This comprehensive React-based dashboard app offers a powerful suite of functionalities and tools to manage various aspects of business and productivity. It provides an intuitive interface with a focus on data visualization, task management, editing capabilities, and color selection.',
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image2.jpg', alt: 'axy' },
      { src: '/assets/anime-image/anime.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['React', 'Tailwind', 'Nodejs', 'mongoDb', 'syncfusion', 'Redux'],
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
    techUsed: ['Nodejs', 'ReactJs', 'Tailwind', 'MongoDb', 'JavaScript', 'Redux'],
    demoLink: 'https://github.com/ajayxverma/VME',
    gitHubLink: 'https://github.com/ajayxverma/VME',
    imageOnRight: false,
  },
  {
    startDate: '',
    endDate: 'April 2024',
    heading: 'Custom Portfolio',
    description:
      "My portfolio project addresses the need for a visually appealing and functional platform to showcase my skills, projects, and achievements as a developer. By leveraging Next.js and other technologies, I've created a professional and engaging portfolio that effectively communicates my capabilities to potential employers, clients, and collaborators.",
    images: [
      { src: '/assets/anime-image/image1.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image5.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image3.jpg', alt: 'axy' },
      { src: '/assets/anime-image/image4.jpg', alt: 'axy' },
    ],
    techUsed: ['Nextjs', 'Tailwind', 'Nodejs', 'Redux'],
    demoLink: 'https://ajayxverma.github.io/portfolio-me-alpha/',
    gitHubLink: 'https://github.com/ajayxverma/portfolio-me-alpha',
    imageOnRight: true,
  },
];

export const otherProjectsData: OtherProData[] = [
  {
    title: 'Contact Backend Service',
    description:
      'Developed a Node.js Express API for managing contacts, enabling users to log in, create, save, delete contacts, and log out. This API offers a robust solution for contact management within a web application, enhancing user experience and data organization.',
    techUsed: ['Nodejs', 'Express', 'MongoDb', 'Redis'],
    demoLink: 'https://github.com/ajayxverma/contacts-api-nodejs',
    gitHubLink: 'https://github.com/ajayxverma/contacts-api-nodejs',
  },
  {
    title: 'Task Management Service',
    description:
      'Developed a comprehensive task management system using the Nest.js framework, powered by Node.js and Express on the backend. This system empowers users with the ability to efficiently manage their tasks. Users can seamlessly access, create, delete, and update tasks, providing a seamless and organized task management experience.',
    techUsed: ['React', 'Nodejs', 'tailwind', 'MongoDb'],
    demoLink: 'https://github.com/ajayxverma/nestjs-task-management',
    gitHubLink: 'https://github.com/ajayxverma/nestjs-task-management',
  },
  {
    title: 'Employee Management',
    description:
      'The Employee Management system, built with React, Spring Boot, and MongoDB, streamlines administrative tasks. Administrators can securely log in, add, update, and delete employee records with ease. This efficient web application demonstrates the integration of frontend and backend technologies for seamless employee data management.',
    techUsed: ['React', 'SpringBoot', 'tailwind', 'MongoDb'],
    demoLink: 'https://github.com/ajayxverma/EmployeeManagement',
    gitHubLink: 'https://github.com/ajayxverma/EmployeeManagement',
  },
  {
    title: 'Blogging App',
    description:
      'Developed a comprehensive blogging App using React framework. User can care Blogs and share the blogs on there social handle.',
    techUsed: ['React', 'tailwind', 'Nodejs'],
    demoLink: 'https://github.com/ajayxverma/React_Blogging_App',
    gitHubLink: 'https://github.com/ajayxverma/React_Blogging_App',
  },
  {
    title: 'Reactive Spring WebFlux',
    description:
      'The Reactive Spring WebFlux Service is a high-performance, non-blocking, reactive web service built using the Spring WebFlux framework. It leverages the power of reactive programming to handle a large number of concurrent requests with minimal resource consumption, making it ideal for scalable and responsive applications.',
    techUsed: ['Java', 'Spring', 'PostgresSql'],
    demoLink: 'https://github.com/ajayxverma/reactive-spring-webflux',
    gitHubLink: 'https://github.com/ajayxverma/reactive-spring-webflux',
  },
  {
    title: 'Weather APP',
    description:
      'weather app, developed using Angular and integrating with RapidAPI, offers users real-time access to weather forecasts and information from around the globe. With a clean and intuitive user interface, the app provides accurate weather data, empowering users to plan their activities and stay informed about current weather conditions.',
    techUsed: ['Angular', 'RapiAPI'],
    demoLink: 'https://github.com/ajayxverma/weather-app-angular',
    gitHubLink: 'https://github.com/ajayxverma/weather-app-angular',
  },
];

export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    sequence: 1,
    companyName: 'Capgemini',
    sectionId: '1',
    startDate: '8/06/2021 - Present',
    rolesAndResponsibility: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Designed, developed, & maintained APIs using framework like Node.js, ExpressJs Spring, Spring-boot while achieving reduced latency & improved application performance.',
      'Designed and implemented database Schemas to support data retrieval & storage',
      'Implemented performance optimization techniques, reducing page load times and improving overall site speed',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment processes. Ensuring efficient release cycles for web applications.',
    ],
  },
  {
    title: 'Web Developer',
    sequence: 1,
    companyName: 'InfoSakters',
    sectionId: '2',
    startDate: '1/02/2019 - 1/05/2019',
    rolesAndResponsibility: [
      'worked closely with clients to gather requirements and provided technical solutions for their specific needs. This approach led to highly customized web solutions',
      'wrote clean and efficient code to optimize website performance, resulting in improved loading times and enhanced user experience.',
      'conducted code reviews to maintain code quality and consistency, fostering a collaborative development environment and ensuring code met the required standards.',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'managed website content updates and ensured the site remained up to date, maintaining the relevance of the content and improving user engagement.',
    ],
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    title: 'Github',
    link: 'https://github.com/ajayxverma',
    sequence: 1,
    icon: ImGithub,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ajayxverma/',
    sequence: 2,
    icon: RxLinkedinLogo,
  },
  {
    title: 'Twitter',
    link: 'https://x.com/heyAjayverma',
    sequence: 3,
    icon: RiTwitterXFill,
  },
  {
    title: 'Instagram',
    link: 'https://instagram.com/_ajay_verma',
    sequence: 4,
    icon: RxInstagramLogo,
  },
];
