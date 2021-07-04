import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import Main from './Main/Main';
import { NIGHMODE,DAYMODE } from './RightSideContent/PortfolioContent';
import { PROVIDECONTEXT } from './RightSideContent/contexthook';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import { Input } from './features/Input/Input.jsx';
  const CONTAINERDIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
    LeftSideButtonShow:COLORMode.LeftSideBttonShow,
    ButtonText:COLORMode.ButtonText
  }

    return (
        <CONTAINERDIV style={{ backgroundColor: COLORobj.bodyColor, color: COLORobj.Color }} >
          <Header HeaderColor={COLORobj.Headr}/>
          <div style={{ height: '90%', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <PROVIDECONTEXT value={COLORobj}>
    
              <Main className="main_portfolio"></Main>
            </PROVIDECONTEXT>
          </div>     
          <Footer footer={COLORobj.Footer}/>
        </CONTAINERDIV>
      );
}