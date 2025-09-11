import React from "react";
import { Metadata } from "next";
export const dynamicParams = false
type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateStaticParams() {
  return [{ productId: '1' }, { productId: '2' }, { productId: '3' }];
}

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
  params: Promise<{ productId: string;}>;
}) => {
  const { productId } = await params;

  if (productId >= "0") {
    return (
      <h1>
        You are viewing  product {productId}
      </h1>
    );
  }
  return <div>This is the Product Default Page </div>;
};

export default ProductDescription;
