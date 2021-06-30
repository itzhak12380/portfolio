import React,{useState} from 'react'
import {EnglishHomeContent,HebrowHomeContent} from './HomeContent'
import LeftSideHbrow from '../../LeftSide/LeftSide'
import { LeftSideEnglish } from '../../LeftSide/LeftSide'
import { HebrowResume,EnglishResume } from './ResumeContent'

export let EnglishContent = {
    Button:"עברית",
    Home:EnglishHomeContent,  
    LeftSide:LeftSideEnglish, 
    Resume: EnglishResume,
}

export let HebrowContent ={
    Button:"english",
    Home:HebrowHomeContent,
    LeftSide:LeftSideHbrow,
    Resume: HebrowResume,  

}