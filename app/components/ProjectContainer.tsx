import React from 'react';
import ProjectCardx from './ProjectCardx';
import SectionHeading from './elements/SectionHeading';

const ProjectListHeading = {
  heading: 'Other Project I have worked on',
  description:
    'cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?',
};

const ProjectContainer = () => {
  return (
    <div className="my-24">
      <SectionHeading {...ProjectListHeading} />
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
