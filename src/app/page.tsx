import { Metadata } from "next";
import Link from "next/link";
import CounterHome from "./counter/page";
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
      <CounterHome/>
    </div>
  );
};

export default Home;
