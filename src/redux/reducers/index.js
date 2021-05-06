import { combineReducers } from 'redux';
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer"
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer, updateFilmReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer";

import systemCinemaReducer from "../../components/Schedule/modules/reducer";
import { fetchUserListReducer, addUserReducer, deleteUserReducer, updateUserReducer } from "../../containers/AdminTemplate/UserManagement/modules/reducer";
import { fetchShowtimeReducer, fetchCinemaSystemReducer, fetchCinemaReducer, addShowTimeReducer } from "../../containers/AdminTemplate/ShowTimesManagement/modules/reducer";
const store = combineReducers({
    authReducer,
    fetchFilmListReducer,
    addFilmReducer,
    deleteFilmReducer,
    updateFilmReducer,
    fetchUserListReducer,
    addUserReducer,
    deleteUserReducer,
    updateUserReducer,
    deleteFilmReducer,
    authReducer,
    fetchFilmListReducer,
    systemCinemaReducer,
    fetchShowtimeReducer,
    fetchCinemaSystemReducer,
    fetchCinemaReducer,
    addShowTimeReducer
});

export default store;
