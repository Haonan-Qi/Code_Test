import axios from "../../axios-wines";
import * as actionTypes from "./actionTypes";
import { loadingStart, loadingEnd } from "./loading";

export const setWines = (winesInfo) => {
  return {
    type: actionTypes.SET_WINES,
    wines: winesInfo,
  };
};

export const filter = (filter) => {
  return {
    type: actionTypes.FILTER,
    choice: filter,
  };
};

export const sort = (filter) => {
  console.log('xx')
  return {
    type: actionTypes.SORT,
    choice: filter,
  };
};

export const initWines = () => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get("")
      .then((winesInfo) => {
        const wines = winesInfo.data.map((e, index) => {
          return { ...e, purchaseAmount: 0, uniqueProId: index };
        });
        dispatch(setWines(wines));
        dispatch(loadingEnd());
      })
      .catch((error) => {
        /* Waiting implement */
      });
  };
};

export const addOne = (id) => {
  return {
    type: actionTypes.ADD_ONE,
    productId: id,
  };
};

export const removeOne = (id) => {
  return {
    type: actionTypes.REMOVE_ONE,
    productId: id,
  };
};
