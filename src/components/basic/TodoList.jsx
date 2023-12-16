import { useMemo } from "react";
import { filterTodos } from "../../utils/filter.js";

const TodoList = ({ todos, theme, tab }) => {
  //  (no memo at all)
  const visibleTodos = filterTodos(todos, tab);

  // Try to use this one (using memo to memoized the function result)
  // const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  const themeLight = "bg-gray-200 p-4";
  const themeDark = "bg-gray-400 p-4";

  return (
    <div className={theme === "light" ? themeLight : themeDark}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <p>
        Total <code>todos</code> in this List:{" "}
        <code>{visibleTodos.length}</code>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li className="ml-5 list-disc" key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
