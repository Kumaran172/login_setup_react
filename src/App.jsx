import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userimg from "./userName.jpg"
import emailimg from "./email.jpg"
import passwordimg from "./password.jpg"

function App() {
  const [count, setCount] = useState(0);
  const [userNameVisibile, setUserNameVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false);

  return (
    <>
      <div className='all'>
        <h2>Login</h2>
        <div className='fields'>
          {userNameVisibile === true ?
            <div className='user row'>
              <div className='label'>
                <div className='img'>
                  <img src={userimg} alt='profile'></img>
                </div>
                <p>Username</p></div>
              <input
                type='text'
                placeholder='enter your name'
              />
            </div> : <></>}

          {emailVisible===true?
          <div className='email row'>
            <div className='label'>
              <div className='img'>
                <img src={emailimg} alt='profile'></img>
              </div>
              <p>Email</p>
            </div>
            <input
              type='text'
              placeholder='enter your email'
            />
          </div>
          :<></>}

          {passwordVisible === true ?
            <div className='password row'>
              <div className='label'>
                <div className='img'>
                  <img src={passwordimg} alt='profile'></img>
                </div>
                <p>Password</p>
              </div>
              <input
                type='text'
                placeholder='enter your password'
              />
            </div>
            : <></>}
        </div>
        {forgetPasswordVisible===true?
        <p>Forgot password?Click <a href='here'>Click here</a></p>
         :<></>}

        <div className='button'>
          <button className='signup' onClick={() => {
            setUserNameVisible(true)
            setEmailVisible(true)
            setPasswordVisible(true)
            setForgetPasswordVisible(false)
          }}>Signup</button>
          <button className='login' onClick={()=>{
            setUserNameVisible(true)
            setPasswordVisible(true)
            setForgetPasswordVisible(true)
            setEmailVisible(false)
          }}> Login</button>
        </div>
      </div>
      <h4>-BY M.S.Kumaran
      </h4>
    </>
  )
}

export default App
