import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link/post-link"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Layout from "../components/layout/layout"
import styles from "./index.module.scss"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout showHeader={false}>
  
      <Header />

      <div className={styles.columns}>
        {Posts}
      </div>

      <Footer>
        Find me <a href="https://rongying.co">here</a>
      </Footer>

    </Layout>
  )

}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 25)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`