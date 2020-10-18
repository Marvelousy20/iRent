// import { checkPropTypes } from 'prop-types'
import React from 'react'
import Sidebar from 'react-sidebar'
import Hamburger from '../sub-components/hamburger/hamburger'
import styles from './sidedrawer.module.css'
import { Link } from 'gatsby'

function sidedrawer({sideBarOpen, onBarOpen,}) {
    const sideBarItems = (
        <div className = {styles.container}>
            <Link to = '/login' className = {styles.link}><b>Sign In</b></Link> <br />
            <hr style = {{color: 'black', width: '100%'}} />
            <Link to = '/signup' className = {styles.link}><b>Sign Up</b></Link>
        </div>
    )
    return (
        <div>
            <Sidebar
                sidebar={sideBarItems}
                open={sideBarOpen}
                onSetOpen={onBarOpen}
                styles={{ sidebar: { background: "white" }}}
                pullRight = 'true'
            >
                <Hamburger onBarOpen = {onBarOpen}/>
            </Sidebar> 
        </div>
    )
}

export default sidedrawer
