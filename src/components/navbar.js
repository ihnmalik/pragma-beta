import React from 'react'
import { Link } from 'gatsby'


const Navbar = ({ siteTitle }) => (
  <div
    style={{
        // background: 'rebeccapurple',
        background: "white",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        height: "100px"
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="siteTitle"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Navbar
