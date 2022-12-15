import React from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse , faBoxOpen ,faUser ,faPeopleGroup,faPhone} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

export default function Nav() {

    return (
        <div>
            <nav id = 'NavBar'>
                <NavLink to ='/' className='navlink' ><FontAwesomeIcon icon={faHouse}/> <br /> Home</NavLink>
                <NavLink to ='/about' className='navlink1'><FontAwesomeIcon icon={faUser}/> <br /> about</NavLink>
                <NavLink to ='/services' className='navlink2'><FontAwesomeIcon icon={faBoxOpen}/> <br /> services</NavLink>
                <NavLink to ='/team' className='navlink3'><FontAwesomeIcon icon={faPeopleGroup}/> <br /> team</NavLink>
                <NavLink to ='/contact' className='navlink4'><FontAwesomeIcon icon={faPhone}/> <br /> Contact</NavLink>
            </nav>
        </div>
    )
}
