import * as types from "../actions/types";

const initialState = {
    gifs: [],
    gif: null,
    isLoading: false,
    errorr: null
}

const reducer = (state = initialState, action) => {
    const {payload,type} = action;
    switch (type) {
        case types.GET_GIF_SUCCESS:
            return {
                ...state,
                gifs: payload.gifs,
                isLoading: false,
                error: null
            }
              case types.GET_SINGLE_GIF_SUCCESS:
            return {
                ...state,
                gif: payload.gif,
                isLoading: false,
                error: null
            }
            case types.LOADING:
                return {
                    ...state,
                    isLoading: true
                };
            case types.GET_GIF_FAILED:
                return {
                    ...state,
                    isLoading: false,
                    error: payload.error
                };
            default:
                return state;
    }
}


export default reducer;