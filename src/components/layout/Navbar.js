import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-light bg-light">

      <h1>
        <i className={icon} style={{ color: '#d5ad6d' }}></i> {title}
      </h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Packges</a>
          <div className="dropdown-menu" aria-labelledby="dropdown01">
            <a className="dropdown-item" href="/wedding">Weddings</a>
            <a className="dropdown-item" href="/parties">Parties</a>
            <a className="dropdown-item" href="/others">Something else here</a>
          </div>
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


    // <nav className="navbar navbar-expand-md navbar-dark gradient">
    //   <h1 className='navbar-brand'>
    //     <i className={icon}></i> {title}
    //   </h1>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
    //     aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    //     <ul className="navbar-nav my-auto justify-content-end">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="home.html">Home <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Link</a>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
    //           aria-expanded="false">Packges</a>
    //         <div className="dropdown-menu" aria-labelledby="dropdown01">
    //           <a className="dropdown-item" href="#">Weddings</a>
    //           <a className="dropdown-item" href="#">Parties</a>
    //           <a className="dropdown-item" href="#">Something else here</a>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link " href="contact.html">Contact</a>
    //       </li>
    //     </ul>
    //   </div>

    // </nav>
  )
}

Navbar.defaultProps = {
  title: 'Art of Entertainment',
  icon: 'fas fa-play-circle'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar