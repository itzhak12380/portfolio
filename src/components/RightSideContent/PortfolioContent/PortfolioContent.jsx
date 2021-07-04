import React from 'react'
import styled from 'styled-components'
import Alink from '../../features/Links/Links'
const CONTAINER = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
const SECOUNDERYDIV = styled.div`
width: 90%;
height: fit-content;

`
const IMGSTYLE = styled.img`
width: 100%;
height: 200px;
`

const PROJECTSDIV = styled.div`
width: 100%;
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
justify-content: space-between;
`
 function PortfolioCard(props){
    return(
        <div style={{width:'32%'}}>
            <Alink href={props.Link} content={<IMGSTYLE src={props.photo} alt="" />} target="blank"></Alink>
            <br />
            <span>{props.name}</span>
        </div>
    )
}
export function EnglishPortfolio(){

    return(
        <CONTAINER className="animate__animated animate__jackInTheBox">
            <SECOUNDERYDIV>
                                       <span> click on the photo to view the project</span>

                     <h1>Portfolio</h1>
                     
                   <PROJECTSDIV>
                        <PortfolioCard name="office assignment" Link="https://github.com/itzhak12380/office-assignment" photo="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                    <PortfolioCard name="users assignment" Link="https://github.com/itzhak12380/users-assignment" photo="https://media.istockphoto.com/photos/staying-connected-in-this-digital-age-picture-id1187582529?s=612x612"   />
                    <PortfolioCard name="calculator" Link="https://github.com/itzhak12380/calculator" photo="https://images.pexels.com/photos/5466809/pexels-photo-5466809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                    <PortfolioCard name="shoping website" Link="https://github.com/itzhak12380/online-shop1" photo="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                   </PROJECTSDIV>
                   
            </SECOUNDERYDIV>

        </CONTAINER>
    )
}
export function HebrowPortfolio(){

    return(
        <CONTAINER className="animate__animated animate__jackInTheBox">
            <SECOUNDERYDIV>
               
                     <h1>תיק עבודות</h1>
                
                   <PROJECTSDIV>
                        <PortfolioCard name="משימת משרד" Link="https://github.com/itzhak12380/office-assignment" photo="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                    <PortfolioCard name="משימת משתמשים" Link="https://github.com/itzhak12380/users-assignment" photo="https://media.istockphoto.com/photos/staying-connected-in-this-digital-age-picture-id1187582529?s=612x612"   />
                    <PortfolioCard name="מחשבון" Link="https://github.com/itzhak12380/calculator" photo="https://images.pexels.com/photos/5466809/pexels-photo-5466809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                    <PortfolioCard name="חנות אלקטרונית" Link="https://github.com/itzhak12380/online-shop1" photo="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"   />
                   </PROJECTSDIV>
                   
            </SECOUNDERYDIV>

        </CONTAINER>
    )
}