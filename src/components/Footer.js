import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

import { ContentGrid, FooterInnerGrid } from '../components/layout/FooterGrid';

const Foot = styled(ContentGrid)`
  grid-area: footer;
  background: #2c2c2c;
  color: #959595;
`

const FooterContent = styled.div`
  grid-area: center;
`

const CopyrightContainer = styled(FooterInnerGrid)`
  align-content: space-around;
  min-height: 100px;
  .social-media {
    margin-top: 2.75em;
  }
  .footer-copyright-text {
    margin-top: 2em;
  }
  .social-media {
    grid-area: copy-left;
  }
  .footer-copyright-text {
    grid-area: copy-right;
  }
  a {
    color: #cccccc;
    margin-right: 2em;
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
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Footer;