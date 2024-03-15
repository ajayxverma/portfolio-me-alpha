import React from 'react';
import { projectData } from '../data/siteData';
import { ProjectType } from '../types/componentsTypes';

export const ProjectImage = () => {
  return (
    <div className="sm:w-4/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export const ProjectInfo = (projectData: ProjectType) => {
  return (
    <div className="sm:p-2 sm:pl-0 sm:w-4/6">
      <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
        {projectData.endDate}
      </span>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {projectData.description}
      </h3>
      <p className="my-6 text-gray-600 dark:text-gray-300">
        Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...
      </p>

      <div className="flex gap-4">
        {projectData?.techUsed?.map((tech) => {
          return (
            <a
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              {tech}
            </a>
          );
        })}
      </div>
      <div className="flex gag-4">
        <button></button>
      </div>
    </div>
  );
};

const ProjectsCards = () => {
  return (
    <div className="py-12">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Project I have worked on
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum
            officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>

        <div className="lg:w-3/4 xl:w-4/4 lg:mx-auto flex-wrap">
          {projectData.map((project) => {
            return (
              <div className="group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                {project.imageOnRight ? (
                  <>
                    <ProjectInfo {...project} />
                    <ProjectImage />
                  </>
                ) : (
                  <>
                    <ProjectImage />
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
