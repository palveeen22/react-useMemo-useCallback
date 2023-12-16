import { memo } from "react";

const MemoizedListWithCounter = memo(({ items, btnOnClick }) => {
  console.log(
    "[ARTIFICIALLY SLOW] Rendering <List /> with " + items.length + " items"
  );

  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <>
      <button
        className="py-2 px-4 bg-gray-400 text-white hover:bg-gray-700 hover:text-white/90 rounded transitions-color duration-300"
        onClick={btnOnClick}
      >
        Click Me
      </button>
      <ul>
        {items.map((todo) => (
          <li className="ml-5 list-disc" key={todo.id}>
            <span className="mr-4">
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
});

export default MemoizedListWithCounter;
