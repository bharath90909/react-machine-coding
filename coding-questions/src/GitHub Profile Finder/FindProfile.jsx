import React, { useEffect, useState } from "react";

function FindProfile({ userName }) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function fetchUserData() {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error("Error in while searching data..");
      }
      const data = await res.json();
      setUserData([data]);
    } catch (err) {
      setIsError(true);
      console.error(err.message);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchUserData();
  }, [userName]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1 className="text-red-600">Error while fetching...</h1>}
      {userData &&
        userData.length > 0 &&
        userData.map((user) => {
          return (
            <>
              <div>
                <img src={user.avatar_url}></img>
              </div>
              <h1>{user.name}</h1>
              <h1>{user.followers}</h1>
            </>
          );
        })}
    </div>
  );
}

export default FindProfile;
