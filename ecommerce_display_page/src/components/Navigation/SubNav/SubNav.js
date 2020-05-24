import React, { Fragment } from "react";
import classes from "./SubNav.module.css";
import { connect } from "react-redux";
// npm install --save-dev @iconify/react @iconify/icons-bx

import { InlineIcon } from "@iconify/react";
import arrowRightAlt2 from "@iconify/icons-dashicons/arrow-right-alt2";

const SubNav = (props) => {
  const NavItems = props.subNavItems.map((address, index) => {
    return (
      <Fragment>
        <InlineIcon icon={arrowRightAlt2} height="1.3em" color='#d5d1d0' />
        <li key={index} className={classes.SubNavAddressItem}><a href="#">{" " + address + " "}</a></li>
      </Fragment>
    );
  });

  return (
    <ul className={classes.SubNavAddress}>
      <li><a href='#'>Home</a></li>
      {NavItems}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    subNavItems: state.wine.subNavItems,
  };
};

export default connect(mapStateToProps)(SubNav);
