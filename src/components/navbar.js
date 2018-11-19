import React from 'react'
import { Link } from 'gatsby'
import EnglishLanguage from "../site content text/english"
import ArabicLanguage from "../site content text/arabic"
import { changeLanguage } from "../actions/changeLanguage"

import {connect} from "react-redux"
import "../css/navbar.css"




class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "0px"
    }
    
  }

  
  openNav() {
    this.setState({
      width: "270px"
    })
  }

  closeNav() {
    this.setState({
      width: "0px"
    })
  }

  render() {
    
    return (
      <div
        style={{
          // background: 'rebeccapurple',
          background: "white",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          height: "110px",
          zIndex: "150000"
        }}
      >
        <div
          style={{
            height: "10px",
            background: "#f76268",

          }}
        >

        </div>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0, display: "inline-block" }}>
            <Link
              to="/"
              className="siteTitle"
              style={{
                textDecoration: 'none',
              }}
            >
              {this.props.language.header.title}
            </Link>
          </h1>


          <div id="mySidenav" className="sidenav" style={{ width: this.state.width }}>
            <div>
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={this.closeNav.bind(this)}
              >&times;</a>
            </div>
            <Link className="list" to="/">{this.props.language.navbar.home}</Link>
            <Link className="list" to="/whyApply/">{this.props.language.navbar.whyApply}</Link>
            <Link className="list" to="/blogPage/">{this.props.language.navbar.blog}</Link>
            <Link className="list" to="/aboutUs/">{this.props.language.navbar.about}</Link>
          </div>

          <span
            className="openNavBtn"
            style={{ fontSize: "30px", cursor: "pointer", float: "right" }}
            onClick={this.openNav.bind(this)}
          >&#9776;</span>

            

          <button className="ApplyBtnNavbar">
            Apply Now
          </button>

          <select
                className="slectLangBtnNavbar"
                value={this.props.languageName}
                style={{float: "right", width: "120px"}}
                onChange={e => {
                  this.props.dispatch(changeLanguage(e.target.value));
                }}
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
            </select>

            

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
 
  return {
    languageName: state.language === 'English' ? 'English' :'Arabic',
    language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
  }
}

export default connect(mapStateToProps)(Navbar)

