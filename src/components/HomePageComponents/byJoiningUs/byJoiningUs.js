import React from 'react'
import { Link } from 'gatsby'
import PragmaDeveloper from "../../images/pragmaDeveloper"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const ByJoiningUS = (props) => (
  <div className="container-fluid">
        <div style={{textAlign: "center", padding: "20px"}}>
            <p className="join-us-text">{props.language.main3.titleMain}</p>
        </div>
    <div className={`row ${props.languageName === 'English' ? 'main-header-div' : 'main-header-div-arabic'}`} >
      <div className="col-sm-6 container" style={{ display: "flex", padding: "40px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
        <h1 className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}> {props.language.main3.subTitle}</h1>
        <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
         {props.language.main3.description}
        </p>
      </div>
      <div className="col-sm-6 container">
        <div className="img-class" ><PragmaDeveloper /></div>
      </div>
    </div>
      <div style={{textAlign: "center", padding: "20px"}}>
            <p className="join-us-text">{props.language.main4.titleMain}</p>
        </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
      languageName: state.language === 'English' ? 'English' : 'Arabic'

  }
}

export default  connect(mapStateToProps)(ByJoiningUS)
