"use client";
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Marketing from "@/app/components/marketing/page";
import { useSession } from "next-auth/react";
import { SubscriptionContext } from "@/context/SubscriptionContext";
const Components = () => {
  const session = useSession();
  const { updatePlan } = useContext(SubscriptionContext);
  useEffect(() => {
    if (session) {
      updatePlan(session.data?.subscription);
    }
  }, [session, updatePlan]);

  return (
    <>
      <Head>
        <title>Components - Tailwind Template</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <div className=" top-0 overflow-x-auto whitespace-nowrap border-b transition duration-100 border-slate-900/5 bg-transparent">
        <div className="mx-auto flex max-w-container justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900">
          <div className="flex space-x-8 pl-4 sm:pl-6 lg:pl-8 ">
            <Link href="/components/marketing">Marketing</Link>
            <Link href="/components/application-ui">Application UI</Link>
            <Link href="/components/e-commerce">Ecommerce</Link>
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
