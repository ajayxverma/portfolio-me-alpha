import React from 'react';
import { FaCode } from 'react-icons/fa';
import { GrCloudlinux } from 'react-icons/gr';
import { SiAltiumdesigner } from 'react-icons/si';
import SectionHeading from './elements/SectionHeading';

const ServicesCards = () => {
  const ProjectListHeading = {
    heading: 'My Tech Stack',
  };
  return (
    <div className="py-1">
      <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
        <SectionHeading {...ProjectListHeading} />
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
          <div className="group relative bg-white dark:bg-black transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="flex flex-col h-full justify-between space-y-8 py-12 p-8">
              <div className="space-y-6">
                <FaCode size={50} className="group-hover:fill-primary-800" />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary-800">
                    Backend Developer
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Technologies I&apos;m Proficient In
                  </p>
                  <div className="flex justify-between">
                    <ul className="dark:text-gray-300 list-disc ml-4">
                      <span className="ml-[-1rem] my-2 font-semibold group-hover:text-primary-800">
                        Frameworks
                      </span>
                      <li>Nodejs</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>PostgresSql</li>
                      <li>Redis</li>
                      <li>Spring-boot</li>
                    </ul>
                    <ul className="dark:text-gray-300 list-disc ml-4">
                      <span className="ml-[-1rem] my-2 font-semibold group-hover:text-primary-800">
                        Language
                      </span>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>HTML</li>
                      <li>Css</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:group-hover:text-primary-800"
              >
                <span className="text-sm">Read more</span>
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
          <div className="group relative bg-white dark:bg-black transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="flex flex-col h-full justify-between space-y-8 py-12 p-8">
              <div className="space-y-6">
                <GrCloudlinux size={50} className="group-hover:fill-primary-800" />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary-800">
                    Frontend
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Technologies I&apos;m Proficient In
                  </p>
                  <div className="flex justify-between">
                    <ul className="dark:text-gray-300 list-disc ml-4">
                      <span className="ml-[-1rem] my-2 font-semibold">Frameworks</span>
                      <li>ReactJs</li>
                      <li>NextJs</li>
                      <li>Redux</li>
                      <li>Tailwind</li>
                      <li>MUI</li>
                    </ul>
                    <ul className="dark:text-gray-300 list-disc ml-4">
                      <span className="ml-[-1rem] my-2 font-semibold">Language</span>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>HTML</li>
                      <li>Css</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-primary-800"
              >
                <span className="text-sm">Read more</span>
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
          <div className="group relative bg-white dark:bg-black transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="flex flex-col h-full justify-between space-y-8 py-12 p-8">
              <div className="space-y-6">
                <SiAltiumdesigner size={50} className="group-hover:fill-primary-800" />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary-800">
                    UI Designer
                  </h5>
                  <p className="text-[12px] text-gray-600 dark:text-gray-300">
                    Technologies I&apos;m Proficient In
                  </p>
                  <div className="flex justify-between">
                    <ul className="dark:text-gray-300 list-disc ml-4">
                      <li>Wireframing and Prototyping</li>
                      <li>Figma</li>
                      <li>User Experience (UX) Design</li>
                      <li>Responsive Design</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-primary-800"
              >
                <span className="text-sm">Read more</span>
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
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
