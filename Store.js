import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import TodoReducers from './src/TodoReducer';


const reducers = combineReducers({
    todo: TodoReducers
})

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))

const Store = createStore(reducers, {}, enhancer)

export default Store