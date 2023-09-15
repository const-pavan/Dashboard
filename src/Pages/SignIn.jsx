import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { database } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
export default function SignIn({ handleLog }) {
  const history = useNavigate()
  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    signInWithEmailAndPassword(database, email, password)
      .then(() => {
        history('/dashboard')
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <section className='sign-section'>
      <div className='sign-container'>
        <h2 className='sign-header'>Sign In</h2>
        <h3 className='sign-subheader'>Sign in to your account</h3>
        <div style={{ display: 'flex', gap: '4px', paddingBottom: '6px' }}>
          <div className='sign-google-button'>
            <FcGoogle style={{ height: '20px', width: '20px' }} /> Sign in with
            Google
          </div>
          <div className='sign-google-button'>
            <AiFillApple
              style={{ height: '20px', width: '20px', color: '#d3d3d3' }}
            />{' '}
            Sign in with Apple
          </div>
        </div>
        <form onSubmit={handleLoginSubmit} className='sign-form'>
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
          <div className='sign-input-class'>
            <label htmlFor='remember' className='sign-for-pass'>
              Forgot Password ?
            </label>
          </div>
          <div className='sign-button'>
            <button className='sign-press'>Sign In</button>
          </div>
        </form>
        <h2 className='sign-end-div'>
          New to MyApp?{' '}
          <span onClick={handleLog} className='sign-mess'>
            Sign Up
          </span>
        </h2>
      </div>
    </section>
  )
}
