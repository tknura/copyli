import { NextUIProvider, Text } from '@nextui-org/react'
import { StaticImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import React from "react"
import styled from 'styled-components'
import { BackgroundImage } from '../components/background-image/background-image'
import { StyledCardBlur } from '../components/primitives'

const Root = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IndexPage = () => {
  return (
    <NextUIProvider>
      <BackgroundImage>
        <Root>
          <StyledCardBlur>
            <Text h1 color="white">
              copyli
            </Text>
          </StyledCardBlur>
        </Root>
      </BackgroundImage>
    </NextUIProvider>
  )
}

export default IndexPage

