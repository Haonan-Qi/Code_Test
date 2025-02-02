import React, { Fragment, Component } from "react";
/* import { connect } from "react-redux"; */

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
/* import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"; */

class Layout extends Component {
  /*   state = {
    showSideDrawer: false,
  }; */

  /*   sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }; */

  /*   sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }; */

  render() {
    return (
      <Fragment>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

/* const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
}; */

/* export default connect(mapStateToProps)(Layout); */
export default Layout;
