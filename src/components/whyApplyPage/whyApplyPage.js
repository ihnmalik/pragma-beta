import React from "react"

import "../../css/main.css"
import "../../css/header.css"

import {connect} from "react-redux"

import EnglishLanguage from "../../site content text/english"
import ArabicLanguage from "../../site content text/arabic"

const WhyApplyPageMain = (props) => (
    <div className="container-fluid col-lg-8" style={{marginTop: "30px", padding: "30px", textAlign: "justify"}}>

      <h1 className="content-headings-2">{props.language.why1.title1}</h1>

      <h3 className="content-sub-headings">{props.language.why1.subTitle}</h3>
      <p className="headings-sub-details">

        {props.language.why1.description}
     </p>

        <h3  className="content-sub-headings">{props.language.why1.title2}</h3>
        <p className="headings-sub-details">{props.language.why1.description2.main}</p>
        <ul>
          <li className="heading-sub-details">{props.language.why1.description2.list.li1}</li>
          <li className="heading-sub-details">{props.language.why1.description2.list.li2}</li>
          <li className="heading-sub-details">{props.language.why1.description2.list.li3}</li>
        </ul>

        <p className="headings-sub-details">{props.language.why1.lastDescription}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
    }
}

export default connect(mapStateToProps)(WhyApplyPageMain)