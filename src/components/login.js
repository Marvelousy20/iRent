import React from 'react'
import { UndrawHouseSearching } from 'react-undraw-illustrations'
import styles from './css/login.module.css'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import { Link, navigate } from 'gatsby'
import { Formik } from 'formik'
import * as yup from 'yup';
import Axios from 'axios'
import { setToken }from '../services/auth'

function Login(props) {

    const [state, setState] = React.useState({
        token: '',
        signInError: ''
    })

    React.useEffect(() => {
        const token = state.token
        if(token) {
            setToken(token) 
        } 
    })
    
    console.log(state.token)
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
                    const url = 'http://localhost:3000/users/login'

                    try {
                        const user = await Axios.post(url, {
                            email: values.email,
                            password: values.password,
                        })
                        console.log(user)
                        console.log(user.data.token)
                        setState(() => ({
                            ...state, token: user.data.token
                        }))
                        setSubmitting(false)
                        navigate('/') 
                    }

                    catch(err) {
                        console.log(err)
                        setState(() => ({
                            ...state, signInError: 'Wrong email and password'
                        }))
                    }
                }}

                validationSchema = {
                    yup.object().shape({                    
                        email: yup.string()
                        .email()
                        .required('Required'),

                        password: yup.string().required('Required')
                        .min(8, 'Password must be at least 8 characters'),
                    })
                }
            >
            {({
                values, 
                errors, 
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <MDBRow>
                    <MDBCol md="12">
                        <form className = {styles.form} onSubmit = {handleSubmit}>
                            <p className="h5 text-center mb-4">Sign In</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email" 
                                    icon="envelope" 
                                    group 
                                    type="email"
                                    success="right"
                                    name = 'email'
                                    validate
                                    value = {values.email}      
                                    onChange={handleChange}
                                    onBlur={handleBlur}  
                                />
                                {errors.email && touched.email && (
                                    <div className = {errors.email && styles.feedback}>{errors.email}</div>
                                )}
                                <MDBInput 
                                    label="Type your password" 
                                    icon="lock" 
                                    group 
                                    type="password"    
                                    name = 'password'
                                    value = {values.password}    
                                    validate  
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && (
                                    <div className = {errors.password && styles.feedback}>{errors.password}</div>
                                )}
                                <br />
                                {state.signInError && (touched.password || touched.email) && (<div className = {styles.feedback}>{state.signInError}</div>)}
                            </div>
                            <div className="text-center">
                                <MDBBtn color="blue" type = 'submit' disabled = {isSubmitting}>Login</MDBBtn>
                            </div>
                            <MDBModalFooter className="mx-5 pt-2 mt-2">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Not a member?
                                    <Link to = '/signup'> <span className = 'ml-1'>Sign Up</span></Link>
                                </p>
                            </MDBModalFooter>
                        </form>
                    </MDBCol>
                </MDBRow>
            )}    
            </Formik>
        </div>
    )
}

export default Login
