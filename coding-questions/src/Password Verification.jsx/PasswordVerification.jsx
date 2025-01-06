import React, { useMemo, useReducer, useState } from "react";
const initialState = {
  input: "",
  lowerCase: false,
  upperCase: false,
  digit: false,
};
function reducer(state, action) {
  const type = action?.type;
  switch (type) {
    case "lc":
      return {
        ...state,
        lowerCase: action.payload,
      };
      break;
    case "uc":
      return {
        ...state,
        upperCase: action.payload,
      };
      break;
    case "digit":
      return {
        ...state,
        digit: action.payload,
      };
      break;
    default:
      return {
        ...state,
        input: action.payload,
      };
  }
}

function PasswordVerification() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { input, lowerCase, upperCase, digit } = state;
  const checkConstraints = useMemo(
    () => lowerCase && upperCase && digit && input.length >= 8,
    [state]
  );
  const requiredComponents = Object.keys(state).filter(
    (key) => !state[key] && key != "input"
  );
  function handleInput(e) {
    const inputValue = e.target.value;
    //not allwoing user to enter character
    const char = inputValue.charAt(inputValue.length - 1);
    if (!/[a-zA-Z0-9]/.test(char) && inputValue.length > 0) {
      //this will not allow to accept any special characters in input
      return;
    }

    const hasLowerCase = /[a-z]/.test(inputValue);
    const hasUpperCase = /[A-Z]/.test(inputValue);
    const hasDigit = /[0-9]/.test(inputValue);

    dispatch({ type: "lc", payload: hasLowerCase });
    dispatch({ type: "uc", payload: hasUpperCase });
    dispatch({ type: "digit", payload: hasDigit });

    dispatch({ type: "input", payload: inputValue });
  }

  function handleSubmit() {
    return alert("form submitted");
  }
  return (
    <div>
      <input
        className="bg-pink-400 text-black w-[100px] block"
        type="text"
        value={input}
        onChange={(e) => handleInput(e)}
      ></input>
      <p className={`${lowerCase ? "text-green-500" : "text-red-600"}`}>
        At least one Lower Case{" "}
      </p>
      <p className={`${upperCase ? "text-green-500" : "text-red-600"}`}>
        At least one Upper Case{" "}
      </p>
      <p className={`${digit ? "text-green-500" : "text-red-600"}`}>
        At least one Digit{" "}
      </p>
      <p className={`${input.length >= 8 ? "text-green-500" : "text-red-600"}`}>
        Length minimum 8
      </p>
      <button
        disabled={!checkConstraints ? true : false}
        onClick={handleSubmit}
        className="disabled:bg-[rgba(0,0,0,0.1)] border p-4"
      >
        Submit
      </button>
      <p>{requiredComponents.join(" ")}</p>
    </div>
  );
}

export default PasswordVerification;
