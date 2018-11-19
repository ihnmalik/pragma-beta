import React from "react";
import HeaderImg from "../../images/headerImg"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

import '../../../css/header.css'

const HeaderMain = (props) => (
    <div className="container-fluid">
        <div className="row main-header-div" >
            <div className="col-sm-6 container" style={{zIndex: "1000",display: "flex", padding:"40px", alignContent: "center",  justifyContent: "center", flexDirection: "column"}}>
                <h1 className="content-headings">{props.language.main1.title}</h1>
                <p className="headings-details">{props.language.main1.description}</p>
                <button className="ApplyBtnHeader">{props.language.main1.apply}</button>
            </div>
            <div className="col-sm-6 container"> 
                <div className="img-class" ><HeaderImg /></div>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
    }
}

export default connect(mapStateToProps)(HeaderMain);