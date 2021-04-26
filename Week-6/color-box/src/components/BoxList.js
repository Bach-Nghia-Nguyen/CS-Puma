import React from "react";
import { useSelector } from "react-redux";

import Box from "./Box";

const BoxList = () => {
  const count = useSelector((state) => state.count);

  return (
    <section className="box-list">
      {Array.from(Array(count)).map((c, index) => {
        return <Box key={index} num={index + 1} />;
      })}
    </section>
  );
};

export default BoxList;
