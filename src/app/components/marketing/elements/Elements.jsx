import React from "react";
import Image from "next/image";
import headers from "@/assets/images/category-thumbnails/marketing/elements/headers.png";
import flyout from "@/assets/images/category-thumbnails/marketing/elements/flyout-menus.png";
import banners from "@/assets/images/category-thumbnails/marketing/elements/banners.png";
import "prismjs/themes/prism.css";
import Link from "next/link";
const Elements = () => {
  return (
    <>
      <section
        id="product-marketing-sections"
        className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
      >
        <h3 className="text-base font-medium text-slate-900">Elements</h3>
        <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={headers}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <Link href="/components/marketing/page-sections/hero-sections">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Headers</span>
                </Link>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                12 components
              </p>
            </div>
          </li>
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={flyout}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Flyout Menus</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                7 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={banners}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Banners</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                13 components
              </p>
            </div>
          </li>{" "}
        </ul>
      </section>
    </>
  );
};

export default Elements;
