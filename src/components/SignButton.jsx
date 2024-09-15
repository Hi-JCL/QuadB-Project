import React from 'react'
import './SignButton.css'

function SignButton({children}) {
  return (
    <div>
        <button className='loginButton'>{children}</button>
    </div>
  )
}

export default SignButton