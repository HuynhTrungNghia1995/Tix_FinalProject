import { combineReducers } from "redux";
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer";
import {
  fetchFilmListReducer,
  addFilmReducer,
  deleteFilmReducer,
  updateFilmReducer,
} from "../../containers/AdminTemplate/FilmManagement/modules/reducer";
import systemCinemaReducer from "../../components/Schedule/modules/reducer";
const store = combineReducers({
  authReducer,
  fetchFilmListReducer,
  addFilmReducer,
  deleteFilmReducer,
  updateFilmReducer,
  systemCinemaReducer,
});

export default store;
