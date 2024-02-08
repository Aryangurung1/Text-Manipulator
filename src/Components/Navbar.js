import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiaryc navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.hero}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
          <span className="navbar-text mx-2">
            Color Theme
          </span>
          <button onClick={props.toogleLight} type="button" className="btn btn-light rounded-circle p-2 mx-2 border border-dark"></button>
          <button onClick={props.tooglePrimary} type="button" className="btn btn-primary rounded-circle p-2 mx-2"></button>
          <button onClick={props.toogleSecondary} type="button" className="btn btn-secondary rounded-circle p-2 mx-2"></button>
          <button onClick={props.toogleSuccess} type="button" className="btn btn-success rounded-circle p-2 mx-2"></button>
          <button onClick={props.toogleDanger} type="button" className="btn btn-danger rounded-circle p-2 mx-2"></button>
          <button onClick={props.toogleWarning} type="button" className="btn btn-warning rounded-circle p-2 mx-2"></button>
          <button onClick={props.toogleInfo} type="button" className="btn btn-info rounded-circle p-2 mx-2"></button>
          
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input onChange={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.check}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  hero: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     hero: 'hello',
//     about: 'sanchai'
// }
// checked={props.check}