import React from "react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Prduct id ${productId}`,
    description: `This is the details of product Id ${productId}`,
  };
};

const ProductDescription = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (productId >= "0") {
    return (
      <h1>
        You are viewing review {reviewId} of product {productId}{" "}
      </h1>
    );
  }
  return <div>This is the Product Default Page </div>;
};

export default ProductDescription;
