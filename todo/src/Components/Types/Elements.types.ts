export type InputProps = {
  allComplete: (check: boolean) => void;
  addTodo:(data:string) => void;
};

export type InputState = {
  data: string;
  check: boolean;
};

export interface ListProps {
  todos: {
    data: string;
    id: string;
    isComplete: boolean;
  }[];
  filter: string;
  toggleTodo: (toggle: string) => void;
  clearCompleted: () => void;
}

export type ListState = {
  todos: {
    text: string;
    id: string;
    isComplete: boolean;
  }[];
  show: string;
};

export type ItemProps = {
  key: string;
  id: string;
  isComplete: boolean;
  deleteTodo:(id:string) => void;
  completeTodo: (id:string) =>void;
  editTodo:(id:string,data:string)=>void;
  text: string;
};

export type ItemState = {
  edit: boolean;
  data: string;
};

export type showArr ={ 
  data: string,
  id: string,
  isComplete: boolean,
}[];
