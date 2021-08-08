import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from "@material-ui/core/CircularProgress";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
const CONTAINER = styled.div`
display: flex;
flex-wrap: wrap;
`
const LEFTSIDE = styled.div`
width: 60%;
`
const RIGHTSIDE = styled.div`
width: 40%;
`
const SkilBarStyle = styled.div`
display: inline;
width: 100%;
display: flex;
justify-content: space-between;
`
const TIMELINEHEADER = styled.span`
size: 65px;
`
function SkilsBar(props) {
    const { percentage } = props
    const [Progress, setProgress] = useState(0)

    useEffect(() => {

        const Timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= percentage ? percentage : prevProgress + percentage));
        }, 1000);
        return () => {
            clearInterval(Timer);
        };
    }, [])

    return (
        <LinearProgress style={{ color: "green" }} variant="determinate" value={Progress} />
    )
}

const TIMELINECARD = styled.div`
padding: 6px 16px;
width:95% ;
height: fit-content;
font-size: 12px;
border-radius: 15%;
`


export function EnglishResume() {



    return (
        <div className="animate__animated animate__slideInLeft"><h2>Resume</h2>
            <CONTAINER>

                <LEFTSIDE>
                    <h4>Edocation</h4>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>Frontend Development</TIMELINEHEADER>
                                <TIMELINECARD >
                                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>tech</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem><TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    t
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>tech</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>



                    <h4>Experience</h4>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>Frontend Development</TIMELINEHEADER>
                                <TIMELINECARD >
                                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>tech</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem><TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    t
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>tech</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </LEFTSIDE>
                <RIGHTSIDE>
                    <h4>Coding Skils</h4>
                    <h4>client side</h4>
                    <SkilBarStyle  >
                        <span> HTML </span>
                        <span>98% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={100} />

                    <SkilBarStyle>
                        <span> css </span>
                        <span>92% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={92} />

                    <SkilBarStyle>
                        <span> javascript </span>
                        <span>92% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={92} />
                    <SkilBarStyle>
                        <span> React </span>
                        <span>82% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={82} />
                    <h4>server side</h4>
                    <SkilBarStyle>
                        <span> C# </span>
                        <span>90% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={70} />

                    <SkilBarStyle>
                        <span> Node Js </span>
                        <span>97% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={97} />


                    <h4>data base</h4>
                    <SkilBarStyle>
                        <span> MongoDB </span>
                        <span>80% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={80} />
                
                    <SkilBarStyle>
                        <span> MySql </span>
                        <span>87% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={87} />



                </RIGHTSIDE>
            </CONTAINER></div>
    )
}
export function HebrowResume() {
    return (
        <div className="animate__animated animate__slideInLeft"><h2>קורות חיים</h2>
            <CONTAINER>

                <LEFTSIDE>
                    <h4>השכלה</h4>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2020-2021</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>מפתח תוכנה פול סטאק</TIMELINEHEADER>
                                <TIMELINECARD >
                                    קורס תכנות ופיתוח אפליקציות web/win במרכז הכשרה טכנולוגי "Tech-Career".
                                    קורס במתכונת bootcamp בהיקף 800 שעות אקדמאיות וכ1000 שעות תרגול עצמי.

                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2011-2017</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>טק</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>בגרות מלאה במגמת ניהול עסקי 5 יח"ל, תיכון חשמונאים בת ים.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>



                    <h4>ניסיון תעסוקתי</h4>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>2019-2020</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER></TIMELINEHEADER>
                                <TIMELINECARD >
                                    <span>
                                        ברמן, מלון קראון פלאזה, בעזריאלי.                                    
                                    </span>                     
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <span>216-2017</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    T
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>
                                
                            </TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>מלצר, מלון דן פורמה, תל אביב.</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem><TimelineItem>
                            <TimelineOppositeContent>
                                <span>2015-2016</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    t
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><TIMELINEHEADER>טק</TIMELINEHEADER>
                                <TIMELINECARD >

                                    <span>ספק עובדים למפעל עיתונים של ידיעות אחרונות</span>
                                </TIMELINECARD>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </LEFTSIDE>
                <RIGHTSIDE>
                    <h4> צד לקוח</h4>

                    <SkilBarStyle>
                        <span> HTML </span>
                        <span>98% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={100} />

                    <SkilBarStyle>
                        <span> css </span>
                        <span>92% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={92} />

                    <SkilBarStyle>
                        <span> גאווה סקריפט </span>
                        <span>92% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={92} />
                    <SkilBarStyle>
                        <span> ריאקט </span>
                        <span>82% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={82} />
                    <h4>צד שרת</h4>
                    <SkilBarStyle>
                        <span> סי שארפ </span>
                        <span>70% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={70} />

                    <SkilBarStyle>
                        <span> Node Js </span>
                        <span>0% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={0} />
                    <h4> מסד נתונים</h4>
                    <SkilBarStyle>
                        <span> מנגו די בי </span>
                        <span>0% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={0} />
                    <SkilBarStyle>
                        <span> ג'י קווארי </span>
                        <span>0% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={0} />
                    <SkilBarStyle>
                        <span> אנגולר  </span>
                        <span>0% <CircularProgress style={{ boxSizing: '12px', width: '12px', height: '12px' }} ></CircularProgress></span>
                    </SkilBarStyle>
                    <SkilsBar percentage={0} />               
                </RIGHTSIDE>
            </CONTAINER></div>
    )
}