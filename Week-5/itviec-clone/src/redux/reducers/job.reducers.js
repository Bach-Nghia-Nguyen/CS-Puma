import * as types from "../constants/job.constants";

const initialState = {
  jobs: [],
  loading: false,
  error: "",
  jobDetail: {},
};

const jobReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.JOB_REQUEST_START:
    case types.JOB_DETAIL_REQUEST_START:
      state.loading = true;
      break;

    case types.JOB_REQUEST_SUCCESS:
      console.log("I'm in reducer");
      state.jobs = payload;
      state.loading = false;
      break;

    case types.JOB_DETAIL_REQUEST_SUCCESS:
      state.jobDetail = payload;
      state.loading = false;
      break;

    case types.JOB_REQUEST_FAIL:
    case types.JOB_DETAIL_REQUEST_FAIL:
      state.loading = false;
      state.error = payload;
      break;

    default:
      return state;
  }
  return { ...state };
};

export default jobReducers;
