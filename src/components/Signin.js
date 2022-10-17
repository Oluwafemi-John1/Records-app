import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Signin.css";
import Navbar from './Navbar';

const Signin = () => {
  return (
    <>
    <div id='nava'><Navbar/></div>
    <section id='signinsection'>
        <div className="row mx-auto shadow col-lg-6 rounded-4" id='signindiv'>
            <div className="col-lg-6 col-md-6" id='imago1'></div>
            <div className="col-lg-6 col-md-6 p-3">
                <div className='form-floating my-2'>
                    <input type="text" placeholder='first name' className="form-control" />
                    <label htmlFor="">first name</label>
                </div>
                <div className='form-floating my-2'>
                    <input type="text" placeholder='first name' className="form-control" />
                    <label htmlFor="">last name</label>
                </div>
                <div className='form-floating my-2'>
                    <input type="email" placeholder='first name' className="form-control" />
                    <label htmlFor="">email</label>
                </div>
                <div className='form-floating my-2'>
                    <input type="text" placeholder='password' className="form-control" />
                    <label htmlFor="">password</label>
                </div>
                <button className="btn btn-success w-100">Sign up</button>
                <p>Have an account already, <Link>Sign in</Link></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signin