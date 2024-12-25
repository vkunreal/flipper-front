import { useCallback, useState } from 'react'
import { DraftTodo } from '@/shared/model/Todo'
import { ChangeEvent, TextField } from '@/shared/ui/TextField'
import { Title } from '@/shared/ui/Title'
import { Button } from '@/shared/ui/Button'

import styles from './CreateTodoModal.module.scss'
import { SCREEN_BREAKPOINTS } from '@/shared/hooks/useResize'

interface CreateTodoModalProps {
  title: string
}

export const CreateTodoModal: React.FC<CreateTodoModalProps> = ({ title }) => {
  const [todoData, setTodoData] = useState<DraftTodo>({
    title: '',
    text: '',
    isAttach: false,
  })

  const changeField = useCallback((field: keyof DraftTodo) => {
    return ({ target: { value } }: ChangeEvent) => {
      setTodoData((prev) => ({ ...prev, [field]: value }))
    }
  }, [])

  return (
    <div className={styles.createTodo}>
      <Title size="lg" tag="h3">
        {title}
      </Title>

      <TextField
        placeholder="Название"
        value={todoData.title}
        onChange={changeField('title')}
      />

      <TextField
        isTextArea
        placeholder="Описание"
        value={todoData.text}
        rows={window.innerWidth > SCREEN_BREAKPOINTS.TABLET ? 8 : 16}
        onChange={changeField('text')}
      />

      <Button className={styles.submitBtn}>Создать</Button>
    </div>
  )
}
