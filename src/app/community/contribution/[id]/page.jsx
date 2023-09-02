"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingComponent from "@/app/loading";
import ReactStars from "react-stars";
import CodePreview from "@/components/CodeBlock/CodeBlock";
import Rating from "react-rating-stars-component";
async function getData(id) {
  const res = await fetch(`/api/contribution/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default function ContributionDetails({ params }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState(0);
  const [uploading, setUploading] = useState(false);
  const session = useSession();

  useEffect(() => {
    getData(params.id)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/contribution/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          username: session.data.username,
          score: selectedRating,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Rating updated successfully");
      } else {
        console.error("Failed to update rating");
      }

      e.target.reset();
      setUploading(false);
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="bg-transparent py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <img
                    className="absolute inset-0 h-full w-full object-cover "
                    src={data.imgSrc}
                    alt=""
                  />
                  <figure className="relative isolate">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#0ef284b8-28c2-426e-9442-8655d393522e"
                        x={86}
                      />
                    </svg>
                    <img
                      src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                      alt=""
                      className="h-12 w-auto"
                    />

                    <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                      <strong className="font-semibold text-white">
                        {data.author},
                      </strong>{" "}
                      {data.authorCareer}
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Template by user
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
                        @{data.authorUsername}
                      </strong>
                      {" - "}
                      <span className="ml-auto">
                        Published{" "}
                        <span className="italic font-semibold">
                          {data.date}
                        </span>
                      </span>
                    </div>
                  </figcaption>
                  <div className="max-w-xl">
                    <p className="mt-6">{data.description}</p>
                  </div>
                </div>

                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-indigo-600"
                  >
                    Get more about our template{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-16">
              {data.ratings && (
                <h2>
                  Average:{" "}
                  {(
                    data.ratings.reduce(
                      (total, mark) => total + mark.score,
                      0
                    ) / data.ratings.length
                  ).toFixed(1)}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </h2>
              )}
              <h3>
                {data.ratings &&
                  data.ratings.map((mark) => (
                    <h1 key={mark.id}>
                      {mark.username}: {mark.score}
                    </h1>
                  ))}
              </h3>
              <span className="text-gray-600 font-semibold text-lg">
                Source Code
              </span>
              {data.sourceCode ? (
                <CodePreview code={data.sourceCode} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {session.status === "authenticated" ? (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src={session.data.avatar}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <form className="relative" onSubmit={handleSubmit}>
                    <div className="col-span-1 flex flex-col items-start space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600 inline font-medium">
                          Rate this:
                        </span>
                        <ReactStars
                          count={5}
                          size={22}
                          color2={"#ffd700"}
                          value={selectedRating}
                          onChange={(newValue) => setSelectedRating(newValue)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                          Add your comment
                        </label>
                        <textarea
                          rows={3}
                          name="comment"
                          id="comment"
                          className="block w-full resize-none border-0 bg-transparent py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Add your comment..."
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 w-1/2">
                      <div className="flex items-center space-x-5">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Attach a file</span>
                          </button>
                        </div>
                        <div className="flex items-center"></div>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="submit"
                          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 mr-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}
