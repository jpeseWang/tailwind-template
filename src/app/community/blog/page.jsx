"use client";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import PostCreate from "./post-modal/PostCreate";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
import LoadingBlog from "../loading";
import { motion } from "framer-motion";

export default function Blog() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const session = useSession();
  console.log(">>CHECK", session);
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
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
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
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
                  Create new Blog
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating a new blog.
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
                    New Blogs
                  </button>
                </div>
              </div>
            )}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your career with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {isLoading ? (
              <LoadingBlog />
            ) : (
              <>
                {data
                  .slice()
                  .reverse()
                  .map((post) => (
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileInView={{ x: [-150, 0], opacity: 1 }}
                      exit={{ opacity: 0, y: -50 }}
                      whileHover={{ scale: 1.1 }}
                      key={post._id}
                      className="workImages"
                    >
                      <article
                        key={post.id}
                        className="relative isolate flex flex-col gap-8 lg:flex-row"
                      >
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                          <img
                            src={post.imgSrc}
                            alt=""
                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                          />
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={post.datetime}
                              className="text-gray-500"
                            >
                              {post.date}
                            </time>
                            <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                              Blog
                            </div>
                          </div>
                          <div
                            className="group relative max-w-xl cursor-pointer"
                            onClick={() => {
                              router.push(`/community/blog/${post._id}`);
                            }}
                          >
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title.slice(0, 50)}
                              </a>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-600">
                              {post.description.slice(0, 201)}...
                            </p>
                          </div>
                          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                            <div
                              className="relative flex items-center gap-x-4 cursor-pointer"
                              onClick={() => {
                                router.push(`/auth/profile/${post.authorID}`);
                              }}
                            >
                              <img
                                src={post.authorAvatar}
                                alt=""
                                className="h-10 w-10 rounded-full bg-gray-50"
                              />
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                  <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author}
                                  </a>
                                </p>
                                <p className="text-gray-600">
                                  {post.authorCareer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </motion.div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <PostCreate isOpen={modalIsOpen} onClose={closeModal} reload={mutate} />
      )}
    </div>
  );
}
