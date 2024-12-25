import { TodoSkeleton } from '@/entities/Todo/TodoSkeleton'
import { Loader } from '@/shared/ui/Loader'

import { className } from '@/shared/lib/className'
import { useFetch } from '@/shared/api'
import { Todo } from '@/shared/model/Todo'
import { API_ROUTES } from '@/shared/api'
import { FetchResponse } from '@/shared/model/Network'
import { $hasTodos, $todoList, setTodos } from '@/app/store/todo/TodoStore'
import { useUnit } from 'effector-react'

import styles from './TodoList.module.scss'

export const TodoList = () => {
  const { loading, error, update } = useFetch<FetchResponse<Todo[]>>({
    url: API_ROUTES.todos,
    doneCB: (todos) => setTodos(todos.data),
  })

  const todos = useUnit($todoList)
  const hasTodos = useUnit($hasTodos)

  if (loading) {
    return <Loader />
  } else if (!hasTodos) {
    return null
  } else if (error) {
    return (
      <div>
        <p>Ошибка при загрузке данных с сервера</p>

        <span>{error}</span>

        <button type="button" onClick={update}>
          Повторить
        </button>
      </div>
    )
  }

  return (
    <div className={className(styles.todoList, 'wrapper')}>
      {todos.map((todo) => (
        <TodoSkeleton key={todo.id} {...todo} />
      ))}
    </div>
  )
}
