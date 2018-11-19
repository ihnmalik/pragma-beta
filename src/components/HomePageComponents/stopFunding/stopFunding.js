import React from 'react'
import { Link } from 'gatsby'
import PragmaDevGroupImg from "../../images/devGroupImg"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const StopFunding = (props) => (
  <div className="container-fluid">
    <div className="row main-header-div" >
      <div className="col-sm-6 container" style={{ display: "flex", padding: "40px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
        <h1 className="content-sub-headings">{props.language.main7.title}</h1>
        <p className="headings-sub-details">
            {props.language.main7.description}
        </p>
      </div>
      <div className="col-sm-6 container">
        <div className="img-class" ><PragmaDevGroupImg /></div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
  }
}

export default  connect(mapStateToProps)(StopFunding)

