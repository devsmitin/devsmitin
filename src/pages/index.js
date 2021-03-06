import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GravatarImage from "../components/GravatarImage"

import javascript from "../images/logos/JavaScript.svg"
import bootstrap from "../images/logos/Bootstrap.svg"
import sass from "../images/logos/Sass.svg"
import tailwind from "../images/logos/Tailwind.svg"
import react from "../images/logos/ReactJS.svg"
import gatsby from "../images/logos/Gatsby.svg"
import wordpress from "../images/logos/WordPress.svg"
import shopify from "../images/logos/Shopify.svg"
import contentful from "../images/logos/Contentful.svg"
import netlify from "../images/logos/Netlify.svg"

const frontend = [
  { name: "Bootstrap", src: bootstrap },
  { name: "Sass", src: sass },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: javascript },
  { name: "React JS", src: react },
  { name: "Gatsby", src: gatsby },
]

const platforms = [
  { name: "Shopify", src: shopify },
  { name: "WordPress", src: wordpress },
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
        <p className="mb-6 text-xl">
          I have extensive knowledge of HTML, CSS &amp; JavaScript (ES6) and
          experience with the React JS. Add a lot of curiosity and creativity -
          and you have a pretty complete picture of me.
        </p>
        <p className="mb-6 text-xl">
          Sometimes I write about{" "}
          <a
            href="https://whales.devsmit.in/"
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
