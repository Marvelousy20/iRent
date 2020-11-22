import React from 'react'
import { UndrawHouseSearching } from 'react-undraw-illustrations'
import styles from './css/signup.module.css'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import { Link } from 'gatsby'
import { Formik } from 'formik'
import * as yup from 'yup';
import Axios from 'axios'
import { navigate } from "@reach/router"


function signup() {
    return (
        <div className = {styles.container}>
            <div className = {styles.ilu}>
                <UndrawHouseSearching 
                    height = '250px'
                />
            </div>

            <Formik
                initialValues = {{email: '', password: ''}}
                onSubmit = {async (values, {setSubmitting}) => {
                    const url = 'http://localhost:3000/users/signup';
                    try {
                        const signup = await Axios.post(url, {
                            email: values.email,
                            password: values.password,
                        }) ;
                        navigate(`/app/login`)
                    }
                    catch(err) {
                        console.log(err)
                    }
                }}

                validationSchema = {
                    yup.object().shape({
                        name: yup.string().required('Required'),

                        email: yup.string()
                        .email()
                        .required('Required'),

                        password: yup.string().required('Required')
                        .min(8, 'Password must be at least 8 characters'),

                        confirmPassword: yup.string().required('Required')
                        .oneOf([yup.ref('password'), null], 'Passwords does not match'),
                    })
                }
            >    
                {
                    ({
                    values, 
                    errors, 
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    }) => (
                        <MDBRow>
                            <MDBCol md="12">
                                <form className = {styles.form} onSubmit = {handleSubmit}>
                                    <p className="h5 text-center mb-4">Sign up</p>
                                    <div className="grey-text">
                                        <MDBInput 
                                            label="Your name" 
                                            icon="user" 
                                            group 
                                            type="text"                                             
                                            error="wrong"
                                            success="right" 
                                            name = 'name' 
                                            validate                                             
                                            value = {values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name && (
                                            <div className = {styles.feedback}>
                                                {errors.name}
                                            </div>
                                        )}
                                        <MDBInput 
                                            label="Your email" 
                                            name = 'email' 
                                            icon="envelope" 
                                            group 
                                            type="email" 
                                            validate                                            
                                            error="wrong"
                                            success="right"      
                                            value = {values.email}      
                                            onChange={handleChange}
                                            onBlur={handleBlur}                                     
                                        />
                                        {errors.email && touched.email && (
                                            <div className = {styles.feedback}>
                                                {errors.email}
                                            </div>
                                        )}
                                        
                                        <MDBInput 
                                            label="Your password" 
                                            name = 'password' 
                                            icon="lock" 
                                            group 
                                            type="password" 
                                            validate   
                                            value = {values.password}   
                                            onChange={handleChange}
                                            onBlur={handleBlur}                                       
                                        />
                                        {errors.password && touched.password && (
                                            <div className = {styles.feedback}>
                                                {errors.password}
                                            </div>
                                        )}

                                        <MDBInput 
                                            label="Confirm password" 
                                            name = 'confirmPassword' 
                                            icon="lock" 
                                            group 
                                            type="password" 
                                            validate   
                                            value = {values.confirmPassword}   
                                            onChange={handleChange}
                                            onBlur={handleBlur}                                       
                                        />
                                        {errors.confirmPassword && touched.confirmPassword && (
                                            <div className = {styles.feedback}>
                                                {errors.confirmPassword}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn 
                                            color="primary" 
                                            type = 'submit'
                                            disabled = {isSubmitting}
                                        >
                                            Register
                                        </MDBBtn>
                                    </div>

                                    <MDBModalFooter className="mx-5 pt-2 mt-2">
                                        <p className="font-small grey-text d-flex justify-content-end">
                                            Already a member?
                                            <Link to = '/app/login'><span className = 'ml-1'>Log In</span></Link>
                                        </p>
                                    </MDBModalFooter>
                                </form>
                            </MDBCol>
                        </MDBRow>       
                    )
                }
            </Formik>
        </div>
    )
}

export default signup
