import { memo } from "react";

const MemoizedList = memo(({ items }) => {
  console.log(
    "[ARTIFICIALLY SLOW] Rendering <List /> with " + items.length + " items"
  );
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <>
      <ul>
        {items.map((todo) => (
          <li className="ml-5 list-disc" key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
});

export default MemoizedList;
