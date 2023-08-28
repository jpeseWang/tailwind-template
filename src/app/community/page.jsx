"use client";
import {
  InboxArrowDownIcon,
  IdentificationIcon,
} from "@heroicons/react/20/solid";
import Blog from "./blog/page";
import Contribution from "./contribution/page";
const tabs = [
  {
    name: "Blogs",
    href: "#",
    icon: IdentificationIcon,
    components: <Blog />,
    current: true,
  },
  {
    name: "Contribution",
    href: "#",
    icon: InboxArrowDownIcon,
    components: <Contribution />,
    current: false,
  },
];
import { classNames } from "@/utils/classNames";
import { useState } from "react";

export default function Example() {
  const [currentNavItem, setCurrentNavItem] = useState("Blogs");
  const [isActive, setIsActive] = useState(true);
  const handleActiveTab = (item) => {
    setIsActive(true);
    setCurrentNavItem(item);
  };
  return (
    <div className="max-w-container">
      <div className="sm:hidden mx-auto flex max-w-container space-x-8 py-4 ">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name} </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav
            className="cursor-pointer -mb-px flex space-x-8"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={classNames(
                  tab.name === currentNavItem && isActive
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                )}
                onClick={() => handleActiveTab(tab.name)}
              >
                <tab.icon
                  className={classNames(
                    tab.name === currentNavItem && isActive
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "-ml-0.5 mr-2 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {currentNavItem === "Blogs" ? <Blog /> : <Contribution />}
    </div>
  );
}
