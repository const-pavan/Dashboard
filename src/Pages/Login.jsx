import React, { useState } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { BiLogoDiscord } from 'react-icons/bi'
import './Login.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
const Login = () => {
  const [log, setLog] = useState(false)

  const handleLog = () => {
    setLog(!log)
  }

  return (
    <section>
      <div className='login-container'>
        <div className='login-div'>
          <div className='login-grid'>
            <div className='login-hfull'>
              <div className='login-top'>
                <h3 className='login-title'>LOGO</h3>
              </div>
              <div className='login-top'>
                <h1 className='login-board'>Board.</h1>
              </div>
              <div className='login-icons'>
                <AiFillGithub className='login-img' />
                <AiFillTwitterCircle className='login-img' />
                <AiFillLinkedin className='login-img' />
                <BiLogoDiscord className='login-img' />
              </div>
            </div>
            <div>
              {!log ? (
                <SignIn handleLog={handleLog} />
              ) : (
                <SignUp handleLog={handleLog} />
              )}
            </div>
          </div>
        </div>
        <div className='login-left'>
          <img className=' login-end' src='assets/left.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default Login
