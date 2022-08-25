import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  ALL_COMPLETE,
  EDIT_DATA,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
} from "../actions/index";
import { todoReducerAction, initialType } from "./types";

const initialState: initialType = {
  todos: [],
  filter: "all",
};

export const todoReducer = (
  state = initialState,
  action: todoReducerAction
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            data: action.payload.text,
            id: action.payload.id,
            isComplete: action.payload.isComplete,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return { ...todo, isComplete: !todo.isComplete };
            } else return todo;
          }),
        ],
      };

    case ALL_COMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (action.payload.check === false) {
              return { ...todo, isComplete: true };
            } else if (action.payload.check === true) {
              return { ...todo, isComplete: false };
            } else return todo;
          }),
        ],
      };

    case EDIT_DATA:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return { ...todo, data: action.payload.data };
            } else return todo;
          }),
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        filter: action.payload.toggle,
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.isComplete !== true)],
      };

    default:
      return state;
  }
};
