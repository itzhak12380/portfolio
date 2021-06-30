import React,{useState,useContext} from "react";
import styled from "styled-components";
import { Language } from "../../Main/Main";

const HOMECONTENT = styled.div`
width: 100%;
height: 90%;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
flex-wrap: wrap;
/* display: flex;
justify-content: center;
flex-wrap: wrap; */
`
function PageComponent(props) {
const HomeComponent = useContext(Language) 
    return (
      <HOMECONTENT className="Home">
       {/* {HomeComponent.Home()} */}
       {HomeComponent.Home()}
      </HOMECONTENT>
    );
  };
  
  export default PageComponent;