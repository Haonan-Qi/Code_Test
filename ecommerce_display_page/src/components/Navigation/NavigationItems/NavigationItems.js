import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/Wine Storer">Wine Store</NavigationItem>
    <NavigationItem link="/Wine Storer">Buy at Auction</NavigationItem>
    <NavigationItem link="/Wine Storer">Value My Wines</NavigationItem>
    <NavigationItem link="/Wine Storer">About Langton's</NavigationItem>
  </ul>
);

export default navigationItems;
