import * as actionTypes from "./constants"
const filmList = {
    loading: false,
    data: null,
    err: null
}
export const fetchFilmListReducer = (state = filmList, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.FETCH_FILM_LIST_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_FILM_LIST_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_FILM_LIST_REQUEST:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default: return { ...state };
    }
}

const addFilm = {
    loading: false,
    data: null,
    err: null
}
export const addFilmReducer = (state = addFilm, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.ADD_FILM_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.ADD_FILM_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.ADD_FILM_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default: return { ...state };
    }
}

const deleteFilm = {
    loading: false,
    data: null,
    err: null
}
export const deleteFilmReducer = (state = deleteFilm, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.DELETE_FILM_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.DELETE_FILM_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.DELETE_FILM_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default: return { ...state };
    }
}