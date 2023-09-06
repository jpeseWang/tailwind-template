"use client";
import { useContext, useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import {
  BellIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/utils/classNames";
import useSWR from "swr";
import LoadingComponent from "@/app/loading";
// import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubscriptionContext } from "@/context/SubscriptionContext";
import { toast } from "react-hot-toast";
const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];
export default function Example({ params }) {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [upLoading, setUploading] = useState(false);
  const [code, setCode] = useState("false");
  const { updatePlan } = useContext(SubscriptionContext);
  const inputRef = useRef();
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/auth/login");
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/auth/user/${params.id}`,
    fetcher
  );

  const handleSubmitCode = async (e) => {
    setUploading(true);
    if (code === "DEVER") {
      try {
        const response = await fetch(`/api/auth/user/${params.id}`, {
          method: "PUT",
          body: JSON.stringify({
            subscription: "Plus",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        mutate();
        await updatePlan(data.subscription);
        setCode("");
        toast.success("Promotion Code applied successfully!");
        setUploading(false);
      } catch (error) {
        console.error("Error updating rating:", error);
        toast.error("Error updating rating");
      }
    } else if (code === "JPESEWANG") {
      toast.success("Premium Code!");
    } else {
      toast.error("Code is invalid!");
    }
  };
  console.log(">>CHECK", session);
  if (data) {
    const currentPlan = data.subscription;
    console.log(">> CHECK PLAN", currentPlan);
  }

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="mx-auto max-w-7xl pt-2 lg:flex lg:gap-x-16 lg:px-8">
          <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
            <nav className="flex-none px-4 sm:px-6 lg:px-0">
              <ul
                role="list"
                className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
              >
                {secondaryNavigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full flex items-center gap-x-8 pt-6">
                      <img
                        src={data.avatar}
                        alt=""
                        className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                      />

                      <div>
                        <button
                          type="button"
                          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          onClick={() => {
                            toast.success("Welcome");
                          }}
                        >
                          Change avatar
                        </button>
                        <p className="mt-2 text-xs leading-5 text-gray-400">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Full name
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.fullname}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Username
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.username}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Email address
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.email}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Title
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.career}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Date of Birth
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.dob}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Phone Number
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.phone}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Email address
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.email}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2
                  className="text-base font-semibold leading-7 text-gray-900"
                  id="promotion"
                >
                  Promotion code
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Current plan
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{data.subscription}</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Upgrade
                      </button>
                    </dd>
                  </div>
                </dl>
                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Enter your code
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <input
                        className="text-gray-900 rounded ring-1 ring-gray-300 px-1.5 py-1"
                        type="text"
                        ref={inputRef}
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                        onClick={handleSubmitCode}
                      >
                        Submit
                      </button>
                    </dd>
                  </div>
                </dl>
                {upLoading && (
                  <div className="font-medium text-gray-800 my-2">
                    Updating...
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Language and dates
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Choose what language and date format to use throughout your
                  account.
                </p>

                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Language
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">English</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Date format
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">DD-MM-YYYY</div>
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </dd>
                  </div>
                  <Switch.Group as="div" className="flex pt-6">
                    <Switch.Label
                      as="dt"
                      className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                      passive
                    >
                      Automatic timezone
                    </Switch.Label>
                    <dd className="flex flex-auto items-center justify-end">
                      <Switch
                        checked={automaticTimezoneEnabled}
                        onChange={setAutomaticTimezoneEnabled}
                        className={classNames(
                          automaticTimezoneEnabled
                            ? "bg-indigo-600"
                            : "bg-gray-200",
                          "flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            automaticTimezoneEnabled
                              ? "translate-x-3.5"
                              : "translate-x-0",
                            "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </dd>
                  </Switch.Group>
                </dl>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
