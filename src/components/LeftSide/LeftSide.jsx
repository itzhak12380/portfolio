import React, { useState,useContext, useEffect } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { UseMyContext } from "../RightSideContent/contexthook";
import Button from "../features/Button/Button";
import Alink from "../features/Links/Links";
const Leftside = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const MyImg = styled.img`
width: 100%;
height: 30%;
border-radius: 50%;
`
const NAME = styled.span`
font-size: 25px;
font-weight: bolder;
`
const TITLE = styled.span`
font-size: 15px;
font-weight: lighter;
`
const PicturesArray = ["/portfolio/Pictures/f5fb162a-cb32-4f52-8714-b30c675f10c0.jpg","/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg"]

function LeftSideHbrow() {
  const [Photo, setPhoto] = useState(0)
  useEffect(() => {
   setInterval(() => {
    setPhoto((photo)=>(photo == 1? 0: photo + 1))
   }, 2000);
    
  }, [])
  const ColorContext = UseMyContext()

  return (
    <Leftside  >
   


      <MyImg src={PicturesArray[Photo]} alt="" />


      <NAME> יצחק קסיה</NAME>
      <TITLE>  מפתח תוכנה</TITLE>
      <br />
      <div>
        <Alink style={{ color: "#4267B2" }} target='blank' href="https://www.facebook.com/iascc.kasay/" content={<FaFacebook />} >  </Alink>
        <Alink style={{ color: "#FD1D1D" }} content={<FaInstagram />} target='blank' href="https://www.instagram.com/itzhak_kasie17/"> </Alink>
        <Alink style={{ color: "#2867B2" }} content={<FaLinkedin />} target='blank' href="https://www.linkedin.com/in/itzhak-kasie-01457b203/"> </Alink>

      </div>
      <br />

    <a target="blank" href="https://workupload.com/file/hRCZAs5qQsQ"><Button style={{borderRadius:'20px',height:'fitContent',width:'90px',padding:'5px',border:'none',backgroundColor:'#EEEBDD',boxShadow:`0 2px 5px ${ColorContext.LeftSideButtonShow}`}} Text="קח להורדה"  > </Button></a>  
    </Leftside>
  );
};
export default LeftSideHbrow;
export function LeftSideEnglish() {
  const [Photo, setPhoto] = useState(0)
  useEffect(() => {
   setInterval(() => {
    setPhoto((photo)=>(photo == 1? 0: photo + 1))
   }, 2000);
    
  }, [])
  const ColorContext = UseMyContext()

  return (
    <Leftside className="left-side">
     
      <MyImg src={PicturesArray[Photo]} alt="" />
      <NAME> Itzhak Kasie</NAME>
      <TITLE>Web Developer</TITLE>
      <br />
      <div>
      <Alink style={{ color: "#4267B2" }} target='blank' href="https://www.facebook.com/iascc.kasay/" content={<FaFacebook />} >  </Alink>
        <Alink style={{ color: "#FD1D1D" }} content={<FaInstagram />} target='blank' href="https://www.instagram.com/itzhak_kasie17/"> </Alink>
        <Alink style={{ color: "#2867B2" }} content={<FaLinkedin />} target='blank' href="https://www.linkedin.com/in/itzhak-kasie-01457b203/"> </Alink>

      </div>
      <br />
      <a target="blank" href="https://workupload.com/file/hRCZAs5qQsQ"><Button style={{borderRadius:'20px',height:'fitContent',width:'90px',padding:'5px',border:'none',backgroundColor:'#EEEBDD',boxShadow:`0 2px 5px ${ColorContext.LeftSideButtonShow}`}} Text = 'Download CV'> </Button></a>  
    </Leftside>
  )
}