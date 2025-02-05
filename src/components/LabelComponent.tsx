import * as React from 'react';
function LabelComponent({labelText}) {
    return ( 
        <div className="flex gap-x-2 items-center">
        {
          labelText?<div className="bg-darkBlue w-[10px] h-[10px] rounded-full"></div>:''
        }  
        <label className="text-lg font-semibold text-darkBlue">
          {labelText}
        </label>
      </div>
     );
}

export default LabelComponent;