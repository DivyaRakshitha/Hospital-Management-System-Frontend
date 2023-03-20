import React from 'react'
import image from './hospital.png'
import './Signup.css'
const Signup = () => {
  return (
    <div className='home1'>
            <div className="trainimagesignup">
                <video src={image} alt="train" classNameName='signupimage'></video>
            </div>
          <div className="card1">
            <p className="signup">Sign Up</p>
            <div className="inputBox1">
                <input type="text" required="required" />
                <span className="user">ID</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Email</span>
            </div>

            <div className="inputBox">
                <input type="text" required="required" />
                <span>Firstname</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Lastname</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Username</span>
            </div>

            <div className="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Gender</span>
            </div>
            <div className="inputBox">
            <input type="date" required="required" />
            
                <span>Date Of birth</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Age</span>
            </div>
            <button className="enter">Enter</button>

        </div>
    </div>
    
  )
}
export default Signup;