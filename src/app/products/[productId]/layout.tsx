import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  // const random = Math.floor(Math.random() * 2);
  // if (random === 1) {
  //   throw new Error("Error loading Review - > Error From Layout");
  // }
  return <div>{children}</div>;
};

export default ProductLayout;
