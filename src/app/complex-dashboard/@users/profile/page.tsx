"use client";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const router = useRouter();
  return (
    <Card>
      UserAnalytics
      <div onClick={() => router.back()}>Back To Dashboard</div>
    </Card>
  );
};

export default UserProfile;
