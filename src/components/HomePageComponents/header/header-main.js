import React from "react";
import HeaderImg from "../../images/headerImg"

import '../../../css/header.css'

const HeaderMain = () => (
    <div className="container-fluid">
        <div className="row main-header-div" >
            <div className="col-sm-6 container" style={{zIndex: "1000",display: "flex", padding:"40px", alignContent: "center",  justifyContent: "center", flexDirection: "column"}}>
                <h1 className="content-headings">Your Technical Co-Founder</h1>
                <p className="headings-details">We help non-technical founders get started on their product.</p>
                <button className="ApplyBtnHeader">Apply Now</button>
            </div>
            <div className="col-sm-6 container"> 
                <div className="img-class" ><HeaderImg /></div>
            </div>
        </div>
    </div>
)

export default HeaderMain;