import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Products",
  description: "This is the Products Description",
};

const ProductsHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>This is the Products Home Page </h1>

      <h2>
        <Link href={"/products/1"}> Product 1 </Link>
      </h2>
      <h2>
        <Link href={"/products/2"}> Product 2 </Link>
      </h2>
      <h2>
        <Link href={"/products/3"} replace>
          {" "}
          Product 3{" "}
        </Link>
      </h2>
    </div>
  );
};

export default ProductsHome;
