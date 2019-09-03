import React from 'react'
import PropTypes from 'prop-types'
import styles from './emoji-element.module.scss'

export function EmojiElement(props) {
    const classes = [styles.element1,styles.element2,styles.element3];

    return (
        <div className={classes[props.index]}>
            {props.char}
        </div>
    )
}

EmojiElement.propTypes = {
  index: PropTypes.number.isRequired,
  char:  PropTypes.string.isRequired
}