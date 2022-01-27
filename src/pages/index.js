import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GravatarImage from "../components/GravatarImage"

import bootstrap from "../images/bootstrap-5.svg"
import sass from "../images/sass.svg"
import tailwind from "../images/tailwindcss.svg"
import react from "../images/react-js.svg"
import gatsby from "../images/gatsby-js.svg"
import wordpress from "../images/wordpress.svg"
import shopify from "../images/shopify.svg"
// import contentful from "../images/contentful.svg"
import social from "../images/social.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Full-stack frontend developer with over 5 years of industry experience" image={social} />

    <div className="container relative flex flex-col justify-between mx-auto px-6 md:px-32 py-4">
      <div className="flex flex-col py-2 max-w-3xl dark:text-white text-gray-800">
        <GravatarImage email="aquarocker20@gmail.com" />
        <h2 className="text-2xl my-6 dark:text-white">
          Hi, my name is Smit Modi.
        </h2>
        <h1 className="mb-6 text-3xl md:text-4xl font-bold">
          A full-stack frontend developer with a passion for design &amp;
          JavaScript.
        </h1>
        <p className="mb-6 text-2xl">
          I have extensive knowledge of HTML, CSS &amp; JavaScript (ES6) and
          experience with the React JS. Add a lot of curiosity and creativity -
          and you have a pretty complete picture of me.
        </p>
        <p className="mb-6 text-2xl">
          Currently I build Shopify stores with ManekTech.
        </p>
        <div className="mb-6">
          <div className="space-y-12 my-12 text-lg xl:flex xl:mb-0 xl:space-x-16 xl:space-y-0">
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                Front-end development
              </h2>
              <div className="flex space-x-3">
                <img className="w-10" src={bootstrap} alt="bootstrap logo" />
                <img className="w-10" src={sass} alt="sass logo" />
                <img className="w-10" src={tailwind} alt="tailwind logo" />
                <img className="w-10" src={react} alt="react logo" />
                <img className="w-10" src={gatsby} alt="gatsby logo" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                E-commerce &amp; CMS
              </h2>
              <div className="flex space-x-3">
                <img className="w-10" src={wordpress} alt="wordpress logo" />
                <img className="w-10" src={shopify} alt="shopify logo" />
                {/* <img className="w-10" src={contentful} alt="contentful logo" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center mt-4">
          <a
            href="#!"
            className="py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-md"
          >
            CONNECT WITH ME
          </a>
        </div> */}
      </div>
    </div>

    <div className="relative lg:absolute lg:-bottom-32 lg:-right-20 w-72 h-72 lg:w-96 lg:h-96 mx-auto">
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
  </Layout>
)

export default IndexPage
