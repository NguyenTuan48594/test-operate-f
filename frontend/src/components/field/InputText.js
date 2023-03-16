import React from "react";

const InputText = (props) => {
  return (
    <div className="mt-5">
      <label htmlFor={props.id} className="cursor-pointer">
        {props.title}:
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="w-full px-5 py-2 mt-2 bg-slate-800 text-white outline-none"
        defaultValue={props.value}
        onChange={props.handle}
      />
    </div>
  );
};

export default InputText;
