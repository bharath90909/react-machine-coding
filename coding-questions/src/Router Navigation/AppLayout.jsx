import React, { useEffect, useState } from "react";
import "./routernavigation.css";
import { Link, Outlet } from "react-router-dom";
function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleSideBar = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", toggleSideBar);
  }, []);
  return (
    <div className="router-container">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen ? "open" : "close"}
      </button>
      <Outlet />
      {isOpen && (
        <div className="nav-modal">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default AppLayout;
