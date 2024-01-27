// adminPage.jsx

import React, { useState } from "react";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import CourseDetailModal from "../components/CourseDetailModal";

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("users");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleViewDetail = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          className="col-3 sidebar text-center justify-content-center bg-dark vh-100 text-decoration-none text-light"
          style={{ cursor: "pointer" }}
        >
          <ul className="nav nav-tabs flex-column">
            <li
              className={`nav-item ${selectedTab === "users" ? "active" : ""}`}
              onClick={() => handleTabClick("users")}
            >
              Quản lý người dùng
            </li>
            <li
              className={`nav-item ${
                selectedTab === "courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("courses")}
            >
              Quản lý khóa học
            </li>
          </ul>
        </nav>
        <div className="col-9 content">
          {selectedTab === "users" && <UserManagement />}
          {selectedTab === "courses" && (
            <CourseManagement onViewDetail={handleViewDetail} />
          )}
        </div>
      </div>
      <CourseDetailModal course={selectedCourse} onClose={handleCloseModal} />
    </div>
  );
};

export default AdminPage;
