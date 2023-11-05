/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react'
import userImage from '../../assets/images/profile1.jpg'
import './header.css'
import { UserContext } from '../../App';
const Header = ({toggleActive}) => {
    const {cart, library}= useContext(UserContext);

  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
            <i className="bi bi-sliders"></i>
        </a>

        <div className="userItems">
            <a href="#" className="icon">
                <i className="bi bi-heart-fill"></i>
                <span className="like">{library.length}</span>
            </a>

            <a href="#" className="icon">
                <i className="bi bi-bag-fill"></i>
                <span className="bag">{cart.length}</span>
            </a>

            <div className="avatar">
                <a href="">
                    <img src= {userImage} alt="userImage" className="userImage" />
                </a>
                <div className="userInfo">
                    <span className="user">User Name</span>
                    <a href=''>
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header