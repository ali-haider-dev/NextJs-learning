"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const path = usePathname();

  console.log("This is the path from usePathname ->", path.split("/"));

  const productId = path.split("/")[2];
  const reviewId = path.split("/")[4];
  return (
    <div>
      Review {reviewId} for Product {productId} not found
    </div>
  );
};

export default NotFound;
