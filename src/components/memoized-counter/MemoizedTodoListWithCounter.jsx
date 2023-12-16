import { useCallback, useMemo, useState } from "react";
import { memoizedComponentFilterTodos } from "../../utils/filter.js";
import MemoizedListWithCounter from "./MemoizedListWithCounter";

const MemoizedTodoListWithCounter = ({ todos, theme, tab }) => {
  // Using memo to memoized the function result
  const visibleTodos = useMemo(
    () => memoizedComponentFilterTodos(todos, tab),
    [todos, tab]
  );

  const [counter, setCounter] = useState(1000);

  const themeLight = "bg-sky-200 p-4";
  const themeDark = "bg-sky-500 text-white/90 p-4";

  const increment = () => {
    setCounter(counter + 1);
  };

  const buttonConsole = () => {
    console.log("Hai aku kena tekan nih !");
  };

  // Compare these one and the one above
  // const buttonConsole = useCallback(() => {
  //   console.log('Hai aku kena tekan nih !');
  // }, []);

  return (
    <div
      className={
        (theme === "light" ? themeLight : themeDark) +
        " transitions-color duration-300"
      }
    >
      <section>
        <p>Current Counter is: {counter}</p>
        <button
          className="py-2 px-4 bg-gray-400 text-white hover:bg-gray-700 hover:text-white/90 rounded transitions-color duration-300"
          onClick={increment}
        >
          Increment
        </button>
      </section>
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
      <MemoizedListWithCounter
        items={visibleTodos}
        btnOnClick={buttonConsole}
      />
    </div>
  );
};

export default MemoizedTodoListWithCounter;
