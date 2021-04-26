import { combineReducers } from "redux";

import authReducers from "./auth.reducers";
import jobReducers from "./job.reducers";

export default combineReducers({
  job: jobReducers,
  auth: authReducers,
});
