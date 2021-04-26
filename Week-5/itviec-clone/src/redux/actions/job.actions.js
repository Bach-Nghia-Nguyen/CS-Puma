import * as types from "../constants/job.constants";

const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: types.JOB_REQUEST_START });
    console.log("We are in middleware");
    let url = `http://localhost:5001/jobs`;
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: types.JOB_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.JOB_REQUEST_FAIL, payload: error.message });
  }
};

const getSingleJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.JOB_DETAIL_REQUEST_START });

    let url = `http://localhost:5001/jobs/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: types.JOB_DETAIL_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.JOB_DETAIL_REQUEST_FAIL, payload: error.message });
  }
};

export const jobActions = { getJobs, getSingleJob };
