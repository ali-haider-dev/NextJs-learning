import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

const UserAnalytics = () => {
  return (
    <Card>
      UserAnalytics
      <Link href={"/complex-dashboard/profile"}>Go to Profile</Link>
    </Card>
  );
};

export default UserAnalytics;
