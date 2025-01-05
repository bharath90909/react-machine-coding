import React from "react";
import { Outlet } from "react-router-dom";
import NestedMenu from "./Nested Menu/NestedMenu";
function AppLayout() {
  return (
    <div className="flex h-screen">
      <NestedMenu />
      <Outlet />
    </div>
  );
}

export default AppLayout;
