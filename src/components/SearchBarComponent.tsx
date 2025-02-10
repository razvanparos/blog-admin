import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import FormRow from "./FormRow.tsx";

const SearchBarComponent = ({ search, searchFunction }) => {
  return (
    <div className="border w-full lg:w-[35%] rounded-lg flex items-center px-4">
      <IoSearchOutline className="text-xl" />
      <FormRow>
        <input
        value={search}
        onChange={(e) => {
          searchFunction(e.target.value);
        }}
        type="text"
        className="outline-none px-2 py-2 rounded-lg w-full border-none"
        placeholder={"Search..."}
      />
      </FormRow>
      
    </div>
  );
};

export default SearchBarComponent;
