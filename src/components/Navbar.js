import React from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="sticky-top shadow-sm" id='sticky-top'>
        <div className="">
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src="" width={85} alt="" className='imglogo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Features */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Features</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item"><img src="" width={25} alt="" />&nbsp;&nbsp;&nbsp;Kuda Card</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src="" width={25} alt="" />&nbsp;&nbsp;&nbsp;Spend</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src="" width={25} alt="" />&nbsp;&nbsp;&nbsp;Save</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src="" width={25} alt="" />&nbsp;&nbsp;&nbsp;Budget</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src="" width={25} alt="" />&nbsp;&nbsp;&nbsp;Borrow</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#">Business&nbsp;<a href="" className='border rounded text-decoration-none shadow-sm'><span className='Beta'>Beta</span></a></a>
                            </li>
                            
                            {/* Company */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Company</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item">Blog</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Press</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Join our team</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">About us</a></li>
                                </ul>
                            </li>

                            {/* Get Help */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Help</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item">Get Help</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">FAQs</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Security</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Contact us</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light rounded px-4" to="/signup" id='getKuda'>Join us</Link>
                            </li>
                            <li className="nav-item dropdown" id='imagescammer'>
                                <a className="nav-link " href="#"><img src="" alt="" /></a>
                                <ul className='dropdown-menu border-0 rounded'>
                                    <li id='imagescam'><a href="" className="dropdown-item"><img src="" alt="" /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Navbar