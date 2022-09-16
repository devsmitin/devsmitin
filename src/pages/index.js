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
    <Seo title="Full-stack frontend developer with over 6 years of industry experience" />

    <div className="container relative flex flex-col justify-between mx-auto px-6 md:px-32 py-4">
      <div className="flex flex-col py-2 max-w-3xl dark:text-white text-gray-800">
        <GravatarImage email="aquarocker20@gmail.com" />
        <span className="text-2xl my-6 dark:text-white">
          Hi, my name is <h1 className="inline">Smit Modi</h1>.
        </span>
        <h2 className="mb-6 text-3xl md:text-4xl font-bold">
          A (frontend) web developer with a passion for design &amp; JavaScript.
        </h2>
        <p className="mb-6 text-xl">
          I'm an optimist, technologist, developer, data nerd and family man. I
          have extensive knowledge about web from my 6 years of experience. Add
          a lot of curiosity and creativity - and you have a pretty complete
          picture of me.
        </p>
        <p className="mb-6 text-xl">
          I love tigers 🐯, but bears 🐻 are my kind of things. I have a blog
          about different types of{" "}
          <a
            href="https://whales.devsmit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="something-whale"
          >
            Whales
          </a>
          (built with Gatsby+WordPress).
        </p>
        <p className="mb-6 text-xl">
          If you have a great opportunity for me you can find my resume
          <a
            href="https://drive.google.com/file/d/1ddEcwKOssIYw1zbf7HAuLPe8VMV69_h9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <span className="ml-3 mt-0.5">here</span>
          </a>
          .
        </p>
        <div className="mb-6">
          <div className="space-y-12 my-12 text-lg xl:flex xl:mb-0 xl:space-x-16 xl:space-y-0">
            <div className="flex-1">
              <h2 className="mb-2 font-semibold tracking-widest uppercase">
                Front-end development
              </h2>
              <div className="flex space-x-3">
                {frontend.map((logo, i) => (
                  <img
                    key={`f_${i}`}
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
                {platforms.map((logo, i) => (
                  <img
                    key={`p_${i}`}
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
