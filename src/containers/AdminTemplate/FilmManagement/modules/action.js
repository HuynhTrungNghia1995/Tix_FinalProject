import axios from "axios";
import * as actionTypes from "./constants";
export const fetchFilmList = (group) => {
    return (dispatch) => {
        dispatch(fetchFilmListRequest())
        axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${group}`,
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


export const addFilm = (film, file) => {
    const formData = new FormData()
    formData.append('File', file.hinhAnh, file.hinhAnh.name)
    formData.append('tenPhim', film.tenPhim)
    formData.append('maNhom', film.maNhom)
    let accessToken = "";

    if (localStorage.getItem("User")) {
        if (JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri") {
            accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
        }
    }
    return (dispatch) => {
        dispatch(addFilmRequest())
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
            method: "POST",
            data: film,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                axios({
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
                    method: "POST",
                    data: formData,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                dispatch(addFilmSuccess(res.data));
            })
            .catch((err) => {
                dispatch(addFilmFailed(err));
            })
    }
}
export const addFilmRequest = () => {
    return {
        type: actionTypes.ADD_FILM_REQUEST
    }

}
export const addFilmSuccess = (data) => {
    return {
        type: actionTypes.ADD_FILM_SUCCESS,
        payload: data
    }

}
export const addFilmFailed = (err) => {
    return {
        type: actionTypes.ADD_FILM_FAILED,
        payload: err
    }

}



export const deleteFilm = (id) => {
    let accessToken = "";

    if (localStorage.getItem("User")) {
        if (JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri") {
            accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
        }
    }
    return (dispatch) => {
        dispatch(deleteFilmRequest())
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                alert(res.data);
                dispatch(deleteFilmSuccess(res.data));
            })
            .catch((err) => {
                alert(err.response.data);
                dispatch(deleteFilmFailed(err));
            })
    }
}
export const deleteFilmRequest = () => {
    return {
        type: actionTypes.DELETE_FILM_REQUEST
    }

}
export const deleteFilmSuccess = (data) => {
    return {
        type: actionTypes.DELETE_FILM_SUCCESS,
        payload: data
    }

}
export const deleteFilmFailed = (err) => {
    return {
        type: actionTypes.DELETE_FILM_FAILED,
        payload: err
    }

}


export const updateFilm = (film, file) => {

    let accessToken = "";

    if (localStorage.getItem("User")) {
        if (JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri") {
            accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
        }
    }
    return (dispatch) => {
        dispatch(updateFilmRequest())
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
            method: "POST",
            data: film,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                if (file !== undefined) {
                    const formData = new FormData()
                    formData.append('File', file.hinhAnh, file.hinhAnh.name)
                    formData.append('tenPhim', film.tenPhim)
                    formData.append('maNhom', film.maNhom)
                    axios({
                        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
                        method: "POST",
                        data: formData,
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        }
                    })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                dispatch(updateFilmSuccess(res.data));
            })
            .catch((err) => {
                dispatch(updateFilmFailed(err));
            })
    }
}
export const updateFilmRequest = () => {
    return {
        type: actionTypes.UPDATE_FILM_REQUEST
    }

}
export const updateFilmSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_FILM_SUCCESS,
        payload: data
    }

}
export const updateFilmFailed = (err) => {
    return {
        type: actionTypes.UPDATE_FILM_FAILED,
        payload: err
    }

}

