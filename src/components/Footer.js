import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Foot = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
  background: #2c2c2c;
  color: #959595;
`

const FooterContent = styled.div`
  grid-area: center;
`

const CopyrightContainer = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1.25fr;
  grid-template-rows: 1fr;
  grid-template-areas: "copy-left copy-center copy-right";
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
          <Link title="Facebook" to="https://www.facebook.com/ahimsayogajp/">
            <FaFacebook size='1.75em' />
          </Link>
          <Link title="Twitter" to="https://www.twitter.com/ahimsayogajp/">
            <FaTwitter size='1.75em' />
          </Link>
          <Link title="Instagram" to="https://www.instagram.com/ahimsayogajp/">
            <FaInstagram size='1.75em' />
          </Link>
          <Link title="Youtube" to="https://www.youtube.com/channel/UCihAjjXntS8Q-5a4wBIolgQ">
            <FaYoutube size='1.75em' />
          </Link>
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