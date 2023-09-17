"use client";
import LoadingComponent from "@/app/loading";
import Link from "next/link";
import useSWR from "swr";

export default function ProfileContribution({ userData }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/contribution`,
    fetcher
  );
  return (
    <div>
      {" "}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-50 px-6 pb-20 pt-6 lg:px-8 lg:pb-28 lg:pt-14">
            <div className="absolute inset-0">
              <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="text-center"></div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
                {data
                  .filter((p) => p.authorID === userData._id)
                  .slice()
                  .reverse()
                  .map((post) => (
                    <div
                      key={post.title}
                      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={post.imgSrc}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600">
                            <a href={post.category} className="hover:underline">
                              Blog
                            </a>
                          </p>
                          <a
                            href={`/community/contribution/${post._id}`}
                            className="mt-2 block"
                          >
                            <p className="text-xl font-semibold text-gray-900">
                              {post.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {post.description.slice(0, 140)}...
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <Link href={`/auth/profile/${post.authorID}`}>
                              <span className="sr-only">{post.authorName}</span>
                              <img
                                className="h-10 w-10 rounded-full"
                                src={post.authorAvatar}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <a
                                href={`/auth/profile/${post.authorID}`}
                                className="hover:underline"
                              >
                                {post.author}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden="true">&middot;</span>
                              <span>{post.sourceLang}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
