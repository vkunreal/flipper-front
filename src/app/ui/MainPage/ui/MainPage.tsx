import { CreateTodo } from '@/widgets/CreateTodo/ui/CreateTodo'
import { TodoList } from '@/widgets/TodoList'

export const MainPage: React.FC = () => {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  )
}
