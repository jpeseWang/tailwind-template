"use client";
import Link from "next/link";
import Preview from "./UI/Preview";
import Code from "./code/App";
import { useState } from "react";

export default function Hero16() {
  const [activeTab, setActiveTab] = useState("preview");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section>
        <div className="grid grid-cols-[1fr,auto] items-center">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              Split with navbar
              <Link href="#"></Link>
            </h2>
            <p class="ml-3 hidden whitespace-nowrap rounded-lg bg-amber-100 px-2 py-0.5 text-xs font-semibold leading-6 text-amber-800 lg:block">
              Exclusive
            </p>
          </div>
          <div class="ml-6 flex items-center">
            <div
              class="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
              role="tablist"
              aria-orientation="horizontal"
            >
              <button
                class={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                  activeTab === "preview" ? "bg-white shadow" : "text-slate-600"
                }`}
                onClick={() => handleTabChange("preview")}
              >
                <svg
                  className={`${
                    activeTab === "preview"
                      ? "h-5 w-5 flex-none stroke-sky-500"
                      : "h-5 w-5 flex-none stroke-slate-600"
                  }`}
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path>
                  <circle cx="10" cy="10" r="2.25"></circle>
                </svg>
                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-900">
                  Preview
                </span>
              </button>

              <button
                class={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                  activeTab === "code" ? "bg-white shadow" : "text-slate-600"
                }`}
                onClick={() => handleTabChange("code")}
              >
                <svg
                  className={`${
                    activeTab === "code"
                      ? "h-5 w-5 flex-none stroke-sky-500"
                      : "h-5 w-5 flex-none stroke-slate-600"
                  }`}
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path>
                </svg>
                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-600">
                  Code
                </span>
              </button>
            </div>
            <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
          </div>

          <div className="col-span-2 row-start-2 min-w-0">
            <div className="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10 relative mt-6">
              {" "}
              {activeTab === "preview" ? <Preview /> : <Code />}
            </div>
            <div class="absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex">
              <div class="h-8 w-1.5 rounded-full bg-slate-400"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
