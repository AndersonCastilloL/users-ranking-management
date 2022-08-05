import { React, useState } from "react";
import CourseInfoUser from "./CourseInfoUser";

const UserInfo = ({ user }) => {
  console.log(user);
  const [toggleCourse, setToggleCourse] = useState(false);
  return (
    <li>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {user.userName}
          </span>
          <span className="flex-grow text-right">{user.userDate}</span>
        </div>
        <b className="leading-tight">Rol:</b> {user.rolName}
      </div>
      <div className="flex-grow p-1">
        <button
          type="button"
          onClick={() => setToggleCourse(!toggleCourse)}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-0.25 px-1 rounded text-1xl"
        >
          Courses
        </button>
      </div>
      {!toggleCourse ? null : (
        <ul className="list-disc text-blue-500 pl-4">
          {user.courses.map((course) => (
            <CourseInfoUser key={course[0].id} course={course[0]} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default UserInfo;
