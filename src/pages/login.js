import React from 'react'
import { UndrawHouseSearching } from 'react-undraw-illustrations'
import styles from './css/login.module.css'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import { Link } from 'gatsby'

function login() {
    return (
        <div className = {styles.container}>
            <div className = {styles.ilu}>
                <UndrawHouseSearching 
                    height = '250px'
                />
            </div>
        
            <div>
                <MDBRow>
                    <MDBCol md="12">
                        <form className = {styles.form}>
                            <p className="h5 text-center mb-4">Sign In</p>
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="blue" type = 'submit'>Login</MDBBtn>
                            </div>

                            <MDBModalFooter className="mx-5 pt-2 mt-2">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Not a member?
                                    <Link to = '/signup'> Sign Up </Link>
                                </p>
                            </MDBModalFooter>
                        </form>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default login
