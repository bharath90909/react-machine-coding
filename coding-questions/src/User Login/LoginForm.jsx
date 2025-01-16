import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

function LoginForm() {
  const inputRef = useRef();
  const { setUserName } = useContext(UserContext);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{
          backgroundColor: "red",
          border: "1px solid red",
        }}
      />
      <button
        onClick={() => {
          setUserName(inputRef.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
