"use client";
import React, { useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubscriptionContext } from "@/context/SubscriptionContext";
import LoadingComponent from "../loading";
import { SpotlightTemplate } from "./spotlight/Spotlight";
import { SalientTemplate } from "./salient/Salient";
import { ProtocolTemplate } from "./protocol/Protocol";

export default function Templates() {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [currentPlan, setCurrentPlan] = useState("");
  useEffect(() => {
    const userPlan = JSON.parse(localStorage.getItem("currentPlan"));
    if (userPlan) {
      setCurrentPlan(userPlan);
    }
  }, []);
  const session = useSession();
  const { userPlan } = useContext(SubscriptionContext);
  const router = useRouter();
  if (session.status === "loading") {
    return <LoadingComponent />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/auth/login");
  }
  if (currentPlan === "Basic") {
    router?.push("/payment/pricing");
  }
  if (
    (session.status === "authenticated" && currentPlan === "Plus") ||
    currentPlan === "Premium"
  ) {
    return (
      <div className="mx-auto mt-20 w-full max-w-[40rem] space-y-8 divide-y divide-slate-900/10 sm:space-y-10 lg:max-w-none lg:space-y-24 lg:divide-y-0">
        {/* Spotlight */}
        <SpotlightTemplate />
        <SalientTemplate />
        <ProtocolTemplate />
      </div>
    );
  }
}
