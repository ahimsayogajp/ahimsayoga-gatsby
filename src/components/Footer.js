import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

import { ContentGrid, FooterInnerGrid } from '../components/layout/FooterGrid';
import { device } from '../theme/breakpoints'

const Foot = styled(ContentGrid)`
  grid-area: footer;
  background: ${props => props.theme.colors.backgroundFooter};
  color: ${props => props.theme.colors.textFooter};
`

const FooterContent = styled.div`
  grid-area: center;
`

const CopyrightContainer = styled(FooterInnerGrid)`
  align-content: space-around;
  min-height: 100px;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "copy-left copy-right";
  }
  .social-media {
    margin-top: 2.75em;
    grid-area: copy-left;
  }
  .footer-copyright-text {
    margin-top: 2em;
    grid-area: copy-right;
  }
  a {
    color: ${props => props.theme.colors.linkFooter};
    margin-right: 1em;
    @media ${device.laptop} {
      margin-right: 2em;
    }
    &:hover {
      color: ${props => props.theme.colors.linkHoverFooter};
    }
  }
`

const Footer = (props) => (
  <Foot>
    <FooterContent>
      <CopyrightContainer>
        <div className="social-media">
          <a title="Facebook" href="https://www.facebook.com/ahimsayogajp/">
            <FaFacebook size='1.75em' />
          </a>
          <a title="Twitter" href="https://www.twitter.com/ahimsayogajp/">
            <FaTwitter size='1.75em' />
          </a>
          <a title="Instagram" href="https://www.instagram.com/ahimsayogajp/">
            <FaInstagram size='1.75em' />
          </a>
          <a title="Youtube" href="https://www.youtube.com/channel/UCihAjjXntS8Q-5a4wBIolgQ">
            <FaYoutube size='1.75em' />
          </a>
        </div>
        <div className="footer-copyright-text">
          <p>Copyright © 2019 Ahimsa Shivam Yoga Center. All rights reserved.</p>
        </div>
      </CopyrightContainer>
    </FooterContent>
  </Foot>
)

Footer.propTypes = {
  locale: PropTypes.string
}

export default Footer;