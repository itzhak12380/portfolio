import React from 'react'
import styled from 'styled-components'



export default function Button(props) {

    return (
        <button style={props.style} > {props.Text}</button>
    )
}