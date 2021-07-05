import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.header`
display: flex;
justify-content: center;
justify-content:space-evenly;
color: white;
`
const PROGRAM = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;
margin-top: 5px;
`
export default function Header(props){
    return(
        <HeaderDiv style={{ backgroundColor: props.HeaderColor, width: '100%',opacity:'0.7' }}>
        <a target="blank" href="https://tech-career-jobs.com/"><PROGRAM src="/portfolio/Pictures/indicom.jpg" alt="" /></a>
        <span>Email: itzhak2380@gmail.com</span>
        <a target="blank" href="https://tech-career-jobs.com/"><PROGRAM src="/portfolio/Pictures/tech.jpg" alt="" /></a>

      </HeaderDiv>
    )
}