import React from 'react'
import { Link } from 'gatsby'
import PragmaBuilding from "../../images/buildingSoftware"


const BuildingSoftware = () => (
    <div className="container-fluid" style={{padding: "0px 30px"}}>
    <div 
        className="row align-items-center" 
        style={{ 
          backgroundColor: "white", 
          height: "700px", 
        }}>
          <div className="col-sm-6 " style={{alignContent: "center", textAlign: "center"}} >
              <PragmaBuilding />
          </div>

          <div className="col-sm-6" style={{textAlign: "justify"}} >
              <h4 
                  className="content-sub-headings"
              >
                  You are not building just software
              </h4>
                <p className="headings-sub-details">
                    Neither are we. And that is exactly why we chose to work 
                    exclusively with Startups. Keeping in sight the grand vision 
                    of building a Tech company highly benefits the collaboration 
                    and the product. Surely it comes with some pressure and many    
                    caffeinated all-nighters, but we’re just as hooked as you are.
                </p>
          </div>
    </div>
</div>
)

export default BuildingSoftware
