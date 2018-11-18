import React from 'react'
import { Link } from 'gatsby'
import PragmaDevGroupImg from "../../images/devGroupImg"


const StopFunding = () => (
  <div className="container-fluid">
    <div className="row main-header-div" >
      <div className="col-sm-6 container" style={{ display: "flex", padding: "40px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
        <h1 className="content-sub-headings">You will stop looking for funding</h1>
        <p className="headings-sub-details">
          Our payment plan is specifically tailored for bootstrapping founders.
          You can get started on your project with a 14% down payment while the
          rest of the development cost is spread over 18 months. With the advised
          scope, you should have a first version within 5 to 8 months, so you can
          test your market and decide whether you want to pursue. At best, your
          project gets the traction you’re aiming for and starts paying for its
          own development, at worst you can cancel the next month, with up to
          60% of the (built) project’s cost forgiven.
                  </p>
      </div>
      <div className="col-sm-6 container">
        <div className="img-class" ><PragmaDevGroupImg /></div>
      </div>
    </div>
  </div>
)

export default StopFunding

// <div className="container-fluid" style={{padding: "0px 30px"}}>
//       <div 
//           className="row align-items-center" 
//           style={{ 
//             backgroundColor: "#f9f7f2", 
//             height: "700px", 
//             marginTop: "70px"
//           }}>
//             <div className="col-sm-6" style={{paddingLeft: "84px"}} >
                  // <h1 className="content-sub-headings">You will stop looking for funding</h1>
                  // <p className="headings-sub-details">
                  //       Our payment plan is specifically tailored for bootstrapping founders. 
                  //       You can get started on your project with a 14% down payment while the 
                  //       rest of the development cost is spread over 18 months. With the advised 
                  //       scope, you should have a first version within 5 to 8 months, so you can 
                  //       test your market and decide whether you want to pursue. At best, your 
                  //       project gets the traction you’re aiming for and starts paying for its 
                  //       own development, at worst you can cancel the next month, with up to 
                  //       60% of the (built) project’s cost forgiven.
                  // </p>
//             </div>
//             <div className="col-sm-6 align-items-right"  style={{alignContent: "center", textAlign: "center"}}>
//                 <PragmaDevGroupImg />
//             </div>
//       </div>
//   </div>