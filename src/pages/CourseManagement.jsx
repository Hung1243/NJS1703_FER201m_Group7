import React, { useState } from "react";
import { courses, categories } from "./../shared/CourseData";
import { Link } from "react-router-dom";

const CourseManagement = () => {
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

              <td>
                {categories.find((cat) => cat.id === course.categoryId)?.name}
              </td>

              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.instructorId}</td>
              <td>
                <Link to={`/course-detail-management/${course.id}`}>
                  <button className="btn btn-primary">View Detail</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseManagement;
