import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFlag,faStore ,faPen} from '@fortawesome/free-solid-svg-icons'
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
export  function Switches(props) {
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
        <Switch style={{color:SWITCHCOLOR.SwitchColor}}
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
        <div className="animate__animated animate__backInDown" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CONTAINER>
            <AboutME>
                <h1 >about <BLUTTEXT style={{color:TextColor.TextColor}}>me</BLUTTEXT> </h1>
                <SPANText style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel   odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
                </SPANText>
            </AboutME>
            <Details>
                <SPANText>

                    <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{color:TextColor.TextColor}}>age</BLUTTEXT> :</h3> <SPANText >23</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{color:TextColor.TextColor}}>Residence</BLUTTEXT> :</h3> <SPANText >USA</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}>Address</BLUTTEXT>  :</h3> <SPANText >88 Some Street, Some Town</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}>e-mail</BLUTTEXT>  :</h3> <SPANText  >email@example.com</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}>Phone</BLUTTEXT>  :</h3> <SPANText >0546865601</SPANText>

                  
                </SPANText>

            </Details>
            <WhatIDo>
                <h2 >what <BLUTTEXT style={{color:TextColor.TextColor}}>I Do</BLUTTEXT> </h2>
            </WhatIDo>
            <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></BLUTTEXT>
            <h4>web design</h4>
            <SPANText>On a hot summer day, a fox comes upon an orchard and sees a bunch of ripened grapes. It thinks: “Just what I need to quench my thirst.” It moves back a few paces, runs, and jumps but falls short of reaching the grapes. It tries in different ways to reach the bunch of grapes, but in vain. It finally gives up, and says to himself “I am sure they are sour anyway.”</SPANText>
             </Roll>
            <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
            <h4>Management</h4>
            <SPANText>Walking alone in the forest, an unlucky fox falls into a well one day. Unable to get out, he waits for help. A passing goat sees the fox and asks him why he is in the well. The cunning fox responds, “there is going to be a great drought, and I am here to make sure I have water.” The gullible goat believes this and jumps into the well. The fox swiftly jumps on the goat and uses its horns to reach the top, leaving the goat in the well. </SPANText>
             </Roll>
             <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></BLUTTEXT>
            <h4>Ecommerce</h4>
            <SPANText>Tired of the bragging of a speedy hare, a tortoise challenges it to a race. The overconfident hare accepts the competition and runs as fast as it can after the race begins. Soon it gets tired and decides to rest, thinking that there’s plenty of time to relax before tortoise can catch up with it. Meanwhile, the tortoise continues to walk slowly, until it reaches the finish line. The overslept hare wakes up, only to be shocked that a slow moving tortoise beat it in the race. </SPANText>
             </Roll>
             <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></BLUTTEXT>
            <h4>Copywriting</h4>
            <SPANText>There was once a fisherman whose livelihood depended on his catch. One day, he was able to catch only one small fish. The fish, in its desperation to live, says “Please leave me kind sir. I am small and of no use to you. Let me back into the river and I can grow bigger. You can then catch me and make more money.” The wise fisherman replies, “ I will not give up a certain profit for one that doesn’t exist yet.” </SPANText>
             </Roll>
             
            <PHOTOSCONTAINER>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
            </PHOTOSCONTAINER>

        </CONTAINER>
        </div>
    )
}

export function HebrowAboutMe() {
    const TextColor = UseMyContext()

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CONTAINER style={{textAlignLast:'left'}} className="animate__animated animate__backInDown">
            <AboutME>
                <h1 >על <REDTEXT style={{color:TextColor.TextColor}}>עצמי</REDTEXT> </h1>
                <SPANText style={{ display: 'flex', justifyContent: 'flex-start' }}>
                ​למרות שהדיאטנית הטלוויזיונית התזזיתית ג'יליאן מק'קית' העלתה את הקקי על סדר היום הלאומי בסדרה "שינויים בהרגלי הזלילה" (שודרה ב-yes), שבה ביצעה, באופן שגרתי, "ניתוח שלאחר המוות" בקקי של המשתתפים, לא יותר מדי מאיתנו באמת יודעים מה בעצם קורה שם - ומה אומרות עלינו היציאות שלנו.
                </SPANText>
            </AboutME>
            <Details>
                <SPANText style={{textAlign:'left'}}>

                    <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{color:TextColor.TextColor}}>גיל</BLUTTEXT> :</h3> <SPANText >23</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}> <BLUTTEXT style={{color:TextColor.TextColor}}>מדינה</BLUTTEXT> :</h3> <SPANText >ישראל</SPANText>
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}>כתובת</BLUTTEXT>  :</h3> <SPANText >דליה 2 בת ים</SPANText>
                    <br />
                    <SPANText  >email@example.com  :</SPANText><h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}> כתובת אימייל</BLUTTEXT> </h3> 
                    <br />
                    <h3 style={{ display: 'inline' }}><BLUTTEXT style={{color:TextColor.TextColor}}>טלפון</BLUTTEXT>  :</h3> <SPANText >0546865601</SPANText>

                  
                </SPANText>

            </Details>
            <WhatIDo>
                <h2 >מה <BLUTTEXT style={{color:TextColor.TextColor}}>אני עושה</BLUTTEXT> </h2>
            </WhatIDo>
            <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></BLUTTEXT>
            <h4>עיצוב אתרים</h4>
            <SPANText  >המורה נכנסת לכיתה ורואה שטר של 100 שקל על ריצפת הכיתה אבל כשהיא מנסה להרים את השטר היא רואה שזה רק ציור. 
שואלת בעצבים, "מי צייר את זה?"
קם אחד התלמידים אומר, "אני המורה."
"עכשיו אני רוצה את אבא שלך פה", היא אומרת.
"אבל אבא שלי בבית חולים", הוא אומר, "הוא כולו שרוף."
המורה העצבנית לא מאמינה ואומרת, "אם כך אז בוא נלך לבדוק."
כשהם מגיעים היא רואה שהאבא באמת שרוף. טוב היא אומרת לעצמה לפחות אני אספר לו בעקיפין אם כבר הגענו, "אתה יודע יש לך ילד כישרוני מאוד, הוא צייר שטר של מאה דולר על ריצפת הכיתה..."
"אני יודע שהוא מוכשר", מפסיק אותה האבא, "הזבל הזה צייר 200 שקל בשקע של החשמל.</SPANText>
             </Roll>
            <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></BLUTTEXT>
            <h4>ניהול</h4>
            <SPANText>בלונדינית אחת נכנסת לחנות מוצרי חשמל, ניגשת למוכר ושואלת: "סליחה אדוני כמה תעלה לי הטלויזיה הזאת? ומצביעה אז ענה לה המוכר: "סליחה גברת אני לא מוכר לבלונדיניות" לאחר יום חוזרת האישה לחנות כששיערה צבוע לשחור ושואלת: "כמה תעלה לי הטלויזיה הזאת?" אז ענה לה שוב המוכר: "גברת אמרתי לך שאני לא מוכר לבלונדיניות" חזרה הבלונדינית עוד הפעם לאחר שצבעה עוד פעם את השיער ועשתה ניתוחים פלסטיים ושאלה את אותה שאלה, אז ענה לא עוד פעם המוכר שהוא לא מוכר לבלונדיניות. הבלונדה שאלה: "אבל איך כל פעם עלית על זה שאני בלונדינית?!" אז ענה המוכר: "כי רק בלונדיניות מצביעות על מיקרוגל ומבקשות טלויזיה!!! </SPANText>
             </Roll>
             <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></BLUTTEXT>
            <h4>כלכלה</h4>
            <SPANText>קניבל אחד הולך לקולנוע עם איזה ילד קטן כשהם מגיעים לקולנוע הכרטיסן מבקש מהקניבל את הכרטיסים על שתיהם הקניבל מביא לכרטיסן כרטיס אחד אז הכרטיסן אומר לו מה אתה עובד עלי חסר עוד כרטיס אז הקניבל עונה לו מה אסור להביא חטיפים? חח </SPANText>
             </Roll>
             <Roll><BLUTTEXT style={{color:TextColor.TextColor}}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></BLUTTEXT>
            <h4>לא יודע</h4>
            <SPANText>שני כורדים הולכים בגן ציבורי פתאום הם רואים כורדי אחד שיושב בתוך קיאק וחותר עם משוטים על הדשא. הכורדי אומר לחבר שלו: תראה את הדפוק הזה חותר באמצע הדשא רק בגללו צוחקים הרבה על הכורדים. עונה לו הכורדי השני: תאמין יש לו מזל אם היה לי בגד ים הייתי נכנס ודופק לו מכות...  </SPANText>
             </Roll>
             
             <PHOTOSCONTAINER>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
                             <PHOTOS src="./Pictures/טק-קריירה-יוםכיף.jpeg" alt=""/>
            </PHOTOSCONTAINER>
           
        </CONTAINER>
        </div>
    )
}