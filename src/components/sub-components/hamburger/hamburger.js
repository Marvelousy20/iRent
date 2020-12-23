import React from "react"

import styles from './hamburger.css'

function hamburger(props) {
    return (
        <div className = 'toggle-btn' onClick = {props.onBarOpen}>
            <span className = 'toggle-btn-line'></span>
            <span className = 'toggle-btn-line'></span>
            <span className = 'toggle-btn-line'></span>
        </div>
    )
}

export default hamburger
