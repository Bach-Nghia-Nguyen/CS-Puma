const initialState = {
  count: 0,
  indexColors: [null],
  defaultColor: "#919191",
  user: null,
  auth: null,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREASE":
      state.count += payload;
      break;

    case "DECREASE":
      state.count -= payload;
      break;

    case "LOG_IN":
      state.user = payload.user;
      break;

    case "LOG_OUT":
      state.user = null;
      break;

    case "CHANGE_COLOR":
      state.defaultColor = payload;
      break;

    case "CHANGE_SPECIFIC_BOX":
      break;

    default:
      return state;
  }

  return { ...state };
};

export default counterReducer;
