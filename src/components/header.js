import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto px-6 md:px-32 flex items-center h-24 sm:h-32 w-full z-30">
    <div className="flex justify-between w-full mx-auto">
      <Link to="/" className="dark:text-white text-gray-800">
        {siteTitle}
      </Link>
      <div className="flex items-center">
        <nav className="font-sans text-gray-800 dark:text-white flex items-center">
          {/* <a
            href="mailto:smit.m.official@gmail.com"
            className="flex hover:text-black dark:hover:text-gray-300"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
            </svg>
            <span className="ml-3 mt-0.5">E-mail</span>
          </a> */}
          <a href="https://github.com/devsmitin" target="_blank" rel="noopener noreferrer">
            <span className="ml-3 mt-0.5">GitHub</span>
          </a>
          <a href="https://twitter.com/devsmitin" target="_blank" rel="noopener noreferrer">
            <span className="ml-3 mt-0.5">Twitter</span>
          </a>
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
