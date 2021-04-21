const initialState = {
  count: 0,
  indexColors: [null],
  defaultColor: "#919191",
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

    case "CHANGE_COLOR":
      state.defaultColor = payload;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default counterReducer;
