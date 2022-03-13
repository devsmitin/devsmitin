import React, { useMemo } from "react"
import { toUrl } from "gatsby-source-gravatar"

const GravatarImage = props => {
  let email = props.email || "blah@blah.com"
  const url = useMemo(() => toUrl(email, "d=retro&r=g&s=200"), [email])
  return (
    <img
      src={url}
      alt={`${email}'s gravatar`}
      className="rounded-md my-6 w-32"
      height={128}
      width={128}
    />
  )
}

export default GravatarImage
