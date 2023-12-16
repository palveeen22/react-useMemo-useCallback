import { useState } from "react";
import { createTodos } from "../utils/filter.js";
import TodoList from "../components/basic/TodoList";
import MemoizedTodoList from "../components/memoized/MemoizedTodoList";
import MemoizedTodoListWithCounter from "../components/memoized-counter/MemoizedTodoListWithCounter";

const todos = createTodos();

function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <section className="p-4">
        <section className="flex gap-2">
          <button
            className="py-2 px-4 rounded bg-sky-400 text-white hover:bg-sky-600 hover:text-white/90 transitions-color duration-300"
            onClick={() => setTab("all")}
          >
            All
          </button>
          <button
            className="py-2 px-4 rounded bg-sky-400 text-white hover:bg-sky-600 hover:text-white/90 transitions-color duration-300"
            onClick={() => setTab("active")}
          >
            Active
          </button>
          <button
            className="py-2 px-4 rounded bg-sky-400 text-white hover:bg-sky-600 hover:text-white/90 transitions-color duration-300"
            onClick={() => setTab("completed")}
          >
            Completed
          </button>
        </section>
        <section>
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
              className="mr-2"
            />
            Dark mode
          </label>
        </section>

        <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />

        {/* Try to use this one - (useMemo and memo Component) */}
        {/* <MemoizedTodoList
          todos={todos}
          tab={tab}
          theme={isDark ? 'dark' : 'light'}
        /> */}

        {/* Try to use this one - (useMemo, memo Component, and useCallback) */}
        {/* <MemoizedTodoListWithCounter
          todos={todos}
          tab={tab}
          theme={isDark ? 'dark' : 'light'}
        /> */}
      </section>
    </>
  );
}

export default App;
