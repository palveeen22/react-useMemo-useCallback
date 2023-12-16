import { useMemo } from "react";
import { memoizedComponentFilterTodos } from "../../utils/filter.js";
import MemoizedList from "./MemoizedList.jsx";

const MemoizedTodoList = ({ todos, theme, tab }) => {
  // Using memo to memoized the function result
  const visibleTodos = useMemo(
    () => memoizedComponentFilterTodos(todos, tab),
    [todos, tab]
  );

  const themeLight = "bg-sky-200 p-4";
  const themeDark = "bg-sky-500 text-white/90 p-4";

  return (
    <div
      className={
        (theme === "light" ? themeLight : themeDark) +
        " transitions-color duration-300"
      }
    >
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <p>
        Total <code>todos</code> in this List:{" "}
        <code>{visibleTodos.length}</code>
      </p>
      {/* using Memoized Component */}
      <MemoizedList items={visibleTodos} />
    </div>
  );
};

export default MemoizedTodoList;
