import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./styles.css";

//---------- RandomUser API ----------//
function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  //---------- Search Filter ----------//
  const filterList = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last} ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode} ${user.email} ${user.phone}`
        .toLowerCase()
        .includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <div className="random_user_list">
        <h1>Random User List</h1>

        {/* User List Search */}
        <div className="list_search">
          <input
            className="search_box"
            onInput={filterList}
            placeholder="Search..."
          />
        </div>
      </div>

      {/* User List Table */}

      <div className="table_container">
        <table className="user_table">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postcode</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone</th>
          </thead>
          <tbody>
            {users.map((userData) => (
              <tr key={userData.id}>
                <td contentEditable="true">{userData.name.first}</td>
                <td contentEditable="true">{userData.name.last}</td>
                <td contentEditable="true">
                  {userData.location.street.number}{" "}
                  {userData.location.street.name}
                </td>
                <td contentEditable="true">{userData.location.city}</td>
                <td contentEditable="true">{userData.location.state}</td>
                <td contentEditable="true">{userData.location.postcode}</td>
                <td contentEditable="true">{userData.location.country}</td>
                <td contentEditable="true">{userData.email}</td>
                <td contentEditable="true">{userData.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Cards */}
      <div className="cards_container">
        {users.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
