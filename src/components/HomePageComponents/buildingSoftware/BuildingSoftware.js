import React from 'react'
import { Link } from 'gatsby'
import PragmaBuilding from "../../images/buildingSoftware"
import {connect} from "react-redux"

import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

const BuildingSoftware = (props) => (

    <div className="container-fluid">
    <div className="row main-header-div-2" >
        <div className="col-sm-6 container">
            <div className="img-class"><PragmaBuilding /></div>
        </div>
        <div className="col-sm-6 container" style={{ display: "flex", padding: "30px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
            <h4
                className="content-sub-headings"
            >
               {props.language.main6.title}
            </h4>
            <p className="headings-sub-details">
            {props.language.main6.description}
              </p>
        </div>

    </div>
</div>
)
const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage
    }
}

export default connect(mapStateToProps)(BuildingSoftware)


