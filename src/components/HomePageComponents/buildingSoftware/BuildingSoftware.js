import React from 'react'
import { Link } from 'gatsby'
import PragmaBuilding from "../../images/buildingSoftware"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const BuildingSoftware = (props) => (

    <div className="container-fluid">
    <div className={`row ${props.languageName === 'English' ? 'main-header-div' : 'main-header-div-arabic'}`}  >
        <div className="col-sm-6 container">
            <div className="img-class"><PragmaBuilding /></div>
        </div>
        <div className="col-sm-6 container" style={{ display: "flex", padding: "30px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
            <h4
                className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}
            >
               {props.language.main6.title}
            </h4>
            <p className={`${props.languageName === 'English' ? 'heading-sub-details' : 'heading-sub-details-arabic'}`}>
            {props.language.main6.description}
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

export default connect(mapStateToProps)(BuildingSoftware)


