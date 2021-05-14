import React from "react";

const Dropdown = (props) => {
  console.log(props.name);
  return <option value={props.name}>{props.name}</option>;
};

export default Dropdown;
