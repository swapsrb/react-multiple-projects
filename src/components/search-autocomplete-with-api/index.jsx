import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchparam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchparam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setSearchparam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  async function fetchUserList() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((user) => user.firstName));
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchUserList();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data ... Please wait</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="search users here ..."
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}
