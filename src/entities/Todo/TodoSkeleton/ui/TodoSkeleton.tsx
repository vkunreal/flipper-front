import { Todo } from '@/shared/model/Todo'
import { Title } from '@/shared/ui/Title'
import { Text } from '@/shared/ui/Text'

import styles from './TodoSkeleton.module.scss'

interface TodoProps extends Todo {
  statusBar?: React.ReactNode
  title: string
  text: string
  isAttach: boolean
}

export const TodoSkeleton: React.FC<TodoProps> = ({ title, text }) => {
  return (
    <div className={styles.todoItem}>
      <Title className={styles.title}>{title}</Title>

      <Text maxLetters={150}>{text}</Text>
      {/* {statusBar}

      <Button>test</Button>

      <button>Unresolve</button> */}
    </div>
  )
}
