import { combineReducers } from 'redux';
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer"
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer, updateFilmReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer";
import { fetchFilmListReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer"
import systemCinemaReducer from "../../components/Schedule/modules/reducer";
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer"
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
});

export default store;