import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <div className="Page-Contents">
      <h1 >Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/"><h2>Go back to the homepage</h2></Link>
    </div>
  </Layout>
)

export default SecondPage
