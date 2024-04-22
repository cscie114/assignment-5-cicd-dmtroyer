import * as React from 'react';
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Bronies Central</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/which-pony-am-i">Which Pony am I?</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>CSCI E-114 Assignment 5 // David Troyer</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
