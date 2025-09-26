import React, { useOptimistic, useState } from "react";

function UseOptimisticHook() {
  const [todos, setTodos] = useState<
    { id: string; title: string; pending?: boolean }[]
  >([{ id: "1", title: "Walk the dog at 5" }]);
  const [input, setInput] = useState("");
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  const addTodo = async () => {
    if (!input) return;
    // wait for server (simulated with timeout)
    const assumedValue = {
      id: crypto.randomUUID(),
      title: input + "O",
    };
    setOptimisticTodos((prev) => [...prev, assumedValue]);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const valueFromServer = { id: crypto.randomUUID(), title: input };
    setTodos((prev) => [...prev, valueFromServer]);
    setInput("");
  };

  return (
    <div>
      <form action={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-2"
        />
        <button className="ml-2 border px-2" type="submit">
          Add
        </button>
      </form>
      <ul>
        {optimisticTodos.map((t, i) => (
          <li key={i}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticHook;
