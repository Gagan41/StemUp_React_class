import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }

    fetchData();
  }, []); //fetch once

  return (
    <div>
      <h2>Users list</h2>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {users.map((user) => (
            <div>
              <li key={user.id}>{user.title}</li>
              <img src={user.image} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
