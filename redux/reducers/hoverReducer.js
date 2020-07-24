import { ACTIVATE_HOVER, DESACTIVATE_HOVER, ACTIVATE_FIND, DESACTIVATE_FIND } from '../actions/hoverActions'

const hoverReducer = (state = {value: false, popup: false}, action) => {

    switch (action.type) {
        case ACTIVATE_HOVER:
            return { ...state, ...action.payload }
        case DESACTIVATE_HOVER:
            return { ...state, ...action.payload }
        case ACTIVATE_FIND:
            return { ...state, ...action.payload }
        case DESACTIVATE_FIND:
            return { ...state, ...action.payload }
        default:
            return {...state};
    }

}

export default hoverReducer
