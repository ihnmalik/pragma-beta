import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <div className="row">
            <div className="col-lg-8">
                <h1 className="mt-4">{title}</h1>
                <hr />
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div class="col-lg-4">
                <div className="card my-3">
                    <h5 class="card-header">Advertisement</h5>
                    <div class="card-body">
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
                <div className="card my-3">
                    <h5 class="card-header">Advertisement</h5>
                    <div class="card-body">
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
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
