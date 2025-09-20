import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { completed, selectTodos } from "../store/todo"

export default function TodoList() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleCompleted = (id: number) => {
    dispatch(completed({id}));
  }
  return (
    <div>
      <ol>
        {todos.map(todo => 
          <li key={todo.id}>
            {todo.text} completed: {`${todo.completed}`}{' '} 
            <button onClick={() => handleCompleted(todo.id)}>Toggle</button>
          </li>
        )}
      </ol>
    </div>
  )
}