import {createStore, combineReducers} from 'redux'
import reducer from './reducers'
const rootStore = combineReducers(reducer)

export const store = createStore({rootStore})  