"use client";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { classNames } from "@/utils/classNames";
import LoadingComponent from "@/app/loading";
import NotFoundUser from "@/app/auth/profile/not-found";
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];
const profile = {
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
};

const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Example({ params }) {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/auth/user/${params.id}`,
    fetcher
  );

  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getData(params.id)
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error));
  //   setIsLoading(false);
  // }, [params.id]);

  if (session.status === "unauthenticated") {
    router?.push("/auth/login");
  }
  if (!data) {
    return <NotFoundUser />;
  } else {
    return (
      <>
        {isLoading ? (
          <LoadingComponent />
        ) : data.fullname ? (
          <div className="flex h-full">
            <div className="hidden lg:flex lg:flex-shrink-0"></div>
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
              <div className="relative z-0 flex flex-1 overflow-hidden">
                <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                  <article>
                    {/* Profile header */}
                    <div>
                      <div>
                        <img
                          className="h-44 w-full object-cover lg:h-56"
                          src={profile.coverImageUrl}
                          alt=""
                        />
                      </div>
                      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                          <div className="flex">
                            <img
                              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                              src={data.avatar}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 sm:mt-14">
                            <div className="mt-6 min-w-0 flex-1 2xl:block">
                              <h1 className=" text-2xl font-bold text-gray-900">
                                {data.fullname}
                              </h1>
                              <h1 className="truncate text-lg font-bold text-gray-600 italic">
                                @{data.username}
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
                            {data.phone}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Email
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.email}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Title
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.career}
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
                            {data.dob}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Subscription
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.subscription}
                          </dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd
                            className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                            dangerouslySetInnerHTML={{
                              __html: profile.about,
                            }}
                          />
                        </div>
                      </dl>
                    </div>

                    {/* Team member list */}
                    <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                      <h2 className="text-sm font-medium text-gray-500">
                        Friends recommendation
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
              </div>
            </div>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
}
