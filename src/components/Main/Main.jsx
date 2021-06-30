import React from "react";
import './Main.css'
import styled from 'styled-components';
import Rigthside from '../RightSide/RightSide.jsx'
import MenuBar from '../MenuBar/MenuBar.jsx'
import { useState,createContext } from "react";
import PageComponent from "../RightSideContent/Home/Home";
import AboutMe from "../RightSideContent/About-me/About-me";
import { HebrowContent,EnglishContent } from "../RightSideContent/PortfolioContent/index";
import PortfolioPage from "../RightSideContent/PORTFOLIO";
import ResumePage from "../RightSideContent/RESUME";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { EnglishAboutMe } from "../RightSideContent/PortfolioContent/AboutMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import ContactPage from "../RightSideContent/CONTACT";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const MainDivLayout = styled.div`
width:85%;
height:85% ;
background-color: #555252;
border-radius: 22%;
/* border-radius: 15px; */
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
background-color: #2e2b2b;
position: relative;
border-radius: 4%;
box-sizing: border-box;
overflow: scroll;
/* display: flex;
flex-wrap: wrap; */
grid-area: main;
/* display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap; */
`
const LeftSideLayout = styled.div`
background-color: #555252;
position: relative;
border-radius: 4%;
box-sizing: border-box;
grid-area: left;
overflow: scroll;
display: flex;
justify-content: center;
`
const SidebarLayout = styled.div`
position: relative;
grid-area: sidebar;
background-color: #4e77e7;
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
const screenIdToComponent = {
  home: Rigthside,
  user: AboutMe,
};

function NotFound() {
  return <div>Not found</div>;
}
export const Language = createContext()


export default function Main() {
   
  
  const [LanguageState, setLanguageState] = useState(HebrowContent)
  const ProvideLanguage = Language.Provider
  function ChangeLanguage(){
    if (LanguageState === EnglishContent ) {
      
      setLanguageState( HebrowContent)
    }
    else{
      setLanguageState( EnglishContent)
    }
  }
  return (
    <ProvideLanguage value={LanguageState}>
    <Router>
    <MainDivLayout className="main">
   
      <LeftSideLayout>
        {/* <Leftside /> */}
        {LanguageState.LeftSide()}
      </LeftSideLayout>
      <RightSideLayout>
         <Switch>
       <Route path="/home">
        <PageComponent />
        {/* <PageComponent /> */}
       </Route>
       <Route path="/AboutMe">
         <EnglishAboutMe />
         {/* <PageComponent Componenta={LanguageState.Resume()}/> */}
       </Route>
       <Route path="/ContactPage">
         <ContactPage />
       </Route>
       <Route path="/PortfolioPage">
         <PortfolioPage/>
       </Route>
       <Route path="/ResumePage">
          <ResumePage/>
       </Route>
       <Route>
       <NotFound />
       </Route>
       </Switch>
      </RightSideLayout>
      <SidebarLayout >
        <MenuBar />
        <button onClick={ChangeLanguage}>{LanguageState.Button}</button>
      </SidebarLayout>
    </MainDivLayout></Router>
    </ProvideLanguage>
  );
};

