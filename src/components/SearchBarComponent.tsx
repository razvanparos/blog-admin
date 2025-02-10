import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import FormRow from "./FormRow.tsx";
import Input from "./Input.tsx";

const SearchBarComponent = ({ search, searchFunction }) => {
  return (
    <div className="border w-full lg:w-[35%] rounded-lg flex items-center px-4">
      <IoSearchOutline className="text-xl" />
      <FormRow>
        <Input
          value={search}
          onChangeFunction={(e) => {
            searchFunction(e.target.value);
          }}
          type="text"
          placeholder={"Search..."}
          searchBar={true}
        />
      </FormRow>
    </div>
  );
};

export default SearchBarComponent;
