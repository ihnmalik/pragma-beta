import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <div className="row container">
            <div className="col-lg-10" style={{margin: "0 auto"}}>
                <h1 className="mt-4">{title}</h1>
                <hr />
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            
            </div>
        </Layout>
    )
}


export default BlogPost;

export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
}`