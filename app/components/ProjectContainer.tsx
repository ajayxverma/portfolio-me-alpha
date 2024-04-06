import React from 'react';
import ProjectCardx from './ProjectCardx';
import SectionHeading from './elements/SectionHeading';
import { otherProjectsData } from '../data/siteData';
import { OtherProData } from '../types/componentsTypes';

const ProjectListHeading = {
  heading: 'Other Project Showcase',
  description: 'Exploring Diverse Endeavors: A Glimpse into My Varied Project',
};

const ProjectContainer = () => {
  return (
    <div className="my-24">
      <SectionHeading {...ProjectListHeading} />
      <div className="flex flex-wrap gap-4 md:gap-4 justify-center mx-2">
        {otherProjectsData?.map((data: OtherProData, index) => {
          return <ProjectCardx {...data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectContainer;
