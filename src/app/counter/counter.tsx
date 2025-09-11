"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  if (count % 2 === 0) {
    throw new Error("Error from Counter");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>This is the Counter Counter Value : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
