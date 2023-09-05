"use client";
import { createContext, useState, useEffect } from "react";

export const SubscriptionContext = createContext({});
export function SubscriptionContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [userPlan, setUserPlan] = useState("");

  useEffect(() => {
    if (userPlan?.length > 0) {
      ls?.setItem("currentPlan", JSON.stringify(userPlan));
    }
  }, [ls, userPlan]);

  function updatePlan(userPlan) {
    setUserPlan(userPlan);
  }
  function refreshPlan() {
    setUserPlan("");
  }
  return (
    <SubscriptionContext.Provider value={{ updatePlan, refreshPlan }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
