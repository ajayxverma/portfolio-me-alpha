'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { headerMenuList } from '../data/siteData';
import headerIcon from '../../public/assets/icons/header-icon.svg';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-7xl  mx-auto my-3 border-solid rounded-xl border-white py-2 sticky top-4 z-50 bg-blue-200/20 dark:bg-blue-200/20   backdrop-blur-3xl brightness-100 text-opacity-100">
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <Image src={headerIcon} alt="Header Icon" height="30" width="30" className="mx-4" />
            <span className="self-center text-lg font-semibold whitespace-nowrap">Ajay Verma</span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-4 mt-4 md:mt-0 md:text-sm md:font-medium">
              {headerMenuList.map((menu, index) => {
                return (
                  <li key={index}>
                    <a
                      href={menu.link}
                      className="text-gray dark:text-white-600 border-b rounded-lg border-gray-100 opacity-100 md:border-0 block px-3 py-2 md:hover:bg-blue-100/40 md:hover:text-blue-700"
                      aria-current="page"
                    >
                      {menu?.title}
                    </a>

                    {!menu.submenu && (
                      <li>
                        <div
                          id="dropdownNavbarLink"
                          data-dropdown-toggle="dropdownNavbar"
                          className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                        >
                          Dropdown{/*  {menu.icon} */}
                        </div>

                        <div
                          id="dropdownNavbar"
                          className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                        >
                          <ul className="py-1" aria-labelledby="dropdownLargeButton">
                            <li>
                              <a
                                href="#"
                                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                              >
                                Dashboard
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    )}
                  </li>
                );
              })}
              {/* Dark/Light Theme Toggle Button Start */}
              <li onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
                <div
                  className="text-gray dark:text-white-600 border-b rounded-lg border-gray-100 opacity-100 md:border-0 block px-3 py-2 md:hover:bg-blue-100/40 md:hover:text-blue-700 bg-blue-200/30"
                  aria-current="page"
                >
                  {/* <div className="flex gap-1 ">
                    <MdDarkMode size={20} className="bg-black" />
                    <CiLight size={20} />
                  </div> */}
                  {theme === 'light' ? <MdDarkMode size={20} /> : <CiLight size={20} />}
                </div>
              </li>
              {/* Dark/Light Theme Toggle Button Start */}
              <li>
                <div
                  id="dropdownNavbar"
                  className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                >
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <p className="mt-5">
          This dropdown navbar element is part of a larger, open-source library of Tailwind CSS
          components. Learn more by going to the official{' '}
          <a className="text-blue-600 hover:underline" href="#" target="_blank">
            Flowbite Documentation
          </a>
          .
        </p> */}
    </div>
  );
};

export default Header;
