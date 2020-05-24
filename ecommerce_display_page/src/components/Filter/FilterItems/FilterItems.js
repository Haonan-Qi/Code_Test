import React from "react";
import classes from "./FilterItems.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { connect } from "react-redux";

const FilterItems = (props) => {
  const fiterCri = props.filterBy.map((cri, index) => {
    return <FilterItem>{cri}</FilterItem>;
  });
  return (
    <ul className={classes.FilterItems}>
      <li>
        <a>FILTER BY</a>
      </li>
      {fiterCri}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    filterBy: state.wine.filterBy,
  };
};

export default connect(mapStateToProps)(FilterItems);
