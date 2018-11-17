import React from "react";

import "../../css/footer.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>pragm<b><u>a</u></b></h3>
                    </div>
                    {/* <div className="col-sm-2">
                        <p><b>DEVELOPERS</b></p>
                        <p><a href="#">Documentation</a></p>
                        <p><a href="#">Github</a></p>
                        <p><a href="#">API status</a></p>
                    </div>
                    <div className="col-sm-2">
                        <p><b>RESOURCES</b></p>
                        <p><a href="#">Terms & conditions</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                    </div>
                    <div className="col-sm-2">
                        <p><b>SUPPORT</b></p>
                        <p><a href="#">Help Center</a></p>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">Email</a></p>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Footer;