import React from'react'
import styled from 'styled-components'
import { useState } from 'react'

const MainDiv = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
   align-items: center;
   text-align: center;
`
const H1NAME = styled.h1`
font-size: 42px;
font-family: 'Noto Sans JP', sans-serif;
`
const JOBTITLE = styled.h4`
color:  grey;
`


export function EnglishHomeContent(){
    const [JobTitle, setJobTitle] = useState("Full Stack Developer") 

    return(
        
            <MainDiv className="animate__animated animate__backInDown" >
                <div style={{width:'90%'}}>
                    <H1NAME> Itzhak Kasie</H1NAME>
                <JOBTITLE> {JobTitle}</JOBTITLE>
                <span>I am 22 years old very ambitious and hard worker who wants to always learn and evolve and just be better then the pereson that i was the day before  
                    
                     </span>
                </div>
                 
            </MainDiv>
               
        
    )
}

export function HebrowHomeContent(){
        return(
            <MainDiv className="animate__animated animate__backInDown" >
                <div style={{width:'90%'}}>
                    <H1NAME> יצחק קסיה </H1NAME>
                <JOBTITLE>  מפתח תוכנה פול סטאק </JOBTITLE>
                <span> אני בן 22 עם שאיפות מאוד גדולות שיודע את המשמעות של עבודה קשה ושרוצה להמשיך ללמוד ולהתפתח  בכל יום שעובר ופשוט להיות בן אדם יותר חכם ויותר טוב ממי שהייתי יום לפני </span>
                </div>
                
            </MainDiv>
        )
}