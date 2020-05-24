import React from "react";
import classes from "./FilterItem.module.css";

const FilterItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href="#">
      {props.children}
    </a>
  </li>
);

export default FilterItem;