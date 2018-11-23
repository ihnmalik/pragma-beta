import React from 'react'
import { Link } from 'gatsby'
import PragmaDevGroupImg from "../../../images/pragma-funding.svg"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const StopFunding = (props) => (
  <div className="container-fluid" style={{backgroundColor: "#f9f7f2", padding: "30px"}}>
    <div className="container position-relative u-space-3-top z-index-2">
      <div className="row align-items-center" style={props.languageName === 'English' ? {textAlign: "justify"} : {textAlign: "right"}}>
        <div className="col-lg-6 mb6 mb-lg-0">
          <div className="pr-md-6 mb-6">
              <h1 className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}>{props.language.main7.title}</h1>
              <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
                  {props.language.main7.description}
              </p>
          </div>
        </div>
        <div className="col-lg-6 mb6 mb-lg-0">
            <img className="w-100" src={PragmaDevGroupImg} />
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
      languageName: state.language === 'English' ? 'English' : 'Arabic'

  }
}

export default  connect(mapStateToProps)(StopFunding)



