import axios from "axios";
import * as actionTypes from "./constants";

export const fetchRoomList = (id) => {
    return (dispatch) => {
        dispatch(fetchRoomListRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method: "GET",
        })
            .then((res) => {
                dispatch(fetchRoomListSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchFilmListFailed(err));
            })
    }
};

export const fetchRoomListRequest = () => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_REQUEST,
    };
};

export const fetchRoomListSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_SUCCESS,
        payload: data
    };
};

export const fetchFilmListFailed = (err) => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_FAILED,
        payload: err
    };
};

