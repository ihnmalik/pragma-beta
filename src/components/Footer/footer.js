import React from "react";

import FacebookLogo from "../../images/facebook-logo.png"
import TwitterLogo from "../../images/twitter-log.png"

import "../../css/footer.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer-container">
                <div className="row" style={{padding: "0px 30px"}}>
                    <div className="col-sm-6">
                        <h3>pragm<b><u>a</u></b></h3>
                    </div>
                    <div className="col-sm-2">
                        {/* <p><b>DEVELOPERS</b></p>
                        <p><a href="#">Documentation</a></p>
                        <p><a href="#">Github</a></p>
                        <p><a href="#">API status</a></p> */}
                    </div>
                    <div className="col-sm-2">
                        {/* <p><b>RESOURCES</b></p>
                        <p><a href="#">Terms & conditions</a></p>
                        <p><a href="#">Privacy Policy</a></p> */}
                    </div>
                    <div className="col-sm-2">
                        <p><b>Contact Us</b></p>
                        <p><a href="#" className="social-links"><img src={FacebookLogo} width="20px" height="20px"/>{' '}Facebook</a></p>
                        <p><a href="#" className="social-links"><img src={TwitterLogo} width="20px" height="20px"/>{' '}Twitter</a></p>
        
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;