import * as React from 'react';
function TextArea({value,placeholder,onChangeFunction}) {
    return ( <textarea
        className="min-h-[120px] w-full bg-gray-100 p-2 border rounded-md outline-none"
        value={value}
        placeholder={placeholder}
        onChange={onChangeFunction}
      ></textarea> );
}

export default TextArea;