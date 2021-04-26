import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ControlPad = () => {
  const count = useSelector((state) => state.count);
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

  const [userName, setUserName] = useState("");

  const login = (e) => {
    e.preventDefault();
    dispatch({ type: "LOG_IN", payload: { userName } });
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOG_OUT" });
  };

  const changeColor = (e) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: e.target.value,
    });
  };

  return (
    <section className="control-pad">
      <InputGroup className="login">
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Append>
          <Button variant="outline-success">Log in</Button>
        </InputGroup.Append>
      </InputGroup>

      <span classNmae="user-name"></span>

      <button className="btn control-button add-button" onClick={increase}>
        Add box
      </button>
      <h4>{count}</h4>
      <button className="btn control-button remove-button" onClick={decrease}>
        Remove box
      </button>

      <form className="color-change-form">
        <input
          type="text"
          className="form-control"
          placeholder="Change color of all box"
          onChange={changeColor}
        />
      </form>
    </section>
  );
};

export default ControlPad;
