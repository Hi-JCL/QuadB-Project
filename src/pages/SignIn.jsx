import React from 'react'
import './SignUp.css'
import './SignIn.css'
import '../index.css'
import SignButton from '../components/signButton'

function SignUp() {
  return (
    <div className='signsBox'>
        <div className='box'>
            <div className='logoBox'>
                <p className="logo">3legant.</p>
                <img src="./src/assets/signChair.png" alt="chair image" className='chair'/>
            </div>
            <div className="signUpBox">
               <div className="signUp">
                  <p className="sign">Sign In</p>
                  <p className="loginOp">Don’t have an accout yet? <a href="/signup" className='in'>Sign Up</a></p>
                  <form action="" className='signForm'>
                      <input type="text" placeholder='Your username or email address' className='signInput' />
                      <input type="password" placeholder='Password' className='signInput' />
                  </form>
                  <div className="agree">
                    <input type="checkbox" name="" id="" />
                    <div className="forget">
                      <p className="agreeText ">Remember me</p>
                      <a href="#" className="privacy">Forgot password?</a>
                    </div>
                  </div>
                  <SignButton>Sign In</SignButton>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp