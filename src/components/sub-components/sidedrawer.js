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
import { MDBBtn } from 'mdbreact'

function sidedrawer({sideBarOpen, onBarOpen,}) {
    const socialMedia = (
        <div>
            <div className = {`d-flex ${styles.social}`}>
                <span>
                    <VscTwitter className = {`text-primary ${styles.icons}`} />
                </span>
                <span>
                    <GoMail className = {`text-primary ${styles.icons}`} />        
                </span>
                <span>
                    <AiFillPhone className = {`text-primary ${styles.icons}`} />
                </span>
            </div>
        </div>
    )
    
    // displays if user is not logged in
    const sideBarItems = (
        <div className = {styles.container}>
            <div>
                <Link to = '/app/login' className = {styles.link}>
                    <MDBBtn color="blue">Sign In</MDBBtn>
                </Link> 
                <br />
                <Link to = '/app/signup' className = {styles.link}>
                    <MDBBtn> Sign Up</MDBBtn>
                </Link>
            </div>
            <div className = {styles.social}>
                {socialMedia}
            </div>
        </div>
    )
    
    // Displays if user is logged in
    const signedBarLoggedIn = (
        <div className = {styles.container}>
            <div>
                <Link to = '#'>
                    <MDBBtn color="blue">Upload Houses</MDBBtn>
                </Link>
            </div>
            <div className = {styles.social}>
                {socialMedia}
            </div>
        </div>
    )
    return (
        <div>
        {isLoggedIn() ? ( 
            <Sidebar
                sidebar={signedBarLoggedIn}
                open={sideBarOpen}
                onSetOpen={onBarOpen}
                styles= {
                    { sidebar: { background: "white",  position: 'fixed'}}
                }
                pullRight = 'true'
            >
                <Hamburger onBarOpen = {onBarOpen} />
            </Sidebar> ) : (
                <Sidebar
                    sidebar={sideBarItems}
                    open={sideBarOpen}
                    onSetOpen={onBarOpen}
                    styles={
                        { sidebar: { background: "white",height: '100vh', overflowY: 'hidden', position: 'fixed'}}
                    }
                    pullRight = "true"
                >
                    <Hamburger onBarOpen = {onBarOpen}/>
                </Sidebar>
            )}   
        </div>
    )
}

export default sidedrawer
