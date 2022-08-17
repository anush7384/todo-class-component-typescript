export type InputProps = {
  onSubmit: (data: string) => void;
  onAllComplete: (check: boolean) => void;
};

export type InputState = {
  data: string;
  check: boolean;
};

export type ListProps = {};

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
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (newdata: string, id: string) => void;
  text: string;
};

export type ItemState = {
  edit: boolean;
  data: string;
};

export type showArr = {
  text: string;
  id: string;
  isComplete: boolean;
}[];
