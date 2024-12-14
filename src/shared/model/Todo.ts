import { TodoStatuses } from './TodoStatuses'

export interface DraftTodo {
  title: string
  text: string
  isAttach: boolean
}

export interface ITodo extends DraftTodo {
  id: number
  status: TodoStatuses
}
