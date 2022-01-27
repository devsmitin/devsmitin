import React, { useMemo } from "react"
import { toUrl } from "gatsby-source-gravatar"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const GravatarImage = props => {
  const url = useMemo(() => toUrl(props.email, 'd=retro&r=g&s=200'), [])
  return (
    <img
      src={url}
      alt={`${props.email}'s gravatar`}
      className="rounded-md mx-autos my-6 w-28"
    />
  )
}

export default GravatarImage
