'use client';
import React, { useEffect, useState } from 'react';
import { featuredProjectData } from '../data/siteData';
import { ProjectType } from '../types/componentsTypes';
import CarouselImage from './Carousel.component';
import SectionHeading from './elements/SectionHeading';
import { VscLinkExternal } from 'react-icons/vsc';

export const ProjectImage = (projectData: ProjectType) => {
  return <CarouselImage images={projectData.images} />;
};

export const ProjectInfo = (projectData: ProjectType) => {
  return (
    <div className="sm:p-2 sm:pl-0 sm:w-4/6 flex flex-col justify-between">
      <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
        {projectData.endDate}
      </span>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {projectData.heading}
      </h3>
      <p className="my-6 text-gray-600 dark:text-gray-300">{projectData.description}</p>

      <div className="flex gap-2 flex-wrap">
        {projectData?.techUsed?.map((tech, index) => {
          return (
            <a
              key={index}
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              {tech}
            </a>
          );
        })}
      </div>
      <div className="my-4 flex justify-between">
        <a
          href={projectData.demoLink}
          className="flex gap-6 items-center opacity-0 justify-between dark:text-gray-300 text-gray-800 hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out "
        >
          <span className="text-sm -translate-x-4 transition duration-300 group-hover:translate-x-0 font-bold">
            Demo
          </span>
          <VscLinkExternal
            size={10}
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 fill-current transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </a>

        <a
          href={projectData.gitHubLink}
          className="flex gap-6 items-center opacity-0 justify-between dark:text-gray-300 text-gray-800 hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out "
        >
          <span className="text-sm translate-x-4 transition duration-300 group-hover:translate-x-0 font-bold">
            Github
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectListHeading = {
  heading: 'Featured Projects',
  description:
    'Discovering Innovation: Showcasing Pioneering Projects and Technical Expertise',
};

const ProjectsCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="my-24">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <SectionHeading {...ProjectListHeading} />
        <div className="lg:w-10/12 xl:w-4/4 lg:mx-auto flex-wrap">
          {featuredProjectData.map((project, index) => {
            return (
              <div
                key={index}
                className="group relative hover:z-[2] sm:-mx-8 p-6 sm:p-8  rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-black shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex sm:items-center transition duration-300"
              >
                {project.imageOnRight || isMobile ? (
                  <>
                    <ProjectInfo {...project} />
                    <ProjectImage {...project} />
                  </>
                ) : (
                  <>
                    <ProjectImage {...project} />
                    <ProjectInfo {...project} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
