import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import Main from './Main/Main';
import { NIGHMODE,DAYMODE } from './RightSideContent';
import { PROVIDECONTEXT } from './RightSideContent/contexthook';
  const CONTAINERDIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  const Color_Objcet = {
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
        <CONTAINERDIV style={{ backgroundColor: Color_Objcet.bodyColor, color: Color_Objcet.Color }} >
          <div style={{ height: '90%', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <PROVIDECONTEXT value={Color_Objcet}>
    
              <Main ></Main>
            </PROVIDECONTEXT>
          </div>     
        </CONTAINERDIV>
      );
}