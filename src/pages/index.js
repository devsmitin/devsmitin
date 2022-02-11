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

const frontend = [
  { name: "Bootstrap", src: bootstrap },
  { name: "Sass", src: sass },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: javascript },
  { name: "React JS", src: react },
]

const platforms = [
  { name: "Shopify", src: shopify },
  { name: "WordPress", src: wordpress },
  { name: "Gatsby", src: gatsby },
  { name: "Contentful", src: contentful },
  { name: "Netlify", src: netlify },
]

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
          Sometimes I write about{" "}
          <a
            href="https://blogs.devsmit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="something-whale"
          >
            Whales
          </a>
          . Sometimes I make useful{" "}
          <a
            href="https://react.devsmit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            apps
          </a>{" "}
          using React JS.
        </p>
        <div className="mb-6">
          <div className="space-y-12 my-12 text-lg xl:flex xl:mb-0 xl:space-x-16 xl:space-y-0">
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                Front-end development
              </h2>
              <div className="flex space-x-3">
                {frontend.map(logo => (
                  <img
                    className="w-10"
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    title={`${logo.name}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                Platforms
              </h2>
              <div className="flex space-x-3">
                {platforms.map(logo => (
                  <img
                    className="w-10"
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    title={`${logo.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
