import { combineReducers } from 'redux';
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer"
<<<<<<< HEAD
import { fetchFilmListReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer"
import systemCinemaReducer from "../../components/Schedule/modules/reducer";
const store = combineReducers({
    authReducer,
    fetchFilmListReducer,
    systemCinemaReducer,
=======
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer"
const store = combineReducers({
    authReducer,
    fetchFilmListReducer,
    addFilmReducer,
    deleteFilmReducer
>>>>>>> f4d9e98d1aecf695bda773a0572bd5f61b55ee22
});

export default store;