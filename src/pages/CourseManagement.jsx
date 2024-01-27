import React, { useState } from "react";

import { courses, categories } from "./../shared/CourseData";

import CourseDetailModal from "../components/CourseDetailModal";

const CourseManagement = ({ onViewDetail }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewDetail = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <h2>Course Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Danh mục khóa học</th>
            <th>Mã khóa học</th>
            <th>Tên khóa học</th>
            <th>Mã giáo viên</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{getCategoryName(course.categoryId)}</td>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.instructorId}</td>
              <td>
                <button onClick={() => handleViewDetail(course)}>
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CourseDetailModal course={selectedCourse} onClose={handleCloseModal} />
    </div>
  );
};
export const getCategoryName = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "Unknown";
};

export default CourseManagement;
