"use client";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/classNames";
import ReactStars from "react-rating-stars-component";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
};

export default function ContributionReviews({ id, data, reload }) {
  const [openReviews, setOpenReviews] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const session = useSession();
  const router = useRouter();
  //Calculate rating Porpotion
  let review = null;
  if (data && data.ratings) {
    review = {
      average: (
        data.ratings.reduce((total, mark) => total + mark.score, 0) /
        data.ratings.length
      ).toFixed(1),
      totalCount: data.ratings.length,
      counts: [
        {
          rating: 5,
          count: data.ratings.filter((rating) => rating.score === 5).length,
          percentages: (
            (data.ratings.filter((rating) => rating.score === 5).length /
              data.ratings.length) *
            100
          ).toFixed(0),
        },
        {
          rating: 4,
          count: data.ratings.filter((rating) => rating.score === 4).length,
          percentages: (
            (data.ratings.filter((rating) => rating.score === 4).length /
              data.ratings.length) *
            100
          ).toFixed(0),
        },
        {
          rating: 3,
          count: data.ratings.filter((rating) => rating.score === 3).length,
          percentages: (
            (data.ratings.filter((rating) => rating.score === 3).length /
              data.ratings.length) *
            100
          ).toFixed(0),
        },
        {
          rating: 2,
          count: data.ratings.filter((rating) => rating.score === 2).length,
          percentages: (
            (data.ratings.filter((rating) => rating.score === 2).length /
              data.ratings.length) *
            100
          ).toFixed(0),
        },
        {
          rating: 1,
          count: data.ratings.filter((rating) => rating.score === 1).length,
          percentages: (
            (data.ratings.filter((rating) => rating.score === 1).length /
              data.ratings.length) *
            100
          ).toFixed(0),
        },
      ],
    };
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const hasRated = data.ratings.some(
      (rating) => rating.id === session.data.id
    );

    if (hasRated) {
      toast.error("Already rated this template");
      return;
    }

    try {
      const response = await fetch(`/api/contribution/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: session.data.fullname,
          id: session.data.id,
          avatar: session.data.avatar,
          content,
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
      reload();
      e.target.reset();
      setSelectedRating(0);
      setUploading(false);
    } catch (error) {
      console.error("Error updating rating:", error);
      toast.error("Error updating rating");
    }
  };
  return (
    <>
      <section aria-labelledby="reviews-heading" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="lg:col-span-4">
            <h2
              id="reviews-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Reviews
            </h2>
            {data.ratings && (
              <div>
                <div className="mt-3 flex items-center">
                  <div>
                    <div className="flex items-center">
                      {data.ratings.length > 0 ? (
                        <div className="font-medium pt-1 pr-2">
                          {" "}
                          Average:{" "}
                          {(
                            data.ratings.reduce(
                              (total, mark) => total + mark.score,
                              0
                            ) / data.ratings.length
                          ).toFixed(1)}
                        </div>
                      ) : (
                        <div className="font-medium pt-1 pr-2">
                          No rating yet
                        </div>
                      )}

                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            rating + 1 <=
                              Math.round(
                                data.ratings.reduce(
                                  (total, mark) => total + mark.score,
                                  0
                                ) / data.ratings.length
                              )
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-900">
                    Based on {data.ratings.length} reviews
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {data &&
                  review?.counts.map((count) => (
                    <div
                      key={count.rating}
                      className="flex items-center text-sm"
                    >
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div
                          aria-hidden="true"
                          className="ml-1 flex flex-1 items-center"
                        >
                          <StarIcon
                            className={classNames(
                              count.count > 0
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />

                          <div className="relative ml-3 flex-1">
                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                            {count.count > 0 ? (
                              <div
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                style={{
                                  width: `calc(${count.count} / ${review.totalCount} * 100%)`,
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      {count.count > 0 ? (
                        <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                          {count.percentages}%
                        </dd>
                      ) : null}
                    </div>
                  ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Share your thoughts
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If you’ve used this product, share your thoughts with other
                customers
              </p>

              <button
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                onClick={() => {
                  if (session.status === "authenticated") {
                    setOpenReviews(!openReviews);
                  } else if (session.status === "unauthenticated") {
                    router.push("/auth/login");
                  }
                }}
              >
                Write a review
              </button>
              {session.status === "authenticated" && openReviews ? (
                <div className="flex items-start space-x-4 mt-6">
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

                      <div className="grid gap-4 mt-2">
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
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="flex items-center space-x-5"></div>
                        <div className="flex-shrink-0">
                          <button
                            onClick={console.log("GO")}
                            type="submit"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 mr-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </form>
                    {uploading && (
                      <div className="font-medium py-1">Uploading...</div>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="-my-12 divide-y divide-gray-200">
                {data.ratings &&
                  data.ratings
                    .slice()
                    .reverse()
                    .map((mark) => (
                      <div key={mark.id} className="py-12">
                        <div className="flex items-center">
                          <img
                            src={mark.avatar}
                            className="h-12 w-12 rounded-full"
                          />
                          <div className="ml-4">
                            <h4 className="text-sm font-bold text-gray-900">
                              {mark.name}
                            </h4>
                            <div className="mt-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    mark.score > rating
                                      ? "text-yellow-400"
                                      : "text-gray-300",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-y-6 text-base italic text-gray-600">
                          {mark.content}
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
