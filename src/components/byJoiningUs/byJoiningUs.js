import React from 'react'
import { Link } from 'gatsby'
import PragmaDeveloper from "../images/pragmaDeveloper"


const ByJoiningUS = () => (
  <div className="container-fluid" style={{padding: "0px 30px"}}>
      <div 
          className="row align-items-center" 
          style={{ 
            backgroundColor: "#f9f7f2", 
            height: "700px", 
          }}>
            <div className="col-sm-6" style={{paddingLeft: "84px"}} >
                  <h1 className="content-sub-headings">You don't get a developer</h1>
                  <p className="headings-sub-details">
                  Once on the Batch, you get access to one of our in-house tech teams. 
                  That’s a Project Manager (who's also a Scrum Master), a UI/UX Designer, 
                  a Lead Developer (Mobile or Web - according to your product), 
                  an Architect overseeing the project, and a back-end developer.
                  </p>
            </div>
            <div className="col-sm-6 align-items-right"  style={{alignContent: "center", textAlign: "center"}}>
                <PragmaDeveloper />
            </div>
      </div>
  </div>
)

export default ByJoiningUS
