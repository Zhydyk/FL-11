import React from 'react';
import PropTypes from 'prop-types';
import styles from './primary-button.module.scss';

export const PrimaryButton = (props) => {
    if(props.number !== null){
        return(
            <button className={styles.btnPrimary} disabled={props.InitialDisabled}>
                <span className={styles.text}>{props.text}</span>
                <span>Get ({props.price} $)</span>
            </button>
        )
    }else{
        return(
            <button disabled={props.InitialDisabled}>
                <span>{props.text}</span>
            </button>
        )
    }
}
PrimaryButton.propTypes = {
    InitialDisabled: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.number
}