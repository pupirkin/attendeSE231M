import React, { useState } from 'react';
import "./signin.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/HeaderDefault";

function SignIn() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    return (
        <div className="Signin">
            {/* <Header/> */}
            <div className="content">
                <div class="text">
                    Sign In
                </div>
                <form action="#">
                    <div class="field">
                        <input required="" type="text" class="input" placeholder="Email" />
                    </div>
                    <div class="field">
                        <input required="" type="password" class="input" placeholder="Password" />
                    </div>
                        <div className="rem">
                            <input
                                className="rememberInput"
                                type="checkbox"
                                id="myCheckbox"
                                name="myCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="myCheckbox" className='remember'>Remember me</label>
                        </div>
                        <div className="forgot-pass">

                            {/* <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p> */}
                            <a href="#">Forgot Password?</a>
                        </div>
                    <Link className="loginLink" to="/mainpage">
                        <button className="buttonLogin">Login</button>
                    </Link>
                    <div class="sign-up">
                        Not a member?
                        <a href="/">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignIn;