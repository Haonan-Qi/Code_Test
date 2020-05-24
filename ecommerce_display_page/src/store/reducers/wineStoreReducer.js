import * as actionTypes from "../actions/actionTypes";
import { act } from "react-dom/test-utils";

const initialState = {
  subNavItems: ["Product Listing"],
  filterBy: [
    "AUCTION",
    "PRICE RANGE",
    "STYLE",
    "VARIETY",
    "COUNTRY",
    "REGION",
    "SUB-REGION",
    "BRAND",
    "VINTAGE",
    "CLASSIFICATION",
    "BOTTLE SIZE",
    "OTHER",
  ],
  wine: [],
  wineAfterFilter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WINES:
      return {
        ...state,
        wine: action.wines,
        wineAfterFilter: action.wines,
      };
    case actionTypes.ADD_ONE:
      let newState = {
        ...state,
        wine: [...state.wine],
        wineAfterFilter: [...state.wineAfterFilter],
      };
      newState.wine.filter((e) => e.uniqueProId == action.productId)[0][
        "purchaseAmount"
      ] =
        newState.wine.filter((e) => e.uniqueProId == action.productId)[0][
          "purchaseAmount"
        ] + 1;
      return {
        ...newState,
      };
    case actionTypes.REMOVE_ONE:
      let newState2 = {
        ...state,
        wine: [...state.wine],
        wineAfterFilter: [...state.wineAfterFilter],
      };
      newState2.wine.filter((e) => e.uniqueProId == action.productId)[0][
        "purchaseAmount"
      ] =
        newState2.wine.filter((e) => e.uniqueProId == action.productId)[0][
          "purchaseAmount"
        ] - 1;
      return newState2;
    case actionTypes.FILTER:
      if (action.choice == "All Items") {
        return state;
      } else if (action.choice == "Buy Now") {
        let newState3 = {
          ...state,
          wine: [...state.wine],
          wineAfterFilter: [...state.wine],
        };
        newState3.wineAfterFilter = newState3.wineAfterFilter.filter(
          (e) => !e.isAuction
        );
        return newState3;
      } else {
        let newState4 = {
          ...state,
          wine: [...state.wine],
          wineAfterFilter: [...state.wine],
        };
        newState4.wineAfterFilter = newState4.wineAfterFilter.filter(
          (e) => e.isAuction
        );
        return newState4;
      }
    case actionTypes.SORT:
      if (action.choice == 1) {
        let newState5 = {
          ...state,
          wine: [...state.wine],
          wineAfterFilter: [...state.wineAfterFilter],
        };
        newState5.wineAfterFilter=newState5.wineAfterFilter.sort((a, b) => {
          console.log(a['buyNow']['unitPrice'])
          return a['buyNow']['unitPrice']-b['buyNow']['unitPrice']
        });
        return newState5;
      }else {
        let newState6 = {
          ...state,
          wine: [...state.wine],
          wineAfterFilter: [...state.wineAfterFilter],
        };
        newState6.wineAfterFilter = newState6.wineAfterFilter.sort((a, b) => b['buyNow']['unitPrice']-a['buyNow']['unitPrice']);
        return newState6;
      }

    default:
      return state;
  }
};

export default reducer;
