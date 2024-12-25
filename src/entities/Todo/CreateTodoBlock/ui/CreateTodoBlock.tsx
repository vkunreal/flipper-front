import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/shared/ui/Button'
import { className } from '@/shared/lib/className'

import styles from './CreateTodoBlock.module.scss'

interface ChangeCreateTodoBlock {
  changeVisible: Dispatch<SetStateAction<boolean>>
}

export const CreateTodoBlock = ({ changeVisible }: ChangeCreateTodoBlock) => {
  return (
    <div className={className('wrapper', styles.blockWrapper)}>
      <Button onClick={() => changeVisible(true)}>Создать новую задачу</Button>
    </div>
  )
}
