import { React, useState } from "react";
import { TiPlusOutline } from "react-icons/ti";

const AddCourse = ({ onSendCourse, lastId }) => {
  const clearData = {
    courseName: "",
    rolName: "",
    time: "",
    courseDate: "",
    level: "",
  };

  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  const formDataPublish = () => {
    const courseInfo = {
      id: lastId + 1,
      courseName: formData.courseName,
      rolName: formData.rolName,
      time: formData.time,
      courseDate: formData.courseDate,
      level: formData.level,
    };
    onSendCourse(courseInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  };

  return (
    <div>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
      >
        <div>
          <TiPlusOutline className="inline-block align-text-bottom" /> Add
          Course
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Course Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="courseName"
                id="courseName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => {
                  setFormData({ ...formData, courseName: event.target.value });
                }}
                value={formData.courseName}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="rolName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Rol Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <select
                id="rolName"
                value={formData.rolName}
                onChange={(event) => {
                  setFormData({ ...formData, rolName: event.target.value });
                }}
              >
                <option value="Data Analyst">Data Analyst</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Data Architect">Data Architect</option>
              </select>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="courseDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Course Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="courseDate"
                id="courseDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => {
                  setFormData({ ...formData, courseDate: event.target.value });
                }}
                value={formData.courseDate}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Course Duration
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="time"
                id="time"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => {
                  setFormData({ ...formData, time: event.target.value });
                }}
                value={formData.time}
                placeholder="20h 10m"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Level
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <select
                id="level"
                value={formData.level}
                onChange={(event) => {
                  setFormData({ ...formData, level: event.target.value });
                }}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                onClick={formDataPublish}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
