import React, { Fragment } from "react";
import classes from "./DisplayCard.module.css";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import { Icon } from "@iconify/react";
import plusOutline from "@iconify/icons-eva/plus-outline";
import minusOutlined from "@iconify/icons-ant-design/minus-outlined";

const DisplayCard = (props) => {
  const addHandler = (productId) => {
    props.addHandler(productId);
  };

  const deleteHandler = (productId) => {
    props.removeHandler(productId);
  };
  const amount = props.wine[props.wineInfo.uniqueProId]["purchaseAmount"];
  return (
    <div className={classes.DisplayCard}>
      <img src={props.wineInfo.imagePath}></img>
      <p>{props.wineInfo.title}</p>
      <p>bottleSize:{props.wineInfo.bottleSizeMls}</p>
      <p>Price per item:${props.wineInfo.buyNow.unitPrice}</p>
      <p>Quantity</p>
      <div className={classes.purchaseController}>
        <button onClick={deleteHandler.bind(this, props.wineInfo.uniqueProId)} disabled={props.wineInfo.purchaseAmount > 0?false:true}>
          <Icon icon={minusOutlined} />
        </button>
        <span>{props.wineInfo.purchaseAmount}</span>
        <button onClick={addHandler.bind(this, props.wineInfo.uniqueProId)}>
          <Icon icon={plusOutline} />
        </button>
        <button>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wine: state.wine.wineAfterFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHandler: (id) => {
      dispatch(actions.addOne(id));
    },
    removeHandler: (id) => {
      dispatch(actions.removeOne(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCard);
