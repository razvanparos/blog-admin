import React,{useState, useEffect} from "react";
import SearchBarComponent from "../components/SearchBarComponent.tsx";
import { getAllUsers } from "../services/usersService.ts";
import UserViewer from "../components/UsersViewer.tsx";

const Users = () => {
  const [usersSearch, setUsersSearch] = useState("");
  const [users, setUsers] = useState();
  const [originalUsers, setOriginalUsers] = useState();
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
      setLoading(true);
      let users = await getAllUsers();
      setUsers(users);
      setOriginalUsers(users);
      setLoading(false);
    };
  
    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (usersSearch.length > 2) {
          const handler = setTimeout(() => {
            const filteredUsers = originalUsers?.filter((user) => {
              const normalizedName = user?.name.toLowerCase();
              const normalizedSearchWords = usersSearch.toLowerCase().split(/\s+/);
              return normalizedSearchWords.every((word) =>
                normalizedName.includes(word)
              );
            });
            setUsers(filteredUsers);
          }, 300);
          return () => {
            clearTimeout(handler);
          };
        } else {
            setUsers(originalUsers);
        }
      }, [usersSearch]);

  return (
    <div className="w-full p-2 lg:p-4 lg:flex lg:flex-col overflow-y-scroll h-[calc(100vh-75px)] md:h-full gap-y-4 lg:h-[100vh]">
      <SearchBarComponent search={usersSearch} searchFunction={setUsersSearch} />
      <UserViewer users={users} loading={loading}/>
    </div>
  );
};

export default Users;
