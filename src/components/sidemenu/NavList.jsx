/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'
const NavList = ({ data, handleActiveNav, switchComponent }) => {
    return (
        data.map((navItem) => (
            <li className='navItem' key={navItem.id} onClick={() => switchComponent(navItem.target)}>
                <Link className={`${navItem.active && 'active'}`} to='/' onClick={() => handleActiveNav(navItem.id)}>
                    <i className={`bi ${navItem.icon}`}></i>
                    <span className='navName'>{navItem.name}</span>
                </Link>
            </li>
        ))
    );
};

export default NavList;