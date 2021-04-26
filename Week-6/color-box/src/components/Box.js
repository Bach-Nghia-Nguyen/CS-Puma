import React from "react";
import { useSelector } from "react-redux";

const Box = ({ num }) => {
  let defaultColor = useSelector((state) => state.defaultColor);

  return (
    <div style={{ backgroundColor: defaultColor }} className="color-box">
      <h3>Box: {num}</h3>
      <input
        type="text"
        className="form-control"
        placeholder="change color of this box"
        onChange=""
      />
    </div>
  );
};

export default Box;
