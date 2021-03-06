import React from "react";
import './Main.css'
import styled from 'styled-components';
import Sidebar from '../features/SideBar/SideBar.jsx'
import { useState, createContext, useMemo } from "react";
import { HebrowContent, EnglishContent } from "../RightSideContent/index";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Switches } from "../RightSideContent/PortfolioContent/AboutMe";
import { UseMyContext } from "../RightSideContent/contexthook";
import Button from "../features/Button/Button";
const MainDivLayout = styled.div`
width:85%;
height:95% ;
display: grid;
grid-template-areas:
"left main main sidebar"
"left main main sidebar"
"left main main sidebar";
grid-template-columns:  20% 40% 30% 10%;
`
const RightSideLayout = styled.div`
position: relative;
box-sizing: border-box;
overflow: scroll;
grid-area: main;
`
const LeftSideLayout = styled.div`
box-sizing: border-box;
grid-area: left;
display: flex;
justify-content: center;
`
const SidebarLayout = styled.div`
grid-area: sidebar;
display: flex;
flex-direction: column;
justify-content: space-between;
`

function NotFound() {
  return <div>Not found</div>;
}
export const Language = createContext()


export default function Main() {


  const [LanguageState, setLanguageState] = useState(EnglishContent)
  const ProvideLanguage = Language.Provider
  function ChangeLanguage() {
    if (LanguageState === HebrowContent) {

      setLanguageState(EnglishContent)
    }
    else {
      setLanguageState(HebrowContent)
    }
  }
  useMemo(() => LanguageState, ChangeLanguage)
  const ColoModeController = UseMyContext();
  return (
    <ProvideLanguage value={LanguageState}>
      <>
        <Router>
          <MainDivLayout style={{ backgroundColor: ColoModeController.MainDiv }} className="main">

            <LeftSideLayout style={{ backgroundColor: ColoModeController.LeftSide }} >
              <LanguageState.LeftSide />
            </LeftSideLayout>
            <RightSideLayout style={{ backgroundColor: ColoModeController.RightSide }}>
              <Switch>
                <Route path="/home">
                  <LanguageState.Home />
                </Route>
                <Route path="/AboutMe">
                  <LanguageState.AboutMe />

                </Route>
                <Route path="/ContactPage">
                  <LanguageState.ContactUs />
                </Route>
                <Route path="/PortfolioPage">
                  <LanguageState.Portfolio />
                </Route>
                <Route path="/ResumePage">
                  <LanguageState.Resume />
                </Route>
                <Route path='/'>
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </RightSideLayout>
            <SidebarLayout style={{ backgroundColor: ColoModeController.sidebar }} >
              <Sidebar Iconolor={ColoModeController.icon} />
              <Switches ChnageLanguage={ColoModeController.body} Language={ColoModeController.ButtonText} />
              <Switches ChnageLanguage={ChangeLanguage} Language={LanguageState.Button} />
            </SidebarLayout>
          </MainDivLayout></Router></>
    </ProvideLanguage>
  );
};

