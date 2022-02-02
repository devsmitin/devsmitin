import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <>
    <div className="relative lg:absolute xl:fixed lg:-bottom-32 lg:-right-20 w-72 h-72 lg:w-96 lg:h-96 mx-auto">
      <div className="text-extrabold text-xl absolute left-16 lg:left-24 z-20 top-1/4">
        <span className="text-7xl">🎨</span>
        <p>Got a project?</p>
        <a href="mailto:smit.m.official@gmail.com" className="underline">
          Let's talk
        </a>
      </div>
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFDBB9"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
          transform="translate(100 100)"
        ></path>
      </svg>
    </div>

    <footer className="container mx-auto px-6 md:px-32 py-1 my-5 dark:text-white text-gray-800">
      &copy; {new Date().getFullYear()}, {siteTitle}
    </footer>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
