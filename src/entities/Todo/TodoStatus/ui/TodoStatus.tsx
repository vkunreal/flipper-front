import { className } from '@/shared/lib/className'
import { TodoStatuses } from '@/shared/model/TodoStatuses'

import styles from './TodoStatus.module.scss'

interface TodoStatus {
  status: keyof typeof TodoStatuses
}

export const TodoStatus: React.FC<TodoStatus> = ({ status }) => {
  return (
    <div
      className={className(
        styles['todo-status'],
        styles[`todo-status--${status}`]
      )}
    >
      {TodoStatuses[status]}
    </div>
  )
}
