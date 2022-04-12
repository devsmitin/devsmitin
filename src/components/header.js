import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto px-6 md:px-32 flex items-center h-24 sm:h-28 w-full z-30">
    <div className="flex justify-between w-full mx-auto">
      <Link to="/" className="dark:text-white text-gray-800">
        {siteTitle}
      </Link>
      <div className="flex items-center">
        <nav className="font-sans text-gray-800 dark:text-white flex items-center">
          <a href="https://github.com/devsmitin" target="_blank" rel="noopener noreferrer">
            <span className="ml-3 mt-0.5">GitHub</span>
          </a>
          {/* <a href="https://twitter.com/devsmitin" target="_blank" rel="noopener noreferrer">
            <span className="ml-3 mt-0.5">Twitter</span>
          </a> */}
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
