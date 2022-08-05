import { React, useState, useEffect, useCallback } from "react";

import AddUser from "./Components/AddUser";
import UserInfo from "./Components/UserInfo";
import SearchUsers from "./Components/SearchUsers";
import NavBar from "./NavBar";
import {
  getCoursesPassed,
  getAvgCoursesCompleted,
  getLastDateCourse,
  getCountTries,
} from "./utils.js";

const Users = ({ courseList }) => {
  const [userList, setUserList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("ranking");
  const [orderBy, setOrderBy] = useState("asc");

  const updateUsers = (data) => {
    const users = data.map((user) => {
      const courses = user.coursesId.map((id) => {
        const courseFilter = courseList.filter((course) => course.id === id);
        return courseFilter;
      });
      user.courses = [...courses];
      user.coursesPassed = getCoursesPassed(courses);
      user.averageCourseCompleted = getAvgCoursesCompleted(courses);
      user.lastDateCourse = getLastDateCourse(courses);
      user.countTries = getCountTries(courses);
      const ldate = new Date(user.lastDateCourse).getTime();
      user.ranking =
        (user.coursesPassed * user.averageCourseCompleted * ldate) /
        user.countTries;
      return user;
    });
    setUserList(users);
  };

  const fetchData = useCallback(() => {
    fetch("./users.json")
      .then((response) => response.json())
      .then((data) => updateUsers(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filterUsers = userList
    .filter((item) => {
      return item.userName.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => {
      const order = orderBy === "desc" ? 1 : -1;
      return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
    });

  return (
    <div className="Users container mx-auto mt-3 font-thin">
      <NavBar />

      <AddUser
        onSendUser={(myUser) => setUserList([...userList, myUser])}
        lastId={userList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <SearchUsers
        onQueryChange={(myQuery) => setQuery(myQuery)}
        query={query}
        orderBy={orderBy}
        onOrderByChange={(orderBy) => setOrderBy(orderBy)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />
      <ul className="divide-y divide-gray-200">
        {filterUsers.map((user) => (
          <UserInfo key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
