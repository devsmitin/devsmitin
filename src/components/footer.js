import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer className="container mx-auto px-6 md:px-32 py-1 my-5 dark:text-white text-gray-800">
    &copy; {new Date().getFullYear()}, {siteTitle}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
