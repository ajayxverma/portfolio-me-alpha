import React from 'react';
import { socialLinks } from '../data/siteData';
import Image from 'next/image';
import headerIcon from '../../public/assets/icons/av-logo.svg';
import heroBgImage from '../../public/assets/images/bg-home2.svg';

const HeroSectionThree = () => {
  return (
    <div className="bg-white dark:bg-inherit pb-6 sm:pb-8 lg:pb-12">
      <div className="opacity-30 z-[-10]">
        <Image src={heroBgImage} alt="Background" layout="fill" objectFit="cover" priority={true} />
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 backdrop-blur-sm bg-opacity-10">
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-2xl border bg-gray-50 p-2 text-gray-500">
            <span className="mt-0.5 rounded-full bg-primary-300 px-2 py-1 text-xs font-semibold leading-none text-primary-800">
              connect
            </span>

            <span className="text-xs md:text-sm">Want to know get started building something.</span>

            <a
              href="#"
              className="text-sm font-bold text-primary-800 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>
          <div className="flex max-w-4xl flex-col items-center pb-12 pt-8 text-center lg:pb-16 lg:pt-14">
            <Image src={headerIcon} alt="Header Icon" height="30" width="30" className="mx-4" />
            <p className="mb-4 mt-2 font-semibold text-secondary-800 md:mb-6 md:text-lg xl:text-xl">
              Hi👋 there, My Name is
            </p>

            <h1 className="mb-2 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-4 md:text-6xl">
              Ajay Verma.
            </h1>
            <h1 className="mb-8 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-4 md:text-6xl">
              I build things for the web.
            </h1>
            <p className="mb-8 text-base font-normal dark:text-lightBg-900 text-black md:mb-8">
              As a software engineer, I specialize in creating outstanding digital experiences with
              a strong emphasis on accessibility and user-centered design principles. My primary
              focus revolves around developing products that adhere to accessibility standards such
              as WCAG, ensuring that all users can engage with them seamlessly. I prioritize
              collaboration, user feedback, and continuous learning to deliver technically sound and
              user-friendly solutions that meet evolving industry trends.
            </p>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-primary-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-primary-500 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Get IN Touch
              </a>

              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                View Portfolio
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
