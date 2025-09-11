// import { notFound } from "next/navigation";
// "use client";

import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  const { reviewId, productId } = await params;

  // const random = Math.floor(Math.random() * 2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  if (parseInt(reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      This is the {reviewId} review of Product {productId}
    </div>
  );
};

export default ReviewDetails;
