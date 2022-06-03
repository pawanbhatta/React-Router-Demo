import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <Link style={{ margin: "20px" }} to=":1">
        User 1
      </Link>
      <Link style={{ margin: "20px" }} to=":2">
        User 2
      </Link>
      <Link style={{ margin: "20px" }} to=":3">
        User 3
      </Link>
      <Link style={{ margin: "20px" }} to="admin">
        Admin
      </Link>
      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <div>Showing active users</div>
      ) : (
        <div>Showing all users</div>
      )}
    </div>
  );
};

export default Users;
