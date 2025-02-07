import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";
function UserLogin() {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);
  useEffect(() => {
    if (userName) {
      navigate("/homepage");
    } else {
      navigate("/login");
    }
  }, [userName]);

  return (
    <>
      <h1>This is we app</h1>
      <Outlet />
    </>
  );
}

export default UserLogin;
