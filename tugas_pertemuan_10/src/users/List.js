import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response.data);
        const { data } = response.data; // response.data.data
        setUsers(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <h2>Halaman List User</h2>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <NavLink to={`/users/show/${user.id}`}>
                  {user.first_name} {user.last_name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default List;
