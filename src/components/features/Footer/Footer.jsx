import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterStyle = styled.footer`
height: 5%;
width: 100%;
display: flex;
justify-content: center;
justify-content: space-evenly;
`

export default function Footer(props) {

  return (
    <FooterStyle style={{ backgroundColor: props.footer, opacity: '0.7' }}>  <a style={{ color: "#4267B2" }} target='blank' href="https://www.facebook.com/iascc.kasay/"><FaFacebook />  </a>
      <a style={{ color: "#FD1D1D" }} target='blank' href="https://www.instagram.com/itzhak_kasie17/"><FaInstagram /> </a>
      <a style={{ color: "#2867B2" }} target='blank' href="https://www.linkedin.com/in/itzhak-kasie-01457b203/"> <FaLinkedin /></a>
      <a style={{ color: "#2867B2" }} target='blank' href="https://github.com/itzhak12380"> <FaGithub />  </a>

    </FooterStyle>
  )
}