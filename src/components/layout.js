import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from "./Footer/footer"
import { Provider } from "react-redux";
// import Header from './header'
import Navbar from "./navbar"
// import './layout.css'
import configureStore from '../store/configureStore';

const store = configureStore()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Provider store={store}>
        <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: "120px",
          }}
        >
          {children}
        </div>
        <Footer />
        </div>
      </ Provider >
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
