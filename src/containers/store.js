import {createStore, applyMiddleware} from 'redux'

import counterReducer from '../Services/Reducers/index'

const store = createStore(counterReducer)

export default store
