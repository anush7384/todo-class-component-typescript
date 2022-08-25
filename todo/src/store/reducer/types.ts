export interface initialType {
  todos: {
    data: string;
    id: string;
    isComplete: boolean;
  }[];
  filter: string;
}

interface addTodo {
  type: "ADD_TODO";
  payload: {
    id: string;
    text: string;
    isComplete: boolean;
  };
}
interface deleteTodo {
  type: "DELETE_TODO";
  payload: {
    id: string;
  };
}
interface completeTodo {
  type: "COMPLETE_TODO";
  payload: {
    id: string;
  };
}

interface allComplete {
  type: "ALL_COMPLETE";
  payload: {
    check: boolean;
  };
}

interface editTodo {
  type: "EDIT_DATA";
  payload: {
    data: string;
    id: string;
  };
}

interface toggleTodo {
  type: "TOGGLE_TODO";
  payload: {
    toggle: string;
  };
}

interface clearCompleted {
  type: "CLEAR_COMPLETED";
}

export type todoReducerAction =
  | addTodo
  | deleteTodo
  | completeTodo
  | allComplete
  | editTodo
  | toggleTodo
  | clearCompleted;
