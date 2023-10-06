"use client";
import { useState, useEffect } from "react";
import Reloading from "@/components/Reloading/Reloading";

export default function Example() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    const minimumLoadingTime = 2000;
    const additionalTime = minimumLoadingTime - 2000;
    if (additionalTime > 0) {
      setTimeout(() => {
        setIsloading(false);
      }, additionalTime);
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return <>{isLoading ? <Reloading /> : null}</>;
}
