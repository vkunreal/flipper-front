import { Title } from "@/shared/ui/Title";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { ITodo } from "@/shared/model/Todo";

interface ITodoProps {
  statusBar?: React.ReactNode;
  title: string;
  text: string;
  isAttach: boolean;
}

export const TodoSkeleton: React.FC<ITodoProps> = ({
  statusBar,
  title,
  text,
  isAttach,
}) => {
  return (
    <div>
      <Title tag="h2">{title}</Title>

      <Text maxLetters={150}>{text}</Text>

      {statusBar}

      <Button>test</Button>

      <button>Unresolve</button>
    </div>
  );
};
