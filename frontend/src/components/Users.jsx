import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div>
      <div className="font-bold mt-5 text-lg pl-7">Users</div>
      <div className="my-2 mx-8">
        <input
          onChange={(e) => {
            setFilters(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full border px-2 py-1 rounded border-slate-400"
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between mx-7">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-3">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}
