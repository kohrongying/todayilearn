import React from "react"
import styles from "./layout.module.scss"
import "@fontsource/libre-baskerville"

export default function Layout({ children, showHeader }) {
  return (
    <React.Fragment>
    {showHeader && (
      <header className={`${styles.stickyHeader}`}>
        <div className={styles.contentWidth}><a href="/">todayilearn</a></div>
      </header>
    )}

    <main className={styles.contentWidth}>
      {children}
    </main>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  showHeader: true
}