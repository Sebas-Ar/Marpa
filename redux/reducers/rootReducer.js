import hoverReducer from './hoverReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    hover: hoverReducer,
    user: userReducer,
});

export default rootReducer