"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { classNames } from "@/utils/classNames";

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "My profile", href: "#", icon: HomeIcon, current: true },
  { name: "Messages", href: "#", icon: CalendarIcon, current: false },
  { name: "Friends", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Directory",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
];
const secondaryNavigation = [
  { name: "Apps", href: "#", icon: SquaresPlusIcon },
  { name: "Settings", href: "#", icon: CogIcon },
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];
const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: "(555) 123-4567",
    Email: "ricardocooper@example.com",
    Title: "Senior Front-End Developer",
    Team: "Product Development",
    Location: "San Francisco",
    Sits: "Oasis, 4th floor",
    Salary: "$145,000",
    Birthday: "June 8, 1990",
  },
};
const directory = {
  Friends: [
    {
      id: 1,
      name: "Leslie Abbott",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Hector Adams",
      role: "VP, Marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Blake Alexander",
      role: "Account Coordinator",
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Fabricio Andrews",
      role: "Senior Art Director",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};
const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api?username=${session?.data?.user.name}`,
    fetcher
  );
  if (session.status === "unauthenticated") {
    router?.push("/auth/login");
  }
  if (session.status === "authenticated") {
    return (
      <>
        <div className="flex h-full">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pb-4 pt-5">
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                          alt="Your Company"
                        />
                      </div>
                      <nav aria-label="Sidebar" className="mt-5">
                        <div className="space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-500"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-4 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <hr
                          className="my-5 border-t border-gray-200"
                          aria-hidden="true"
                        />
                        <div className="space-y-1 px-2">
                          {secondaryNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                              <item.icon
                                className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </nav>
                    </div>
                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                      <a href="#" className="group block flex-shrink-0">
                        <div className="flex items-center">
                          <div>
                            <img
                              className="inline-block h-10 w-10 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex w-64 flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
                <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="mt-5 flex-1" aria-label="Sidebar">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 h-6 w-6 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <hr
                      className="my-5 border-t border-gray-200"
                      aria-hidden="true"
                    />
                    <div className="flex-1 space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <item.icon
                            className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="lg:hidden">
              <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 overflow-hidden">
              <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                {/* Breadcrumb */}
                <nav
                  className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                  aria-label="Breadcrumb"
                >
                  <a
                    href="#"
                    className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                  >
                    <ChevronLeftIcon
                      className="-ml-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Directory</span>
                  </a>
                </nav>

                <article>
                  {/* Profile header */}
                  <div>
                    <div>
                      <img
                        className="h-32 w-full object-cover lg:h-48"
                        src={profile.coverImageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                      <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                          <img
                            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                            src={profile.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                          <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900">
                              {session.data.user.fullname}
                            </h1>
                          </div>
                          <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <button
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <EnvelopeIcon
                                className="-ml-0.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              Message
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <PhoneIcon
                                className="-ml-0.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              Call
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                        <h1 className="truncate text-2xl font-bold text-gray-900">
                          {session.data.user.name}
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="border-b border-gray-200">
                      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <nav
                          className="-mb-px flex space-x-8"
                          aria-label="Tabs"
                        >
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={classNames(
                                tab.current
                                  ? "border-pink-500 text-gray-900"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                              )}
                              aria-current={tab.current ? "page" : undefined}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* Description list */}
                  <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {" "}
                          {session.data.user.id}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {session.data.user.email}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Title
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Front end Developer
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Subscription
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">Basic</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Birthday
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {session.data.user.dob}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Subscription
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">ct</dd>
                      </div>

                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd
                          className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                          dangerouslySetInnerHTML={{ __html: profile.about }}
                        />
                      </div>
                    </dl>
                  </div>

                  {/* Team member list */}
                  <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                    <h2 className="text-sm font-medium text-gray-500">
                      Team members
                    </h2>
                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {team.map((person) => (
                        <div
                          key={person.handle}
                          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900">
                                {person.name}
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                {person.role}
                              </p>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </main>
              <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
                <div className="px-6 pb-4 pt-6">
                  <h2 className="text-lg font-medium text-gray-900">
                    Directory
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Search directory of 3,018 employees
                  </p>
                  <form className="mt-6 flex gap-x-4" action="#">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="search"
                          name="search"
                          id="search"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div>
                {/* Directory list */}
                <nav
                  className="min-h-0 flex-1 overflow-y-auto"
                  aria-label="Directory"
                >
                  {Object.keys(directory).map((letter) => (
                    <div key={letter} className="relative">
                      <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                        <h3>{letter}</h3>
                      </div>
                      <ul
                        role="list"
                        className="relative z-0 divide-y divide-gray-200"
                      >
                        {directory[letter].map((person) => (
                          <li key={person.id}>
                            <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <a href="#" className="focus:outline-none">
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  <p className="text-sm font-medium text-gray-900">
                                    {person.name}
                                  </p>
                                  <p className="truncate text-sm text-gray-500">
                                    {person.role}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }
}
