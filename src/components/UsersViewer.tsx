import * as React from "react";
import Spinner from "./Spinner.tsx";
import UserCard from "./UserCard.tsx";
import ViewerHeader from "./ViewerHeader.tsx";

function UserViewer({ users, loading }) {
  return (
    <section className="lg:border rounded-xl w-full">
      <h2 className="text-2xl p-4">Users</h2>
      <ViewerHeader headerTitles={['Name','Email','Joined','Role']}/>
      {users?.length > 0 ? (
        <div>
          {loading ? (
            <div className="p-4 flex items-center justify-center">
              <Spinner type="black-loader" />
            </div>
          ) : (
            users?.map((user) => {
              return <UserCard key={user.id} user={user}/>
            })
          )}
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="p-4 flex items-center justify-center">
              <Spinner type="black-loader" />
            </div>
          ) : (
            <p className="w-full text-center lg:text-start text-xl lg:text-2xl p-4">
              No results
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default UserViewer;
