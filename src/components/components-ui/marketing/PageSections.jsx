import React from "react";
import Image from "next/image";
import heroes from "@/images/category-thumbnails/marketing/page-sections/heroes.png";
import featureSections from "@/images/category-thumbnails/marketing/page-sections/feature-sections.png";
import ctaSections from "@/images/category-thumbnails/marketing/page-sections/cta-sections.png";
import pricing from "@/images/category-thumbnails/marketing/page-sections/pricing.png";
import header from "@/images/category-thumbnails/marketing/page-sections/header.png";
import newsletterSections from "@/images/category-thumbnails/marketing/page-sections/newsletter-sections.png";
import Prism from 'prismjs'
import 'prismjs/themes/prism.css';
const PageSections = () => {
  const html = Prism.highlight('aleart(error')
  return (
    <>
      <section
        id="product-marketing-sections"
        className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
      >
        <h3 className="text-base font-medium text-slate-900">Page Sections</h3>
        <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={heroes}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Hero Sections</span>
                </a>
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
                  src={featureSections}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Feature Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                18 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={ctaSections}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">CTA Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                11 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={pricing}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Pricing Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                13 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={header}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Header Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                10 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={heroes}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Newsletter Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                7 components
              </p>
            </div>
          </li>
        </ul>
        <div>
          <code>abc</code>
        </div>
      </section>
    </>
  );
};

export default PageSections;
