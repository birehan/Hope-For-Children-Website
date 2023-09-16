import authSlice from "./auth/authSlice";
import { projectSlice } from "./project/projectSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { staffslice } from "./staffSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "projects", "staffs"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  projects: projectSlice.reducer,
  staffs: staffslice.reducer,
});
const rootReducers = persistReducer(persistConfig, rootReducer);

export default rootReducers;
