import React, { Fragment, Component } from "react";
import Banner from "../../components/UI/Banner/Banner";
import classes from "./WineStore.module.css";
import SubNav from "../../components/Navigation/SubNav/SubNav";
import FilterItems from "../../components/Filter/FilterItems/FilterItems";
import * as wineSalerActions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import DisplayCards from "../../components/DisplayCards/DisplayCards";

class WineStore extends Component {
  state = {
    view: 1,
  };

  componentDidMount() {
    this.props.onInitWines();
  }

  filterChangeHandler = (event) => {
    this.props.filter(event.target.value);
  };

  sortChangeHandler = (event) => {
    this.props.sort(event.target.value);
  };

  viewChangeHandler = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  render() {
    const wineInfo = this.props.loading ? <Spinner /> : <DisplayCards />;
    const info =
      this.state.view == 1 ? (
        <div className={classes.resultsInfo2}>{wineInfo}</div>
      ) : (
        <div className={classes.resultsInfoXXXX}>{wineInfo}</div>
      );
    const resultinfo1 = (
      <div className={classes.resultsInfo1}>
        <form onChange={this.filterChangeHandler}>
          <div class="switch-field">
            <input
              type="radio"
              id="radio-three"
              name="switch-two"
              value="All Items"
            />
            <label for="radio-three">All Items</label>
            <input
              type="radio"
              id="radio-four"
              name="switch-two"
              value="Buy Now"
            />
            <label for="radio-four">Buy Now</label>
            <input
              type="radio"
              id="radio-five"
              name="switch-two"
              value="Auctions"
            />
            <label for="radio-five">Auctions</label>
          </div>
        </form>
        <form onChange={this.sortChangeHandler}>
          <div class="switch-field">
            <span>Sort By Price:</span>
            <input type="radio" id="radio-four" name="switch-two" value="1" />
            <label for="radio-four">Low to High</label>
            <input type="radio" id="radio-five" name="switch-two" value="2" />
            <label for="radio-five">High to Low</label>
          </div>
        </form>
        <form onChange={this.viewChangeHandler}>
          <div class="switch-field">
            <input type="radio" id="radio-four" name="switch-two" value="1" />
            <label for="radio-four">View one</label>
            <input type="radio" id="radio-five" name="switch-two" value="0" />
            <label for="radio-five">View Two</label>
          </div>
        </form>
      </div>
    );
    const displayInfo = (
      <div className={classes.DisplayInfo}>
        <div>
          <FilterItems />
        </div>
        <div className={classes.resultsInfo}>
          {resultinfo1}
          <div className={classes.matchInfo}><span>{this.props.wines.length+" "}</span>results</div>
          {info}
        </div>
      </div>
    );
    return (
      
      <Fragment>
        <Banner></Banner>
        <SubNav />
        {displayInfo}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading.loading,
    wines:state.wine.wineAfterFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitWines: () => dispatch(wineSalerActions.initWines()),
    filter: (choice) => dispatch(wineSalerActions.filter(choice)),
    sort: (xx) => dispatch(wineSalerActions.sort(xx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WineStore);
