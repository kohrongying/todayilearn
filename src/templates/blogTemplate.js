import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import styles from "./blog.module.scss"

export default function Template({ pageContext,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const { next, previous } = pageContext
  const nextArticle = next && (
    <div className={styles.more_link}>
      <Link to={next.frontmatter.slug}>
        {next.frontmatter.title} &rarr;
      </Link>
    </div>
   )

  const prevArticle = previous && (
    <div className={styles.more_link}>
      <Link to={previous.frontmatter.slug}>
        &larr; {previous.frontmatter.title}
      </Link>
    </div>
   )

  return (
    <Layout>
       <Link to="/">&larr;</Link>
       <div className={styles.blog_post}>
          <p>{frontmatter.date}</p>
          <h1>{frontmatter.title}</h1>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
       </div>

       Read More:
       {prevArticle}
       {nextArticle}
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