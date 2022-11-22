
import { createStore, combineReducers, compose } from 'redux'
import { notasReducer } from './reducers/notasReducer'

const rootReducers = combineReducers({
    notitas: notasReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducers, composeEnhancers())