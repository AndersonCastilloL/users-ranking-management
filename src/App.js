import { React, useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Courses from "./Courses";
import Users from "./Users";

const App = () => {
  const [courseList, setCourseList] = useState([]);
  const fetchData = useCallback(() => {
    fetch("./courses.json")
      .then((response) => response.json())
      .then((data) => setCourseList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Courses courseList={courseList} setCourseList={setCourseList} />
          }
        />
        <Route path="/users" element={<Users courseList={courseList} />} />
        <Route
          path="/courses"
          element={
            <Courses courseList={courseList} setCourseList={setCourseList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
