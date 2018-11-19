import React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import Image from '../components/image'
import Header from "../components/header"
import DevGroup from "../components/HomePageComponents/dev-group/dev-group"
import ByJoiningUS from "../components/HomePageComponents/byJoiningUs/byJoiningUs"
import BuildingSoftware from "../components/HomePageComponents/buildingSoftware/BuildingSoftware"
import StopFunding from "../components/HomePageComponents/stopFunding/stopFunding"
import Footer from "../components/Footer/footer"
import HeaderMain from "../components/HomePageComponents/header/header-main"
import AboutUsSlider from "../components/aboutUsSlider"
import BatchStarup from "../components/HomePageComponents/startups/batchStartups"

import "../css/main.css"
import "../css/header.css"

const IndexPage = () => (
  <Layout >
      <HeaderMain />
      {/* <Header /> */}
      <DevGroup />
      <div style={{textAlign: "center", padding: "20px"}}>
          <p className="join-us-text">By Joining Us</p>
      </div>
      <ByJoiningUS />
      <div style={{textAlign: "center", padding: "20px"}}>
          <p className="join-us-text">Our Team</p>
      </div>
      <AboutUsSlider />
      <div style={{textAlign: "center", padding: "20px"}}>
          <p className="join-us-text">Previous Batch Startups</p>
      </div>
      <BatchStarup />
      <BuildingSoftware />
      <StopFunding />
      {/* <Footer /> */}
  </Layout>
)

export default IndexPage


// <div className="jumbotron" style={{position: "relative"}}>Content</div>
// <h2>Pragma App</h2>
// <h1>Hi people</h1>
// <p>Welcome to your Pragma</p>
// <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//   <Image />
// </div>