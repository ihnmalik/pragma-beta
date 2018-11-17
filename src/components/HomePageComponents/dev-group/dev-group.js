import React from 'react'
import { Link } from 'gatsby'

import PragmaNetwork from "../../images/pragma-network"

const DevGroup = () => (
  <div className="container-fluid" style={{padding: "0px 30px"}}>
      <div 
          className="row align-items-center" 
          style={{ 
            backgroundColor: "#FBFAF7", 
            height: "700px", 
          }}>
            <div className="col-sm-6 " style={{alignContent: "center", textAlign: "center"}} >
                <PragmaNetwork />
            </div>

            <div className="col-sm-6" style={{textAlign: "justify"}} >
                <h4 
                    className="content-sub-headings"
                >
                    <b style={{color: "#f76268"}}>Pragma </b> 
                    is a group of developers, product hackers, and startup enthusiasts,
                    who build your Tech Product on a bootstrap-friendly payment plan.
                </h4>
                  <p className="headings-sub-details">
                        Together with the other selected startups on the batch, 
                        you get to build your Minimum Viable Product with an experienced 
                        tech team on a tailored leasing contract. You can get started with 
                        a 14% down payment while the remaining sum is spread over 18 monthly 
                        installments. And since we wouldn’t want you to keep funding something 
                        once you’ve decided it’s not getting the traction you expected, you only 
                        commit to 6 months out of the 18 months. To fully share the risk and the 
                        reward, we ask for a 3% stake in each startup.
                  </p>
            </div>
      </div>
  </div>
)

export default DevGroup
