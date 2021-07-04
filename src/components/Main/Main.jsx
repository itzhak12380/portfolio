import React from "react";
import './Main.css'
import styled from 'styled-components';
import Sidebar from '../MenuBar/MenuBar.jsx'
import { useState,createContext,useMemo } from "react";
import { HebrowContent,EnglishContent } from "../RightSideContent/PortfolioContent/index";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Switches } from "../RightSideContent/PortfolioContent/AboutMe";
import { UseMyContext } from "../RightSideContent/contexthook";
import { EnglishPortfolio } from "../RightSideContent/PortfolioContent/PortfolioContent";
import { ContactPage } from "../RightSideContent/PortfolioContent/ContactUs";
const MainDivLayout = styled.div`
width:85%;
height:85% ;

position: absolute;
display: flex;
justify-content: center;
justify-content: space-between;
flex-wrap: wrap;
flex-direction: row;
box-sizing: border-box;
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
position: relative;
box-sizing: border-box;
grid-area: left;
overflow: scroll;
display: flex;
justify-content: center;
`
const SidebarLayout = styled.div`
position: relative;
grid-area: sidebar;
display: flex;
flex-direction: column;
justify-content: space-between;
`

// {icon: faHome, id: "home"},
// { icon: faUser, id: "user"},
// { icon: faUserGraduate, id: "graduate"},
// { icon: faBriefcase, id: "briefcase"},
// { icon: faEnvelope, id: "envelope"},
// { icon: faUser, id: "user2"},
// const screenIdToComponent = {
//   home: Rigthside,
//   user: AboutMe,
// };

function NotFound() {
  return <div>Not found</div>;
}
export const Language = createContext()


export default function Main() {
   
  
  const [LanguageState, setLanguageState] = useState(EnglishContent)
  const ProvideLanguage = Language.Provider
  function ChangeLanguage(){
    if (LanguageState === HebrowContent ) {
      
      setLanguageState( EnglishContent)
    }
    else{
      setLanguageState( HebrowContent)
    }
  }
  useMemo(() => LanguageState, ChangeLanguage)
  const ColoModeController = UseMyContext();
  return (
    <ProvideLanguage value={LanguageState}>
    <Router>
    <MainDivLayout  style={{backgroundColor:ColoModeController.MainDiv}} className="main">
   
      <LeftSideLayout style={{backgroundColor:ColoModeController.LeftSide}} >
        {/* <Leftside /> */}
        <LanguageState.LeftSide/>
        {/* {LanguageState.LeftSide()} */}
      </LeftSideLayout>
      <RightSideLayout style={{backgroundColor:ColoModeController.RightSide}}>
         <Switch>
       <Route className="animate__backInLeft" path="/home">
        
          <LanguageState.Home/>
       
        {/* <PageComponent /> */}
       </Route>
       <Route path="/AboutMe">
         <div className="animate__backInLeft"> <LanguageState.AboutMe /> </div>
         
         {/* <PageComponent Componenta={LanguageState.Resume()}/> */}
       </Route>
       <Route path="/ContactPage">
         <LanguageState.ContactUs />
       </Route>
       <Route path="/PortfolioPage">
         <LanguageState.Portfolio/>
       </Route>
       <Route path="/ResumePage">
          {/* <ResumePage/> */}
          <LanguageState.Resume />
       </Route>
       <Route>
       <NotFound />
       </Route>
       </Switch>
      </RightSideLayout>
      <SidebarLayout style={{backgroundColor:ColoModeController.sidebar}} >
        <Sidebar Iconolor={ColoModeController.icon} />        
        <Switches style={{backgroundColor:'red'}} ChnageLanguage={ColoModeController.body} Language="change color" />
        <Switches ChnageLanguage={ChangeLanguage} Language={LanguageState.Button} />
      </SidebarLayout>
    </MainDivLayout></Router>
    </ProvideLanguage>
  );
};

