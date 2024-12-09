import { ITodo } from '@/shared/model/Todo'
import { Title } from '@/shared/ui/Title'

interface ITodoProps extends ITodo {
  statusBar?: React.ReactNode
  title: string
  text: string
  isAttach: boolean
}

export const TodoSkeleton: React.FC<ITodoProps> = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
      {/* <Text maxLetters={150}>{text}</Text> */}
      {/* {statusBar}

      <Button>test</Button>

      <button>Unresolve</button> */}
    </div>
  )
}
