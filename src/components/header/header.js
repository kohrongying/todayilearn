import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = ({ post }) => (
  <div>
    <Link to="/">
      <h1 className={styles.header}>todayilearn</h1>
    </Link>
  </div>
)

export default Header