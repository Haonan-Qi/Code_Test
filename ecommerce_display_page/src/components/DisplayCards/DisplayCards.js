import React from "react";
import { connect } from "react-redux";
import DisplayCard from "./DisplayCard/DisplayCard";

const DisplayCards = (props) => {
  const displayCards = props.wines.map((wine) => <DisplayCard wineInfo={wine}/>);
  return displayCards;
};

const mapStateToProps = (state) => {
  return {
    wines: state.wine.wineAfterFilter,
  };
};

export default connect(mapStateToProps)(DisplayCards);
