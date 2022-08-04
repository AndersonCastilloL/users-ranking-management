import { React, useState } from "react";
import { TiPlusOutline } from "react-icons/ti";

const AddUser = ({ onSendUser, lastId }) => {
  const clearData = {
    userName: "",
    rolName: "",
    userDate: "",
  };

  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  const formDataPublish = () => {
    const userInfo = {
      id: lastId + 1,
      userName: formData.userName,
      rolName: formData.rolName,
      userDate: formData.userDate,
    };
    onSendUser(userInfo);
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
          <TiPlusOutline className="inline-block align-text-bottom" /> Add User
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              User Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="userName"
                id="userName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => {
                  setFormData({ ...formData, userName: event.target.value });
                }}
                value={formData.userName}
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
              htmlFor="userDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              User Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="userDate"
                id="userDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) => {
                  setFormData({ ...formData, userDate: event.target.value });
                }}
                value={formData.userDate}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="rolName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Courses
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <select
                id="courses"
                value={formData.courses}
                onChange={(event) => {
                  setFormData({ ...formData, courses: event.target.value });
                }}
              >
                <option value="Figma UI UX Design Essentials">
                  Figma UI UX Design Essentials
                </option>
                <option value="GraphQL with React">GraphQL with React</option>
                <option value="Spring Boot and Angular">
                  Spring Boot and Angular
                </option>
                <option value="Ultimate AWS Certified Solutions Architect Associate">
                  Ultimate AWS Certified Solutions Architect Associate
                </option>
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

export default AddUser;
