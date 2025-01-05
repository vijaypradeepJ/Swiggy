import React from 'react'
import './Navbar.css'
import logo from '../../Images/download.png'
import { IoIosSearch,IoIosHelpBuoy  } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";



function Navbar() {
  return (
    <div>
        <div className="header">
    <nav className="nav">
        <ul className="listof nav">
            <div className="item">
                <img  className="logo" src={logo}/>
                <a href =''><FaShoppingCart />Cart</a>
                <a href="">< IoPerson/> Sigin</a>
                <a href=""><IoIosHelpBuoy />Help</a>
                <a href="">< BiSolidOffer/>Offers</a>
                <a href=""> <IoIosSearch/>Search</a>
                <a href=""><MdBusinessCenter/>Swiggy Corportae</a>
                <a class="others" href="">Others </a>
            </div>
        </ul>
    </nav>
    
    </div>
    </div>
  )
}

export default Navbar