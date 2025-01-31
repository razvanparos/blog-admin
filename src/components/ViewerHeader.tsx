import * as React from "react";
function ViewerHeader({headerTitles}) {
  return (
    <div className="p-4 border-b hidden lg:grid grid-cols-4 text-darkBlue font-semibold text-xl">
        {
            headerTitles.map(title=><p>{title}</p>)
        }
    </div>
  );
}

export default ViewerHeader;
