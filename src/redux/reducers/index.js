import { combineReducers } from 'redux';
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer"
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer"
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer, updateFilmReducer, addImageReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer";
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
    fetchShowtimeReducer,
    fetchCinemaSystemReducer,
    fetchCinemaReducer,
    addShowTimeReducer,
    registerUserReducer,
    addImageReducer
});

export default store;