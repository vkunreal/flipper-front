import { useCallback, useState } from 'react'
import { DraftTodo } from '@/shared/model/Todo'
import { ChangeEvent, TextField } from '@/shared/ui/TextField'

import styles from './CreateTodoBlock.module.scss'

export const CreateTodoBlock: React.FC = () => {
  const [todoData, setTodoData] = useState<DraftTodo>({
    title: '',
    text: '',
    isAttach: false,
  })

  const changeField = useCallback((field: keyof DraftTodo) => {
    return ({ target: { value } }: ChangeEvent) => {
      setTodoData((prev) => ({ ...prev, [field]: value.trim() }))
    }
  }, [])

  return (
    <div className={styles.createTodo}>
      <TextField
        placeholder="Название Todo"
        value={todoData.title}
        onChange={changeField('title')}
      />

      <TextField
        isTextArea
        placeholder="Описание Todo"
        value={todoData.text}
        onChange={changeField('text')}
      />
    </div>
  )
}
