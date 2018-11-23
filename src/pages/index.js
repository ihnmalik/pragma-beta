import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import DevGroup from "../components/HomePageComponents/dev-group/dev-group"
import ByJoiningUS from "../components/HomePageComponents/byJoiningUs/byJoiningUs"
import BuildingSoftware from "../components/HomePageComponents/buildingSoftware/BuildingSoftware"
import StopFunding from "../components/HomePageComponents/stopFunding/stopFunding"
import HeaderMain from "../components/HomePageComponents/header/header-main"
import AboutUsSlider from "../components/aboutUsSlider"
import BatchStarup from "../components/HomePageComponents/startups/batchStartups"


import "../css/main.css"
import "../css/header.css"

const IndexPage = () => (
    <Layout >
        <HeaderMain />
        <DevGroup />
        <ByJoiningUS />
        <AboutUsSlider />
        <BatchStarup />
        <BuildingSoftware />
        <StopFunding />
    </Layout>
  )
  
  export default IndexPage

