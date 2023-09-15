import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { database } from '../FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
export default function SignUp({ handleLog }) {
  const history = useNavigate()
  const handleSignupSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, 'authData')
        history('/')
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <section className='sign-section'>
      <div className='sign-container'>
        <h2 className='sign-header'>Sign Up</h2>
        <h3 className='sign-subheader'>Sign up to your account</h3>
        <div style={{ display: 'flex', gap: '4px', paddingBottom: '6px' }}>
          <div className='sign-google-button'>
            <FcGoogle style={{ height: '20px', width: '20px' }} /> Sign up with
            Google
          </div>
          <div className='sign-google-button'>
            <AiFillApple
              style={{ height: '20px', width: '20px', color: '#d3d3d3' }}
            />{' '}
            Sign up with Apple
          </div>
        </div>
        <form onSubmit={handleSignupSubmit} className='sign-form'>
          <div className='sign-input-class'>
            <label htmlFor='email' className='sign-email-label'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              className='sign-em-pass'
            />
          </div>
          <div className='sign-input-class'>
            <label htmlFor='password' className='sign-email-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='sign-em-pass'
            />
          </div>

          <div className='sign-button'>
            <button className='sign-press'>Sign Up</button>
          </div>
        </form>
        <h2 className='sign-end-div'>
          Registered User?{' '}
          <span onClick={handleLog} className='sign-mess'>
            Login
          </span>
        </h2>
      </div>
    </section>
  )
}
