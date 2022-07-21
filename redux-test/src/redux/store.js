import { applyMiddleware,combineReducers, createStore } from 'redux'

import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducers = combineReducers({
  count: countReducer,
  person:personReducer
})

export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))