"use client";

import { createContext, useContext, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = (value) => {
    setIsSidebarExpanded(value);
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarExpanded,
        setIsSidebarExpanded,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error("useUI must be used inside UIProvider");
  }

  return context;
}