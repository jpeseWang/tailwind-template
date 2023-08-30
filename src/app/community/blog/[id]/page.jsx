"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default function BlogDetails({ params }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    getData(params.id)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, [params.id]);
  return (
    <>
      {" "}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="bg-transparent px-6 py-32 lg:px-8 ">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Blogs
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.title}
              </h1>
              <figcaption className="mt-4 flex gap-x-4">
                By
                <img
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  src={data.authorAvatar}
                  alt=""
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-900">
                    {data.author}
                  </strong>{" "}
                  – {data.authorCareer},{" "}
                  <span className="ml-auto">
                    Published{" "}
                    <span className="italic font-semibold">{data.date}</span>
                  </span>
                </div>
              </figcaption>
              <figcaption className="mt-6 gap-x-4">
                <img
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                  src={data.imgSrc}
                  alt=""
                />
              </figcaption>

              <div className="mt-10 max-w-2xl">
                <p>{data.content}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
