import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Home | NextJs-learning",
  description: "This is the Counter Description",
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>This is the default home page</h1>
      <Link href={"/blogs"}>blogs</Link>
      <br />
      <Link href={"/counter"}>counter</Link>
      <br />
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default Home;
