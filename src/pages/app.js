import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from '../components/privateRoute'
import Login from '../components/login'
import Signup from '../components/signup'
import UploadForm from '../components/uploadForm'
import Error from './404'


function app() {
    return (
        <div>
            <Router>
                <PrivateRoute path = '/app/login' component = {Login} />
                <PrivateRoute path = '/app/signup' component = {Signup} />
                <PrivateRoute path = '/app/uploadForm' component = {UploadForm} />
                <Error default />
            </Router>
        </div>
    )
}

export default app
