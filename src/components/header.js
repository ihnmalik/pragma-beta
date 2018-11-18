import React from 'react'
import { Link } from 'gatsby'
import HeaderImg from "./images/headerImg"

import "../css/header.css"

const Header = () => (
  <div className="container-fluid " style={{height: "700px", backgroundColor: "#f9f7f2"}}>
    <div className="row " style={{padding: "20px"}} >
        <div className="col-sm-6 container" style={{ zIndex: "10000", margin: "0 auto"}}>
          <h1 className="content-headings">Your Technical<br /> Co-Founder</h1>
          <p className="headings-details">We help non-technical founders get started on their product.</p>
          <button className="ApplyBtnHeader">Apply Now</button>
        </div>
        <div className="col-sm-6 container" >
          <div style={{maxWidth: '300px', maxHeight: "50px"}}><HeaderImg /></div>
        </div>
    </div>
  </div>
)

export default Header

// <div style={{paddingTop: "40px", paddingRight: "30px", paddingLeft: "30px"}}>
// <div 
//     className="row align-items-center container" 
//     style={{ 
//       backgroundColor: "#f9f7f2", 
//       height: "700px", 
//       marginTop: "70px",
//       padding: "20px"
//     }}>
//       <div className="col-sm-6 container" style={{ zIndex: "10000"}} >
//             <h1 className="content-headings">Your Technical<br /> Co-Founder</h1>
//             <p className="headings-details">We help non-technical founders get started on their product.</p>
//             <button className="ApplyBtnHeader">Apply Now</button>
//       </div>
//       <div className="col-sm-6 container"  style={{alignContent: "center", textAlign: "center"}}>
//           <HeaderImg />
//       </div>
// </div>
// </div>

// ![alt text]('/gatsby-astronaut.png')

{/* <div className="container" style={{padding: "0px 30px"}}>
    <div 
        className="row " 
        style={{ 
          backgroundColor: "white", 
          height: "700px", 
        }}>
          <div className="col-sm-6 container" style={{alignContent: "center", textAlign: "center"}} >
              <PragmaBuilding />
          </div>

          <div className="col-sm-6 container" style={{textAlign: "justify"}} >
              <h4 
                  className="content-sub-headings"
              >
                  You are not building just software
              </h4>
                <p className="headings-sub-details">
                    Neither are we. And that is exactly why we chose to work 
                    exclusively with Startups. Keeping in sight the grand vision 
                    of building a Tech company highly benefits the collaboration 
                    and the product. Surely it comes with some pressure and many    
                    caffeinated all-nighters, but we’re just as hooked as you are.
                </p>
          </div>
    </div>
</div> */}