import React, { useState } from 'react'
import { EnglishHomeContent, HebrowHomeContent } from './HomeContent'
import LeftSideHbrow from '../../LeftSide/LeftSide'
import { LeftSideEnglish } from '../../LeftSide/LeftSide'
import { HebrowResume, EnglishResume } from './ResumeContent'
import { HebrowAboutMe, EnglishAboutMe } from './AboutMe'
import { HebrowContactPage,EnglishContactPage } from './ContactUs'
import {HebrowPortfolio,EnglishPortfolio} from './PortfolioContent'

export const EnglishContent = {
    Button: "עברית",
    Home: EnglishHomeContent,
    LeftSide: LeftSideEnglish,
    Resume: EnglishResume,
    AboutMe: EnglishAboutMe,
    ContactUs:EnglishContactPage,
    Portfolio:EnglishPortfolio,
}

export const HebrowContent = {
    Button: "english",
    Home: HebrowHomeContent,
    LeftSide: LeftSideHbrow,
    Resume: HebrowResume,
    AboutMe: HebrowAboutMe,
    ContactUs:HebrowContactPage,
    Portfolio:HebrowPortfolio,


}
export const DAYMODE = {
    body: '#c4cfde',
    mainDiv:'white',
    sidebar: '#c4cfde',
    icon: 'black',
    color: 'black',
    leftSide:'white',
    rightSide:'#c4cfde',
    color: 'black',
    form:'#1c87c9',
    formButton:'#1c87c9',
    TextColor:'#4e77e7',
    SwitchColor:'black',
    Header:"black",
    Footer:"black",
    LeftSideBttonShow:"black",
    ButtonText:"night mode"
}
// '#c4cfde'
export const NIGHMODE = {
    body: '#1B1717',
    mainDiv:'#1B1717',
    sidebar: '#1B1717',
    icon: '#810000',
    leftSide:'#810000',
    rightSide:'#1B1717',
    color: 'white',
    form:'#1B1717',
    formButton:'#810000',
    TextColor:'#810000',
    SwitchColor:'#810000',
    Header:"#1B1717",
    Footer:"#1B1717",
    LeftSideBttonShow:"white",
    ButtonText:"day mode"

}