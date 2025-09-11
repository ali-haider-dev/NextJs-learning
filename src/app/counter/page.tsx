import Counter from "./counter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Counter",
  description: "This is the Counter Description",
};

const CounterHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Counter />
    </div>
  );
};

export default CounterHome;
