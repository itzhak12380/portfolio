import React, { useState, useContext, createContext } from 'react'

const CREATCONTEXT = createContext();
export const PROVIDECONTEXT = CREATCONTEXT.Provider

export function UseMyContext() {
    const mode = useContext(CREATCONTEXT)
    return mode;
}
