import React from 'react'
import './SignUp.css'
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
                  <p className="sign">Sign Up</p>
                  <p className="loginOp">Already have an account? <a href="/signin" className='in'>Sign in</a></p>
                  <form action="" className='signForm'>
                      <input type="text" placeholder='Your name' className='signInput' />
                      <input type="text" placeholder='Username' className='signInput' />
                      <input type="email" placeholder='Email address' className='signInput' />
                      <input type="password" placeholder='Password' className='signInput' />
                  </form>
                  <div className="agree">
                    <input type="checkbox" name="" id="" />
                    <p className="agreeText">I agree with <a href="#" className="privacy">Privacy Policy</a> and <a href="#" className="terms">Terms of Use</a></p>
                  </div>
                  <SignButton>Sign Up</SignButton>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp