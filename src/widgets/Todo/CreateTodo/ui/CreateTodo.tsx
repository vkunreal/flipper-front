import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal/'
import { CreateTodoModal } from '@/entities/Todo/CreateTodoModal'
import { CreateTodoBlock } from '@/entities/Todo/CreateTodoBlock/ui/CreateTodoBlock'
import { SCREEN_BREAKPOINTS, useResize } from '@/shared/hooks/useResize'

export const CreateTodo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sizes = useResize()

  let maxWidth: string | number = 'unset'

  if (sizes.width < SCREEN_BREAKPOINTS.TABLET) {
    maxWidth = 'unset'
  } else {
    maxWidth = 700
  }

  return (
    <div>
      <CreateTodoBlock changeVisible={setIsOpen} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} width={maxWidth}>
        <CreateTodoModal title="Создание задачи" />
      </Modal>
    </div>
  )
}
