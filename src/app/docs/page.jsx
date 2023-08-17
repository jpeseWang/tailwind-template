/* eslint-disable react/no-unescaped-entities */
"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import Link from "next/link";
import "./docs.css";

const navigation = [
  {
    name: "Getting set up",
    href: "#",
    icon: HomeIcon,
    current: true,
    path: [
      {
        title: "Requirements",
        url: "#requirements",
      },
      {
        title: "Optional: Add the Inter font family",
        url: "#optional-add-the-inter-font-family",
      },
    ],
  },
  {
    name: "Using React",
    href: "#using-react",
    icon: FaReact,
    current: false,
    path: [
      {
        title: "Installing dependencies",
        url: "#react-installing-dependencies",
      },
      {
        title: "Creating components",
        url: "#react-creating-components",
      },
    ],
  },
  {
    name: "Using Vue",
    href: "#using-react",
    icon: FaVuejs,
    current: false,
    path: [
      {
        title: "Installing dependencies",
        url: "#react-installing-dependencies",
      },
      {
        title: "Creating components",
        url: "#react-creating-components",
      },
    ],
  },
  {
    name: "Using HTML and your own JS",
    href: "#Projects",
    icon: FaHtml5,
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
  { id: 1, name: "Icons", href: "#", initial: "IC", current: false },
  { id: 2, name: "Images", href: "#", initial: "IM", current: false },
  { id: 3, name: "Illustrations", href: "#", initial: "IL", current: false },
  { id: 3, name: "Figma assets", href: "#", initial: "FM", current: false },
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
        <div className=" lg:fixed lg:inset-y-20 lg:z-50 lg:flex lg:w-76 lg:flex-col -mt-4">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-transparent px-10 pb-4 mt-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 mt-10">
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
                  <div className="text-sm font-semibold leading-6 text-gray-400">
                    Resources & assets
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
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-20 sm:px-16 lg:px-36 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 leading-7">
              {/* Your content */}
              <h2
                id="getting-set-up"
                className="mb-2 text-xl font-semibold text-gray-800"
              >
                Getting set up
              </h2>
              <h3
                id="requirements"
                className="py-2 text-lg font-semibold text-gray-700"
              >
                Requirements
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                All of the components in Tailwind UI are designed for the latest
                version of Tailwind CSS, which is currently Tailwind CSS v3.3.
                To make sure that you are on the latest version of Tailwind,
                update via npm:
              </p>
              <div className="py-4">
                <pre className="language-bash" tabindex="0">
                  <code className="language-bash">
                    <span className="text-pink-400">npm install</span>{" "}
                    tailwindcss@latest
                  </code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm leading-6">
                All of the examples in Tailwind UI rely on the default Tailwind
                CSS configuration, but some rely on additional first-party
                plugins like{" "}
                <code className="text-gray-800 font-semibold">
                  @tailwindcss/forms
                </code>
                ,{" "}
                <code className="text-gray-800 font-semibold">
                  @tailwindcss/typography
                </code>
                , and{" "}
                <code className="text-gray-800 font-semibold">
                  @tailwindcss/aspect-ratio
                </code>
                .
              </p>
              <p className="text-gray-600 py-4 text-sm leading-6">
                When an example requires any plugins or configuration changes,
                it will be noted in a comment at the top of the example.
              </p>
              <p className="text-gray-600 text-sm">
                If you&apos;re new to Tailwind CSS, you&apos;ll want to{" "}
                <span className="font-semibold leading-6 text-sky-500">
                  read the Tailwind CSS documentation
                </span>{" "}
                as well to get the most out of Tailwind UI.
              </p>

              {/* Optional */}

              <h3
                id="optional-add-the-inter-font-family"
                className="py-2 text-lg font-semibold text-gray-700 mt-6"
              >
                Optional: Add the Inter font family
              </h3>
              <p className="text-gray-600 text-sm">
                We've used{" "}
                <span className="font-semibold text-sky-500 leading-6">
                  Inter
                </span>{" "}
                font family for all of the Tailwind UI examples because it's a
                beautiful font for UI design and is completely open-source and
                free. Using a custom font is nice because it allows us to make
                the components look the same on all browsers and operating
                systems.
              </p>
              <p className="text-gray-600 text-sm py-4 leading-6">
                You can use any font you want in your own project of course, but
                if you'd like to use Inter, the easiest way is to first add it
                via the CDN:
              </p>
              <div className="">
                <pre className="language-bash" tabindex="0">
                  <code className="language-bash">
                    <span className="text-pink-400">&#60;link</span> rel="
                    <span className="text-sky-300">stylesheet</span>" href="
                    <span className="text-sky-300">
                      https://rsms.me/inter/inter.css
                    </span>
                    "&#62;
                  </code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm py-4">
                Then add "Inter var" to your "sans" font family in your Tailwind
                config:
              </p>
              <pre className="language-bash" tabindex="0">
                <code className="language-bash">
                  {`// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
}`}
                </code>
              </pre>
              <hr className="my-8"></hr>
              {/* Using React */}
              <h2
                id="using-react"
                className="mb-2 text-xl font-semibold text-gray-800"
              >
                Using React
              </h2>
              <h3
                id="react-installing-dependencies"
                className="py-2 text-lg font-semibold text-gray-700"
              >
                Installing dependencies
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Tailwind UI for React depends on{" "}
                <span className="font-semibold text-sky-500">Headless UI</span>{" "}
                to power all of the interactive behavior and{" "}
                <span className="font-semibold text-sky-500">Heroicons</span>{" "}
                for icons, so you'll need to add these two libraries to your
                project:
              </p>
              <div className="py-4">
                <pre className="language-bash" tabindex="0">
                  <code className="language-bash">
                    <span className="text-pink-400">npm install</span>{" "}
                    @headlessui/react @heroicons/react
                  </code>
                </pre>
              </div>
              <p className="text-gray-800 text-sm font-semibold">
                These libraries and Tailwind UI itself all require React {`>`}=
                16.
              </p>

              {/* Optional */}

              <h3
                id="react-creating-components"
                className="py-2 text-lg font-semibold text-gray-700 mt-6"
              >
                Creating components
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                All React examples are provided as a simple single component and
                make no assumptions about how you want to break things down,
                what prop APIs you want to expose, or where you get any data
                from.
              </p>
              <p className="text-gray-600 text-sm py-4 leading-6">
                Some data has been extracted into basic local variables just to
                clean up duplication and make the code easier to read and
                understand, but we've tried to do as little as possible to avoid
                enforcing any unnecessarily rigid opinions.
              </p>
              <p className="text-gray-600 text-sm leading-6">
                When you're adapting code from Tailwind UI for your own
                projects, you should break the examples down into smaller
                components as necessary to achieve whatever level of reuse you
                need for your project.
              </p>
              <p className="text-gray-600 text-sm py-4">
                For example, you might start with this stacked list component:
              </p>
              <div className="">
                <pre className="language-bash" tabindex="0">
                  <code className="language-bash">
                    {`const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}`}
                  </code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm py-4 leading-6">
                After adapting the content for your own project, breaking it
                down into separate components, and wiring up your data source,
                it might look more like this:
              </p>
              <pre className="language-bash" tabindex="0">
                <code className="language-bash">
                  {`function HockeyTeamItem({ team }) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={team.logo} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{team.name}</p>
        <p className="text-sm text-gray-500">{team.city}</p>
      </div>
    </li>
  )
}

export default function HockeyTeamList({ teams }) {
  return (
    <ul className="divide-y divide-gray-200">
      {teams.map((team) => <HockeyTeamItem key={team.id} team={team} />)}
    </ul>
  )
}
}`}
                </code>
              </pre>
              <p className="text-gray-600 text-sm py-4 leading-6">
                Tailwind UI is more like a set of blueprints, patterns, and
                ideas than a rigid UI kit. The code you end up with at the end
                of the day is yours, and you can factor it however you like.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
