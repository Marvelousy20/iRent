// import { checkPropTypes } from 'prop-types'
import React from 'react'
import Sidebar from 'react-sidebar'
import Hamburger from '../sub-components/hamburger/hamburger'
import styles from './sidedrawer.module.css'
import { Link } from 'gatsby'
import { isLoggedIn } from '../../services/auth'
import { VscTwitter } from "react-icons/vsc";
import { GoMail } from 'react-icons/go'
import { AiFillPhone } from "react-icons/ai"

function sidedrawer({sideBarOpen, onBarOpen,}) {
    const socialMedia = (
        <div>
            <div className = {`d-flex ${styles.social}`}>
                <span>
                    <VscTwitter  className = {styles.icons} />
                </span>
                <span>
                    <GoMail className = {styles.icons} />        
                </span>
                <span>
                    <AiFillPhone className = {styles.icons} />
                </span>
            </div>
        </div>
    )

    const sideBarItems = (
        <div className = {styles.container}>
            <Link to = '/app/login' className = {styles.link}><b>Sign In</b></Link> <br />
            <hr style = {{color: 'black', width: '100%'}} />
            <Link to = '/app/signup' className = {styles.link}><b>Sign Up</b></Link>

            {socialMedia}
        </div>
    )
    
    const signedBarLoggedIn = (
        <div className = {styles.container}>
            <Link to = '/app/login' className = {styles.link}><b>Upload Houses</b></Link> <br />
            {socialMedia}
        </div>
    )
    return (
        <div>
        {isLoggedIn ? ( 
            <Sidebar
                sidebar={signedBarLoggedIn}
                open={sideBarOpen}
                onSetOpen={onBarOpen}
                styles={{ sidebar: { background: "white" }}}
                pullRight = 'true'
            >
                <Hamburger onBarOpen = {onBarOpen}/>
            </Sidebar> ) : (
                <Sidebar
                    sidebar={sideBarItems}
                    open={sideBarOpen}
                    onSetOpen={onBarOpen}
                    styles={{ sidebar: { background: "white" }}}
                    pullRight = 'true'
                >
                    <Hamburger onBarOpen = {onBarOpen}/>
                </Sidebar>
            )}   
        </div>
    )
}

export default sidedrawer
