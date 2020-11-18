import React from 'react'
import { Router } from "@reach/router"
import Login from '../components/login'
import Signup from '../components/signup'
import PrivateRoute from '../components/privateRoute'
import Error from './404'


function app() {
    return (
        <div>
            <Router>
                <PrivateRoute path = '/app/login' component = {Login}/>
                <Signup path = '/app/signup' />
                <Error default />
            </Router>
        </div>
    )
}

export default app
