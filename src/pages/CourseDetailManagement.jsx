import React from "react";
import { useParams } from "react-router-dom";
import { courses, chapters, lessons, Instructors } from "../shared/CourseData";

const CourseDetailManagement = () => {
  const { id } = useParams();
  const detailCourse = courses.find((course) => course.id === parseInt(id));

  if (!detailCourse) {
    return <div>Course not found</div>;
  }

  const courseChapters = chapters.filter(
    (chapter) => chapter.courseId === detailCourse.id
  );

  const chapterRows = courseChapters.map((chapter) => (
    <tr key={chapter.id}>
      <td>{chapter.name}</td>
      <td>{chapter.lessons}</td>
    </tr>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={detailCourse.imageLink} alt={detailCourse.name} />
        </div>
        <div className="col-md-8">
          <h3>{detailCourse.name}</h3>
          <p>{detailCourse.description}</p>
          <p>
            <strong>Instructor:</strong>
            {
              Instructors.find(
                (ins) => ins.instructorId === detailCourse.instructorId
              )?.instructorName
            }
          </p>
          <p>
            <strong>Chapters:</strong> {detailCourse.chapters}
          </p>
          <p>
            <strong>Price:</strong> ${detailCourse.price}
          </p>
          <p>
            <strong>Created Date:</strong> {detailCourse.createdDate}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4>Chapters</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Lessons</th>
            </tr>
          </thead>
          <tbody>{chapterRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseDetailManagement;
