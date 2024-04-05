import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20" id="experience">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          A Tailus Blocks subscription gives you access to our components and more.
        </h2>
      </div>
      <div className="m-auto mt-12 items-center justify-center space-y-4 lg:flex lg:space-y-0 lg:space-x-3 xl:w-11/12">
        {/* <div className="group relative z-10 mx-auto sm:w-7/12 lg:w-4/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white">Monthly</h5>
              <div className="relative flex justify-around">
                <div className="flex">
                  <span className="-ml-6 text-xl font-bold text-sky-500">$</span>
                  <span className="leading-0 text-4xl font-bold text-gray-800 dark:text-white">
                    19
                  </span>
                </div>
              </div>
            </div>
            <img
              src="images/tanzanite.webp"
              width="512"
              height="512"
              className="m-auto w-16"
              alt="tanzanite illustration"
            />
            <p className="text-center text-gray-600 dark:text-gray-300">
              If you only require access for one developer, this may be the plan for you.
            </p>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div> */}

        <div className="group relative m-auto md:w-11/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>

          <div className="relative sm:flex">
            {/* Toggle Section Start */}
            <div className="-mt-16 pb-20 sm:mt-0 sm:w-5/12 sm:pb-0">
              {/* Here Edit the vertical Line  */}
              <div className="relative h-full after:absolute after:right-0 after:top-1 after:my-auto after:h-0.5 after:w-full after:rounded-full after:bg-gray-200 dark:after:bg-gray-700 sm:pt-0 sm:after:inset-y-0 sm:after:h-[85%] sm:after:w-0.5">
                <div className="relative -mt-1 h-full overflow-x-auto pt-7 pb-6 sm:-ml-1 sm:pl-1">
                  <ul className="flex h-full w-max justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8">
                    <li>
                      <div className="relative">
                        <input
                          checked
                          hidden
                          className="peer"
                          type="radio"
                          name="devs"
                          id="devs20"
                        />
                        <label
                          form="devs20"
                          className="block w-full cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                        >
                          <span className="mx-auto text-sm font-semibold">20 developers</span>
                        </label>
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-blue-400 dark:border-gray-800 bg-blue-600 transition peer-checked:scale-100 sm:inset-y-0 sm:right-[-2.5rem] sm:my-auto sm:mr-0"
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
                          <span className="mx-auto block w-max text-sm font-semibold">
                            15 developers
                          </span>
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
                          <span className="mx-auto block w-max text-sm font-semibold">
                            10 developers
                          </span>
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
                </div>
              </div>
            </div>
            {/* Toggle Section End */}
            {/* Experience Info */}
            <div className="space-y-8 p-8 pb-20 sm:w-7/12 sm:pb-8">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Complete pack
                </h5>
                <div className="relative flex justify-around">
                  <div className="flex">
                    <span className="-ml-6 text-xl font-bold text-sky-500">$</span>
                    <span className="leading-0 text-4xl font-bold text-gray-800 dark:text-white">
                      1900
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="images/premium.webp"
                width="512"
                height="512"
                className="m-auto w-16"
                alt="premium illustration"
              />
              <p className="text-center text-gray-600 dark:text-gray-300">
                Wire your account to support 5 developers with a year&apos;s worth of unlimited
                access to tailus blocks!
              </p>
              <div className="absolute inset-x-0 bottom-6 w-full px-6 sm:static sm:px-0">
                <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-slate-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="relative text-base font-semibold text-white dark:text-dark">
                    Start plan
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
