import React, { useReducer } from "react";

const initialState = {
  input: "",
  lowerCase: false,
  upperCase: false,
  digit: false,
  lengthValid: false, // Optional: to handle length validation through the reducer
};

function reducer(state, action) {
  switch (action.type) {
    case "lc":
      return {
        ...state,
        lowerCase: !state.lowerCase,
      };
    case "uc":
      return {
        ...state,
        upperCase: !state.upperCase,
      };
    case "digit":
      return {
        ...state,
        digit: !state.digit,
      };
    case "input":
      return {
        ...state,
        input: action.payload,
        lengthValid: action.payload.length >= 8, // Optional: handle length validation in the reducer
      };
    default:
      return state;
  }
}

function PasswordVerification() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { input, lowerCase, upperCase, digit, lengthValid } = state;

  function handleInput(e) {
    const char = e.target.value.slice(-1);
    dispatch({ type: "input", payload: e.target.value });

    // Lower case check
    if (/[a-z]/.test(char) && !lowerCase) {
      dispatch({ type: "lc" });
    }

    // Upper case check
    if (/[A-Z]/.test(char) && !upperCase) {
      dispatch({ type: "uc" });
    }

    // Digit check
    if (/[0-9]/.test(char) && !digit) {
      dispatch({ type: "digit" });
    }
  }

  return (
    <div>
      <input
        className="bg-pink-400 text-black w-[100px] block"
        type="text"
        value={input}
        onChange={handleInput}
      />
      <p className={`${lowerCase ? "text-green-500" : "text-red-600"}`}>
        At least one Lower Case
      </p>
      <p className={`${upperCase ? "text-green-500" : "text-red-600"}`}>
        At least one Upper Case
      </p>
      <p className={`${digit ? "text-green-500" : "text-red-600"}`}>
        At least one Digit
      </p>
      <p className={`${lengthValid ? "text-green-500" : "text-red-600"}`}>
        Length minimum 8
      </p>
    </div>
  );
}

export default PasswordVerification;
