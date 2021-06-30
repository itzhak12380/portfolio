import React from'react'
import styled from 'styled-components'
import { useState } from 'react'

const MainDiv = styled.div`
    text-align: center;
   
`
const H1NAME = styled.h1`
font-size: 42px;
color: white;
font-family: 'Noto Sans JP', sans-serif;
`
const JOBTITLE = styled.h4`
color:  grey;
`


export function EnglishHomeContent(){
    const [JobTitle, setJobTitle] = useState("Full Stack Developer") 

    return(
        <div>
            <div style={{textAlign:'center'}}>
                 <H1NAME> Izthak Kasie</H1NAME>
                <JOBTITLE> {JobTitle}</JOBTITLE>
            </div>
               
        </div>
    )
}

export function HebrowHomeContent(){
        return(
            <div>
                <H1NAME> יצחק קסיה </H1NAME>
                <JOBTITLE> מפתח תוכנה </JOBTITLE>
            </div>
        )
}