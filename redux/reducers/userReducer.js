import { SAVE_VALUES_DATES, CHANGE_FETCH_DATE, CHANGE_LIGHT, CHANGE_RANGE, CHANGE_NUM_LIGTHS, GET_USER_LIST, GET_ID } from "../actions/userAction";

const userReducer = (state = {dates: [], dateFetch: "", light: 0, range: 0, numLights: [], id: ''}, action) => {

    switch (action.type) {
        case SAVE_VALUES_DATES:
            return {...state, ...action.payload}
        case CHANGE_FETCH_DATE:
            return {...state, ...action.payload}
        case CHANGE_LIGHT:
            return {...state, ...action.payload}
        case CHANGE_RANGE:
            return {...state, ...action.payload}
        case CHANGE_NUM_LIGTHS:
            return {...state, ...action.payload}
        case GET_USER_LIST:
            return {...state, ...action.payload}
        case GET_ID:
            return {...state, ...action.payload}
        default:
            return {...state}
    }

}

export default userReducer