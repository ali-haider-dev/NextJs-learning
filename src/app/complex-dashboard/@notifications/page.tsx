"use client";
import { Card } from "@/components/card";
import React from "react";
import { useDashboard } from "@/utils/dashboard-context";
import ArchivedNotificationsPage from "./default";
const Notifications = () => {
  const { setNotificationView } = useDashboard();
  const { state } = useDashboard();
  if (state.notificationView === "archived") {
    return <ArchivedNotificationsPage />;
  }
  return (
    <Card>
      Notifications
      <button
        onClick={() => setNotificationView("archived")}
        className="text-blue-800 underline"
      >
        Archived
      </button>
    </Card>
  );
};

export default Notifications;
