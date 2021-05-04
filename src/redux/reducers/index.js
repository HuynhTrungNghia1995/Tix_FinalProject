import { combineReducers } from 'redux';
import authReducer from "../../containers/AdminTemplate/Login/modules/reducer"
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer, updateFilmReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer";
import { fetchUserListReducer, addUserReducer, deleteUserReducer, updateUserReducer } from "../../containers/AdminTemplate/UserManagement/modules/reducer";
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
});

export default store;