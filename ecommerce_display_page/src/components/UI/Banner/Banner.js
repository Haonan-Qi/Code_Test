import React from 'react';
/* import PropTypes from 'prop-types' */

import bannerImg from '../../../assests/images/banner.jpg';
import classes from './Banner.module.css'

const Banner = (props) => (
    <div className={classes.Banner} /* style={{height: props.height}} */>
        <img src={bannerImg} alt="Banner" />
    </div>
);

/* Logo.propTypes = {
    height:PropTypes.string
} */

export default Banner;