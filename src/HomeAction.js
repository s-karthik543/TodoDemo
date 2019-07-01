import * as ActionTypes from './ActionTypes';
import { getAllTodos, updateTodoStatus, addTodoToDB, deleteTodoFromDB } from './DatabaseHelper';

export const fetchAllTodos = () => {

    return (dispatch) => {

        getAllTodos()
            .then((result) => {
                dispatch({ type: ActionTypes.SET_ALL_TODOS, payload: result });
            }).catch((error) => {
                console.log('Error', error);
            })
    }
}

export const addTodo = (name, description, status, timeStamp) => {

    return (dispatch) => {
        addTodoToDB(name, description, status, timeStamp)
            .then(() => {
                dispatch(fetchAllTodos())
            })
    }
}

export const updateTodo = (status, id) => {
    return (dispatch) => {
        updateTodoStatus(status, id)
            .then(() => {
                dispatch(fetchAllTodos())
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        deleteTodoFromDB(id)
            .then(() => {
                dispatch(fetchAllTodos())
            })
    }
}