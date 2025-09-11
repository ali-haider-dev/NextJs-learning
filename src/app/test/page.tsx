import React from "react";

const Test = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tada  !! Content Ready !");
    }, 2000);
  });

  return <div>Test</div>;
};

export default Test;
