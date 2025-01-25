import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ text, redirectTo}) => {
  return (
    <Link
      className={`border p-2 flex justify-center rounded-md`}
      to={`/${redirectTo}`}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
