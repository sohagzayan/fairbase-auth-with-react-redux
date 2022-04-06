import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';




const Signin = () => {
    const [inputValue , setInputValue] = useState({
        displayName : "",
        email : "",
        password : "",
        passwordConform : ""
    })
    const {email , password ,passwordConform , displayName}  = inputValue
    const handleChange = ()=>{

    }
    const handleSubmit = ()=>{

    }
    return (
        <div>
            <div id="register-form">
            <form className='form-signin' onSubmit={handleSubmit}>
                <h2 className='h3 mb-3 font-weight-normal ' style={{textAlign : 'center'}}>
                    Sign Up
                </h2>
                <input type="text" id="displayName" className='form-control' placeholder='full name' name="displayName" value={displayName} required onChange={handleChange} />
                <input type="email" id="user-email" className='form-control' placeholder='Email Address' name="email" value={email} required onChange={handleChange} />
                <input type="password" id="inputPassword" className='form-control' placeholder='password' name="password" value={password} required onChange={handleChange} />
                <input type="password" id="inputRePassword" className='form-control' placeholder='Repeat-password Address' name="passwordConform" value={passwordConform} required onChange={handleChange} />
                    <button className='btn btn-primary btn-block'  type='submit'> Sign In</button>
                    <hr />
                    <p>Dont have an account </p>
                    <Link to="/login">
                        <button className="btn btn-success btn-block" type='submit'>Back</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;