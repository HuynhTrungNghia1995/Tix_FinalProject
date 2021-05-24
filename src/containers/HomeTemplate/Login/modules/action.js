import axios from "axios";
import * as actionTypes from "./constants";
export const fetchLogin = (user, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: user,
        })
            .then((res) => {
                dispatch(actAuthSuccess(res.data));
                localStorage.setItem("User", JSON.stringify(res.data));
                if (res.data.maLoaiNguoiDung === "QuanTri") {
                    history.replace("/dashboard");
                } else {
                    history.replace("/");
                }
            })
            .catch((err) => {
                dispatch(actAuthFailed(err));
            })
    }
}
export const resetAuth = () => {
    return (dispatch) => {
        dispatch(actAuthReset());
    }
}

const actAuthRequest = () => {
    return {
        type: actionTypes.AUTH_REQUEST,
    }
}
const actAuthReset = () => {
    return {
        type: actionTypes.AUTH_RESET,
    }
}
const actAuthSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFailed = (err) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: err
    }
}