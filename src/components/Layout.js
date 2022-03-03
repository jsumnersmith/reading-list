import React from "react"
import { GlobalStyle } from "../theme/global-style"

const Layout = ({ children }) => {
  // static query for the data here
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <GlobalStyle />
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
};

export default Layout;