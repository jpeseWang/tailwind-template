"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const navigation = [
  {
    name: "Dashboard",
    href: "#Dashboard",
    icon: HomeIcon,
    current: true,
    path: [
      {
        title: "Requirements",
        url: "#",
      },
      {
        title: "Optional: Add the Inter font family",
        url: "#",
      },
    ],
  },
  {
    name: "Team",
    href: "#Team",
    icon: UsersIcon,
    current: false,
    path: [
      {
        title: "Installing dependencies",
        url: "#",
      },
      {
        title: "Creating components",
        url: "#",
      },
    ],
  },
  {
    name: "Using HTML and your own JS",
    href: "#Projects",
    icon: FolderIcon,
    current: false,
    path: [
      {
        title: "Accessibility considerations",
        url: "#",
      },
      {
        title: "Dynamic classes",
        url: "#",
      },
      {
        title: "Transitions",
        url: "#",
      },
    ],
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentNavItem, setCurrentNavItem] = useState("");
  const [isActive, setIsActive] = useState(false);
  const handleActiveTab = (item) => {
    setCurrentNavItem(item);
    setIsActive(true);
  };
  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-20 lg:z-50 lg:flex lg:w-76 lg:flex-col -mt-4">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-10 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 mt-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.name === currentNavItem && isActive
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                          onClick={() => handleActiveTab(item.name)}
                        >
                          <item.icon
                            className={classNames(
                              item.name === currentNavItem && isActive
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                            onClick={() => handleActiveTab(item.name)}
                          />
                          {item.name}
                        </a>
                        <ul
                          role="list"
                          class="ml-4 mb-6 space-y-2 border-l border-slate-200 pl-6 text-sm leading-6 text-slate-700"
                        >
                          {item.path.map((child) => (
                            <li
                              key={child.title}
                              className={classNames(
                                child.name === currentNavItem && isActive
                                  ? "text-indigo-600"
                                  : "text-gray-700 group-hover:text-indigo-600",
                                "shrink-0"
                              )}
                              onClick={() => handleActiveTab(item.name)}
                            >
                              <a href={child.url}>{child.title}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Your content */}
              {/* <ul
                role="list"
                class="space-y-10 text-sm leading-6 text-slate-700 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]"
              >
                <li>
                  <a
                    href="#getting-set-up"
                    class="font-semibold text-slate-900"
                  >
                    Getting set up
                  </a>
                  <ul
                    role="list"
                    class="mt-4 space-y-2 border-l border-slate-200 pl-6"
                  >
                    <li>
                      <a href="#requirements">Requirements</a>
                    </li>
                    <li>
                      <a href="#optional-add-the-inter-font-family">
                        Optional: Add the Inter font family
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#using-react" class="font-semibold text-slate-900">
                    Using React
                  </a>
                  <ul
                    role="list"
                    class="mt-4 space-y-2 border-l border-slate-200 pl-6"
                  >
                    <li>
                      <a href="#react-installing-dependencies">
                        Installing dependencies
                      </a>
                    </li>
                    <li>
                      <a href="#react-creating-components">
                        Creating components
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#using-vue" class="font-semibold text-slate-900">
                    Using Vue
                  </a>
                  <ul
                    role="list"
                    class="mt-4 space-y-2 border-l border-slate-200 pl-6"
                  >
                    <li>
                      <a href="#vue-installing-dependencies">
                        Installing dependencies
                      </a>
                    </li>
                    <li>
                      <a href="#vue-creating-components">Creating components</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#using-html-and-your-own-js"
                    class="font-semibold text-slate-900"
                  >
                    Using HTML and your own JS
                  </a>
                  <ul
                    role="list"
                    class="mt-4 space-y-2 border-l border-slate-200 pl-6"
                  >
                    <li>
                      <a href="#html-accessibility">
                        Accessibility considerations
                      </a>
                    </li>
                    <li>
                      <a href="#html-dynamic-classes">Dynamic classes</a>
                    </li>
                    <li>
                      <a href="#html-transitions">Transitions</a>
                    </li>
                    <li>
                      <a href="#html-creating-partials-components">
                        Creating partials/components
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#resources-and-assets"
                    class="font-semibold text-slate-900"
                  >
                    Resources &amp; assets
                  </a>
                  <ul
                    role="list"
                    class="mt-4 space-y-2 border-l border-slate-200 pl-6"
                  >
                    <li>
                      <a href="#resources-icons">Icons</a>
                    </li>
                    <li>
                      <a href="#resources-images">Images</a>
                    </li>
                    <li>
                      <a href="#resources-illustrations">Illustrations</a>
                    </li>
                    <li>
                      <a href="#figma-assets">Figma assets</a>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
