import React from 'react'


export default function Alink(props) {

    return (

        <a style={props.style} target="blank" href={props.href}>{props.content}</a>
    )
}