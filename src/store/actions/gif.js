import axios from "axios";
import * as types from "./types";

export const loading = () => {
    return {
        type: types.LOADING,
        payload: {
            isloading: true
          }
    }
}

export const failed = (error) => {
    return {
        type: types.GET_GIF_FAILED,
        payload: {
            error
          }
    }
}

export const getGifsSuccess = (gifs) => {
    return {
        type: types.GET_GIF_SUCCESS,
        payload: {
            gifs
        }
    }
}
export const getSingleGifSuccess = (gif) => {
    return {
        type: types.GET_SINGLE_GIF_SUCCESS,
        payload: {
            gif
        }
    }
}
// fecthing all .gifs' 
export const getGifs = (data) => {
    return (dispatch) => {
        dispatch(loading())
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${data}&limit=200&offset=offset&rating=Y&lang=en`)
        .then(res => {
            dispatch(getGifsSuccess(res.data))
        })
        .catch(err => dispatch(failed(err)))
    }
}

export const getSingleGif = (id) => {
    return dispatch => {
        dispatch(loading())
        axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx&`
        )
        .then(res => {
            console.log(res.data)
            dispatch(getSingleGifSuccess(res.data))
        })
        .catch(err => dispatch(failed(err)))
    }
}