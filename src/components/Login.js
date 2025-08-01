import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false)

  const onClickToggle = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg' alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h3 className='font-bold text-3xl my-4'>{isSignInForm ? "Sign in" : "Sign up"}</h3>
        { !isSignInForm && <input type='Full Name' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
        <input type='email' placeholder='Email' className='p-2 my-4 w-full bg-gray-700'/>
        <input type='password' placeholder='password' className='p-2 my-4 w-full bg-gray-700'/>
        <button type='submit' className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign in" : "Sign up"}</button>
        <p onClick={onClickToggle} className='py-4 cursor-pointer'>{isSignInForm ? "New to Netflix?Sign up now" : "Already registered?Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login

