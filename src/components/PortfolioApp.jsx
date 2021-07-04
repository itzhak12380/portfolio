import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import Main from './Main/Main';
import { NIGHMODE,DAYMODE } from './RightSideContent/PortfolioContent';
import { PROVIDECONTEXT } from './RightSideContent/contexthook';
import { FaFacebook, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';
  const CONTAINERDIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  `
  const PROGRAM = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;
margin-top: 5px;
`
  const Header = styled.header`
display: flex;
justify-content: center;
justify-content:space-evenly;
color: white;
`

  const Footer = styled.footer`
height: 5%;
width: 100%;
display: flex;
justify-content: center;
justify-content: space-evenly;
`

export default function PortfolioApp(){
    const [COLORMode, setCOLORMode] = useState(DAYMODE)



  function ChangeColorMode() {
    if (COLORMode === DAYMODE) {
      setCOLORMode((obj) => { return obj = NIGHMODE })
    }
    else {
      setCOLORMode((obj) => { return obj = DAYMODE })
    }
  }
  useMemo(() => COLORMode,

    [ChangeColorMode])
  const COLORobj = {
    body: ChangeColorMode,
    bodyColor: COLORMode.body,
    sidebar: COLORMode.sidebar,
    icon: COLORMode.icon,
    LeftSide: COLORMode.leftSide,
    RightSide: COLORMode.rightSide,
    MainDiv: COLORMode.mainDiv,
    Color: COLORMode.color,
    Form: COLORMode.form,
    FormButton: COLORMode.formButton,
    TextColor: COLORMode.TextColor,
    SwitchColor: COLORMode.SwitchColor,
    Headr: COLORMode.Header,
    Footer: COLORMode.Footer,
    LeftSideButtonShow:COLORMode.LeftSideBttonShow
  }

    return (
        <CONTAINERDIV style={{ backgroundColor: COLORobj.bodyColor, color: COLORobj.Color }} >
          <Header style={{ backgroundColor: COLORobj.Headr, width: '100%',opacity:'0.7' }}>
            <a target="blank" href="https://tech-career-jobs.com/"><PROGRAM src="./Pictures/indicom.jpg" alt="" /></a>
            <span>Email: itzhak2380@gmail.com</span>
            <a target="blank" href="https://tech-career-jobs.com/"><PROGRAM src="./Pictures/tech.jpg" alt="" /></a>
    
          </Header>
          <div style={{ height: '90%', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <PROVIDECONTEXT value={COLORobj}>
    
              <Main className="main_portfolio"></Main>
            </PROVIDECONTEXT>
          </div>
    
          <Footer style={{ backgroundColor: COLORobj.Footer,opacity:'0.7'  }}>  <a style={{ color: "#4267B2" }} target='blank' href="https://www.facebook.com/iascc.kasay/"><FaFacebook />  </a>
            <a style={{ color: "#FD1D1D" }} target='blank' href="https://www.instagram.com/itzhak_kasie17/"><FaInstagram /> </a>
            <a style={{ color: "#2867B2" }} target='blank' href="https://www.linkedin.com/in/itzhak-kasie-01457b203/"> <FaLinkedin /></a>
            <a style={{ color: "#2867B2" }} target='blank' href="https://github.com/itzhak12380"> <FaGithub/> </a>
            
          </Footer>
        </CONTAINERDIV>
      );
}