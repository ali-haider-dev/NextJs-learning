import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Dashboard() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj);
  console.log(userObj);
  return <div>This is dashboard page now accessible</div>;
}
