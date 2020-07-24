export const SAVE_VALUES_DATES = "SAVE_VALUES_DATES"
export const CHANGE_FETCH_DATE = "CHANGE_FETCH_DATE"
export const CHANGE_LIGHT = "CHANGE_LIGHT"
export const CHANGE_RANGE = "CHANGE_RANGE"
export const CHANGE_NUM_LIGTHS = "CHANGE_NUM_LIGTHS"
export const GET_USER_LIST = "GET_USER_LIST"
export const GET_ID = "GET_ID"

export const saveValuesDates = (valuesDates) => ({
    type: SAVE_VALUES_DATES,
    payload: valuesDates,
})

export const changeFetchDate = (dateFetch) => ({
    type: CHANGE_FETCH_DATE,
    payload: {dateFetch},
})

export const changeLight = (light) => ({
    type: CHANGE_LIGHT,
    payload: {light}
})

export const changeRang = (range) => ({
    type: CHANGE_RANGE,
    payload: {range}
})

export const changeNumLights = (numLights) => ({
    type: CHANGE_NUM_LIGTHS,
    payload: {numLights}
})

export const getUserList = (userList = []) => ({
    type: GET_USER_LIST,
    payload: {userList}
})

export const getId = (id = '') => ({
    type: GET_ID,
    payload: {id}   
})