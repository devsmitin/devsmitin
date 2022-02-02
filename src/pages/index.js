import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GravatarImage from "../components/GravatarImage"

import javascript from "../images/javascript.svg"
import bootstrap from "../images/bootstrap-5.svg"
import sass from "../images/sass.svg"
import tailwind from "../images/tailwindcss.svg"
import react from "../images/react-js.svg"
import gatsby from "../images/gatsby-js.svg"
import wordpress from "../images/wordpress.svg"
import shopify from "../images/shopify.svg"
import contentful from "../images/contentful.svg"
import netlify from "../images/netlify.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Full-stack frontend developer with over 5 years of industry experience" />

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
                <img className="w-10" src={javascript} alt="javascript logo" />
                <img className="w-10" src={react} alt="react logo" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                Platforms
              </h2>
              <div className="flex space-x-3">
                <img className="w-10" src={wordpress} alt="wordpress logo" />
                <img className="w-10" src={shopify} alt="shopify logo" />
                <img className="w-10" src={gatsby} alt="gatsby logo" />
                <img className="w-10" src={contentful} alt="contentful logo" />
                <img className="w-10" src={netlify} alt="netlify logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
