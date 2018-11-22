import React from 'react'
import { Link } from 'gatsby'
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

import PragmaNetwork from "../../images/pragma-network"
// import PragmaNetwork from "../../../images/pragma-dev-group.svg"
import HeaderImg from "../../images/headerImg"

const DevGroup = (props) => (

    <div className="container-fluid">
        <div className={`row ${props.languageName === 'English' ? 'main-header-div-2' : 'main-header-div-2-arabic'}`}  >
            <div className="col-sm-6 container">
                <div className="img-class"><PragmaNetwork /></div>
                {/* <div className="img-class"><img src={PragmaNetwork} /></div> */}
            </div>
            <div className="col-sm-6 container" style={{ display: "flex", padding: "40px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
                <h4
                    className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}
                >
                    {props.language.main2.title}
                </h4>
                <p className="headings-sub-details">
                   {props.language.main2.description}
                  </p>
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

export default connect(mapStateToProps)(DevGroup)


