import { CreateTodo } from '@/widgets/Todo/CreateTodo/'
import { TodoList } from '@/widgets/Todo/TodoList'

export const MainPage: React.FC = () => {
  return (
    <div>
      <TodoList createTodoSlot={<CreateTodo />} />
    </div>
  )
}
