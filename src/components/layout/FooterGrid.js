import React from 'react'
import styled from 'styled-components'

const ContentGrid = styled.footer`
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
`

const FooterInnerGrid = styled.section`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1.25fr;
  grid-template-rows: 1fr;
  grid-template-areas: "copy-left copy-center copy-right";
`

export { ContentGrid, FooterInnerGrid };