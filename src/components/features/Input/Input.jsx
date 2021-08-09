import React, { useRef } from 'react'


export function Input(props) {
    return (
        <input ref={props.Ref} type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} />
    )
}