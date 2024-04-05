import { HeadingProp } from '@/app/types/componentsTypes';
import React from 'react';

const SectionHeading: React.FC<HeadingProp> = ({ heading, description }) => {
  return (
    <div className="mb-12  space-y-2 text-center flex flex-col justify-center items-center">
      <h2 className="text-3xl font-heading font-bold text-gray-800 md:text-4xl dark:text-white">
        {heading}
      </h2>
      {description && (
        <p className="w-10/12 text-gray-600 pt-4 dark:text-gray-300 lg:mx-auto lg:w-6/12">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
