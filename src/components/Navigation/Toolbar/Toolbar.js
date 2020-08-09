import React from "react";

import classes from "./Toolbar.module.css";
import { NavLink } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div className={classes.topnav}>
      <NavLink className="active" to="/">
        Country Finder
      </NavLink>
    </div>
  );
};

export default Toolbar;
