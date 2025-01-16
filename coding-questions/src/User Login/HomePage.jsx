import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

function HomePage() {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome Name {userName}</h1>
      <button
        onClick={() => {
          setUserName("");
        }}
      >
        log out
      </button>
    </div>
  );
}

export default HomePage;
