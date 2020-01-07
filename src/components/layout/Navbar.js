import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/offers">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mixes">Mixes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookings">Bookings</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </nav>
  )
}
Navbar.defaultProps = {
  title: 'Art of Entertainment',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar