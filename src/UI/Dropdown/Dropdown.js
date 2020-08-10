import React from "react";

import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  let optionsJSX = [];
  if (props.options) {
    optionsJSX = props.options.map((option, index) =>
      option ? <option key={index + 1}>{option}</option> : null
    );
  }

  const allOption = <option key={0}>All</option>;
  optionsJSX.unshift(allOption);

  return (
    <div>
      <label>Select Region</label>
      <select
        className={classes["select-css"]}
        style={{ marginLeft: "20px" }}
        onChange={(e) => props.onSelectRegionHandler(e.target.value)}
        value={props.selectedRegion || ""}
      >
        {optionsJSX}
      </select>
    </div>
  );
};

export default Dropdown;
