'use client';
import React, { useState } from 'react';

interface VerticalTabProps {
  label: string;
  children: React.ReactNode;
  id: string;
}

const VerticalTab: React.FC<VerticalTabProps> = ({ children, id }) => {
  return (
    <div id={id} role="tabpanel" className="hidden">
      {children}
    </div>
  );
};

interface VerticalTabsProps {
  children: React.ReactNode[];
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-wrap">
      <div className="border-e border-gray-200 dark:border-gray-700">
        <nav
          className="flex flex-col space-y-2"
          aria-label="Tabs"
          role="tablist"
          data-hs-tabs-vertical="true"
        >
          {React.Children.map(children, (child, index) => {
            const tab = child as React.ReactElement<VerticalTabProps>;
            return (
              <button
                key={index}
                type="button"
                className={`hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
                id={tab.props.id}
                data-hs-tab={`#${tab.props.id}`}
                aria-controls={tab.props.id}
                role="tab"
                aria-selected={activeTab === index}
              >
                {tab.props.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="ms-3">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            const tab = child as React.ReactElement<VerticalTabProps>;
            return (
              <div id={tab.props.id} role="tabpanel" key={index} className="">
                {tab.props.children}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { VerticalTabs, VerticalTab };

const DemoTab = () => {
  return (
    <VerticalTabs>
      <VerticalTab label="Tab 1" id="vertical-tab-with-border-1">
        <p className="text-gray-500 dark:text-gray-400">
          This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em>{' '}
          item's tab body.
        </p>
      </VerticalTab>
      <VerticalTab label="Tab 2" id="vertical-tab-with-border-2">
        <p className="text-gray-500 dark:text-gray-400">
          This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em>{' '}
          item's tab body.
        </p>
      </VerticalTab>
      <VerticalTab label="Tab 3" id="vertical-tab-with-border-3">
        <p className="text-gray-500 dark:text-gray-400">
          This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em>{' '}
          item's tab body.
        </p>
      </VerticalTab>
    </VerticalTabs>
  );
};

export default DemoTab;
