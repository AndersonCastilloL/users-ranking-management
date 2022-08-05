import React from "react";

const CourseInfoUser = ({ course }) => {
  const getTopicsFinished = () => {
    const count = course.topics.filter(
      (t) => (t.score >= 0) & (t.times > 0)
    ).length;
    return count;
  };

  return (
    <li>
      <div className="flex-grow">
        <div className="flex items-left">
          <span className="flex-none font-medium text-1xl text-blue-500">
            {course.courseName}
          </span>
        </div>
        <div className="flex items-center">
          <span className="flex-none font-medium text-1xl text-gray-500">
            <b className="leading-tight">
              Topics Finished: {getTopicsFinished()}/{course.topics.length}
            </b>
          </span>
        </div>

        <table className="list-disc text-gray-400 pl-4 w-2/5">
          {course.topics.map((topic) => (
            <tr>
              <td>
                <span className="flex-none font text-1xl text-gray-400">
                  <b className="leading-tight">{topic.topic}</b>
                </span>
              </td>
              <td>
                <span className="flex-none font text-1xl text-gray-400">
                  <b className="leading-tight">Times: {topic.times}</b>
                </span>
              </td>
              <td>
                <span className="flex-none font text-1xl text-gray-400">
                  <b className="leading-tight">Score: {topic.score}</b>
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </li>
  );
};

export default CourseInfoUser;
