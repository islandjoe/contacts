import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header =(props)=> {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0'>
      <div className="container">
        <a href="/portfolio/contacts/" className="navbar-brand">
          { props.branding }
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/portfolio/contacts/"
                  className="nav-link">
                <i className="fa fa-home"/> &nbsp;
                Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio/contacts/add"
                  className="nav-link">
                <i className="fas fa-address-card"/> &nbsp;
                Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio/contacts/about"
                  className="nav-link">
                <i className="fa fa-question"/> &nbsp;
                About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My Contacts'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header