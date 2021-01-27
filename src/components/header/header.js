import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => (
  <div>
    <Link className={styles.header} to="/">
      <h1>today i learn</h1>
    </Link>
  </div>
)

export default Header