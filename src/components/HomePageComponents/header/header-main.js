import React from "react";
import HeaderImg from "../../../images/header.svg"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

import '../../../css/header.css'

const HeaderMain = (props) => (
    <div className="container-fluid" style={{backgroundColor: "#f9f7f2", padding: "30px"}}>
    <div className="container position-relative u-space-3-top z-index-2">
      <div className="row align-items-center" style={props.languageName === 'English' ? {textAlign: "justify"} : {textAlign: "right"}}>
        <div className="col-lg-6 mb6 mb-lg-0">
          <div className="pr-md-6 mb-6">
          <h1 className={`${props.languageName === 'English' ? 'content-headings' : 'content-headings-arabic'}`}>{props.language.main1.title}</h1>
                 <p className={`${props.languageName === 'English' ? 'headings-details' : 'heading-details-arabic'}`} >{props.language.main1.description}</p>
                <button className="ApplyBtnHeader">{props.language.main1.apply}</button>
          </div>
        </div>
        <div className="col-lg-6 mb6 mb-lg-0">
            <img className="w-100" src={HeaderImg} />
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage   ,
        languageName: state.language === 'English' ? 'English' : 'Arabic'
    }
}

export default connect(mapStateToProps)(HeaderMain);
