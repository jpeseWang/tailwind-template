import React from "react";
import Image from "next/image";
import heroes from "@/assets/images/category-thumbnails/marketing/page-sections/heroes.png";
import featureSections from "@/assets/images/category-thumbnails/marketing/page-sections/feature-sections.png";
import ctaSections from "@/assets/images/category-thumbnails/marketing/page-sections/cta-sections.png";
import pricing from "@/assets/images/category-thumbnails/marketing/page-sections/pricing.png";
import header from "@/assets/images/category-thumbnails/marketing/page-sections/header.png";
import newsletterSections from "@/assets/images/category-thumbnails/marketing/page-sections/newsletter-sections.png";
import stats from "@/assets/images/category-thumbnails/marketing/page-sections/stats-sections.png";
import testimonials from "@/assets/images/category-thumbnails/marketing/page-sections/testimonials.png";
import blogSec from "@/assets/images/category-thumbnails/marketing/page-sections/blog-sections.png";
import contact from "@/assets/images/category-thumbnails/marketing/page-sections/contact-sections.png";
import team from "@/assets/images/category-thumbnails/marketing/page-sections/team-sections.png";
import content from "@/assets/images/category-thumbnails/marketing/page-sections/content-sections.png";
import logoClouds from "@/assets/images/category-thumbnails/marketing/page-sections/logo-clouds.png";
import faqs from "@/assets/images/category-thumbnails/marketing/page-sections/faq-sections.png";
import footers from "@/assets/images/category-thumbnails/marketing/page-sections/footers.png";
import "prismjs/themes/prism.css";
import Link from "next/link";
const PageSections = () => {
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
                <Link href="/components/marketing/page-sections/hero-sections">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Hero Sections</span>
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
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={stats}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Stats</span>
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
                  src={testimonials}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Testimonials</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                9 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={blogSec}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Blog Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                7 components
              </p>
            </div>
          </li>
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={contact}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Contact Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                8 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={team}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Team Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                9 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={content}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Content Sections</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                6 components
              </p>
            </div>
          </li>
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={logoClouds}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Logo Clouds</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                12 components
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                <Image
                  className="absolute inset-0 h-full w-full"
                  src={faqs}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">FAQs</span>
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
                  src={footers}
                  alt=""
                />
              </div>
              <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                <a href="#">
                  <span className="absolute -inset-2.5 z-10"></span>
                  <span className="relative">Footers</span>
                </a>
              </h4>
              <p className="relative mt-1.5 text-xs font-normal text-slate-500">
                10 components
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default PageSections;
