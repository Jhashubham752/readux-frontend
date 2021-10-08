import React from 'react'
import { Link , useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const user = useSelector((state) => state.auth);
    // if(user = Login){
    //     history.push('/')
    // }
  
    

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>     
        </>
    )
}

export default Navbar
