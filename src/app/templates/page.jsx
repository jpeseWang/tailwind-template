"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadingComponent from "../loading";
import { SpotlightTemplate } from "./spotlight/Spotlight";
import { SalientTemplate } from "./salient/Salient";
import { ProtocolTemplate } from "./protocol/Protocol";

export default function Templates() {
  const session = useSession();

  const router = useRouter();
  if (session.status === "loading") {
    return <LoadingComponent />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/auth/login");
  }
  if (session.status === "authenticated") {
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
