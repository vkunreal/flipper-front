import { TodoStatuses } from "./TodoStatuses";

export interface ITodo {
  id: number;
  title: string;
  text: string;
  status: TodoStatuses;
  isAttach: boolean;
}
