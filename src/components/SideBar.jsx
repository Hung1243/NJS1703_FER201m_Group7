import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, dark, toggle } = useContext(ThemeContext);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/user-management",
      name: "User Management",
    },
    {
      path: "/course-management",
      name: "Course Management",
    },
  ];
  return (
    <div className="container-flush">
      <div
        style={{
          width: isOpen ? "200px" : "50px",
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={handleSidebarToggle} />
          </div>
        </div>
        <button onClick={toggle} className="toggle-button btn btn-danger w-100">
          Toggle Theme
        </button>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
