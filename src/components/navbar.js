import React from 'react'
import { Link } from 'gatsby'

import "../css/navbar.css"
import { runInThisContext } from 'vm';

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.siteTitle,
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
              {this.state.title}
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
            <Link className="list" to="/">Home</Link>
            <Link className="list" to="/whyApply/">Why Apply</Link>
            <Link className="list" to="/blogPage/">Blog</Link>
            <Link className="list" to="/aboutUs/">About Us</Link>
            <Link className="list" to="/contactUsPage/">Contact Us</Link>
          </div>

          <span
            className="openNavBtn"
            style={{ fontSize: "30px", cursor: "pointer", float: "right" }}
            onClick={this.openNav.bind(this)}
          >&#9776;</span>
            
              <button className="ApplyBtnNavbar">
                Apply Now
              </button>

          
        </div>

      </div>
    )
  }
}

export default Navbar


// const Navbar = ({ siteTitle }) => (
//   <div
//     style={{
//         // background: 'rebeccapurple',
//         background: "white",
//         position: "fixed",
//         width: "100%",
//         zIndex: 1000,
//         height: "110px"
//     }}
//   > 
//     <div
//       style={{
//         height: "10px",
//         background: "#f76268"
//       }}
//     >

//     </div>
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           className="siteTitle"
//           style={{
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>

//       <div id="mySidenav" className="sidenav">
//         <a href="javascript:void(0)" className="closebtn" >&times;</a>
//         <a href="#">About</a>
//         <a href="#">Services</a>
//         <a href="#">Clients</a>
//         <a href="#">Contact</a>
//       </div>

//       <span style={{fontSize: "30px", cursor: "pointer"}} >&#9776; open</span>
//     </div>
//   </div>
// )

