import axios from "axios";
import * as actionTypes from "./constants";
export const fetchFilmList = () => {
    return (dispatch) => {
        dispatch(fetchFilmListRequest())
        axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
            method: "GET",
        })
            .then((res) => {
                dispatch(fetchFilmListSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchFilmListFailed(err));
            })
    }
}

export const fetchFilmListRequest = () => {
    return {
        type: actionTypes.FETCH_FILM_LIST_REQUEST
    }

}
export const fetchFilmListSuccess = (data) => {
    return {
        type: actionTypes.FETCH_FILM_LIST_SUCCESS,
        payload: data
    }

}
export const fetchFilmListFailed = (err) => {
    return {
        type: actionTypes.FETCH_FILM_LIST_FAILED,
        payload: err
    }

}