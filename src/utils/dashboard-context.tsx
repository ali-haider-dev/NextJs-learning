"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type DashboardState = {
  notificationView: "default" | "archived";
  userView: "default" | "profile";
  // ... other states for other slots
};

const DashboardContext = createContext<
  | {
      state: DashboardState;
      setNotificationView: (view: DashboardState["notificationView"]) => void;
      setUserView: (view: DashboardState["userView"]) => void;
    }
  | undefined
>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DashboardState>({
    notificationView: "default",
    userView: "default",
  });

  const setNotificationView = (view: DashboardState["notificationView"]) => {
    setState((prevState) => ({ ...prevState, notificationView: view }));
  };

  const setUserView = (view: DashboardState["userView"]) => {
    setState((prevState) => ({ ...prevState, userView: view }));
  };

  const value = { state, setNotificationView, setUserView };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
