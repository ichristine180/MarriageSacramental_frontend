import React from "react";

export default function DropDown({
  label,
  options,
  handleChange,
  name,
  defaultValue,
}) {
  return (
    <>
      <label>{label}</label>
      <select
        className="form-control"
        onChange={handleChange}
        defaultValue={defaultValue}
        name={name}
      >
        <option value="">{label}</option>
        {options.map((option, i) => (
          <option value={option.name} key={i}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
