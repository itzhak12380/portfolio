import React from "react";
import styled from 'styled-components';
const Leftside = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const MyImg = styled.img`
width: 40%;
height: 20%;
border-radius: 50%;
`

function LeftSide() {
  return (
    <Leftside className="left-side">
      <MyImg src="https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    <h2> יצחק קסיה</h2>
    </Leftside>
  );
};

export default LeftSide;
