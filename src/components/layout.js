/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const showHeader = true

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="dark:bg-gray-900 bg-orange-50 font-mono relative overflow-hidden min-h-screen">
      {showHeader && (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      )}
      <main>{children}</main>
      <footer className="container mx-auto px-6 md:px-32 py-1 my-5 dark:text-white text-gray-800">&copy; {new Date().getFullYear()}, Smit M.</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
