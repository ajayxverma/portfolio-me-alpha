import React from 'react';
import headerIcon from '../../public/assets/icons/av-logo.svg';
import { socialLinks } from '../data/siteData';
import Image from 'next/image';

const SimpleFooter = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12 dark:bg-inherit">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t dark:border-gray-600 pt-6">
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <a
              href="#"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Experience
            </a>
            <a
              href="#"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((value, index) => {
              return (
                <a
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-primary-500 active:text-gray-600"
                >
                  {<value.icon size={25} fill="currentColor" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400 flex justify-center flex-col items-center gap-3">
          <Image
            src={headerIcon}
            alt="ava"
            height={80}
            width={80}
            className="py-4 cursor-pointer"
          />
          © 2021 - Design and developed by Ajay Verma
        </div>
      </footer>
    </div>
  );
};

export default SimpleFooter;
