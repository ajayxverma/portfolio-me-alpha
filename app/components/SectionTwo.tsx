import React from 'react';
import Image from 'next/image';
import profileImg from '../../public/assets/images/Artboard-4.svg';

const SectionTwo = () => {
  return (
    <div className="xl:container m-auto px-6 py-20 md:px-8 lg:px-12">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">About Me</h2>
      </div>
      <div className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 xl:w-11/12">
        <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white/20 dark:bg-gray-800/20 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 backdrop-blur-md"
          ></div>
          <div className="relative space-y-6 p-6 sm:p-12">
            {/* <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Sometime about me
            </h3> */}

            <div className="flex justify-center items-center">
              <Image src={profileImg} alt="image" width={300} height={300} />
            </div>
            <div>
              <span className="text-center justify-center">
                Hello, and welcome to my corner of the internet! I'm Ajay Verma, a passionate web
                developer dedicated to crafting stunning digital experiences. With a keen eye for
                design, a knack for problem-solving, and a commitment to staying at the forefront of
                technology, I create Web Apps that not only look great but also perform flawlessly.
              </span>
            </div>
            {/*       <ul
              role="list"
              className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2">
                <span className="font-semibold text-primary">&Check;</span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">&check;</span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">&check;</span>
                <span>Third advantage donate to project</span>
              </li>
            </ul> */}

            <div className="flex gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            <p className="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300">
              <span>Call us at</span>
              <a href="tel:+24300" className="flex items-center space-x-2 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <span className="font-semibold">+1 000 000</span>
              </a>
              <span>or</span>
            </p>
            <a
              href="mailto:"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-zinc-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Send us an Email
              </span>
            </a>
          </div>
        </div>
        <div className="group relative md:w-7/12 lg:w-8/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative p-6 pt-16 md:rounded-r-2xl md:pl-8 lg:p-8 lg:pl-16">
            <p className="text-gray-700 dark:text-white font-bold pb-4">My Experience</p>
            <div className="flex space-x-2 justify-between">
              <div className="cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300">
                <span className="mx-auto block w-max text-sm font-semibold">&#10094;</span>
              </div>
              <ul className="flex h-auto w-auto justify-start space-x-2 sm:w-auto sm:px-0 overflow-x-scroll scroll-m-4 hide-scroll-bar ">
                <li>
                  <div className="relative">
                    <input hidden className="peer" type="radio" name="devs" id="devs15" />
                    <label
                      form="devs15"
                      className="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span className="mx-auto block w-max text-sm font-semibold">Capgemini</span>
                    </label>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <input hidden className="peer" type="radio" name="devs" id="devs15" />
                    <label
                      form="devs15"
                      className="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span className="mx-auto block w-max text-sm font-semibold">InfoSkaters</span>
                    </label>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <input hidden className="peer" type="radio" name="devs" id="devs10" />
                    <label
                      form="devs10"
                      className="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span className="mx-auto block w-max text-sm font-semibold">Freelencing</span>
                    </label>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <input hidden className="peer" type="radio" name="devs" id="devs5" />
                    <label
                      form="devs5"
                      className="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span className="mx-auto block w-max text-sm font-semibold">
                        5 developers
                      </span>
                    </label>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
              </ul>
              <div className="cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300">
                <span className="mx-auto block w-max text-sm font-semibold">&#10095;</span>
              </div>
            </div>

            <ul role="list" className="space-y-0 py-6 text-gray-600 dark:text-gray-300">
              <li className="space-x-2">
                <span className="font-semibold text-primary mr-1">&#10004;</span>
                <span>
                  Deliver high-quality, robust production code for a diverse array of projects.
                </span>
              </li>
              <li>
                <span className="text-purple-200 mr-1">&#10004;</span>
                <span>
                  Designed, developed, & maintained APIs using framekwork like Node.js, ExpressJs
                  Spring, Spring-boot while efficiently fetching data from Cognite using GraphQL
                  achieving reduced latency & improved application performance. Designed and
                  implemented database Schemas to support data retrieval & storage
                </span>
              </li>
              <li>
                <span className="font-semibold text-primary mr-1">&#10004;</span>
                <span>
                  Collaborate with designers, project managers, and other engineers to transform
                  creative concepts into production realities for clients and stakeholders
                </span>
              </li>
              <li>
                <span className="font-semibold text-primary mr-1">&#10004;</span>
                <span>
                  Implemented performance optimization techniques, reducing page load times and
                  improving overall site speed
                </span>
              </li>
              <li>
                <span className="font-semibold text-primary mr-1">&#10004;</span>
                <span>
                  Implemented CI/CD pipelines using GitLab CI/CD for seamless build, test, and
                  deployment processes. Ensuring efficient release cycles for web applications.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using our
              platform include:
            </p>
            <div className="mt-6 flex justify-between gap-6">
              <img
                className="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                className="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img className="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                className="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
