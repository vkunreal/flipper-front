import { $loading, $todoList, fetchTodos } from '@/app/store/TodoStore'
import { TodoSkeleton } from '@/entities/TodoSkeleton'
import { Loader } from '@/shared/ui/Loader'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

import styles from './TodoList.module.scss'
import { className } from '@/shared/lib/className'

export const TodoList = () => {
  const todos = useUnit($todoList)
  const loading = useUnit($loading)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      {!loading ? (
        <div className={className(styles.todoList, 'wrapper')}>
          {!!todos.length &&
            todos.map((todo) => <TodoSkeleton key={todo.id} {...todo} />)}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
