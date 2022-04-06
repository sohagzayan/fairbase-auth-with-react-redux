import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [inputValue , setInputValue] = useState({
        email : "",
        password : "",
    })
    const {email , password}  = inputValue
    const handleChange = ()=>{

    }

    const handleFacebookSignin = ()=>{

    }
    const handleGoogleSigio = ()=>{

    }
    const handleSubmit = ()=>{

    }
    return (
        <div>
            <div id="logreg-forms">
            <form className='form-signin' onSubmit={handleSubmit}>
                <h2 className='h3 mb-3 font-weight-normal ' style={{textAlign : 'center'}}>
                    Sign in
                </h2>
                <div className="social-login">
                    <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSigio}>
                        Sign in With Google
                    </button>
                    <button className='btn facebook-btn social-btn' type='button' onClick={handleFacebookSignin}>
                        Sign in With FaceBook
                    </button>
                </div>
                <p style={{textAlign : 'center'}}>Or</p>
                <input type="email" id="inputEmail" className='form-control' placeholder='Email Address' name="email" value={email} required onChange={handleChange} />
                <input type="password" id="inputPassword" className='form-control' placeholder='Email Address' name="password" value={password} required onChange={handleChange} />
                    <button className='btn btn-secondary btn-block'  type='submit'> Sign In</button>
                    <hr />
                    <p>Dont have an account </p>
                    <Link to="/signin">
                        <button className="btn btn-success btn-block" type='submit'>Sign In</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;