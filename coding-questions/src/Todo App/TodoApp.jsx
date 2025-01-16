import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleAddTodo(value, index) {
    const copyTodos = [...todos];
    if (isEdit) {
      copyTodos.splice(index, 1, value);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      copyTodos.push(value);
    }
    setTodos(copyTodos);
    setInput("");
  }
  function handleEditTodo(value, index) {
    console.log("edit function called");
    setIsEdit(true);
    setEditIndex(index);
    setInput(value);
  }

  function handleDeleteTodo(index) {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  }

  return (
    <div>
      <h1>TodoApp</h1>
      <Input handleAddTask={handleAddTodo} value={input} index={editIndex} />
      {todos &&
        todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <div>
              <p>{todo}</p>
              <Button handleEditTask={() => handleEditTodo(todo, index)}>
                Edit
              </Button>
              <Button handleDeleteTask={() => handleDeleteTodo(index)}>
                Delete
              </Button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoApp;
