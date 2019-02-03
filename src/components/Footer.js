import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'

const Foot = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: 1;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
`

const FooterContent = styled.div`
  grid-area: center;
`

const Footer = (props) => (
  <Foot>
    <FooterContent>
      <h4>Footer</h4>
      <div>
        <Link to="/">
          Ahimsa - Shivam Yoga Center
        </Link>
      </div>
    </FooterContent>
  </Foot>
)

Footer.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Footer;