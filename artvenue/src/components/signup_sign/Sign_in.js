import React,{useState} from 'react'
import './sign.css';
import { NavLink } from 'react-router-dom';
// import React, { useContext, useState } from 'react'
// import { Logincontext } from '../context/Contextprovider';
// import { ToastContainer, toast } from 'react-toastify';

const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });


    const adddata = (e) => {
        const { name, value } = e.target;          // name of value and kay value takali ahe ti yat yenar
        // console.log(name, value);

        setData(() => {          // callback function
            return {
                ...logdata,
                [name]: value
            }
        })
    };

  return (
    <>
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./assets/images/header/logo.png" alt="signupimg" />    {/* logo */}
                </div>


                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>
                    </form>
                    {/* <ToastContainer /> */}
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <NavLink to="/register"> <button> Create your Amazon Account </button> </NavLink>
                </div>
            </div>

        </section>
    </>
  )
}

export default Sign_in