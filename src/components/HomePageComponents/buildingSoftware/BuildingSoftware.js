import React from 'react'
import { Link } from 'gatsby'
import PragmaBuilding from "../../images/buildingSoftware"


const BuildingSoftware = () => (

    <div className="container-fluid">
    <div className="row main-header-div-2" >
        <div className="col-sm-6 container">
            <div className="img-class"><PragmaBuilding /></div>
        </div>
        <div className="col-sm-6 container" style={{ display: "flex", padding: "30px", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
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




// <div className="container" style={{padding: "0px 30px"}}>
// <div 
//     className="row " 
//     style={{ 
//       backgroundColor: "white", 
//       height: "700px", 
//     }}>
//       <div className="col-sm-6 container" style={{alignContent: "center", textAlign: "center"}} >
//           <PragmaBuilding />
//       </div>

//       <div className="col-sm-6 container" style={{textAlign: "justify"}} >
//           <h4 
//               className="content-sub-headings"
//           >
//               You are not building just software
//           </h4>
//             <p className="headings-sub-details">
//                 Neither are we. And that is exactly why we chose to work 
//                 exclusively with Startups. Keeping in sight the grand vision 
//                 of building a Tech company highly benefits the collaboration 
//                 and the product. Surely it comes with some pressure and many    
//                 caffeinated all-nighters, but we’re just as hooked as you are.
//             </p>
//       </div>
// </div>
// </div>