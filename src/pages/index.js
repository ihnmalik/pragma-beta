import React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import Image from '../components/image'
import Header from "../components/header"
import DevGroup from "../components/dev-group/dev-group"
import ByJoiningUS from "../components/byJoiningUs/byJoiningUs"
import BuildingSoftware from "../components/buildingSoftware/BuildingSoftware"
import StopFunding from "../components/stopFunding/stopFunding"
import Footer from "../components/Footer/footer"

import "../css/main.css"

const IndexPage = () => (
  // <div>
  //   <Layout />
  //   <Header />
  // </div>
  <Layout>
    <Header />
    <DevGroup />
    <div style={{textAlign: "center", padding: "20px"}}>
        <h1 className="content-headings">By Joining Us</h1>
    </div>
    <ByJoiningUS />
    <BuildingSoftware />
    <StopFunding />
    <Link to="/page-2/">Go to page 2</Link>
    <Footer />
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