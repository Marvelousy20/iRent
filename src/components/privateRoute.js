import React from 'react'
import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'

console.log(isLoggedIn())

const privateRoute = ({ component: Component, location, ...rest }) => {
    if(!isLoggedIn() && location.pathname !== '/app/login') {
        navigate('/app/login')
    }   
    return <Component {...rest} />
}

export default privateRoute
