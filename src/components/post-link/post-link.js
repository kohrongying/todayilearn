import React from "react"
import { Link } from "gatsby"
import styles from "./post-link.module.scss"

const PostLink = ({ post }) => (
   <div className={styles.component}>
      <p className={styles.date}>{post.frontmatter.date}</p>

      <Link to={post.frontmatter.slug} className={styles.title}>
        {post.frontmatter.title}
      </Link>
  </div>
)

export default PostLink