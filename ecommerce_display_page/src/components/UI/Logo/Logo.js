import React from 'react';
/* import PropTypes from 'prop-types'
 */
import logo from '../../../assests/images/Logo.svg';
import classes from './Logo.module.css'

const Logo = (props) => (
    <div className={classes.Logo} /* style={{height: props.height}} */>
        <img src={logo} alt="Logo" />
    </div>
);

/* Logo.propTypes = {
    height:PropTypes.string
} */

export default Logo;