import * as types from "../constants/auth.constants";

const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    console.log("uuuu", user);
    if (!user || !user.email || !user.password) {
      dispatch({ type: types.LOGIN_FAILURE, payload: "Give me user info" });
      return;
    }

    dispatch({ type: types.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
  }
};

export const authActions = { login };
