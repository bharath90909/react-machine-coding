import React from "react";

function Button(props) {
  return (
    <button
      onClick={
        props?.children === "Edit"
          ? props?.handleEditTask
          : props?.handleDeleteTask
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
