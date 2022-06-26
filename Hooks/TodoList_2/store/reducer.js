import { ADD_TODO_INPUT, SET_TODO_INPUT, REMOVE_TODO_INPUT, EDIT_TODO_INPUT, UPDATE_TODO_INPUT } from './Constants';


const initState = {
    todoInput: '',
    todos: [],
}

function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO_INPUT:
            const newState = [...state.todos]
            newState.splice(action.payload, 1)
            return {
                ...state,
                todos: newState
            }
        case EDIT_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case UPDATE_TODO_INPUT: 
            const updateTodos = [...state.todos]
            updateTodos[action.index] = action.payload
            return {
                ...state,
                todos: updateTodos
            }
        // case UPDATE_TODO_INPUT:

        default:
            throw new Error('Invalid action..')
    }
}

export { initState }
export default reducer 