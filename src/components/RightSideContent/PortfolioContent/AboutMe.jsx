import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFlag, faStore, faPen } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch';
import { UseMyContext } from '../contexthook';


const CONTAINER = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
overflow: scroll;
justify-content: center;
align-items: center;
width: 95%;
`
const AboutME = styled.div`
width: 60%;
height: 200px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-end;
text-align-last: left;
`

const Details = styled.div`
width: 40%;
height: 200px;
display: flex;
justify-content: center;
align-items: flex-end;
text-align-last: left;
`
const WhatIDo = styled.div`
width: 95%;
text-align-last: left;
`
const SPANText = styled.span`
font-size: 12px;

`
const BLUTTEXT = styled.span`
color: #4e77e7;
`
const REDTEXT = styled.span`
color: #810000;
`
const Roll = styled.div`
width: 50%;
`
const PHOTOSCONTAINER = styled.div`
margin-top: 50px;
width: 100%;
height: fit-content;
display: flex;
flex-wrap: wrap;
justify-content: center;
justify-content: space-between;
align-items: center;
`
const PHOTOS = styled.img`
width: 32%;
height: 150px;
`
export function Switches(props) {
    const SWITCHCOLOR = UseMyContext()

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div >
            <span>{props.Language}</span>
            <Switch style={{ color: SWITCHCOLOR.SwitchColor }}
                checked={state.checkedB}
                onChange={handleChange}
                onClick={props.ChnageLanguage}
                color="primery"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
}
export function EnglishAboutMe() {
    const TextColor = UseMyContext()

    return (
        <div className="animate__animated animate__backInDown" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CONTAINER>
                <AboutME>
                    <h1 >about <BLUTTEXT style={{ color: TextColor.TextColor }}>me</BLUTTEXT> </h1>
                    <SPANText style={{ display: 'flex', justifyContent: 'flex-start' }}>
                       Hi I am Itzhak Kasie and i am a 22 years old from the city of bat yam i realy love sport especially footbal I like Playing (and i pretty good at it) and watching footbal and  i love doing any kinde of sport i like to run somtimes it clears my minde i like to just sit and drink coffe and hear music for five minuts in the morning
                    </SPANText>
                </AboutME>
                <Details>
                    <SPANText>

                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>age</BLUTTEXT> :</h3> <SPANText >23</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>Residence</BLUTTEXT> :</h3> <SPANText >USA</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>Address</BLUTTEXT>  :</h3> <SPANText >88 Some Street, Some Town</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>e-mail</BLUTTEXT>  :</h3> <SPANText  >email@example.com</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>Phone</BLUTTEXT>  :</h3> <SPANText >0546865601</SPANText>


                    </SPANText>

                </Details>
                <WhatIDo>
                    <h2 >what <BLUTTEXT style={{ color: TextColor.TextColor }}>I Do</BLUTTEXT> </h2>
                </WhatIDo>
                <Roll><BLUTTEXT style={{ color: TextColor.TextColor }}><FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></BLUTTEXT>
                    <h4>Software Developer</h4>
                    <SPANText>
                        Ever sence my computers intrest started to grow i know that if I will ever Do somthing relating to computers I Know that i will be a developer it was always a dream of mine to desgin and to create a product that will help other people in any possible way 
                        my biggst dream is to see some family or a friend of mine use somthing that i help build 
                    </SPANText>
                </Roll>
                <Roll><BLUTTEXT style={{ color: TextColor.TextColor }}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
                    <h4>Management</h4>
                    <SPANText>Doring my years in the IDF where I served in oketz unit my job was to manage a group of five to four people that wer a civilian workers inside a miltery base i was incharge of assiigning them work and to track problems and assign the workers the fix them as soon as possible i was i charge of the stock and to make sure the workers will allways have tools to work whit so whenever neded I would buy soplie to keep them working </SPANText>
                </Roll>
            

                <PHOTOSCONTAINER>
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                </PHOTOSCONTAINER>

            </CONTAINER>
        </div>
    )
}

export function HebrowAboutMe() {
    const TextColor = UseMyContext()

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CONTAINER style={{ textAlignLast: 'left' }} className="animate__animated animate__backInDown">
                <AboutME>
                    <h1 >על <REDTEXT style={{ color: TextColor.TextColor }}>עצמי</REDTEXT> </h1>
                    <SPANText style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        אני יצחק קסיה בן 22 אני מאוד אוהב ספורט במיוחד כדורגל אני אוהב לראות כדורגל ולשחק כדורגל  (ואני די טוב בזה) וחוץ מזה אני אוהב לשחק בכל סוגי הספורט אני אוהב לעשות ריצות לטייל לקרוא ספרים ופשוט לבלות עם משפחה וחברים 
                    </SPANText>
                </AboutME>
                <Details>
                    <SPANText style={{ textAlign: 'left' }}>

                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>גיל</BLUTTEXT> :</h3> <SPANText >23</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>מדינה</BLUTTEXT> :</h3> <SPANText >ישראל</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>כתובת</BLUTTEXT>  :</h3> <SPANText >דליה 2 בת ים</SPANText>
                        <br />
                        <SPANText  >email@example.com  :</SPANText><h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}> כתובת אימייל</BLUTTEXT> </h3>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>טלפון</BLUTTEXT>  :</h3> <SPANText >0546865601</SPANText>


                    </SPANText>

                </Details>
                <WhatIDo>
                    <h2 >מה <BLUTTEXT style={{ color: TextColor.TextColor }}>אני עושה</BLUTTEXT> </h2>
                </WhatIDo>
                <Roll><BLUTTEXT style={{ color: TextColor.TextColor }}><FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></BLUTTEXT>
                    <h4>פיתוח תוכנה </h4>
                    <SPANText  >
                        התחלתי ללמוד פיתוח כי בהתחלה שהתחלתי להתעניין בכל עולם המחשבים הזה  דמיינתי את עצמי מפתח איזה תוכנה או משחק שאחד מהמשפחה או מהחברים ישתמש בה והלהיב אותי הרעיון שאני אוכל יום אחד לשבת ליד חבר או משפחה והוא ישתמש במשהו שאני עזרתי ליצור וזה בעיקרון החלום לפתח משהו שיעזור  לאנשים או אפילו משחק שיביא קצת שמחה לאנשים 
                        ופשוט לשבת בצד ולהיות גאה במשהו שאני עזרתי ליצור 
                    </SPANText>
                </Roll>
                <Roll><BLUTTEXT style={{ color: TextColor.TextColor }}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
                    <h4>ניהול</h4>
                    <SPANText> בשירות הצבאי שלי תפקדתי בתור מש"ק בינוי ביחידת עוקץ שבו הייתי אחראי על 4 או 5 אזרחים עובדי צה"ל הייתי אחראי על קליטה של תקלות בינוי בתוך היחידה והייתי אחראי על למיין את סדר העדיפויות לפי שיקול דעתי ולטפל במה שאני חושב שיותר דחוף הייתי אחראי על תפקודם של האזרחים עובדי צהל הייתי מוודא הגעה ומנהל להם את הלוח מזמנם שולח אותם לכל מיני עבודות ובמקרים שיש תקלות שאותם הארבעה עובדים אינם יכולים לטפל הייתי מביא עוד עובד חיצוני הייתי דואג לבמחסנים וגם מזמין סחורה  חדשה במקרים שצריך וכל זה עשיתי לבד במשך שנה וחצי</SPANText>
                </Roll>
               

                <PHOTOSCONTAINER>
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                </PHOTOSCONTAINER>

            </CONTAINER>
        </div>
    )
}