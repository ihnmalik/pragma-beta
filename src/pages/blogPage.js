import React from 'react'
import { Link, graphql } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'


import "../css/main.css"

const BlogPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <div className="container-fluid" style={{ padding: "50px" }}>
        {postList.edges.map(({ node }, i) => (
          <Link key={Math.random()} to={node.fields.slug} className="link" style={{ textDecoration: "none" }} >

            <div className="container u-space-4-top u-space-5-top--md u-space-4-top--lg u-space-3-bottom" style={{ marginTop: "30px", textAlign: "justify" }}>
              <div className="w-lg-80 mx-auto mb-9">
              </div>


              <div className="w-lg-80 mx-auto" >

                <article className="row mb-7">
                  <div className="col-sm-5 mb-5 mb-sm-0">
                    <img className="img-fluid w-100 rounded" src="https://www.bloggersingapore.com/wp-content/uploads/2018/07/blog_post.jpg" className="img-fluid" alt="" />
                  </div>

                  <div className="col-sm-7">

                    <div className="pt-1 pr-4">
                      <small className="d-block text-muted mb-3">{node.frontmatter.date}</small>
                      <div className="mb-7">
                        <h2 className="h5" className="blog-title content-sub-headings">
                          {node.frontmatter.title}
                        </h2>
                        <p className="blog-title">{node.excerpt}</p>
                      </div>
                    </div>

                  </div>
                </article>


              </div>
            </div>

          </Link>
        ))}
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
