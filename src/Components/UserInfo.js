import React from "react";

const UserInfo = ({ user }) => {
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
    </li>
  );
};

export default UserInfo;
