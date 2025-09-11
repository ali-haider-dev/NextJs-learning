"use client";
import React from "react";

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  // const [isError, setIsError] = useState(false);

  // if (isError) {
  //   throw new Error("Error from ErrorWrapper");
  // }
  return (
    <div>
      {children}
      {/* <button onClick={() => setIsError(true)}>Simulate Error</button> */}
    </div>
  );
};

export default ErrorWrapper;
