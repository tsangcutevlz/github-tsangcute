import { SET_TODO_INPUT } from './Constants'
import { ADD_TODO_INPUT } from './Constants'
import { REMOVE_TODO_INPUT } from './Constants'
import { EDIT_TODO_INPUT } from './Constants'
import { UPDATE_TODO_INPUT } from './Constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})

export const removeTodoInput = payload => ({
    type: REMOVE_TODO_INPUT,
    payload
})

export const editTodoInput = payload => ({
    type: EDIT_TODO_INPUT,
    payload
})

export const updateTodoInput = (payload, index) => ({
    type: UPDATE_TODO_INPUT,
    payload,
    index,
})

