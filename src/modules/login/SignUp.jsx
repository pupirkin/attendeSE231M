import React from "react";
import "./signup.css";


function SignUp() {
    return (
        <div className="Signup">
            <div></div>
            <div className="content">

                <div class="text">
                    Sign Up
                </div>
                <form id='form' action="" method='post' encType="multipart/form-data">
                <div class="field">
                        <input required="" type="text" class="input" name='firstname' placeholder='First name' />
                    </div>
                    <div class="field">
                        <input required="" type="text" class="input" name='lastname' placeholder='Last name' />
                    </div>
                    <div class="field">
                        <input required="" type="text" class="input" name='email' placeholder='Email' />
                    </div>
                    <div class="field">
                        <input required="" type="password" class="input" name='password' placeholder='Password' />
                    </div>
                    <div class="field">
                        <input required="" type="password" class="input" name='confirmPassword' placeholder='Confirm Password' />
                    </div>
                    <button class='buttonLogin'>
                        Sign  Up
                    </button>
                    <div className="login">
                        Cot an account?
                        <a href="/signin">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;