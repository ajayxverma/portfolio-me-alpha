import React from 'react';
import { socialLinks } from '../data/siteData';

const HeroSectionThree = () => {
  return (
    <div className="bg-white dark:bg-inherit pb-6 sm:pb-8 lg:pb-12 home-bg-image">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-2xl border bg-gray-50 p-2 text-gray-500">
            <span className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
              connect
            </span>

            <span className="text-xs md:text-sm">Want to know get started building something.</span>

            <a
              href="#"
              className="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>
          <div className="flex max-w-4xl flex-col items-center pb-12 pt-8 text-center lg:pb-36 lg:pt-28">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Hi👋 there, My Name is
            </p>

            <h1 className="mb-2 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-4 md:text-6xl">
              Ajay Verma.
            </h1>
            <h1 className="mb-8 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-12 md:text-6xl">
              I build things for the web.
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            {/* <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
              Social
            </span>
            <span className="h-px w-12 bg-gray-200"></span> */}

            <div className="flex gap-4">
              {socialLinks.map((value, index) => {
                return (
                  <a
                    href={value.link}
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    {<value.icon size={30} fill="currentColor" />}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSectionThree;
