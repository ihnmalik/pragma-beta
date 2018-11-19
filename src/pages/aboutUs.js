import React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import "../css/main.css"
import AboutUsSlider from "../components/aboutUsSlider"

const AboutUsPage = () => (
  <Layout>
    <div className="Page-Contents container-fluid">
        <div className="container about-page-container-div" >
            <h1 className="content-headings-2">
              We’re Hiring!
            </h1>

            <br />

            <span className="content-sub-headings">
              We're headquartered in NYC, backed by some of 
              Silicon Valley's best investors, and have 
              teammates all over the world.
            </span>
   
          
            <br />
            <br />
            <br />
            <h1 className="content-sub-headings">
              Our Mission 
            </h1>
            <p className="headings-details">
              The Lobby was founded on the belief that neither your 
              school nor background should limit your access to the 
              insights and knowledge that can help you land the best 
              jobs in the world. We’re on a mission to democratize 
              access to the world’s most coveted jobs and make the 
              hiring process more meritocratic than it is today.
            </p>
            <br />
            <br />
            <br />
            <br />

          <h1 className="content-headings-2">All Team Members</h1>

          <div className="row" >
            <div className="col-sm-3" >
              <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/11/xfreddie.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.X9S8A5J_bd.jpg" alt="programmer-img"/>
              <h4>Stephan</h4>
              <p>Technology Lead</p>
            </div>
            <div className="col-sm-3" >
              <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/12/650x433x5squinch.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.YMwUJfJSjj.jpg" alt="programmer-img"/>
              <h4>Lewis</h4>
              <p>Growth & Operations</p>
            </div>
            <div className="col-sm-3">
              <img className="team-img" src="https://fast.clickbooq.com/0bea33-774/Reithofer-lg.jpg" alt="programmer-img"/>
              <h4>Mark</h4>
              <p>Full Stack Lead Developer</p>
            </div>
            <div className="col-sm-3">
              <img className="team-img" src="http://www.scuk.cz/uploads/avatars/petr.s.jpg" alt="programmer-img"/>

              <h4>John</h4>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
    </div>
    
  </Layout>
      )
      
      export default AboutUsPage
      
      
