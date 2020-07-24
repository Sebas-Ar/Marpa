import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

const initialSTate = {
    hover: false
}
const middleware = [thunk]

const store = createStore(rootReducer, initialSTate, composeWithDevTools(applyMiddleware(...middleware)))

export default store