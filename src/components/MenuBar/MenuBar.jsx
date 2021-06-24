import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry, faHome, faUser, faUserGraduate, faBriefcase, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Sidebar = styled.div`
/* height: fit-content;
width:40px ; */
/* margin-left: 100% ; */
/* background-color: black;
border-radius: 30%;
display: flex;
flex-direction: column; */
/* background-color: #abb6ab; */
height: fit-content;
border-radius: 100%;

`
const Botton = styled.button`
width: fit-content;
height: fit-content;
background-color: inherit;
border: 0px;
&:hover .myfont {
  background-color: black;
  color: #3691e6;
    }
`


function alertme() {
  alert("it works")
}

const IconsArray = [
  {icon: faHome, id: "home"},
  { icon: faUser, id: "user"},
  { icon: faUserGraduate, id: "graduate"},
  { icon: faBriefcase, id: "briefcase"},
  { icon: faEnvelope, id: "envelope"},
  { icon: faUser, id: "user2"},
];

function MenuBar({ currentScreen, selectScreen }) {
  return (
    <Sidebar className="menu-bar">
      <div style={{ width: "fit-content" }}>
        {IconsArray.map
          (({icon, id}) => {
            const style = { width: "50%", borderRadius: "50%", color: id === currentScreen ? "green" : ""  };
            return (<Botton onClick={() => {
              selectScreen(id)
            }}><FontAwesomeIcon className="myfont" style={style} icon={icon}></FontAwesomeIcon></Botton>)
          })}
      </div>
    </Sidebar>
  );
};

export default MenuBar;
