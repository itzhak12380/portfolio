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
                        Hi, I am Itzhak Kasie and I am a 22 years old from the city of Bat-Yam.
                        I really love sports, especially football. I like playing football, as  I am pretty good at it and I also enjoy  watching the game. {<br />}  I enjoy  most type of sports. I especially like to run somtimes, as it helps clears my mind. For relaxation, I enjoy my morning coffee while listning to some music.
                    </SPANText>
                </AboutME>
                <Details>
                    <SPANText>

                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>age</BLUTTEXT> :</h3> <SPANText >22</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{ color: TextColor.TextColor }}>Residence</BLUTTEXT> :</h3> <SPANText >Israel</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>Address</BLUTTEXT>  :</h3> <SPANText >Dalia 2 Bat Yam</SPANText>
                        <br />
                        <h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}>e-mail</BLUTTEXT>  :</h3> <SPANText  >Itzhak2380@email.com</SPANText>
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
                        When my intrest in copmuters began I knew that I would want to develope software. It was always my dream to design a prodoct that would be helpful to others.
                        My biggst dream is to see a family member or a friend use
                        a product that I helped develop.
                    </SPANText>
                </Roll>
                <Roll><BLUTTEXT style={{ color: TextColor.TextColor }}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
                    <h4>Management</h4>
                    <SPANText>
                        During my years in the IDF, I served in the Oketz unit.
                        My job was to manage four to five civilin workers on the base.
                        My task was to assign them work and track any issues that would arise
                        whith military logistics.
                        I would assign workers to immediately repair any issues.
                        I was also responsible to make sure the workers always had the tools they needed for their various tasks while taking finances of the project into considration.
                    </SPANText>
                </Roll>


                <PHOTOSCONTAINER>
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
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
                        <SPANText  >itzhak2380@gmail.com  :</SPANText><h3 style={{ display: 'inline' }}><BLUTTEXT style={{ color: TextColor.TextColor }}> כתובת אימייל</BLUTTEXT> </h3>
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
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                    <PHOTOS src="/portfolio/Pictures/טק-קריירה-יוםכיף.jpeg" alt="" />
                </PHOTOSCONTAINER>

            </CONTAINER>
        </div>
    )
}