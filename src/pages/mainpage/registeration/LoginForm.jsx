import React from 'react'
import {Link} from 'react-router-dom'
import "./login.css"

const LoginForm = () => {
  return (
    <section className="login_container">
            <div className='formContainer'>
        <input type="checkbox" id='chk' aria-hidden="true"/>
        <div className="signUp">
            <form action="" className="form">
                <label for="chk" aria-hidden="true" >Sign Up</label>

                <input type="text" placeholder='Enter Your user Name' name="name"/>
                <input type="email" placeholder='Enter Your Email' name="email"/>
                <input type="password" placeholder='Enter Your Password' name="password" />
                <button> Sign Up </button>
            </form>
        </div>

        <div className="login">
            <form action="" className="form">
                <label for="chk" aria-hidden="true" > Login </label>
                <input type="email" placeholder='Enter Your Email' name="email"/>
                <input type="password" placeholder='Enter Your Password' name="password" />
                <Link className='button' to="/"> Login </Link>
            </form>
        </div>
    </div>

    </section>
  )
}

export default LoginForm