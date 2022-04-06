import { combineReducers } from 'redux'
import userReducer from './reduce'

const rootReducer = combineReducers({
    userReducer,
})
export default rootReducer