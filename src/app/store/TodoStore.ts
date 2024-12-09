import { ITodo } from '@/shared/model/Todo'
import { TodoStatuses } from '@/shared/model/TodoStatuses'
import { createEffect, createEvent, createStore } from 'effector'
import { API_ROUTES, API_V1 } from '@/shared/api'
import axios from 'axios'

export const addTodo = createEvent<ITodo>()
export const deleteTodo = createEvent<number>()
export const changeTodoStatus = createEvent<{
  id: number
  status: TodoStatuses
}>()

const fetchTodosFx = createEffect({
  handler: async () => {
    const response = await axios.get<ITodo[]>(API_ROUTES.todos)
    return response.data
  },
})

export const $todoList = createStore<ITodo[]>([])
  .on(addTodo, (state, todo) => [...state, todo])
  .on(deleteTodo, (state, id) => state.filter((todo) => todo.id !== id))
  .on(changeTodoStatus, (state, { id, status }) =>
    state.map((todo) => (todo.id === id ? { ...todo, status } : todo))
  )
  .on(fetchTodosFx.doneData, (_, todos) => todos)
  .on(fetchTodosFx.fail, (state, error) => {
    console.error('API Error: ', error)
    return state
  })

export const $loading = createStore(true).on(fetchTodosFx.done, () => false)

export const fetchTodos = createEvent()

fetchTodos.watch(fetchTodosFx)
