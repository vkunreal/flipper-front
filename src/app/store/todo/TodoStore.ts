import { Todo } from '@/shared/model/Todo'
import { TodoStatuses } from '@/shared/model/TodoStatuses'
import { createEvent, createStore } from 'effector'

export const setTodos = createEvent<Todo[]>()
export const addTodo = createEvent<Todo>()
export const deleteTodo = createEvent<number>()
export const changeTodoStatus = createEvent<{
  id: number
  status: TodoStatuses
}>()

export const $todoList = createStore<Todo[]>([])
  .on(setTodos, (_, todos) => todos)
  .on(addTodo, (state, todo) => [...state, todo])
  .on(deleteTodo, (state, id) => state.filter((todo) => todo.id !== id))
  .on(changeTodoStatus, (state, { id, status }) =>
    state.map((todo) => (todo.id === id ? { ...todo, status } : todo)),
  )

export const $hasTodos = $todoList.map((state) => !!state.length)
