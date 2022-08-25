import { v4 as uuidv4 } from "uuid";

import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ALL_COMPLETE,
  EDIT_DATA,
  TOGGLE_TODO,
  CLEAR_COMPLETED
} from "../actions";

export const addTodo = (data: string) => {
  let newid: string = uuidv4();
  return {
    type: ADD_TODO,
    payload: { text: data, id: newid, isComplete: false },
  };
};

export const deleteTodo = (id: string) => {
  return { type: DELETE_TODO, payload: { id: id } };
};

export const completeTodo = (id: string) => {
  return { type: COMPLETE_TODO, payload: { id: id } };
};

export const allComplete = (check: boolean) => {
  return { type: ALL_COMPLETE, payload: { check: check } };
};

export const editTodo = (id: string, data: string) => {
  return {
    type: EDIT_DATA,
    payload: {
      id: id,
      data: data,
    },
  };
};

export const toggleTodo = (toggle:string) => {
    return{
        type:TOGGLE_TODO,
        payload:{
            toggle:toggle,
        }
    }
};

export const clearCompleted = () => {
    return {
        type:CLEAR_COMPLETED,
    }
}
