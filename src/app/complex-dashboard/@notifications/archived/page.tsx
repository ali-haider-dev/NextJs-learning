"use client";
import { Card } from "@/components/card";
import { useDashboard } from "@/utils/dashboard-context";
import React from "react";

const ArchivedNotificationsPage = () => {
  const { setNotificationView } = useDashboard();
  return (
    <Card>
      <div className="flex flex-col ">
        <h1>Archived Notifications</h1>
        <div>
          <button onClick={() => setNotificationView("default")}>
            Default
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ArchivedNotificationsPage;
