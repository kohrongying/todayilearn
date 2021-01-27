import React from "react"
import styles from "./footer.module.scss"

export default function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
}