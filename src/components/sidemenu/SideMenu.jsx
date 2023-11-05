/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import navData from '../../data/navListData'
import './sideMenu.css'
import { Link } from 'react-router-dom';
import NavList from './NavList'

const SideMenu = ({active, switchComponent}) => {
    const [ data, setData] = useState(navData);

    const handleActiveNav = (id) => {
        navData.forEach((nav) => {
            nav.active =false;
            if (nav.id === id) {
                nav.active = true
            } else {
                return nav;
            }
        });
        setData([...navData]);
    };

    return (
        <div className={`sideMenu ${active? 'active' : undefined}`}>
            <Link to="/" className="logo">
                <i class="bi bi-controller"></i>
                <span className="brand">
                    Play
                </span>
            </Link>

            <ul className="nav">
                <NavList 
                    data={data}
                    handleActiveNav={handleActiveNav}
                    switchComponent={switchComponent}
                />
            </ul>


            <ul className={`navSocial ${!active && 'activeItem' }`}>
            <li className='socialItem'>
                    <a href="#" className={`socailShare`} >
                        <i className="bi bi-share"></i>
                    </a>
                </li>

                <li className='socialItem'>
                    <a href="#">
                        <i className="bi bi-youtube"></i>
                    </a>
                </li>

                <li className='socialItem'>
                    <a href="#">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </li>

                <li className='socialItem'>
                    <a href="#">
                        <i className="bi bi-meta"></i>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default SideMenu