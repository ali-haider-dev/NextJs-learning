"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: Props) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      {error.message}
      <button onClick={reload}>Reload</button>
    </div>
  );
};

export default ErrorBoundary;
