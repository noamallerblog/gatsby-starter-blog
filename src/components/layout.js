import * as React from "react"
import { Link } from "gatsby"
import Box from "../components/box"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <Box level={0}>
      <div className="topbar">
        <div className="logo-box">
          <Link to="/">Noa Maller</Link>
        </div>
        <div className="nav-panel">
        
        </div>
      </div>
    </Box>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {false && <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>}
    </div>
  )
}

export default Layout
