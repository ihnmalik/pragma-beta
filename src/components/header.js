import React from 'react'
import { Link } from 'gatsby'
import HeaderImg from "./images/headerImg"

import "../css/header.css"

const Header = () => (
  <div className="container-fluid" style={{padding: "30px"}}>
      <div 
          className="row align-items-center" 
          style={{ 
            backgroundColor: "#f9f7f2", 
            height: "700px", 
            marginTop: "70px"
          }}>
            <div className="col-sm-6" style={{paddingLeft: "84px"}} >
                  <h1 className="content-headings">Your Technical<br /> Co-Founder</h1>
                  <p className="headings-details">We help non-technical founders get started on their product.</p>
            </div>
            <div className="col-sm-6 align-items-right" >
                <HeaderImg />
            </div>
      </div>
  </div>
)

export default Header
