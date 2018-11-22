import React from 'react'
import { connect } from "react-redux"

import QuickTixImg from "../../../images/startupimages/quicktix.png"
import CountupImg from "../../../images/startupimages/countup.png"
import FilzImg from "../../../images/startupimages/filz.png"
import SealedImg from "../../../images/startupimages/sealed.png"
import FinchImg from "../../../images/startupimages/finch.png"
import TrippleImg from "../../../images/startupimages/tripple.png"


import EnglishLanguage from "../../../site content text/english"
import ArabicLanguage from "../../../site content text/arabic"

import '../../../css/header.css'

class BatchStartup extends React.Component {
    render () {

        return (
            <div className="container-fluid main-startup-div" style={{textAlign: "center", alignContent:"center"}}>
            
                <div style={{textAlign: "center", padding: "20px"}}>
                    <p className="join-us-text">{this.props.language.main5.titleMain}</p>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6" >

                        <div className="card text-center startup-card" >
                            <img className="card-img-top" src={QuickTixImg} alt="Card image cap"></img>

                           
                        </div>

                        <div className="card text-center startup-card ">
                            <img className="card-img-top" src={CountupImg} alt="Card image cap"></img>

                            
                        </div>

                        <div className="card text-center startup-card" >
                            <img className="card-img-top" src={FilzImg} alt="Card image cap"></img>

                          
                        </div>

                        <div className="card text-center startup-card">
                            <img className="card-img-top" src={SealedImg} alt="Card image cap"></img>

                        </div>

                        <div className="card text-center startup-card">
                            <img className="card-img-top" src={FinchImg} alt="Card image cap"></img>
                        </div>

                        <div className="card text-center startup-card">
                            <img className="card-img-top" src={TrippleImg} alt="Card image cap"></img>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
        languageName: state.language === 'English' ? 'English' : 'Arabic'
    }
}

export default connect(mapStateToProps)(BatchStartup)

