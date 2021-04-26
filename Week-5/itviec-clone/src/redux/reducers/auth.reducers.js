import * as types from "../constants/auth.constants";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      state.loading = true;
      break;

    case types.LOGIN_SUCCESS:
      console.log("User payload: ", payload);
      state.user = payload;
      state.isAuthenticated = true;
      state.loading = false;
      console.log("sss", state);
      break;

    case types.LOGIN_FAILURE:
      state.user = null;
      state.isAuthenticated = false;
      state.error = payload;
      state.loading = false;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default authReducers;
