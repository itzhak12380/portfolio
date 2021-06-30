import React, { useState, createContext } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { faAngry, faHome, faArrowCircleDown, faArrowCircleUp, faUser, faUserGraduate, faBriefcase, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Sidebar = styled.div`
/* height: fit-content;
width:40px ; */
/* margin-left: 100% ; */
/* background-color: black;
border-radius: 30%;*/
/* display: flex;
flex-direction: row;  */
/* background-color: #abb6ab; */
/* height: fit-content;
border-radius: 100%; */

`
const Botton = styled.button`
width: fit-content;
height: fit-content;
background-color: inherit;
border: 0px;
/* &:hover .myfont {
  background-color: black;
  color: #3691e6;
    } */
`
const MenuBarContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
 text-align: center;
 color: #dd2020;

`

function alertme() {
  alert("it works")
}

const IconsArray = [
  { icon: faHome, id: "home", index: 0 },
  { icon: faUser, id: "AboutMe", index: 1 },
  { icon: faUserGraduate, id: "ResumePage", index: 2 },
  { icon: faBriefcase, id: "PortfolioPage", index: 3 },
  { icon: faEnvelope, id: "ContactPage", index: 4 },
  // { icon: faUser, id: "user2"},
];

function MenuBar({ currentScreen, selectScreen }) {
  return (
    <MenuBarContainer>
      <Sidebar className="menu-bar">
        <div style={{ width: "fit-content", width: "40%" }}>
          {IconsArray.map
            (({ icon, id, index }) => {
              const style = { width: "60%", borderRadius: "50%", color: id === currentScreen ? "green" : "" };
              return (<NavLink key={index} style={{color:'#dd2020'}} activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
                to={`/${id}`} ><FontAwesomeIcon className="myfont" style={style} icon={icon}></FontAwesomeIcon></NavLink>)
            })}
        </div>
      </Sidebar>

      <div style={{ width: "fit-content", width: "40%" }}>
        <NavLink to=""><FontAwesomeIcon style={{ width: "100%",color:'#dd2020' }} icon={faArrowCircleDown} /></NavLink>
        <NavLink to=""><FontAwesomeIcon style={{ width: "100%",color:'#dd2020' }} icon={faArrowCircleUp} />
        </NavLink>
      </div>
    </MenuBarContainer>
  );
};

export default MenuBar;
