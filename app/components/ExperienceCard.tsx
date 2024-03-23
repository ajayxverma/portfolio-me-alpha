import React from 'react';
import { experienceData } from '../data/siteData';
import { ExperienceType } from '../types/componentsTypes';

const ExperienceCard = () => {
  return (
    <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-16">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          My Experience
        </h2>
      </div>
      <div className="m-auto mt-12 items-center justify-center space-y-4 lg:flex lg:space-y-0 lg:space-x-2">
        <div className="group relative m-auto">
          {/*  <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-105"
          ></div> */}
          <div className="relative sm:flex justify-center max-w-screen-lg">
            <div className="-mt-16 pb-20 sm:mt-0 sm:w-4/12 sm:pb-0">
              <div className="relative h-full after:absolute after:right-0 after:bottom-2 after:my-auto after:h-0.5 after:w-full after:rounded-full after:bg-gray-200 dark:after:bg-gray-700 sm:pt-0 sm:after:inset-y-0 sm:after:h-[85%] sm:after:w-0.5">
                <div className="relative -mt-1 h-full overflow-auto pt-7 pb-6 sm:-mr-3 sm:pr-3">
                  <ul className="flex h-full w-max  justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8">
                    {experienceData.map((tab) => {
                      return <TabHeaderItem {...tab} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <TabBodyContent />
          </div>
        </div>
      </div>
    </div>
  );
};

const TabHeaderItem = (data: ExperienceType) => {
  return (
    <li>
      <div className="relative">
        <input checked hidden className="peer" type="radio" name="devs" id="devs20" />
        <label
          htmlFor="devs20"
          className="block w-full cursor-pointer rounded-lg bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
        >
          <span className="mx-auto text-sm font-semibold">{data.companyName}</span>
        </label>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-1.70rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary-700 transition peer-checked:scale-100 sm:inset-y-0 sm:right-[-2.70rem] sm:my-auto sm:mr-0"
        ></div>
      </div>
    </li>
  );
};

const TabBodyContent = () => {
  return (
    <div className="space-y-2 p-8 pb-20 sm:w-8/12 sm:pb-8 active">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-white">Software Engineer</h5>
          <p className="text-sm font-normal text-gray-400 dark:text-gray-400">
            {' '}
            June 8 2021 - present
          </p>
        </div>
        {/* <div className="relative flex justify-around">
          <div className="flex">
            <span className="-ml-6 text-xl font-bold text-sky-500">$</span>
            <span className="leading-0 text-4xl font-bold text-gray-800 dark:text-white">1900</span>
          </div>
        </div> */}
      </div>
      <ul role="list" className=" py-1 text-gray-600 dark:text-gray-300">
        <li className="list-item list-disc">
          <span>Deliver high-quality, robust production code for a diverse array of projects.</span>
        </li>
        <li className="list-item list-disc">
          <span>
            Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs Spring,
            Spring-boot while efficiently fetching data from Cognite using GraphQL achieving reduced
            latency & improved application performance. Designed and implemented database Schemas to
            support data retrieval & storage
          </span>
        </li>
        <li className="list-item list-disc">
          <span>
            Collaborate with designers, project managers, and other engineers to transform creative
            concepts into production realities for clients and stakeholders
          </span>
        </li>
        <li className="list-item list-disc">
          <span>
            Implemented performance optimization techniques, reducing page load times and improving
            overall site speed
          </span>
        </li>
        <li className="list-item list-disc">
          <span>
            Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and deployment
            processes. Ensuring efficient release cycles for web applications.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
