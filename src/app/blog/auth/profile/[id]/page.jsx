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
import NotFoundUser from "../not-found";
import ProfileInformation from "./ProfileInfomation/ProfileInformation";
import ProfileBlog from "./ProfileBlog/ProfileBlog";
import ProfileContribution from "./ProfileContribution/ProfileContribution";

const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "Contribution", href: "#", current: false },
];

export default function Example({ params }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const session = useSession();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("Profile");
  const [isActive, setIsActive] = useState(true);
  const handleActiveTab = (item) => {
    setIsActive(true);
    setCurrentTab(item);
  };
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/auth/user/${params.id}`,
    fetcher
  );

  const { dataBlog, mutateBlog, errorBlog, isLoadingBlog } = useSWR(
    "/api/posts",
    fetcher
  );
  const {
    dataContribute,
    mutateContribute,
    errorContribute,
    isLoadingContribute,
  } = useSWR("/api/contribution", fetcher);
  const { data: friendRequestData } = useSWR("/api/auth/user", fetcher);

  useEffect(() => {
    if (data && friendRequestData) {
      setDataLoaded(true);
    }
  }, [data, friendRequestData]);

  if (session.status === "unauthenticated") {
    router?.push("/auth/login");
  }
  if (!dataLoaded) {
    return <LoadingComponent />;
  } else if (!data) {
    return <NotFoundUser />;
  } else {
    return (
      <>
        {isLoading && isLoadingBlog && isLoadingContribute ? (
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
                          src={data.coverImg}
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
                                  tab.name === currentTab && isActive
                                    ? "border-pink-500 text-gray-900"
                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                                onClick={() => {
                                  handleActiveTab(tab.name);
                                }}
                              >
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>

                    {/* Description list */}

                    {currentTab === "Profile" ? (
                      <ProfileInformation data={data} />
                    ) : currentTab === "Blog" ? (
                      <ProfileBlog
                        userData={data}
                        data={dataBlog}
                        isLoading={isLoadingBlog}
                      />
                    ) : (
                      <ProfileContribution
                        userData={data}
                        data={dataContribute}
                      />
                    )}

                    {/* Team member list */}
                    <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                      <h2 className="text-sm font-medium text-gray-500">
                        Friends recommendation
                      </h2>

                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {friendRequestData
                          .filter((p) => p._id !== session.data.id)
                          .map((person) => (
                            <div
                              key={person._id}
                              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.avatar}
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
                                    {person.fullname}
                                  </p>
                                  <p className="truncate text-sm text-gray-500">
                                    {person.career}
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
