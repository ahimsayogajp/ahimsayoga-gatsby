import React from 'react'
import styled from 'styled-components'

import { device } from '../../device'

const HeaderGrid = styled.header`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr 3fr 0.7fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left center right right-gutter";
`

export default HeaderGrid;