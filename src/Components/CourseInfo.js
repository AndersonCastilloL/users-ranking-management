import React from "react";

const CourseInfo = ({ course }) => {
  return (
    <li>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {course.courseName}
          </span>
          <span className="flex-grow text-right">{course.courseDate}</span>
        </div>
        <div>
          <b className="leading-tight"></b> {course.time}
        </div>
        <div>
          <b className="leading-tight">Rol:</b> {course.rolName}
        </div>
        <div>
          <b className="leading-tight">Level: </b> {course.level}
        </div>
      </div>
    </li>
  );
};

export default CourseInfo;
