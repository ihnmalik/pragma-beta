import React from 'react'
import { Link } from 'gatsby'
import PragmaDeveloper from "../../images/pragmaDeveloper"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const ByJoiningUS = (props) => (
  <div className="container-fluid">
        <div style={{textAlign: "center", padding: "20px"}}>
            <p className="join-us-text">By Joining Us</p>
        </div>
    <div className="row main-header-div" >
      <div className="col-sm-6 container" style={{ display: "flex", padding: "40px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
        <h1 className="content-sub-headings"> {props.language.main3.subTitle}</h1>
        <p className="headings-sub-details">
         {props.language.main3.description}
        </p>
      </div>
      <div className="col-sm-6 container">
        <div className="img-class" ><PragmaDeveloper /></div>
      </div>
    </div>
      <div style={{textAlign: "center", padding: "20px"}}>
            <p className="join-us-text">Our Team</p>
        </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
  }
}

export default  connect(mapStateToProps)(ByJoiningUS)
