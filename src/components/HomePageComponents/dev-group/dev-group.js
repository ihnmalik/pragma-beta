import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import EnglishLanguage from '../../../site content text/english'
import ArabicLanguage from '../../../site content text/arabic'

import PragmaNetwork2 from '../../../images/pragma-dev-group.svg'

const DevGroup = props => (
  <div className="container-fluid" style={{padding: "30px"}}>
    <div className="container position-relative u-space-3-top z-index-2">
      <div className="row align-items-center" style={props.languageName === 'English' ? {textAlign: "justify"} : {textAlign: "right"}}>
        <div className="col-lg-6 mb6 mb-lg-0">
          <img className="w-100" src={PragmaNetwork2} />
        </div>
        <div className="col-lg-6 mb6 mb-lg-0">
          <div className="pr-md-6 mb-6">
            <h4
              className={`${
                props.languageName === 'English'
                  ? 'content-sub-headings'
                  : 'content-sub-headings-arabic'
              }`}
            >
              {props.language.main2.title}
            </h4>
            <p className="headings-sub-details">
              {props.language.main2.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
    languageName: state.language === 'English' ? 'English' : 'Arabic',
  }
}

export default connect(mapStateToProps)(DevGroup)
