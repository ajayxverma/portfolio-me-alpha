import React from 'react';
import ProjectCardx from './ProjectCardx';

const ProjectContainer = () => {
  return (
    <div className="my-24">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Project I have worked on
        </h2>
        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum
          officia aliquid explicabo? Excepturi, voluptate?
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <ProjectCardx />
        <ProjectCardx />
        <ProjectCardx />
        <ProjectCardx />
        <ProjectCardx />
        <ProjectCardx />
      </div>
    </div>
  );
};

export default ProjectContainer;
