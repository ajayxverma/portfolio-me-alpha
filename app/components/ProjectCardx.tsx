import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

const ProjectCardx = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-end justify-center text-center sm:block sm:p-0">
        <div className="group relative inline-block px-4 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white border-solid border-[1px] border-gray-100 dark:border-gray-900 border-1 rounded-lg hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:shadow-blue-400/20 dark:bg-inherit sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            {/* <img
              className="object-cover w-full h-48 rounded-md"
              src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            /> */}

            <div className="mt-4 text-start">
              <div
                className="font-medium leading-6 text-gray-800 capitalize dark:text-white flex justify-between items-center"
                id="modal-title"
              >
                Contact backend service
                <VscLinkExternal
                  size={20}
                  className="hover:fill-primary-800 hover:z-[1] hover:translate-y-[-4] hover:shadow-neutral-100"
                />
              </div>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Developed a Node.js Express API for managing contacts, enabling users to log in,
                create, save, delete contacts, and log out. This API offers a robust solution for
                contact management within a web application, enhancing user experience and data
                organization.
              </p>
            </div>
          </div>

          {/*       <div className="flex items-center justify-center mt-4">
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-500 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
          </div> */}
          <div className="flex gap-2 my-2">
            <a
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              Tailwindcss
            </a>
            <a
              href="#"
              className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
              VueJS
            </a>
          </div>
          <a
            href="#"
            className="flex items-center opacity-0 justify-between group-hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out "
          >
            <span className="text-sm">Github</span>
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

          {/*  <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
            <button className="w-full px-1 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Github
            </button>

            <button className="w-full px-1 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Demo
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardx;
