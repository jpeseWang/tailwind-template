/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
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
    href: "#using-vue",
    icon: FaVuejs,
    current: false,
    path: [
      {
        title: "Installing dependencies",
        url: "#vue-installing-dependencies",
      },
      {
        title: "Creating components",
        url: "#vue-creating-components",
      },
    ],
  },
  {
    name: "Using HTML and your own JS",
    href: "#using-html-and-your-own-js",
    icon: FaHtml5,
    current: false,
    path: [
      {
        title: "Accessibility considerations",
        url: "#html-accessibility",
      },
      {
        title: "Dynamic classes",
        url: "#html-dynamic-classes",
      },
      {
        title: "Transitions",
        url: "#html-transitions",
      },
      {
        title: "Creating partials/components",
        url: "#html-creating-partials-components",
      },
    ],
  },
];
const teams = [
  {
    id: 1,
    name: "Icons",
    href: "#resources-icons",
    initial: "IC",
    current: false,
  },
  {
    id: 2,
    name: "Images",
    href: "#resources-images",
    initial: "IM",
    current: false,
  },
  {
    id: 3,
    name: "Illustrations",
    href: "#resources-illustrations",
    initial: "IL",
    current: false,
  },
  {
    id: 3,
    name: "Figma assets",
    href: "#figma-assets",
    initial: "FM",
    current: false,
  },
];

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
                  <a
                    className="text-sm font-semibold leading-6 text-gray-400"
                    href="#resources-and-assets"
                  >
                    Resources & assets
                  </a>
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
              {/* Using React */}
              <div>
                <hr className="my-8"></hr>
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
                  <span className="font-semibold text-sky-500">
                    Headless UI
                  </span>{" "}
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
                  These libraries and Tailwind UI itself all require React {`>`}
                  = 16.
                </p>
                {/* Optional */}
                <h3
                  id="react-creating-components"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Creating components
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  All React examples are provided as a simple single component
                  and make no assumptions about how you want to break things
                  down, what prop APIs you want to expose, or where you get any
                  data from.
                </p>
                <p className="text-gray-600 text-sm py-4 leading-6">
                  Some data has been extracted into basic local variables just
                  to clean up duplication and make the code easier to read and
                  understand, but we've tried to do as little as possible to
                  avoid enforcing any unnecessarily rigid opinions.
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
              {/* Using Vue */}
              <div>
                <hr className="my-8"></hr>
                <h2
                  id="using-vue"
                  className="mb-2 text-xl font-semibold text-gray-800"
                >
                  Using Vue
                </h2>

                <h3
                  id="vue-installing-dependencies"
                  className="py-2 text-lg font-semibold text-gray-700"
                >
                  Installing dependencies
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  Tailwind UI for React depends on{" "}
                  <span className="font-semibold text-sky-500">
                    Headless UI
                  </span>{" "}
                  to power all of the interactive behavior and{" "}
                  <span className="font-semibold text-sky-500">Heroicons</span>{" "}
                  for icons, so you'll need to add these two libraries to your
                  project:
                </p>
                <div className="py-4">
                  <pre className="language-bash" tabindex="0">
                    <code className="language-bash">
                      <span className="text-pink-400">npm install</span>{" "}
                      @headlessui/vue @heroicons/vue
                    </code>
                  </pre>
                </div>
                <p className="text-gray-800 text-sm font-semibold">
                  These libraries and Tailwind UI itself all require Vue 3+. We
                  do not currently offer support for Vue 2.
                </p>

                {/* Optional */}
                <h3
                  id="vue-creating-components"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Creating components
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  All Vue examples are provided as a simple single component and
                  make no assumptions about how you want to break things down,
                  what prop APIs you want to expose, or where you get any data
                  from.
                </p>
                <p className="text-gray-600 text-sm py-4 leading-6">
                  Some data has been extracted into basic local variables just
                  to clean up duplication and make the code easier to read and
                  understand, but we've tried to do as little as possible to
                  avoid enforcing any unnecessarily rigid opinions.
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
                      {`<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="person in people" :key="person.email" class="py-4 flex">
      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
        <p class="text-sm text-gray-500">{{ person.email }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
const people = [
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

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>`}
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
                    {`<!-- HockeyTeamList.vue -->
<template>
  <ul class="divide-y divide-gray-200">
    <HockeyTeamItem v-for="team in teams" :key="team.id" :team="team"/>
  </ul>
</template>

<script>
export default {
  props: {
    teams: Array
  },
}
</script>

<!-- HockeyTeamListItem.vue -->
<template>
  <li class="py-4 flex">
    <img class="h-10 w-10 rounded-full" :src="team.logo" alt="" />
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">{{ team.name }}</p>
      <p class="text-sm text-gray-500">{{ team.city }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    team: Object
  },
}
</script>`}
                  </code>
                </pre>
                <p className="text-gray-600 text-sm py-4 leading-6">
                  Tailwind UI is more like a set of blueprints, patterns, and
                  ideas than a rigid UI kit. The code you end up with at the end
                  of the day is yours, and you can factor it however you like.
                </p>
              </div>
              {/* Using HTML and your own JS */}
              <div>
                <hr className="my-8"></hr>
                <h2
                  id="using-html-and-your-own-js"
                  className="mb-2 text-xl font-semibold text-gray-800"
                >
                  Using HTML and your own JS
                </h2>

                <p className="text-gray-600 text-sm leading-6">
                  If you'd rather write any necessary JS yourself or want to
                  integrate with a framework other than React or Vue, we also
                  provide every Tailwind UI component example as vanilla HTML
                  that you can adapt yourself.
                </p>
                <p className="text-gray-600 text-sm leading-6 py-4">
                  The vast majority of components don't need JavaScript at all
                  and are completely ready to go out of the box, but things that
                  are interactive like dropdowns, modals, etc. require you to
                  write some JS to make them work the way you'd expect.
                </p>
                <p className="text-gray-600 text-sm leading-6">
                  In these situations we've provided some simple comments in the
                  HTML to explain things like what classes you need use for
                  different states <i>(like a toggle switch being on or off)</i>{" "}
                  , or what classes we recommend for transitioning elements on
                  to or off of the screen <i>(like a modal opening).</i>
                </p>
                {/* Accessibility considerations */}
                <h3
                  id="html-accessibility"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Accessibility considerations
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  We've done our best to ensure that all of the markup in
                  Tailwind UI is as accessible as possible, but when you're
                  building interactive components,{" "}
                  <b>
                    many accessibility best practices can only be implemented
                    with JavaScript.
                  </b>
                </p>

                <p className="text-gray-600 text-sm py-4">For example:</p>
                <ul className="list-inside text-gray-600 text-sm pl-4 list-disc marker:text-gray-300">
                  <li>
                    <strong>
                      Making sure components are properly keyboard accessible
                    </strong>{" "}
                    <em>
                      (dropdowns should be navigated with up/down arrow keys,
                      modals should close when you press escape, tabs should be
                      selected using the left/right arrow keys, etc.)
                    </em>
                  </li>
                  <li className="py-2">
                    <strong>Correctly handling focus</strong>{" "}
                    <em>
                      (you shouldn't be able to tab to an element behind a
                      modal, the first item in a dropdown should be auto-focused
                      when the dropdown opens, etc.)
                    </em>
                  </li>
                  <li>
                    <strong>
                      Synchronizing ARIA attributes with component state
                    </strong>{" "}
                    <em>
                      (adding <code>aria-expanded="true"</code> when a dropdown
                      is open, setting <code>aria-checked</code> to true when a
                      toggle is on, updating <code>aria-activedescendant</code>{" "}
                      when navigating the options in an autocomplete, etc.)
                    </em>
                  </li>
                  <li className="py-2">...and many other concerns.</li>
                </ul>
                <p className="text-gray-600 text-sm leading-6 py-4">
                  If you're using Tailwind UI with React or Vue, all of this
                  complexity is handled for you automatically by
                  <span className="font-semibold text-sky-500">
                    {" "}
                    Headless UI
                  </span>{" "}
                  , but if you are providing your own JS,{" "}
                  <b>
                    it is up to you to follow accessibility best practices when
                    adding interactive behavior.
                  </b>
                </p>
                <p className="text-gray-600 text-sm leading-6">
                  To learn more about building accessible UI components, we
                  recommend studying the{" "}
                  <span className="font-semibold text-sky-500">
                    {" "}
                    WAI-ARIA Authoring Practices
                  </span>{" "}
                  published by the W3C.
                </p>
                {/* Dynamic classes */}
                <h3
                  id="html-dynamic-classes"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Dynamic classes
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  When an element needs different classes applied based on some
                  state (like a toggle being on or off), we list the classes for
                  each state in a comment directly above the element:
                </p>
                <div className="py-4">
                  <pre className="language-bash" tabindex="0">
                    <code className="language-bash">
                      {`<!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
<span aria-checked="false" class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline" role="checkbox" tabindex="0">
  <!-- On: "translate-x-5", Off: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
</span>`}
                    </code>
                  </pre>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  <strong>
                    The HTML we provide is always pre-configured for one of the
                    defined states
                  </strong>
                  , and the classes that you need to change when switching
                  states are always at the very beginning of the class list so
                  they are easy to find.
                </p>
                <p className="text-gray-600 text-sm leading-6 py-4">
                  As an example, to adapt this HTML for{" "}
                  <span className="font-semibold text-sky-500">
                    {" "}
                    Alpine.js,
                  </span>{" "}
                  , you can conditionally apply the correct classes using the{" "}
                  <code class="text-gray-800 font-semibold">:class</code>
                  directive based on some state you've declared in{" "}
                  <code class="text-gray-800 font-semibold">x-data:</code>
                </p>
                <div className="">
                  <pre className="language-bash" tabindex="0">
                    <code className="language-bash">
                      {`<span
  x-data="{ isOn: false }"
  @click="isOn = !isOn"
  :aria-checked="isOn"
  :class="{'bg-indigo-600': isOn, 'bg-gray-200': !isOn }"
  class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
  role="checkbox"
  tabindex="0"
>
  <span
    aria-hidden="true"
    :class="{'translate-x-5': isOn, 'translate-x-0': !isOn }"
    class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
  ></span>
</span>`}
                    </code>
                  </pre>
                </div>
                <p className="text-gray-600 text-sm leading-6 py-4">
                  We've included a basic click handler here to demonstrate the
                  general idea, but <b>please reference the</b>{" "}
                  <span className="font-semibold text-sky-500">
                    {" "}
                    WAI-ARIA Authoring Practices
                  </span>{" "}
                  <b>when building components like this</b> to ensure you
                  implement all of the necessary keyboard interactions and
                  properly manage any required ARIA attributes.
                </p>
                {/* Transitions */}
                <h3
                  id="html-transitions"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Transitions
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  For elements that should be dynamically shown or hidden{" "}
                  <i>(like the panel on a dropdown)</i>, we include the
                  recommended transition styles in a comment directly above the
                  dynamic element:
                </p>
                <div className="py-4">
                  <pre className="language-bash" tabindex="0">
                    <code className="language-bash">
                      {`<div class="relative ...">
  <button type="button" class="...">
    Options
  </button>

  <!--
    Show/hide this element based on the dropdown state

    Entering: "transition ease-out duration-100 transform"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Closing: "transition ease-in duration-75 transform"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
    <div class="rounded-md bg-white shadow-xs">
      <!-- Snipped  -->
    </div>
  </div>
</div>`}
                    </code>
                  </pre>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  As an example, to adapt this HTML for{" "}
                  <span className="font-semibold text-sky-500">
                    {" "}
                    Alpine.js,
                  </span>{" "}
                  you would use the{" "}
                  <code class="text-sky-500 font-semibold">x-transition </code>
                  directive to apply the right classes at each point in the
                  transition lifecycle:
                </p>
                <div className="py-4">
                  <pre className="language-bash" tabindex="0">
                    <code className="language-bash">
                      {`<div x-data="{ isOpen: false }" class="relative ...">
  <button type="button" @click="isOpen = !isOpen" class="...">
    Options
  </button>

  <div
    x-show="isOpen"
    x-transition:enter="transition ease-out duration-100 transform"
    x-transition:enter-start="opacity-0 scale-95"
    x-transition:enter-end="opacity-100 scale-100"
    x-transition:leave="transition ease-in duration-75 transform"
    x-transition:leave-start="opacity-100 scale-100"
    x-transition:leave-end="opacity-0 scale-95"
    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
  >
    <div class="rounded-md bg-white shadow-xs">
      <!-- Snipped  -->
    </div>
  </div>
</div>`}
                    </code>
                  </pre>
                </div>
                <p className="text-gray-600 text-sm leading-6">
                  We've included a basic click handler here to demonstrate the
                  general idea, but <b>please reference the</b>{" "}
                  <span className="font-semibold text-sky-500">
                    {" "}
                    WAI-ARIA Authoring Practices
                  </span>{" "}
                  <b>when building components like this</b> to ensure you
                  implement all of the necessary keyboard interactions and
                  properly manage any required ARIA attributes.
                </p>
                {/* Creating partials/components */}
                <h3
                  id="html-creating-partials-components"
                  className="py-2 text-lg font-semibold text-gray-700 mt-6"
                >
                  Creating partials/components
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  Since the vanilla HTML examples included in Tailwind UI can't
                  take advantage of things like loops, there is a lot of
                  repetition that wouldn't actually be there in a real-world
                  project where the HTML was being generated from some dynamic
                  data source. We might give you a list component with 5 list
                  items for example that have all the utilities duplicated on
                  each one, whereas in your project you'll actually be
                  generating those list items by looping over an array.
                </p>
                <p className="text-gray-600 text-sm leading-6 py-4">
                  When adapting our examples for your own projects, we recommend
                  creating reusable template partials or JS components as needed
                  to manage any duplication.
                </p>

                <p className="text-gray-600 text-sm leading-6">
                  Learn more about this in the{" "}
                  <span className="text-sky-500 font-semibold">
                    "Extracting Components"
                  </span>{" "}
                  documentation on the Tailwind CSS website.
                </p>
              </div>
              {/* Resources & assets */}
              <div>
                <hr className="my-8"></hr>
                <h2
                  id="resources-and-assets"
                  className="mb-2 text-xl font-semibold text-gray-800"
                >
                  Resources & assets
                </h2>
                <h3
                  id="resources-iconss"
                  className="py-2 text-lg font-semibold text-gray-700"
                >
                  Icons
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  All of the icons we use in Tailwind UI come from{" "}
                  <span className="font-semibold text-sky-500">Heroicons</span>,
                  which is a free MIT-licensed icon set we designed and
                  developed ourselves when we started working on Tailwind UI.
                </p>

                <h3
                  id="resources-images"
                  className="py-2 text-lg font-semibold text-gray-700 mt-4"
                >
                  Images
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  Images in Tailwind UI come almost exclusively from{" "}
                  <span className="font-semibold text-sky-500">Unsplash</span>.
                  It's a great resource if you need freely-usable photography
                  for your projects.
                </p>

                <h3
                  id="resources-illustrations"
                  className="py-2 text-lg font-semibold text-gray-700 mt-4"
                >
                  Illustrations
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  Some of the examples in Tailwind UI use illustrations from the
                  free{" "}
                  <span className="font-semibold text-sky-500">
                    Lucid Illustrations
                  </span>{" "}
                  pack by Pixsellz. You can grab the full set of illustrations
                  and check out their other design resources on{" "}
                  <span className="font-semibold text-sky-500">
                    their website
                  </span>
                  .
                </p>

                <h3
                  id="figma-assets"
                  className="py-2 text-lg font-semibold text-gray-700"
                >
                  Figma assets
                </h3>
                <p className="text-gray-900 text-sm leading-6 font-medium">
                  We've discontinued the Figma assets so we can focus our
                  efforts on building more great examples with Tailwind CSS.
                </p>

                <p className="text-gray-600 text-sm leading py-4">
                  We used to provide Figma assets for Tailwind UI, but they were
                  just an absolutely enormous amount of work to maintain and
                  very few people were using them. We've made the really hard
                  decision to discontinue them so we can spend more time on the
                  actual code which is where we think we can provide the most
                  value.
                </p>
                <p className="text-gray-600 text-sm leading">
                  Although the Figma assets are discontinued, you can still
                  download the final release here in case it's helpful:
                </p>
                <p className="text-sky-500 font-semibold text-sm leading py-4">
                  Download the discontinued Figma kit
                </p>
                <p className="text-gray-600 text-sm leading">
                  Please note that{" "}
                  <strong>the Figma file does not receive updates</strong>, and
                  does not contain any of the examples released after July 14,
                  2021.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
