"use client";

import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";


const Counter = () => {
  const [count, setCount] = useState(1);

  const authObj = useAuth();
  const userObj = useUser()
  // if (count % 2 === 0) {
  //   throw new Error("Error from Counter");
  // }
console.log(authObj);
console.log(userObj);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>This is the Counter Counter Value : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
