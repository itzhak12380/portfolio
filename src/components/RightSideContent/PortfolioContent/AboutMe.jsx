import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFlag,faStore ,faPen} from '@fortawesome/free-solid-svg-icons'


const CONTAINER = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
overflow: scroll;
justify-content: center;
align-items: center;

`
const AboutME = styled.div`
width: 60%;
height: 200px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-end;
/* text-align-last: left; */
`
const Details = styled.div`
width: 40%;
height: 200px;
display: flex;
/* flex-wrap: wrap; */
justify-content: center;
align-items: flex-end;
text-align-last: left;
`
const WhatIDo = styled.div`
width: 100%;
text-align-last: left;
`
const SPANText = styled.span`
font-size: 12px;
`
const BLUTTEXT = styled.span`
color: #4e77e7;
`
const Roll = styled.div`
width: 50%;
`

export function EnglishAboutMe() {
    return (
        <CONTAINER>
            <AboutME>
                <h1 >about <BLUTTEXT>me</BLUTTEXT> </h1>
                <SPANText style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel   odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
                </SPANText>
            </AboutME>
            <Details>
                <SPANText>

                    <h3 style={{ display: 'inline' }}> <BLUTTEXT>age</BLUTTEXT> :</h3> <SPANText >23</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}> <BLUTTEXT>Residence</BLUTTEXT> :</h3> <SPANText >USA</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT>Address</BLUTTEXT>  :</h3> <SPANText >88 Some Street, Some Town</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT>e-mail</BLUTTEXT>  :</h3> <SPANText >email@example.com</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT>Phone</BLUTTEXT>  :</h3> <SPANText >0546865601</SPANText>

                    {/* Age 32
                    <br></br>
                    Residence USA
                    <br></br>
                    Address 88 Some Street, Some Town
                    <br></br>
                    e-mail email@example.com
                    <br></br>
                    Phone +0123 123 456 789
                    <br></br> */}
                </SPANText>

            </Details>
            <WhatIDo>
                <h2 >what <BLUTTEXT>I Do</BLUTTEXT> </h2>
            </WhatIDo>
            <Roll><BLUTTEXT><FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></BLUTTEXT>
            <h4>web design</h4>
            <SPANText>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</SPANText>
             </Roll>
            <Roll><BLUTTEXT><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
            <h4>Management</h4>
            <SPANText>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales. </SPANText>
             </Roll>
             <Roll><BLUTTEXT><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></BLUTTEXT>
            <h4>Ecommerce</h4>
            <SPANText>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales. </SPANText>
             </Roll>
             <Roll><BLUTTEXT><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></BLUTTEXT>
            <h4>Copywriting</h4>
            <SPANText>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales. </SPANText>
             </Roll>
             
            
           
        </CONTAINER>
    )
}

export function HebrowAboutMe() {
    return (
        <CONTAINER>
            <AboutME>
                <h1>about me</h1>
                <span>
                    Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui
                </span>  </AboutME>
            <Details>
                Age 32
                <br></br>
                Residence USA
                <br></br>
                Address 88 Some Street, Some Town
                <br></br>
                e-mail email@example.com
                <br></br>
                Phone +0123 123 456 789
                <br></br>

            </Details>

        </CONTAINER>
    )
}