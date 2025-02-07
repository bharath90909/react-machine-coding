import React, { useEffect, useState } from "react";

function CheckBoxTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [checkedTodos, setCheckedTodos] = useState([]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.code === "Enter") {
        handleAddTodo();
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => window.removeEventListener("keydown", handleEnter); // Cleanup
  }, [input]);

  const handleAddTodo = () => {
    if (input.trim() === "") return; // Prevent empty todo

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), todo: input }, // Unique ID
    ]);
    setInput("");
  };

  const handleCheckedTodos = (e, selectedTodoId) => {
    setCheckedTodos((prevTodos) =>
      e.target.checked
        ? [...prevTodos, selectedTodoId]
        : prevTodos.filter((id) => id !== selectedTodoId)
    );
  };

  const deleteTodos = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => !checkedTodos.includes(todo.id))
    );
    setCheckedTodos([]); // Clear checked items after deletion
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={deleteTodos}>Delete Tasks</button>

      <div>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckedTodos(e, todo.id)}
                />
                {todo.todo}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CheckBoxTodo;
