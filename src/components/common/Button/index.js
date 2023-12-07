// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({  label, type }) => {
    return (
        <button className={ styles.btnExplore}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default Button;
