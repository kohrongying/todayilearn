import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import styles from "./blog.module.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
       <Link to="/">&larr;</Link>
       <div className="blog-post">
          <p>{frontmatter.date}</p>
          <h1>{frontmatter.title}</h1>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
     </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`