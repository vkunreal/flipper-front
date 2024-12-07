import { $loading, $todoList, fetchTodos } from "@/app/store/TodoStore";
import { TodoSkeleton } from "@/entities/TodoSkeleton";
import { Loader } from "@/shared/ui/Loader";
import { useUnit } from "effector-react";
import { useEffect } from "react";

export const TodoList = () => {
  const todos = useUnit($todoList);
  const loading = useUnit($loading);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {!loading ? (
        !!todos.length &&
        todos.map((todo) => <TodoSkeleton key={todo.id} {...todo} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
