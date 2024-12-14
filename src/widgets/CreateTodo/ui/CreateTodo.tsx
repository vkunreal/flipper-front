import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal/ui/Modal'
import { CreateTodoBlock } from '@/entities/CreateTodoBlock'

export const CreateTodo = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateTodoBlock />
      </Modal>
    </div>
  )
}
