import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function hoverIn(e) {
  e.target.style.backgroundColor = '#3E54AC';
}

function hoverOut(e) {
  e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

const Sidebar = () => {
    return (
        <div>
          <i class="fa-solid fa-bars fa-2xl icons hamburger"></i>
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white left-pane">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <img className='logo-img' src={logo} alt='MITRA'></img>
              <span className="fs-3"><h3>Mitra</h3></span>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <Link to='/' className="nav-link" aria-current="page">
                <i class="fa-solid fa-house fa-lg icons"></i>
                  <span className="fs-5">Home</span>
                </Link>
              </li>
              <li onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <a href="#" className="nav-link text-white">
                <i class="fa-brands fa-rocketchat fa-lg icons"></i>
                  <span className="fs-5">Chat with Mitra</span>
                </a>
              </li>
              <li onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <Link to='/posts' className='nav-link'>
                <i class="fa-solid fa-file-image fa-lg icons"></i>
                  <span className="fs-5">Posts</span>
                </Link>
              </li>
              <li onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <a href="#" className="nav-link text-white">
                <i class="fa-solid fa-people-robbery fa-lg icons"></i>
                  <span className="fs-5">Socialize</span>
                </a>
              </li>
              <li onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <a href="#" className="nav-link text-white">
                <i class="fa-solid fa-user-doctor fa-lg icons"></i>
                  <span className="fs-5">Consult Doctor</span>
                </a>
              </li>
              <hr/>
              <li onMouseOver={hoverIn} onMouseOut={hoverOut}>
                <a href="#" className="nav-link text-white">
                <i class="fa-solid fa-gear fa-lg icons"></i>
                  <span className="fs-5">Settings</span>
                </a>
              </li>
            </ul>
            <hr/>
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-user fa-lg icons"></i>
                <strong>Username</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">Language</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Sidebar;