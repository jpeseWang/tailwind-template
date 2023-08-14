import React from "react";
import Head from "next/head";
import Link from "next/link";
import Marketing from "@/app/components/marketing/Marketing";
const Components = () => {
  return (
    <>
      <Head>
        <title>Components - Tailwind Template</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <div className="sticky top-0 overflow-x-auto whitespace-nowrap border-b transition duration-100  z-40 border-slate-900/5 bg-transparent">
        <div className="mx-auto flex max-w-container justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900">
          <div className="flex space-x-8 pl-4 sm:pl-6 lg:pl-8">
            <Link href="#">Marketing</Link>
            <Link href="#">Application UI</Link>
            <Link href="#">Ecommerce</Link>
          </div>
        </div>
      </div>

      <div className="max-w-container relative mx-auto w-full space-y-20 px-4 pt-10 sm:px-6 lg:px-8">
        <Marketing />

        <div>App UI</div>
        <div>Ecommerce</div>
      </div>
    </>
  );
};

export default Components;
