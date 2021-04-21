import React from "react";
import { useDispatch } from "react-redux";

const ControlPad = () => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({
      type: "INCREASE",
      payload: 1,
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREASE",
      payload: 1,
    });
  };

  const changeColor = (e) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: e.target.value,
    });
  };

  return (
    <figure className="control-pad">
      <button className="btn add-button" onClick={increase}>
        Add box
      </button>
      <button className="btn remove-button" onClick={decrease}>
        Remove box
      </button>

      <form className="color-change-form">
        <label htmlFor="general-change-input">Change color of all box</label>{" "}
        <br />
        <input
          type="text"
          id="general-change-input"
          className="form-control"
          placeholder="Change color of all box"
          onChange={changeColor}
        />
      </form>
    </figure>
  );
};

export default ControlPad;
