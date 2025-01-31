import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBarComponent = ({ search, searchFunction }) => {
  return (
    <div className="border w-full lg:w-[35%] rounded-lg flex items-center px-4">
      <IoSearchOutline className="text-xl" />
      <input
        value={search}
        onChange={(e) => {
          searchFunction(e.target.value);
        }}
        type="text"
        className="outline-none px-2 py-2 rounded-lg w-full"
        placeholder={"Search..."}
      />
    </div>
  );
};

export default SearchBarComponent;
