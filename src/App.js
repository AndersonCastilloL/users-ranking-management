import { React, useState, useEffect, useCallback } from "react";

import AddCourse from "./Components/AddCourse";
import CourseInfo from "./Components/CourseInfo";
import SearchCourses from "./Components/SearchCourses";
import NavBar from "./NavBar";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("courseName");
  const [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(() => {
    fetch("./courses.json")
      .then((response) => response.json())
      .then((data) => setCourseList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filterCourses = courseList
    .filter((item) => {
      return item.courseName.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <NavBar />

      <AddCourse
        onSendCourse={(myCourse) => setCourseList([...courseList, myCourse])}
        lastId={courseList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <SearchCourses
        onQueryChange={(myQuery) => setQuery(myQuery)}
        query={query}
        orderBy={orderBy}
        onOrderByChange={(orderBy) => setOrderBy(orderBy)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />
      <ul className="divide-y divide-gray-200">
        {filterCourses.map((course) => (
          <CourseInfo key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default App;
