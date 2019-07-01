import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_ALL_TODOS:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
}