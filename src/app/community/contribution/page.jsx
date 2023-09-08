"use client";
import { useState } from "react";
import ContributionCreate from "./contribution-modal/ContributionCreate";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
import LoadingBlog from "../loading";
import { motion } from "framer-motion";

export default function Contribution() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/contribution`,
    fetcher
  );
  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="bg-transparent py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {session.status === "authenticated" &&
            typeof document !== "undefined" && (
              <div className="text-center ring-2 py-4 px-2 rounded mb-10 ring-gray-200">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Join our community
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Create Components/ Templates
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <PlusIcon
                      className="-ml-0.5 mr-1.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    New Templates
                  </button>
                </div>
              </div>
            )}

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community&apos;s Contribution Gallery
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {isLoading ? (
          <LoadingBlog />
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data
              .slice()
              .reverse()
              .map((post) => (
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ y: [-50, 0], opacity: 1 }}
                  exit={{ opacity: 0, y: -50 }}
                  whileHover={{ scale: 1.1 }}
                  key={post._id}
                  className="workImages"
                >
                  <article
                    key={post._id}
                    className="cursor-pointer relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                    onClick={() => {
                      router.push(`/community/contribution/${post._id}`);
                    }}
                  >
                    <img
                      src={post.imgSrc}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      <time dateTime={post.datetime} className="mr-8">
                        {post.date}
                      </time>
                      <div className="-ml-4 flex items-center gap-x-4">
                        <svg
                          viewBox="0 0 2 2"
                          className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="flex gap-x-2.5">
                          <img
                            src={post.authorAvatar}
                            alt=""
                            className="h-6 w-6 flex-none rounded-full bg-white/10"
                          />
                          {post.author}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a href={post.href}>
                        <span className="absolute inset-0  " />
                        {post.title.slice(0, 50)}
                        <div className="text-base flex justify-between pr-10">
                          {" "}
                          <span className="">{post.sourceLang}</span>
                          <span className="font-medium ">
                            {post.ratings.length > 0 ? (
                              <span>
                                {(
                                  post.ratings.reduce(
                                    (total, mark) => total + mark.score,
                                    0
                                  ) / post.ratings.length
                                ).toFixed(1)}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4 inline mb-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                  />
                                </svg>
                              </span>
                            ) : (
                              <span> </span>
                            )}
                          </span>
                        </div>
                      </a>
                    </h3>
                  </article>
                </motion.div>
              ))}
          </div>
        )}
      </div>
      {modalIsOpen && (
        <ContributionCreate
          isOpen={modalIsOpen}
          onClose={closeModal}
          reload={mutate}
        />
      )}
    </div>
  );
}
