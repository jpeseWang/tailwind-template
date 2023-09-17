"use client";

import { createContext, useState } from "react";

export const CurrentTabContext = createContext();

export const CurrentTabProvider = ({ children }) => {
  const [inboxTab, setInboxTab] = useState("empty");
  const [inboxId, setInboxId] = useState("");

  const updateInboxTab = (newTab) => {
    setInboxTab(newTab);
  };

  const updateInboxId = (newId) => {
    setInboxId(newId);
  };

  return (
    <CurrentTabContext.Provider
      value={{
        updateInboxTab,
        updateInboxId,
        inboxTab,
        inboxId,
      }}
    >
      <div>{children}</div>
    </CurrentTabContext.Provider>
  );
};
