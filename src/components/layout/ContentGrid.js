import React from 'react'
import styled from 'styled-components'

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
`

const ContentContainer = styled.div`
  grid-area: center;
  font-family: 'Montserrat',sans-serif;
  font-size: 24px;
  padding-top: 136px;
  margin-bottom: 70px;
`

export { ContentGrid, ContentContainer };