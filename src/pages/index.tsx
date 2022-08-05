import React from "react"
import styled from 'styled-components'

const Root = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #03009b;
`

const MainText = styled.h1`
  background-color: #f09400;
  color: #f1f1f1;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.5em;
`

const IndexPage = () => {
  return (
    <Root>
      <MainText>
        copyli
      </MainText>
    </Root>
  )
}

export default IndexPage

