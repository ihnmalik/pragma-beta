import React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import "../css/main.css"

const AboutUsPage = () => (
  <Layout>
    <div className="Page-Contents container-fluid">
        <h1 >About Us Page</h1>
        <p>Welcome to page 2</p>
       <Link to="/"> <h2>Go back to the homepage</h2></Link>
    </div>
  </Layout>
)

export default AboutUsPage
