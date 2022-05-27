import { legacy_createStore as createStore, combineReducers } from 'redux'

import { reducerCounter } from './modules/couter/reducer'

const reducers = combineReducers({num: reducerCounter})

export const store = createStore(reducers)