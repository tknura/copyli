import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'

const BackgroundImage = (props: any) => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query {
        backgroundImage: file(relativePath: {eq: "forest.jpeg"}) {
          childImageSharp {
            gatsbyImageData(
              quality: 50,
              webpOptions: {quality: 70},
              width: 2000
            )
          }
        } 
      }
    `
  )

  const image = getImage(backgroundImage)

  return (
    <BgImage
      image={image}
      {...props}
    />
  )
}

export { BackgroundImage }