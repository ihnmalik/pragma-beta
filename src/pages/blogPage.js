import React from 'react'
import { Link, graphql  } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'


import "../css/main.css"

const BlogPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
    <div className="container-fluid" style={{padding: "50px"}}>
      {postList.edges.map(({ node }, i) => (
        <Link key={Math.random()} to={node.fields.slug} className="link" style={{textDecoration: "none"}} >
          <div className="card" style={{marginTop: "20px", border: "2px solid #f76268"}}>
          <div className="row no-gutters">
                <div className="col-auto">
                    <img src="//placehold.it/200" className="img-fluid" alt="" />
                </div>
                <div className="col" style={{padding: "20px"}}>
                    <div className="card-block px-2">
                        <h4 className="card-title">{node.frontmatter.title}</h4>
                        <p className="card-text" >{node.excerpt}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer w-100" style={{color:"white",background: "#f76268"}}>
              {node.frontmatter.date}
            </div>
          </div>
        </Link>
      ))}
       <Link to="/"> <h2>Go back to the homepage</h2></Link>
    </div>
  </Layout>
  )
}
  


export default BlogPage


export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
