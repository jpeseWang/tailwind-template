"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 5,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Components",
    url: "/components",
  },
  {
    id: 4,
    title: "Templates",
    url: "/templates",
  },
  {
    id: 5,
    title: "Docs",
    url: "/docs",
  },
];

const Navbar = () => {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* <div className={styles.links}>
        <DarkModeToggle />
        {nagivation.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div> */}
      <header className="bg-white border-b mb-6">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            {" "}
            <Link href="#" className="-m-1.5 p-1.5 flex items-center">
              {" "}
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <p className="ml-2 font-semibold aton text-gray-600">
                Tailwind Template
              </p>{" "}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {session.status === "authenticated" ? (
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={signOut}
              >
                Logout <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <>
                {" "}
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
