import { React, useState, useEffect, useCallback } from "react";

import AddUser from "./Components/AddUser";
import UserInfo from "./Components/UserInfo";
import SearchUsers from "./Components/SearchUsers";
import NavBar from "./NavBar";

function Users() {
  const [userList, setUserList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("userName");
  const [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(() => {
    fetch("./users.json")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filterUsers = userList
    .filter((item) => {
      return item.userName.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
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
}

export default Users;
