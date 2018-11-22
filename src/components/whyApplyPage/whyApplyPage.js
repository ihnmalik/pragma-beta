import React from "react"

import "../../css/main.css"
import "../../css/header.css"

import {connect} from "react-redux"

import EnglishLanguage from "../../site content text/english"
import ArabicLanguage from "../../site content text/arabic"

const WhyApplyPageMain = (props) => (
    <div 
        className="container-fluid col-lg-10" 
        style={props.languageName === 'English' ? {marginTop: "30px", textAlign: "justify",backgroundColor: "#f9f7f2",padding: "50px", alignContent: "center"} : {marginTop: "30px", textAlign: "justify",backgroundColor: "#f9f7f2",padding: "50px", alignContent: "right", textAlign: "right"}}>

      <h1 className={`${props.languageName === 'English' ? 'content-headings-2' : 'content-headings-2-arabic'}`}>{props.language.why1.title1}</h1>

      <h3 className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}>{props.language.why1.subTitle}</h3>
      <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>

        {props.language.why1.description}
     </p>

        <h3  
            className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}
        >
            {props.language.why1.title2}
        </h3>
        <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
            {props.language.why1.description2.main}
        </p>
  
          <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
            {props.language.why1.description2.list.li1}
          </p>
          <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
            {props.language.why1.description2.list.li2}
          </p>
          <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
            {props.language.why1.description2.list.li3}
          </p>
      
        <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>{props.language.why1.lastDescription}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
        languageName: state.language === 'English' ? 'English' : 'Arabic'
    }
}

export default connect(mapStateToProps)(WhyApplyPageMain)