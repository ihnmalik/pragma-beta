import React from 'react'
import { Link } from 'gatsby'
import EnglishLanguage from '../site content text/english'
import ArabicLanguage from '../site content text/arabic'
import { changeLanguage } from '../actions/changeLanguage'
import SiteLogo from './logo.svg'
import { connect } from 'react-redux'
import '../css/navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0px',
    }
  }

  openNav() {
    this.setState({
      width: '270px',
    })
  }

  closeNav() {
    this.setState({
      width: '0px',
    })
  }

  render() {
    return (
      <div
        style={{
          // background: 'rebeccapurple',
          background: 'white',
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
          height: '110px',
          zIndex: '150000',
        }}
      >
        <div
          style={{
            height: '10px',
            background: '#f76268',
          }}
        />

        <div className="navbar-bootstrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container container-nav mt-4" >
              <Link className="navbar-brand text-light" to="/">
                <img src={SiteLogo} />
              </Link>
              <button
                className="navbar-toggler navbar-dark"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav navbar-right ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link nav-link-font" to="/whyApply/">
                      {this.props.language.navbar.whyApply}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-link-font" to="/blogPage/">
                      {this.props.language.navbar.blog}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-link-font" to="/aboutUs/">
                      {this.props.language.navbar.about}
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <button className="btn btn-outline-danger my-2 my-sm-0" style={{borderRadius: "20px"}}>
                      Apply Now
                    </button>
                  </li>

                   <li className="nav-item">
                    <select
                      className="btn btn-outline-danger "
                      value={this.props.languageName}
                     
                      onChange={e => {
                        this.props.dispatch(changeLanguage(e.target.value))
                      }}
                    >
                      <option value="English">English</option>
                      <option value="Arabic">Arabic</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Hamburger Navbar for small screens */}
        <div
          className="Humburger-Navbar"
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0, display: 'inline-block' }}>
            <Link
              to="/"
              className="siteTitle"
              style={{
                textDecoration: 'none',
                width: "5px",
                height: "5px"
              }}
            >
              <img src={SiteLogo} width="110" />
            </Link>
          </h1>

          <div
            id="mySidenav"
            className="sidenav"
            style={{ width: this.state.width }}

            style={this.props.languageName === 'English' ? {width: this.state.width} : {width: this.state.width, textAlign: "right"}}
          >
            <div>
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={this.closeNav.bind(this)}
              >
                &times;
              </a>
            </div>
            <Link className="list" to="/">
              {this.props.language.navbar.home}
            </Link>
            <Link className="list" to="/whyApply/">
              {this.props.language.navbar.whyApply}
            </Link>
            <Link className="list" to="/blogPage/">
              {this.props.language.navbar.blog}
            </Link>
            <Link className="list" to="/aboutUs/">
              {this.props.language.navbar.about}
            </Link>
         
          </div>

          <span
            className="openNavBtn"
            style={{ fontSize: '30px', cursor: 'pointer', float: 'right' }}
            onClick={this.openNav.bind(this)}
          >
            &#9776;
          </span>

        

          <select
            className="slectLangBtnNavbar"
            value={this.props.languageName}
            onChange={e => {
              this.props.dispatch(changeLanguage(e.target.value))
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

const mapStateToProps = state => {
  return {
    languageName: state.language === 'English' ? 'English' : 'Arabic',
    language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
  }
}

export default connect(mapStateToProps)(Navbar)
