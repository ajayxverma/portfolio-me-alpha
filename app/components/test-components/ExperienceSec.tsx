'use client';
import React, { useState } from 'react';
import { experienceData } from '@/app/data/siteData';
import { ExperienceType } from '@/app/types/componentsTypes';

interface VerticalTabProps {
  title: string;
  sequence: string;
  onClick: () => void;
  activeTab: string;
}

const TabButton: React.FC<VerticalTabProps> = ({ title, sequence, onClick, activeTab }) => {
  const isActive = activeTab === sequence;
  return (
    <li id={sequence} onClick={onClick}>
      <div className="relative">
        {isActive ? (
          <input checked hidden className="peer" type="radio" name="devs" id={sequence} />
        ) : null}
        <label
          htmlFor={sequence}
          className="block w-full cursor-pointer rounded-lg bg-sky-50 dark:bg-black/90 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary-800 peer-checked:ring-1 peer-checked:ring-primary-800"
        >
          <span className="mx-auto text-sm font-semibold">{title}</span>
        </label>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-1.70rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary-800 transition peer-checked:scale-100 sm:inset-y-0 sm:right-[-2.70rem] sm:my-auto sm:mr-0"
        ></div>
      </div>
    </li>
  );
};

const TabBodyContent: React.FC<ExperienceType> = (experience) => {
  return (
    <div id={experience.sectionId} className="space-y-2 p-8 sm:pl-16 pb-20 sm:w-8/12 sm:pb-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-white">
            {experience.companyName}
          </h5>
          <p className="text-sm font-normal text-gray-400 dark:text-gray-400">
            {experience.startDate}
          </p>
        </div>
      </div>
      <ul role="list" className="py-1 text-gray-600 dark:text-gray-300">
        {experience.rolesAndResponsibility.map((rr, index) => {
          return (
            <li className="list-item list-disc" key={index}>
              <span>{rr}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ExperienceCard = () => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const handleTabClick = (sequence: string) => {

    setActiveTab(sequence);
  };

  return (
    <div className="m-auto mt-12 items-center justify-center space-y-4 lg:flex lg:space-y-0 lg:space-x-2">
      <div className="group relative m-auto">
        <div className="relative sm:flex justify-center max-w-screen-lg">
          <div className="-mt-16 pb-20 sm:mt-0 sm:w-4/12 sm:pb-0">
            <div className="relative h-full after:absolute after:right-0 after:bottom-2 after:my-auto after:h-0.5 after:w-full after:rounded-full after:bg-gray-200 dark:after:bg-gray-700 sm:pt-0 sm:after:inset-y-0 sm:after:h-[85%] sm:after:w-0.5">
              <div className="relative -mt-1 h-full overflow-auto pt-7 pb-6 sm:-mr-3 sm:pr-3">
                <ul className="flex h-full w-max justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8">
                  {experienceData.map((experience) => (
                    <TabButton
                      key={experience.sectionId}
                      sequence={experience.sectionId}
                      title={experience.companyName}
                      onClick={() => handleTabClick(experience.sectionId)}
                      activeTab={activeTab}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {experienceData.map((exp) => {
            if (activeTab === exp?.sectionId) {
              return <TabBodyContent key={exp.sequence} {...exp} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
