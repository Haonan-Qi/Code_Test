import React, { Fragment } from "react";
import classes from "./Toolbar.module.css";
/* import Logo from "../../Logo/Logo"; */
import NavigationItems from "../NavigationItems/NavigationItems";
/* import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"; */
/* import PropTypes from "prop-types"; */
import Logo from "../../UI/Logo/Logo";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import { InlineIcon } from "@iconify/react";
import searchOutlined from "@iconify/icons-ant-design/search-outlined";

const Toolbar = (props) => (
  <Fragment>
    <header className={classes.Toolbar}>
      <nav>
        <Logo />
        <NavigationItem>
          <InlineIcon icon={searchOutlined} color="#414042" /> Search
        </NavigationItem>
      </nav>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  </Fragment>
);

/* Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
}; */

export default Toolbar;
