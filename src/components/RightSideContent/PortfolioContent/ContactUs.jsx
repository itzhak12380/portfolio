import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import { FaMailBulk, FaAt, FaEnvelope } from 'react-icons/fa';
import { UseMyContext } from "../contexthook";
import emailjs from 'emailjs-com';
import { Input } from "../../features/Input/Input";
const FORMBODY = styled.div`
    min-height: 100%;
      padding: 0;
      margin: 0;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #666;
      width: 100%;
      height: 100%;
`
const H1 = styled.h1`
margin: 0 0 20px;
      font-weight: 400;
      /* color: #1c87c9; */
`
const P = styled.p`
      margin: 0 0 5px;

`
const CONTAINER = styled.div`
display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      /* background: #1c87c9; */
`
const FORM = styled.form`
padding: 25px;
      margin: 25px;
      box-shadow: 0 2px 5px #f5f5f5; 
      background: #f5f5f5; 
      width: 50%;
`
const LEFTSIDE = styled.div`
width: 50%;
`
const ICONSTYLE = styled.i`
 margin: 25px 10px 0;
      font-size: 72px;
      color: #fff;
`
const TEXTAREA = styled.textarea`
      width: calc(100% - 18px);
      padding: 8px;
      margin-bottom: 20px;
      border: 1px solid #1c87c9;
      outline: none;

`
const BUTTON = styled.button`
  width: 100%;
      padding: 10px;
      border: none;
      /* background: #1c87c9;  */
      font-size: 16px;
      font-weight: 400;
      color: #fff;
` 
export function EnglishContactPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fvaamkt', 'template_mmipph9', e.target, 'user_POZT5c2NNdcxQ2wGJWNmF')
      .then((result) => {
        console.log("you did it");
      }, (error) => {
        console.log(error.text);
      }

      ); e.target.reset()
  };
  const BACKGROUDNCOLOR = UseMyContext();
  const InputRef = useRef()
  useEffect(() => {
    InputRef.current.focus()
  }, [])
  return (
    <FORMBODY className="contact" className="animate__animated animate__slideInDown">
      <CONTAINER style={{ backgroundColor: BACKGROUDNCOLOR.Form }}>

        <LEFTSIDE >
          <ICONSTYLE><FaMailBulk /></ICONSTYLE>
          <ICONSTYLE><FaAt /></ICONSTYLE>
          <ICONSTYLE style={{ transform: 'rotate(-20deg)' }}><FaEnvelope /></ICONSTYLE>
        </LEFTSIDE>

        <FORM onSubmit={sendEmail} action="">
          <H1>contact us</H1>
          <div className='info'>
            <Input Ref={InputRef} className="fname" type="text" name="name" placeholder="Full name"></Input>
            <Input  type="text" name="email" placeholder="Email" />
            <Input type="text" name="phone" placeholder="Phone number" />
          </div>
          <p>Message</p>
          <div>
            <TEXTAREA name="message" rows="4"></TEXTAREA>
          </div>
          <BUTTON style={{ backgroundColor: BACKGROUDNCOLOR.FormButton }} type="submit" href="/">Submit</BUTTON>
        </FORM></CONTAINER>
    </FORMBODY>
  );
};
export function HebrowContactPage() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_fvaamkt', 'template_mmipph9', e.target, 'user_POZT5c2NNdcxQ2wGJWNmF')
        .then((result) => {
          console.log("you did it");
        }, (error) => {
          console.log(error.text);
        }
  
        ); e.target.reset()
    };
    const BACKGROUDNCOLOR = UseMyContext();
    const InputRef = useRef()
    useEffect(() => {
      InputRef.current.focus()
    }, [])
    return (
      <FORMBODY className="contact" className="animate__animated animate__slideInDown">
        <CONTAINER style={{ backgroundColor: BACKGROUDNCOLOR.Form }}>  
          <LEFTSIDE >
            <ICONSTYLE><FaMailBulk /></ICONSTYLE>
            <ICONSTYLE><FaAt /></ICONSTYLE>
            <ICONSTYLE style={{ transform: 'rotate(-20deg)' }}><FaEnvelope /></ICONSTYLE>
          </LEFTSIDE>
  <button></button>
          <FORM onSubmit={sendEmail} action="">
            <H1>צרו קשר</H1>
            <div className='info'>
              <Input Ref={InputRef} className="fname" type="text" name="name" placeholder="שם מלא"></Input>
              <Input type="text" name="email" placeholder="כתובת אימייל" />
              <Input type="text" name="phone" placeholder=" מספר טלפון" />
            </div>
            <p>הודעה</p>
            <div>
              <TEXTAREA name="message" rows="4"></TEXTAREA>
            </div>
            <BUTTON style={{ backgroundColor: BACKGROUDNCOLOR.FormButton }} type="submit" href="/">שלח</BUTTON>
          </FORM></CONTAINER>
      </FORMBODY>
    );
  };
