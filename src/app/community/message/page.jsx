"use client";
import { Fragment, useContext, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  PhoneIcon,
  UserCircleIcon,
  VideoCameraIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { classNames } from "@/utils/classNames";
import PreviewMessage from "./[id]/page";
import LoadingComponent from "@/app/loading";
import NoSelection from "./NoSelection";
import { CurrentTabContext } from "@/context/CurrentMessTab";
const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];
const sidebarNavigation = [
  { name: "Open", href: "#", icon: InboxIcon, current: true },
  { name: "Archive", href: "#", icon: ArchiveBoxIconOutline, current: false },
  { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: NoSymbolIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilSquareIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Example() {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const { updateInboxTab, updateInboxId, inboxTab, inboxId } =
    useContext(CurrentTabContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(`/api/message`, fetcher);
  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  const filteredData = data?.filter(
    (message) =>
      message.receiver === session.data?.id ||
      message.sender === session.data.id
  );

  const handleShowMessage = (e, inboxId) => {
    e.preventDefault();
    updateInboxId(inboxId);
    updateInboxTab("previewEmail");
  };

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="flex h-full flex-col">
          {/* Top nav*/}
          <header className="relative flex h-16 flex-shrink-0 items-center bg-white">
            <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
              <a
                href="#"
                className="flex h-16 w-16 items-center justify-center bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
              >
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </a>
            </div>

            {/* Picker area */}
            <div className="mx-auto lg:hidden">
              <div className="relative">
                <label htmlFor="inbox-select" className="sr-only">
                  Choose inbox
                </label>
                <select
                  id="inbox-select"
                  className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600"
                >
                  <option value="/open">Open</option>
                  <option value="/archived">Archived</option>
                  <option value="/assigned">Assigned</option>
                  <option value="/flagged">Flagged</option>
                  <option value="/spam">Spam</option>
                  <option value="/drafts">Drafts</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Desktop nav area */}
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
                  <label htmlFor="desktop-search" className="sr-only">
                    Search all inboxes
                  </label>
                  <input
                    id="desktop-search"
                    type="search"
                    placeholder="Search all inboxes"
                    className="block w-full border-transparent pl-12 text-gray-900 focus:border-transparent focus:ring-0 sm:text-sm"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
                <nav aria-label="Global" className="flex space-x-10">
                  {navigation.map((item) =>
                    item.children.length ? (
                      <Menu
                        as="div"
                        key={item.name}
                        className="relative text-left"
                      >
                        <Menu.Button className="flex items-center rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className="ml-1 h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {item.children.map((child) => (
                                <Menu.Item key={child.name}>
                                  {({ active }) => (
                                    <a
                                      href={child.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {child.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-gray-900"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </nav>
                <div className="flex items-center space-x-8">
                  <span className="inline-flex">
                    <a
                      href="#"
                      className="relative -mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setOpen}
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
                  <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                    enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                    enterTo="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                    leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                    leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                    leaveTo="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                  >
                    <Dialog.Panel
                      className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                      aria-label="Global"
                    >
                      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                        <a href="#">
                          <img
                            className="block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=400"
                            alt="Your Company"
                          />
                        </a>
                        <button
                          type="button"
                          className="relative -mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                        <div className="relative text-gray-400 focus-within:text-gray-500">
                          <label htmlFor="mobile-search" className="sr-only">
                            Search all inboxes
                          </label>
                          <input
                            id="mobile-search"
                            type="search"
                            placeholder="Search all inboxes"
                            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="max-w-8xl mx-auto px-2 py-3 sm:px-4">
                        {navigation.map((item) => (
                          <Fragment key={item.name}>
                            <a
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              {item.name}
                            </a>
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                              >
                                {child.name}
                              </a>
                            ))}
                          </Fragment>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 pb-3 pt-4">
                        <div className="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-3 min-w-0 flex-1">
                            <div className="truncate text-base font-medium text-gray-800">
                              {user.name}
                            </div>
                            <div className="truncate text-sm font-medium text-gray-500">
                              {user.email}
                            </div>
                          </div>
                          <a
                            href="#"
                            className="relative ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        </div>
                        <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                          {userNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          </header>

          {/* Bottom section */}
          <div className="flex min-h-0 flex-1 overflow-hidden">
            {/* Narrow sidebar*/}
            <nav
              aria-label="Sidebar"
              className="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800"
            >
              <div className="relative flex w-20 flex-col space-y-3 p-3">
                {sidebarNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:bg-gray-700",
                      "inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg"
                    )}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>

            {/* Main area */}
            <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex">
              <section
                aria-labelledby="message-heading"
                className="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last"
              >
                {/* Top section */}
                <div className="flex-shrink-0 border-b border-gray-200 bg-white">
                  {/* Toolbar*/}
                  <div className="flex h-16 flex-col justify-center">
                    <div className="px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between py-3">
                        {/* Left buttons */}
                        <div>
                          <div className="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                            <span className="inline-flex sm:shadow-sm">
                              <button
                                type="button"
                                className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                              >
                                <ArrowUturnLeftIcon
                                  className="-ml-0.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Back
                              </button>
                              <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                              >
                                <PencilIcon
                                  className="-ml-0.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Note
                              </button>
                              <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                              >
                                <UserPlusIcon
                                  className="-ml-0.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Assign
                              </button>
                            </span>

                            <span className="hidden space-x-3 lg:flex">
                              <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                              >
                                <ArchiveBoxIconMini
                                  className="-ml-0.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Archive
                              </button>
                              <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                              >
                                <FolderArrowDownIcon
                                  className="-ml-0.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Move
                              </button>
                            </span>
                          </div>
                        </div>

                        {/* Right buttons */}
                        <nav aria-label="Pagination">
                          <span className="isolate inline-flex rounded-md shadow-sm">
                            <a
                              href="#"
                              className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                            >
                              <span className="sr-only">Next</span>
                              <ChevronUpIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              href="#"
                              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                            >
                              <span className="sr-only">Previous</span>
                              <ChevronDownIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </a>
                          </span>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Message header */}
                </div>
                {/* <PreviewMessage /> */}

                {inboxTab === "empty" ? (
                  <NoSelection />
                ) : (
                  <PreviewMessage params={inboxId} />
                )}
              </section>

              {/* Message list*/}
              <aside className="hidden xl:order-first xl:block xl:flex-shrink-0">
                <div className="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 flex-col justify-center bg-white px-6">
                      <div className="flex items-baseline space-x-3">
                        <h2 className="text-lg font-medium text-gray-900">
                          Inbox
                        </h2>
                        <p className="text-sm font-medium text-gray-500">
                          {data.length} messages
                        </p>
                      </div>
                    </div>
                    <div className="border-b border-t border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
                      Sorted by date
                    </div>
                  </div>
                  <nav
                    aria-label="Message list"
                    className="min-h-0 flex-1 overflow-y-auto"
                  >
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 border-b border-gray-200"
                    >
                      {filteredData.map((message) => (
                        <li
                          key={message.id}
                          className="relative bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-50"
                          onClick={(e) => {
                            handleShowMessage(e, message._id);
                          }}
                        >
                          <div>
                            {" "}
                            <div className="flex justify-between space-x-3">
                              <img
                                className="flex h-10 w-10 rounded-full"
                                src={
                                  message.receiverAvatar !== session.data.avatar
                                    ? message.receiverAvatar
                                    : message.senderAvatar
                                }
                                alt=""
                              />
                              <div className="min-w-0 flex-1 pt-2">
                                <a
                                  href="#"
                                  className="block focus:outline-none"
                                >
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />

                                  <p className="truncate text-sm font-medium text-gray-900">
                                    {message.receiverFullname ===
                                    session.data.fullname
                                      ? message.senderFullname
                                      : message.receiverFullname}
                                  </p>
                                </a>
                              </div>
                              <time
                                dateTime={new Date(
                                  message.updatedAt
                                ).toISOString()}
                                className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 pt-2"
                              >
                                {new Date(message.updatedAt).toLocaleString()}
                              </time>
                            </div>
                            <div className="mt-1">
                              <p className="line-clamp-2 text-sm text-gray-600">
                                {message.inbox?.length > 0 && (
                                  <p>
                                    {
                                      message.inbox[message.inbox.length - 1]
                                        .content
                                    }
                                  </p>
                                )}
                              </p>
                            </div>
                          </div>{" "}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
