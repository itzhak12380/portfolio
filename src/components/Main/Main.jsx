import React from "react";
import './Main.css'
import styled from 'styled-components';
import Rigthside from '../RightSide/RightSide.jsx'
import MenuBar from '../MenuBar/MenuBar.jsx'
import { useState } from "react";
import AboutMe from "../RightSideContent/About-me/About-me";
import Leftside from '../LeftSide/LeftSide.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
const MainDivLayout = styled.div`
width:85%;
height:fit-content ;
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
display: flex;
flex-wrap: wrap;
grid-area: main;
display: flex;
align-items: center;
`
const LeftSideLayout = styled.div`
background-color: #555252;
position: relative;
border-radius: 5%;
box-sizing: border-box;
grid-area: left;
overflow: scroll;
display: flex;
justify-content: center;
`
const SidebarLayout = styled.div`
position: relative;
grid-area: sidebar;
background-color: white;
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

export default function Main() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const ScreenComponent = screenIdToComponent[currentScreen] || NotFound;
 
  return (
    <MainDivLayout className="main">
      <LeftSideLayout>
        <Leftside />
      </LeftSideLayout>
      <RightSideLayout>
       <ScreenComponent />
      </RightSideLayout>
      <SidebarLayout >
        <MenuBar selectScreen={setCurrentScreen} currentScreen={currentScreen} />
        <div>
          <FontAwesomeIcon style={{ width: "100%" }} icon={faArrowCircleDown}><button></button>
          </FontAwesomeIcon>
          <FontAwesomeIcon style={{ width: "100%" }} icon={faArrowCircleUp}><button></button>
          </FontAwesomeIcon>
        </div>
      </SidebarLayout>
    </MainDivLayout>
  );
};
// const Sidebar = styled.div`
// width: 15%;
// background-color: lightblue;
// margin-right: 12px;

// `
// export function SideBar(props){


//   return(
//     <Sidebar>

//     </Sidebar>
//   )
// }
